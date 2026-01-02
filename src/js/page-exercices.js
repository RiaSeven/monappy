// src/js/page-exercices.js

// Imports
import '../style.css'; 
import { monitorAuthState, saveExerciseSuccess, getUserProgress } from './firebase.js';
import './navbar.js';
import { exercices } from '../data/exercices.js';

import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

import confetti from 'canvas-confetti';
import { getUserStats } from './gamification.js'; // Pour mettre à jour le rang en temps réel si tu veux

// --- VARIABLES ---
let pyodide = null;
let currentExercise = null;
let userLogs = [];
let currentUser = null;
let completedExercises = new Set();

const katexOptions = {
  delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
  throwOnError: false
};

// --- CONFIG EDITEUR ---
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setFontSize(14);
editor.setShowPrintMargin(false);

// --- PYODIDE ---
const statusMsg = document.getElementById('status-msg');
const runBtn = document.getElementById('run-btn');

async function loadPyodideEngine() {
  statusMsg.textContent = "Chargement Python...";
  try {
    pyodide = await loadPyodide();
    pyodide.setStdout({
      batched: (msg) => { userLogs.push(msg); addToTerminal(msg); }
    });
    statusMsg.textContent = "Prêt";
    statusMsg.className = "text-xs font-bold text-green-400";
    runBtn.disabled = false;
  } catch (err) {
    statusMsg.textContent = "Erreur Python";
    statusMsg.className = "text-xs font-bold text-red-500";
    console.error(err);
  }
}
loadPyodideEngine(); 

// --- TERMINAL ---
const terminalOutput = document.getElementById('terminal-output');
function addToTerminal(text, isError = false) {
  const line = document.createElement('div');
  line.textContent = text;
  line.className = isError ? "text-red-400" : "text-gray-300";
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
document.getElementById('clear-term-btn').addEventListener('click', () => {
  terminalOutput.innerHTML = ''; userLogs = [];
});

// --- EXECUTION ---
runBtn.addEventListener('click', async () => {
  if (!pyodide || !currentExercise) return;
  const userCode = editor.getValue();
  userLogs = []; 
  terminalOutput.innerHTML = ''; 

  try {
    await pyodide.runPythonAsync(userCode);
    
    // Validation
    let success = false;
    const val = currentExercise.validation;
    if (val.type === 'output_list') {
      const logsString = userLogs.join(' ').trim();
      success = val.values.every(v => logsString.includes(v));
    } else if (val.type === 'function') {
      await pyodide.runPythonAsync(val.tests.join('\n'));
      success = true;
    }

    if (success) {
      statusMsg.textContent = "✅ Validé !";
      statusMsg.className = "font-bold text-green-400";
      // --- EFFET CONFETTIS ---
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899'] // Couleurs du thème (Indigo/Purple/Pink)
      });
      // -----------------------
      if (currentUser) {
        completedExercises.add(currentExercise.id);
        
        // Update visuel coche verte immédiat
        const btn = document.querySelector(`button[data-id="${currentExercise.id}"]`);
        if(btn && !btn.innerHTML.includes('✓')) {
             btn.innerHTML = `<span class="text-green-500 mr-2">✓</span> ${currentExercise.titre}`;
        }
        
        saveExerciseSuccess(currentUser.uid, currentExercise.id);
      }
    } else {
      statusMsg.textContent = "❌ Incorrect";
      statusMsg.className = "font-bold text-orange-400";
    }
  } catch (err) {
    addToTerminal(err.toString(), true);
    statusMsg.textContent = "⚠️ Erreur Code";
    statusMsg.className = "font-bold text-red-400";
  }
});

// --- MENU NAVIGATION ---
const navList = document.getElementById('exercise-list');

function renderNavigation() {
  navList.innerHTML = '';
  
  const groups = {};
  exercices.forEach(ex => {
    if (!groups[ex.serie]) groups[ex.serie] = [];
    groups[ex.serie].push(ex);
  });

  Object.entries(groups).forEach(([serieName, exos], index) => {
    const wrapper = document.createElement('div');
    wrapper.className = "pb-2 mb-2 border-b border-white/5";

    // Titre Série
    const header = document.createElement('button');
    header.className = "flex items-center justify-between w-full px-4 py-3 text-xs font-bold tracking-wider uppercase transition cursor-pointer text-slate-400 hover:text-white";
    header.innerHTML = `
      <span>${serieName}</span>
      <svg class="w-4 h-4 transition-transform duration-200 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    `;

    // Liste Exos
    const ul = document.createElement('ul');
    ul.className = index === 0 ? "space-y-1 block" : "space-y-1 hidden";
    if (index === 0) header.querySelector('svg').classList.add('rotate-180');

    header.onclick = () => {
      const isHidden = ul.classList.contains('hidden');
      if (isHidden) {
        ul.classList.remove('hidden');
        header.querySelector('svg').classList.add('rotate-180');
      } else {
        ul.classList.add('hidden');
        header.querySelector('svg').classList.remove('rotate-180');
      }
    };

    exos.forEach(ex => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('data-id', ex.id);
        
        // Style de base
        btn.className = "w-full px-4 py-2 pl-6 text-sm text-left truncate transition border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5";
        
        if (completedExercises.has(ex.id)) {
          btn.innerHTML = `<span class="text-green-500 mr-2">✓</span> ${ex.titre}`;
        } else {
          btn.textContent = ex.titre;
        }
  
        btn.addEventListener('click', () => loadExercise(ex, serieName));
        li.appendChild(btn);
        ul.appendChild(li);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(ul);
    navList.appendChild(wrapper);
  });
}

function loadExercise(ex, serieName) {
  currentExercise = ex;
  
  // MODIFICATION : Plus de formatage 001. On affiche l'ID tel quel.
  document.getElementById('ex-title').textContent = `${ex.id} - ${ex.titre}`;
  
  const badge = document.getElementById('serie-badge');
  if(badge) badge.textContent = serieName || ex.serie || "Exercices";

  // Active State (Bordure Mauve)
  document.querySelectorAll('#exercise-list button[data-id]').forEach(b => {
      b.classList.remove('border-indigo-500', 'bg-white/5', 'text-white');
      b.classList.add('border-transparent');
      if (!b.innerHTML.includes('✓')) b.classList.add('text-slate-400');
  });

  const activeBtn = document.querySelector(`button[data-id="${ex.id}"]`);
  if (activeBtn) {
      activeBtn.classList.remove('border-transparent', 'text-slate-400');
      activeBtn.classList.add('border-indigo-500', 'bg-white/5', 'text-white');
  }

  const consigneEl = document.getElementById('ex-consigne');
  consigneEl.innerHTML = ex.consigne;
  renderMathInElement(consigneEl, katexOptions);
  
  editor.setValue(ex.code, -1);
  terminalOutput.innerHTML = '';
  statusMsg.textContent = "Prêt";
  statusMsg.className = "text-slate-500";
}

// Init
renderNavigation();
if (exercices.length > 0) loadExercise(exercices[0], exercices[0].serie);

// Auth Monitor
monitorAuthState(async (user) => {
  currentUser = user;
  
  const userNameEl = document.getElementById('user-name');
  const userAvatarEl = document.getElementById('user-avatar');
  const progressCountEl = document.getElementById('progress-count');

  if (user) {
    const displayName = user.displayName || user.email.split('@')[0];
    if (userNameEl) userNameEl.textContent = displayName;
    
    const photo = user.photoURL || `https://ui-avatars.com/api/?background=334155&color=fff&name=${displayName}`;
    if (userAvatarEl) userAvatarEl.src = photo;

    const savedIds = await getUserProgress(user.uid);
    completedExercises = new Set(savedIds);
    if (progressCountEl) progressCountEl.textContent = completedExercises.size;

  } else {
    if (userNameEl) userNameEl.textContent = "Invité";
    if (userAvatarEl) userAvatarEl.src = "https://ui-avatars.com/api/?background=334155&color=fff&name=?";
    completedExercises.clear();
    if (progressCountEl) progressCountEl.textContent = "0";
  }
  
  renderNavigation();
  if (currentExercise) {
      setTimeout(() => {
          const activeBtn = document.querySelector(`button[data-id="${currentExercise.id}"]`);
          if (activeBtn) {
            activeBtn.classList.remove('border-transparent', 'text-slate-400');
            activeBtn.classList.add('border-indigo-500', 'bg-white/5', 'text-white');
          }
      }, 0);
  }
});
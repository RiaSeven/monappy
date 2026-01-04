import '../style.css'; 
import { monitorAuthState, saveExerciseSuccess, getUserProgress } from './firebase.js';
import './navbar.js';
import { exercices } from '../data/exercices.js';
import confetti from 'canvas-confetti';

import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

// --- AJOUT : IMPORT HIGHLIGHT.JS (Pour les consignes) ---
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

let pyodide = null;
let currentExercise = null;
let userLogs = [];
let currentUser = null;
let completedExercises = new Set();

const katexOptions = {
  delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
  throwOnError: false
};

const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setFontSize(14);
editor.setShowPrintMargin(false);

const statusMsg = document.getElementById('status-msg');
const runBtn = document.getElementById('run-btn');

// --- 1. ORGANISATION DES DONNÉES (Ordre Visuel) ---
const exercisesBySerie = {};
const seriesOrder = [];

exercices.forEach(ex => {
    if (!exercisesBySerie[ex.serie]) {
        exercisesBySerie[ex.serie] = [];
        seriesOrder.push(ex.serie);
    }
    exercisesBySerie[ex.serie].push(ex);
});

// Liste plate triée visuellement pour la navigation Next/Prev
const sortedExercises = [];
seriesOrder.forEach(serie => {
    sortedExercises.push(...exercisesBySerie[serie]);
});


// --- MOTEUR PYTHON ---
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

runBtn.addEventListener('click', async () => {
  if (!pyodide || !currentExercise) return;
  const userCode = editor.getValue();
  userLogs = []; 
  terminalOutput.innerHTML = ''; 

  try {
    await pyodide.runPythonAsync(userCode);
    
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
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#6366f1', '#a855f7', '#ec4899'] });

      if (currentUser) {
        completedExercises.add(currentExercise.id);
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

// --- MENU LATÉRAL ---
const navList = document.getElementById('exercise-list');

function renderNavigation() {
  navList.innerHTML = '';
  
  Object.entries(exercisesBySerie).forEach(([serieName, exos], index) => {
    const wrapper = document.createElement('div');
    wrapper.className = "pb-2 mb-2 border-b border-white/5";

    const header = document.createElement('button');
    header.className = "flex items-center justify-between w-full px-4 py-3 text-xs font-bold tracking-wider uppercase transition cursor-pointer sidebar-header text-slate-400 hover:text-white";
    header.innerHTML = `<span>${serieName}</span><svg class="w-4 h-4 transition-transform duration-200 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
    
    const ul = document.createElement('ul');
    ul.className = "hidden space-y-1 sidebar-list"; // Caché par défaut
    
    // Clic Header
    header.onclick = () => {
      const isHidden = ul.classList.contains('hidden');
      // Fermeture des autres (optionnel)
      document.querySelectorAll('.sidebar-list').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.sidebar-header svg').forEach(el => el.classList.remove('rotate-180'));
      
      if (isHidden) {
        ul.classList.remove('hidden');
        header.querySelector('svg').classList.add('rotate-180');
      }
    };

    exos.forEach(ex => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('data-id', ex.id);
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
  document.getElementById('ex-title').textContent = `${ex.id} - ${ex.titre}`;
  const badge = document.getElementById('serie-badge');
  if(badge) badge.textContent = serieName || ex.serie || "Exercices";

  // --- STYLE ACTIF & ACCORDÉON ---
  
  // 1. Reset
  document.querySelectorAll('#exercise-list button[data-id]').forEach(b => {
      b.classList.remove('border-indigo-500', 'bg-white/5', 'text-white');
      b.classList.add('border-transparent');
      if (!b.innerHTML.includes('✓')) b.classList.add('text-slate-400');
  });

  // 2. Activer bouton
  const activeBtn = document.querySelector(`button[data-id="${ex.id}"]`);
  if (activeBtn) {
      activeBtn.classList.remove('border-transparent', 'text-slate-400');
      activeBtn.classList.add('border-indigo-500', 'bg-white/5', 'text-white');
      
      // 3. Ouvrir l'accordéon courant et fermer les autres
      const parentUl = activeBtn.closest('ul');
      
      // A. Fermer tout
      document.querySelectorAll('.sidebar-list').forEach(ul => {
          if (ul !== parentUl) ul.classList.add('hidden');
      });
      document.querySelectorAll('.sidebar-header svg').forEach(svg => svg.classList.remove('rotate-180'));

      // B. Ouvrir courant
      if(parentUl) {
          parentUl.classList.remove('hidden');
          const header = parentUl.previousElementSibling;
          if(header) header.querySelector('svg').classList.add('rotate-180');
      }
  }

  // Contenu
  const consigneEl = document.getElementById('ex-consigne');
  consigneEl.innerHTML = ex.consigne;
  renderMathInElement(consigneEl, katexOptions);
  
  // 2. AJOUT : Coloration Syntaxique dans la consigne
  // Cela va chercher tous les <pre><code> dans la consigne et les colorer
  consigneEl.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });

  editor.setValue(ex.code, -1);
  terminalOutput.innerHTML = '';
  statusMsg.textContent = "Prêt";
  statusMsg.className = "text-slate-500";
  
  renderNavButtons();
}

function renderNavButtons() {
    const container = document.getElementById('nav-buttons-container');
    if (!container || !currentExercise) return;
    
    // On utilise sortedExercises pour respecter l'ordre visuel (Séries)
    const currentIndex = sortedExercises.findIndex(ex => ex.id === currentExercise.id);
    
    const prevEx = currentIndex > 0 ? sortedExercises[currentIndex - 1] : null;
    const nextEx = currentIndex < sortedExercises.length - 1 ? sortedExercises[currentIndex + 1] : null;

    container.innerHTML = `
        <button id="btn-prev" class="px-4 py-2 text-xs font-bold uppercase rounded-lg border border-white/10 hover:bg-white/5 transition flex items-center gap-2 ${!prevEx ? 'opacity-50 cursor-not-allowed text-slate-500' : 'text-slate-300'}" ${!prevEx ? 'disabled' : ''}>
            <span>←</span> Précédent
        </button>
        <button id="btn-next" class="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20 flex items-center gap-2 ${!nextEx ? 'opacity-50 cursor-not-allowed hidden' : ''}" ${!nextEx ? 'disabled' : ''}>
            Suivant <span>→</span>
        </button>
    `;

    if(prevEx) document.getElementById('btn-prev').onclick = () => loadExercise(prevEx, prevEx.serie);
    if(nextEx) document.getElementById('btn-next').onclick = () => loadExercise(nextEx, nextEx.serie);
}

// Init
renderNavigation();
if (sortedExercises.length > 0) loadExercise(sortedExercises[0], sortedExercises[0].serie);

// Auth
monitorAuthState(async (user) => {
  currentUser = user;
  if (user) {
    const savedIds = await getUserProgress(user.uid);
    completedExercises = new Set(savedIds);
  } else {
    completedExercises.clear();
  }
  renderNavigation();
  // Petit délai pour laisser le temps au rendu
  if (currentExercise) setTimeout(() => loadExercise(currentExercise, currentExercise.serie), 50);
});
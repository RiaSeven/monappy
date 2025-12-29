// 1. LE STYLE (Indispensable pour Tailwind)
import './style.css'; 

// 2. ACE EDITOR
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

// 3. KATEX (MATHS)
import katex from 'katex';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

// 4. DONNÉES

import { exercices } from './exercices.js';

// --- CONFIGURATION ---
let pyodide = null;
let currentExercise = null;
let userLogs = [];

// Options pour KaTeX (les délimiteurs $)
const katexOptions = {
  delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
  ],
  ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
};

// 1. Initialisation de l'éditeur
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setFontSize(16);
editor.setValue("# Chargement...", 1);

// Éléments DOM
const outputElement = document.getElementById('output');
const runBtn = document.getElementById('run-btn');
const navList = document.getElementById('exercise-list');
const statusMsg = document.getElementById('status-msg');
const consigneElement = document.getElementById('ex-consigne');

// --- 2. GESTION DE PYODIDE ---

function addToOutput(text) {
  outputElement.textContent += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
  userLogs.push(text.trim());
}

function clearOutput() {
  outputElement.textContent = "";
  userLogs = [];
}

async function initPyodide() {
  runBtn.textContent = "Chargement Python...";
  runBtn.disabled = true;
  
  pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
    stdout: (text) => addToOutput(text),
    stderr: (text) => addToOutput("❌ " + text),
  });

  runBtn.textContent = "▶ Exécuter & Vérifier";
  runBtn.disabled = false;
  
  // Charge le premier exercice une fois Python prêt
  loadExercise(exercices[0]);
}

initPyodide();

// --- 3. NAVIGATION ---

function renderNavigation() {
  const series = {};
  exercices.forEach(ex => {
    if (!series[ex.serie]) series[ex.serie] = [];
    series[ex.serie].push(ex);
  });

  navList.innerHTML = "";
  
  for (const [serieName, exos] of Object.entries(series)) {
    const details = document.createElement('details');
    details.open = true;
    details.className = "mb-2 group"; // Un peu d'espace entre les groupes
    
    const summary = document.createElement('summary');
    summary.className = "flex items-center justify-between p-2 font-bold text-gray-400 bg-gray-800 cursor-pointer select-none hover:text-white";
    summary.textContent = serieName;
    details.appendChild(summary);

    const ul = document.createElement('ul');
    ul.className = "pl-2 mt-1 ml-2 space-y-1 border-l-2 border-gray-700";
    
    exos.forEach(ex => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = "w-full px-3 py-2 text-sm text-left text-gray-300 transition rounded hover:bg-gray-700 hover:text-white";
      btn.textContent = ex.titre; // Juste le titre
      
      btn.onclick = () => loadExercise(ex);
      
      li.appendChild(btn);
      ul.appendChild(li);
    });

    details.appendChild(ul);
    navList.appendChild(details);
  }
}

renderNavigation();

// --- 4. CHARGEMENT D'UN EXERCICE ---

function loadExercise(ex) {
  currentExercise = ex;
  
  // UI Updates
  document.getElementById('serie-badge').textContent = ex.serie;
  document.getElementById('ex-title').textContent = ex.titre;
  
  // 1. On injecte le HTML de la consigne (qui contient peut-être des $...$)
  consigneElement.innerHTML = ex.consigne;
  
  // 2. IMPORTANT : On demande à KaTeX de scanner juste cette zone
  renderMathInElement(consigneElement, katexOptions);
  
  // Reset
  statusMsg.className = "hidden";
  clearOutput();
  editor.setValue(ex.code, 1);
}

// --- 5. VALIDATION ---

async function checkSuccess(ex) {
  if (ex.validation.type === "output_list") {
    const expected = ex.validation.values;
    const isSuccess = JSON.stringify(userLogs) === JSON.stringify(expected);
    
    if (!isSuccess) {
      addToOutput(`\n⚠️ ATTENDU : ${JSON.stringify(expected)}`);
      addToOutput(`⚠️ OBTENU : ${JSON.stringify(userLogs)}`);
    }
    return isSuccess;
  }

  if (ex.validation.type === "function") {
    try {
      const tests = ex.validation.tests.join("\n");
      await pyodide.runPythonAsync(tests);
      return true;
    } catch (err) {
      return false;
    }
  }
  
  return false;
}

// --- 6. EXÉCUTION ---

runBtn.addEventListener('click', async () => {
  if (!pyodide || !currentExercise) return;
  
  clearOutput();
  const codeUtilisateur = editor.getValue();
  statusMsg.className = "hidden";

  try {
    await pyodide.runPythonAsync(codeUtilisateur);
    const success = await checkSuccess(currentExercise);

    statusMsg.classList.remove("hidden", "bg-green-600", "bg-red-600", "bg-yellow-600");
    
    if (success) {
      statusMsg.textContent = "✅ Bravo ! Exercice validé.";
      statusMsg.classList.add("bg-green-600");
    } else {
      statusMsg.textContent = "❌ Incorrect. Regardez la console.";
      statusMsg.classList.add("bg-red-600");
    }

  } catch (err) {
    addToOutput("\n🔥 Erreur : " + err);
    statusMsg.textContent = "⚠️ Erreur de code";
    statusMsg.classList.remove("hidden");
    statusMsg.classList.add("bg-yellow-600");
  }
});
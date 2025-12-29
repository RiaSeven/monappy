import './style.css'
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
// ... tes imports Ace ...
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Le fichier CSS qui rend les maths jolies
// NOUVEAU : On importe l'extension d'auto-rendu
import renderMathInElement from 'katex/dist/contrib/auto-render';
// --- 1. CONFIGURATION DE L'ÉDITEUR (Comme avant) ---
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setFontSize(16);
editor.setValue("const codeDefaut = # Calcul de l'hypoténuse");

// --- CONFIGURATION KATEX (MATHS) ---

document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      // Ici, on définit quels symboles déclenchent les maths
      delimiters: [
          {left: '$$', right: '$$', display: true},  // $$ pour les grosses formules centrées
          {left: '$', right: '$', display: false},   // $ pour les formules dans le texte
          {left: '\\(', right: '\\)', display: false}, // Alternative classique \( ... \)
          {left: '\\[', right: '\\]', display: true}   // Alternative classique \[ ... \]
      ],
      // Options pour ignorer certaines balises (comme l'éditeur de code !)
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    });
});

// --- 2. GESTION DE L'AFFICHAGE (Console Output) ---
const outputElement = document.getElementById('output');
const runBtn = document.getElementById('run-btn');

// Une petite fonction utilitaire pour écrire dans notre écran noir
function addToOutput(text) {
  // On ajoute le texte + un saut de ligne
  outputElement.textContent += text + "\n";
  // On scrolle automatiquement vers le bas si le texte est long
  outputElement.scrollTop = outputElement.scrollHeight;
}

function clearOutput() {
  outputElement.textContent = "";
}

// --- 3. CHARGEMENT DE PYODIDE (La partie complexe) ---

let pyodide = null; // Cette variable contiendra notre "cerveau" Python une fois chargé

async function initPyodide() {
  try {
    // 'await' signifie : "Pause ici, et attends que loadPyodide ait fini son travail"
    // loadPyodide vient du script CDN qu'on a mis dans le HTML
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
      // Ici, on capture les 'print()' de Python pour les envoyer vers notre fonction
      stdout: (text) => addToOutput(text),
      stderr: (text) => addToOutput("Erreur : " + text),
    });

    // Une fois fini :
    runBtn.textContent = "Exécuter le code ▶";
    runBtn.disabled = false; // On active le bouton
    clearOutput();
    addToOutput(">>> Python est prêt !");
    
  } catch (err) {
    addToOutput("Erreur lors du chargement de Pyodide : " + err);
  }
}

// On lance le chargement dès que la page s'ouvre
initPyodide();


// --- 4. EXÉCUTION DU CODE ---

runBtn.addEventListener('click', async () => {
  if (!pyodide) return; // Sécurité si Python n'est pas prêt

  // 1. On nettoie l'écran précédent
  clearOutput();
  
  // 2. On récupère le code de l'éditeur
  const codePython = editor.getValue();

  try {
    // 3. On demande à Pyodide d'exécuter le code
    addToOutput(">>> Exécution...");
    
    // runPythonAsync est mieux pour éviter de bloquer le navigateur si le calcul est long
    await pyodide.runPythonAsync(codePython);
    
    addToOutput(">>> Terminé.");
    
  } catch (error) {
    // Si l'utilisateur a fait une erreur de syntaxe en Python
    addToOutput("ERREUR PYTHON :\n" + error);
  }
});
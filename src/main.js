import { 
  loginWithGoogle, 
  logoutUser, 
  monitorAuthState, 
  saveExerciseSuccess, 
  getUserProgress,
  registerUser,   // Nouveau
  loginUser       // Nouveau 
} from './firebase.js';
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
let currentUser = null;
let completedExercises = new Set(); // Un Set est mieux pour éviter les doublons

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

// --- NAVIGATION (Nouveau Design) ---

function renderNavigation() {
  const series = {};
  exercices.forEach(ex => {
    if (!series[ex.serie]) series[ex.serie] = [];
    series[ex.serie].push(ex);
  });

  navList.innerHTML = "";
  
  // Pour savoir quelle série ouvrir par défaut (la première)
  let isFirstSerie = true;

  for (const [serieName, exos] of Object.entries(series)) {
    const details = document.createElement('details');
    // On ouvre seulement la première série par défaut
    if (isFirstSerie) {
      details.open = true;
      isFirstSerie = false;
    }
    details.className = "border-b group border-slate-800";
    
    // Le résumé (Titre de la série)
    const summary = document.createElement('summary');
    summary.className = "flex items-center justify-between p-4 font-semibold list-none transition-colors outline-none cursor-pointer select-none text-slate-400 hover:text-white hover:bg-slate-800";
    
    // On utilise un petit SVG ou un caractère pour la flèche
    // La classe group-open:rotate-90 gère la rotation automatique
    summary.innerHTML = `
      <span>${serieName}</span>
      <span class="transform transition-transform duration-200 group-open:rotate-90 text-xs">▶</span>
    `;
    
    details.appendChild(summary);

    // La liste des exercices
    const ul = document.createElement('ul');
    ul.className = "pb-2 bg-slate-950"; // Fond un peu plus foncé pour les sous-éléments
    
    exos.forEach(ex => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      
      // Style "Lien discret"
      btn.className = "block w-full py-2 pl-8 pr-4 text-sm text-left transition-all border-l-2 border-transparent text-slate-500 hover:text-indigo-400 hover:bg-white/5 hover:border-indigo-500";
      if (completedExercises.has(ex.id)) {
    btn.innerHTML = `<span class="text-green-500 mr-2">✓</span> ${ex.titre}`;
    btn.classList.add("text-indigo-300"); // Légèrement coloré si fini
    } else {
    btn.textContent = ex.titre;
  }
      
      btn.onclick = () => {
        // Retirer la classe 'active' de tous les boutons (si on veut pousser le détail plus tard)
        loadExercise(ex);
      };
      
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
      
      // --- AJOUT FIREBASE ---
      if (currentUser) {
        // 1. Sauvegarde locale pour affichage immédiat
        completedExercises.add(currentExercise.id);
        updateProgressUI();
        
        // 2. Sauvegarde Cloud
        saveExerciseSuccess(currentUser.uid, currentExercise.id);
      }
      // ----------------------
      
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

// --- 7. GESTION UTILISATEUR & MODALE ---

// Éléments UI existants
const openModalBtn = document.getElementById('open-auth-modal-btn'); // Renommé dans le HTML
const logoutBtn = document.getElementById('logout-btn');
const authOutDiv = document.getElementById('auth-section-logged-out');
const authInDiv = document.getElementById('auth-section-logged-in');
const userNameEl = document.getElementById('user-name');
const progressCountEl = document.getElementById('progress-count');

// Éléments de la Modale
const modal = document.getElementById('auth-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');
const googleLoginBtn = document.getElementById('google-login-btn');

// Formulaire
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginSubmitBtn = document.getElementById('btn-login-submit');
const registerSubmitBtn = document.getElementById('btn-register-submit');
const authErrorMsg = document.getElementById('auth-error-msg');

// --- FONCTIONS MODALE ---

function toggleModal(show) {
  if (show) {
    modal.classList.remove('hidden');
    emailInput.focus(); // Focus direct sur l'email
  } else {
    modal.classList.add('hidden');
    authErrorMsg.classList.add('hidden'); // Reset erreur
    emailInput.value = ""; // Reset champs
    passwordInput.value = "";
  }
}

// Ouvrir / Fermer
openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));
modalOverlay.addEventListener('click', () => toggleModal(false)); // Clic à l'extérieur ferme

// --- LOGIQUE AUTHENTIFICATION ---


// 1. Google (Dans la modale)
googleLoginBtn.addEventListener('click', async () => {
  try {
    await loginWithGoogle();
    toggleModal(false); 
  } catch (e) {
    showError("Erreur Google : " + e.message);
  }
});

// 2. Se Connecter (Email/Mdp)
loginSubmitBtn.addEventListener('click', async (e) => {
  e.preventDefault(); 
  const email = emailInput.value;
  const pass = passwordInput.value;
  
  try {
    await loginUser(email, pass);
    toggleModal(false);
  } catch (error) {
    handleAuthError(error);
  }
});

// 3. Créer un compte (Email/Mdp)
registerSubmitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const pass = passwordInput.value;

  try {
    await registerUser(email, pass);
    toggleModal(false);
    alert("Compte créé avec succès !");
  } catch (error) {
    handleAuthError(error);
  }
});

// 4. Déconnexion
logoutBtn.addEventListener('click', async () => {
  await logoutUser();
  completedExercises.clear();
  updateProgressUI();
});

// --- GESTION DES ERREURS ---

function showError(msg) {
  authErrorMsg.textContent = msg;
  authErrorMsg.classList.remove('hidden');
}

function handleAuthError(error) {
  console.error(error);
  if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
    showError("Email ou mot de passe incorrect.");
  } else if (error.code === 'auth/email-already-in-use') {
    showError("Cet email est déjà utilisé.");
  } else if (error.code === 'auth/weak-password') {
    showError("Le mot de passe doit faire au moins 6 caractères.");
  } else {
    showError("Erreur : " + error.message);
  }
}

// --- SURVEILLANCE ÉTAT ---

monitorAuthState(async (user) => {
  currentUser = user;
  
  if (user) {
    // UI Connecté
    authOutDiv.classList.add('hidden');
    authInDiv.classList.remove('hidden');
    
    // Nom et Avatar
    userNameEl.textContent = user.displayName || user.email.split('@')[0];
    const defaultAvatar = "https://ui-avatars.com/api/?background=random&name=" + (user.displayName || user.email);
    document.getElementById('user-avatar').src = user.photoURL || defaultAvatar;

    // Charger la progression
    const savedIds = await getUserProgress(user.uid);
    completedExercises = new Set(savedIds);
    updateProgressUI();

  } else {
    // UI Déconnecté
    authOutDiv.classList.remove('hidden');
    authInDiv.classList.add('hidden');
    completedExercises.clear();
    updateProgressUI();
  }
});

// --- FONCTION MISE À JOUR UI (Indispensable !) ---

function updateProgressUI() {
  // 1. Mettre à jour le compteur en bas
  progressCountEl.textContent = completedExercises.size;

  // 2. Re-dessiner le menu pour afficher les coches vertes
  renderNavigation(); 
}
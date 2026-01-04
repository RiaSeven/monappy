import { courseData } from '../data/cours.js';
import '../style.css';
import './navbar.js';
import hljs from 'highlight.js';
// Assure-toi d'avoir importé le CSS de highlight soit dans le HTML, soit ici :
import 'highlight.js/styles/tokyo-night-dark.css';

// --- AJOUT : IMPORTS KATEX (Maths) ---
import katex from 'katex';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

const sidebarList = document.getElementById('course-sidebar-list');
const contentTitle = document.getElementById('course-content-title');
const contentBody = document.getElementById('course-content-body');
const categoryBadge = document.getElementById('course-category-badge');

let currentChapter = null;

// --- CONFIG KATEX ---
const katexOptions = {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '$', right: '$', display: false},
    {left: '\\(', right: '\\)', display: false},
    {left: '\\[', right: '\\]', display: true}
  ],
  throwOnError: false
};

// ... (Garde tout le code de "coursesByCategory", "sortedChapters" et "renderSidebar" à l'identique) ...
// ... (Copie-colle le bloc de tri et de renderSidebar de ma réponse précédente ici) ...

// 1. ORGANISATION DES DONNÉES ET CRÉATION DE L'ORDRE VISUEL
const coursesByCategory = {};
// On suppose que l'ordre des catégories dépend de l'ordre d'apparition dans le tableau
const categoriesOrder = []; 

courseData.forEach(chapter => {
  if (!coursesByCategory[chapter.category]) {
      coursesByCategory[chapter.category] = [];
      categoriesOrder.push(chapter.category);
  }
  coursesByCategory[chapter.category].push(chapter);
});

// CRUCIAL : On crée une liste plate qui suit l'ordre VISUEL des catégories
// C'est cette liste que les boutons Suivant/Précédent utiliseront.
const sortedChapters = [];
categoriesOrder.forEach(cat => {
    sortedChapters.push(...coursesByCategory[cat]);
});


// --- GÉNÉRATION DU MENU ACCORDÉON ---
function renderSidebar() {
  sidebarList.innerHTML = '';

  Object.entries(coursesByCategory).forEach(([category, chapters], index) => {
    const wrapper = document.createElement('div');
    wrapper.className = "pb-2 mb-2 border-b border-white/5 group-wrapper"; // Ajout de classe pour ciblage facile
    wrapper.setAttribute('data-category', category);

    // Header
    const header = document.createElement('button');
    header.className = "flex items-center justify-between w-full px-4 py-3 text-xs font-bold tracking-wider uppercase transition cursor-pointer sidebar-header text-slate-400 hover:text-white";
    header.innerHTML = `
      <span>${category}</span>
      <svg class="w-4 h-4 transition-transform duration-200 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    `;

    // Liste
    const ul = document.createElement('ul');
    ul.className = "hidden space-y-1 sidebar-list"; // Tout caché par défaut, le loadChapter s'occupera d'ouvrir le bon
    
    // Clic Header
    header.onclick = () => {
      const isHidden = ul.classList.contains('hidden');
      // Fermer tous les autres (optionnel, si tu veux que le clic manuel ferme aussi les autres)
      document.querySelectorAll('.sidebar-list').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.sidebar-header svg').forEach(el => el.classList.remove('rotate-180'));

      if (isHidden) {
        ul.classList.remove('hidden');
        header.querySelector('svg').classList.add('rotate-180');
      }
    };

    chapters.forEach(chapter => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = "w-full px-4 py-2 pl-6 text-sm text-left truncate transition border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5";
      btn.textContent = chapter.title;
      btn.setAttribute('data-id', chapter.id);
      btn.addEventListener('click', () => loadChapter(chapter));
      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(ul);
    sidebarList.appendChild(wrapper);
  });
}

// --- BOUTONS NAV (Basés sur sortedChapters) ---
function renderNavButtons() {
    const container = document.getElementById('nav-buttons-container');
    if (!container || !currentChapter) return;

    // On utilise sortedChapters au lieu de courseData pour respecter l'ordre visuel
    const currentIndex = sortedChapters.findIndex(c => c.id === currentChapter.id);
    
    const prevChapter = currentIndex > 0 ? sortedChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < sortedChapters.length - 1 ? sortedChapters[currentIndex + 1] : null;

    container.innerHTML = `
        <button id="btn-prev" class="px-4 py-2 text-xs font-bold uppercase rounded-lg border border-white/10 hover:bg-white/5 transition flex items-center gap-2 ${!prevChapter ? 'opacity-50 cursor-not-allowed text-slate-500' : 'text-slate-300'}" ${!prevChapter ? 'disabled' : ''}>
            <span>←</span> Précédent
        </button>
        <button id="btn-next" class="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20 flex items-center gap-2 ${!nextChapter ? 'opacity-50 cursor-not-allowed hidden' : ''}" ${!nextChapter ? 'disabled' : ''}>
            Suivant <span>→</span>
        </button>
    `;

    if(prevChapter) document.getElementById('btn-prev').onclick = () => loadChapter(prevChapter);
    if(nextChapter) document.getElementById('btn-next').onclick = () => loadChapter(nextChapter);
}

// --- CHARGEMENT CHAPITRE ---
function loadChapter(chapter) {
  currentChapter = chapter;

  // Contenu
  contentTitle.textContent = chapter.title;
  categoryBadge.textContent = chapter.category;
  contentBody.innerHTML = chapter.content;
  contentBody.querySelectorAll('pre code').forEach((block) => hljs.highlightElement(block));
  renderMathInElement(contentBody, katexOptions);
  // --- GESTION MENU LATÉRAL (Auto-Open & Auto-Close) ---
  
  // 1. Reset visuel des boutons
  document.querySelectorAll('#course-sidebar-list button[data-id]').forEach(b => {
    b.classList.remove('border-indigo-500', 'text-white', 'bg-white/5');
    b.classList.add('border-transparent', 'text-slate-400');
  });

  // 2. Activer bouton courant
  const activeBtn = document.querySelector(`#course-sidebar-list button[data-id="${chapter.id}"]`);
  
  if (activeBtn) {
    activeBtn.classList.remove('border-transparent', 'text-slate-400');
    activeBtn.classList.add('border-indigo-500', 'text-white', 'bg-white/5');

    // 3. LOGIQUE ACCORDÉON : Ouvrir le bon, fermer les autres
    const parentUl = activeBtn.closest('ul');
    
    // A. On ferme TOUTES les listes et on reset TOUTES les flèches
    document.querySelectorAll('.sidebar-list').forEach(ul => {
        if (ul !== parentUl) ul.classList.add('hidden');
    });
    document.querySelectorAll('.sidebar-header svg').forEach(svg => svg.classList.remove('rotate-180'));

    // B. On ouvre celle du chapitre courant
    if(parentUl) {
        parentUl.classList.remove('hidden');
        // Trouver le header associé (le frère précédent)
        const header = parentUl.previousElementSibling;
        if(header) header.querySelector('svg').classList.add('rotate-180');
    }
  }

  // Scroll top
  const readingArea = contentBody.closest('.overflow-y-auto');
  if(readingArea) readingArea.scrollTop = 0;

  renderNavButtons();
}

// Init
renderSidebar();
if (sortedChapters.length > 0) loadChapter(sortedChapters[0]);
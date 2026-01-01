import { courseData } from '../data/cours.js';
import '../style.css';
import './navbar.js';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

const sidebarList = document.getElementById('course-sidebar-list');
const contentTitle = document.getElementById('course-content-title');
const contentBody = document.getElementById('course-content-body');
const categoryBadge = document.getElementById('course-category-badge');

// Organisation des données
const coursesByCategory = {};
courseData.forEach(chapter => {
  if (!coursesByCategory[chapter.category]) coursesByCategory[chapter.category] = [];
  coursesByCategory[chapter.category].push(chapter);
});

// --- GÉNÉRATION DU MENU ACCORDÉON ---
function renderSidebar() {
  sidebarList.innerHTML = '';

  Object.entries(coursesByCategory).forEach(([category, chapters], index) => {
    // Conteneur de la catégorie
    const wrapper = document.createElement('div');
    wrapper.className = "pb-2 mb-2 border-b border-white/5";

    // 1. LE TITRE (Cliquable)
    const header = document.createElement('button');
    header.className = "flex items-center justify-between w-full px-4 py-3 text-xs font-bold tracking-wider uppercase transition cursor-pointer text-slate-400 hover:text-white";
    
    // Texte + Flèche SVG
    header.innerHTML = `
      <span>${category}</span>
      <svg class="w-4 h-4 transition-transform duration-200 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    `;

    // 2. LA LISTE (Cachée par défaut sauf la première)
    const ul = document.createElement('ul');
    ul.className = index === 0 ? "space-y-1 block" : "space-y-1 hidden"; 
    
    // Rotation de la flèche si ouvert par défaut
    if (index === 0) header.querySelector('svg').classList.add('rotate-180');

    // LOGIQUE DU CLIC (ACCORDÉON)
    header.onclick = () => {
      const isHidden = ul.classList.contains('hidden');
      if (isHidden) {
        ul.classList.remove('hidden'); // On ouvre
        header.querySelector('svg').classList.add('rotate-180'); // Flèche vers le haut
      } else {
        ul.classList.add('hidden'); // On ferme
        header.querySelector('svg').classList.remove('rotate-180'); // Flèche vers le bas
      }
    };

    // 3. LES CHAPITRES
    chapters.forEach(chapter => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = "w-full px-4 py-2 pl-6 text-sm text-left transition border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5";
      btn.textContent = chapter.title;
      
      btn.onclick = () => loadChapter(chapter, btn);
      
      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(ul);
    sidebarList.appendChild(wrapper);
  });
}

// --- CHARGEMENT CHAPITRE ---
function loadChapter(chapter, activeBtn) {
  contentTitle.textContent = chapter.title;
  categoryBadge.textContent = chapter.category;
  contentBody.innerHTML = chapter.content;

  // Coloration Syntaxique
  contentBody.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });

  // Gestion de la classe "Active" (surbrillance du menu)
  document.querySelectorAll('#course-sidebar-list ul button').forEach(b => {
    b.classList.remove('border-indigo-500', 'text-white', 'bg-white/5');
    b.classList.add('border-transparent', 'text-slate-400');
  });
  if (activeBtn) {
    activeBtn.classList.remove('border-transparent', 'text-slate-400');
    activeBtn.classList.add('border-indigo-500', 'text-white', 'bg-white/5');
  }

  // Scroll en haut
  const mainContainer = document.querySelector('main');
  if(mainContainer) mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init
renderSidebar();

// Charger le premier cours automatiquement
const firstCategory = Object.keys(coursesByCategory)[0];
if (firstCategory) {
    const firstChapter = coursesByCategory[firstCategory][0];
    setTimeout(() => {
        const buttons = sidebarList.querySelectorAll('ul button');
        if (buttons.length > 0) loadChapter(firstChapter, buttons[0]);
    }, 0);
}
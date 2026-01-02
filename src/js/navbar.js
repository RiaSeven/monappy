import { loginWithGoogle, logoutUser, monitorAuthState, getUserProgress } from './firebase.js';
import { getUserStats } from './gamification.js';

const navAuthBtn = document.getElementById('nav-auth-btn');
const mobileAuthBtn = document.getElementById('mobile-auth-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Élément pour le badge (on le crée dynamiquement)
let userBadgeContainer = null;

// --- GESTION MENU MOBILE ---
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileMenu) mobileMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
}

// --- GESTION UI AUTH ---
function updateNavUI(user, stats = null) {
  const btnText = user ? "Déconnexion" : "Connexion";

  // 1. Mise à jour Bouton
  if (navAuthBtn) {
    navAuthBtn.textContent = btnText;
    user ? navAuthBtn.classList.replace('bg-indigo-600', 'bg-slate-700') : navAuthBtn.classList.replace('bg-slate-700', 'bg-indigo-600');
  }
  if (mobileAuthBtn) mobileAuthBtn.textContent = btnText;

  // 2. Gestion du Badge Gamification (Desktop)
  if (user && stats) {
    if (!userBadgeContainer) {
      // Création du conteneur si inexistant
      userBadgeContainer = document.createElement('div');
      userBadgeContainer.className = "items-center hidden gap-3 mr-4 md:flex";
      // On l'insère avant le bouton auth
      navAuthBtn.parentNode.insertBefore(userBadgeContainer, navAuthBtn);
    }
    
    // Injection HTML du badge
    userBadgeContainer.innerHTML = `
      <div class="text-right">
        <p class="text-xs font-bold ${stats.rank.color} uppercase tracking-wider">${stats.rank.name}</p>
        <div class="w-24 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" style="width: ${stats.percentage}%"></div>
        </div>
      </div>
      <img src="${stats.rank.avatar}" alt="Rank" class="w-9 h-9 rounded-full border-2 border-slate-700 shadow-lg shadow-indigo-500/20">
    `;
    userBadgeContainer.classList.remove('hidden');
  } else {
    // Si déconnecté, on cache le badge
    if (userBadgeContainer) userBadgeContainer.classList.add('hidden');
  }
}

async function handleAuthClick() {
  const isLogout = navAuthBtn && navAuthBtn.textContent === "Déconnexion";
  if (isLogout) {
    await logoutUser();
    window.location.reload();
  } else {
    try { await loginWithGoogle(); } catch (error) { console.error(error); }
  }
}

if (navAuthBtn) navAuthBtn.addEventListener('click', handleAuthClick);
if (mobileAuthBtn) mobileAuthBtn.addEventListener('click', handleAuthClick);

// --- MONITORING ---
monitorAuthState(async (user) => {
  if (user) {
    // On récupère la progression pour calculer le rang
    const savedIds = await getUserProgress(user.uid);
    const completedSet = new Set(savedIds);
    const stats = getUserStats(completedSet);
    updateNavUI(user, stats);
  } else {
    updateNavUI(null);
  }
});
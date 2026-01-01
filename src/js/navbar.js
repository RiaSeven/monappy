import { loginWithGoogle, logoutUser, monitorAuthState } from './firebase.js';

const navAuthBtn = document.getElementById('nav-auth-btn');
const mobileAuthBtn = document.getElementById('mobile-auth-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// --- GESTION DU MENU MOBILE (SÉCURISÉE) ---
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche le clic de se propager
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    } else {
      console.warn("Attention: #mobile-menu n'existe pas dans le HTML !");
    }
  });

  // Fermer quand on clique ailleurs
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
}

// --- GESTION CONNEXION ---
function updateNavUI(user) {
  const btnText = user ? "Déconnexion" : "Connexion";
  if (navAuthBtn) {
    navAuthBtn.textContent = btnText;
    user ? navAuthBtn.classList.replace('bg-indigo-600', 'bg-slate-700') : navAuthBtn.classList.replace('bg-slate-700', 'bg-indigo-600');
  }
  if (mobileAuthBtn) mobileAuthBtn.textContent = btnText;
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

monitorAuthState(updateNavUI);
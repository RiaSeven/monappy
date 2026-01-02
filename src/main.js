// src/main.js (Pour la page d'accueil Bento)
import { monitorAuthState, getUserProgress } from './js/firebase.js'; 
import { getUserStats } from './js/gamification.js';

// 1. Import du CSS global
import './style.css';

// 2. Import de la barre de navigation (qui gère la connexion)
import './js/navbar.js';

// 3. Petite animation pour la page d'accueil (Optionnel mais sympa)
console.log("Bienvenue sur PyTraining !");

// GESTION DU HERO GAMIFICATION
const heroSection = document.getElementById('hero-gamification');
const heroAvatar = document.getElementById('hero-avatar');
const heroUsername = document.getElementById('hero-username');
const heroRankName = document.getElementById('hero-rank-name');
const heroRankBadge = document.getElementById('hero-rank-badge');
const heroProgressBar = document.getElementById('hero-progress-bar');
const heroProgressText = document.getElementById('hero-progress-text');

monitorAuthState(async (user) => {
    if (user && heroSection) {
        // 1. Récupérer stats
        const savedIds = await getUserProgress(user.uid);
        const stats = getUserStats(new Set(savedIds));

        // 2. Remplir le HTML
        heroSection.classList.remove('hidden');
        
        const displayName = user.displayName || user.email.split('@')[0];
        heroUsername.textContent = displayName;
        
        // Avatar du rang (Meme Coin Style)
        heroAvatar.src = stats.rank.avatar;
        
        // Textes
        heroRankName.textContent = stats.rank.name;
        heroRankName.className = `text-sm md:text-base mb-4 font-mono uppercase tracking-widest ${stats.rank.color}`; // Applique la couleur du rang
        
        heroRankBadge.textContent = `RANG ${stats.percentage >= 100 ? 'MAX' : Math.floor(stats.percentage / 20) + 1}`;
        
        // Barre
        // Petit délai pour l'animation
        setTimeout(() => {
            heroProgressBar.style.width = `${stats.percentage}%`;
        }, 100);
        heroProgressText.textContent = `${stats.count} / ${stats.total} Exercices`;

    } else if (heroSection) {
        heroSection.classList.add('hidden');
    }
});
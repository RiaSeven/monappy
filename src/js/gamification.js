// src/js/gamification.js
import { exercices } from '../data/exercices.js';

// --- LES 5 CLASSES (RANGS) ---
export const RANKS = [
    {
        threshold: 0,
        name: "Noob du Village",
        color: "text-gray-400",
        // Remplace ces URLs par tes images locales plus tard (ex: './assets/pepe-noob.png')
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Noob&backgroundColor=e5e7eb"
    },
    {
        threshold: 20,
        name: "Script Kiddie",
        color: "text-green-400",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Kiddie&backgroundColor=bbf7d0"
    },
    {
        threshold: 40,
        name: "Terminal Ronin",
        color: "text-blue-400",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ronin&backgroundColor=bfdbfe"
    },
    {
        threshold: 60,
        name: "Cyber Alchimiste",
        color: "text-purple-400",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Alchemist&backgroundColor=e9d5ff"
    },
    {
        threshold: 80,
        name: "God Mode Senpai",
        color: "text-yellow-400",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=God&backgroundColor=fef08a"
    }
];

// Calculer le % et récupérer le rang
export function getUserStats(completedSet) {
    const total = exercices.length;
    const count = completedSet.size;
    const percentage = total === 0 ? 0 : Math.round((count / total) * 100);

    // Trouver le rang correspondant (on cherche le plus haut seuil dépassé)
    // On inverse le tableau pour trouver le plus grand threshold <= percentage
    const rank = [...RANKS].reverse().find(r => percentage >= r.threshold) || RANKS[0];

    return {
        count,
        total,
        percentage,
        rank
    };
}
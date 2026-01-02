import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // 1. INDISPENSABLE POUR GITHUB PAGES
  // (Si ton dépôt s'appelle "monappy", garde ça. Sinon, mets le nom de ton dépôt)
  base: '/monappy/', 
  
  build: {
    // 2. INDISPENSABLE POUR PYODIDE (Python)
    target: 'esnext',
    outDir: 'dist',
    // 3. INDISPENSABLE POUR LE MULTI-PAGES (Nouveau)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),      // Accueil
        exercices: resolve(__dirname, 'exercices.html'), // Page Exos
        cours: resolve(__dirname, 'cours.html'),     // Page Cours
      },
    },
  },
})
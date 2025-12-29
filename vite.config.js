import { defineConfig } from 'vite'

export default defineConfig({
  // IMPORTANT : Remplace 'mon-app-python' par le nom EXACT de ton futur dépôt GitHub
  base: '/monappy/', 
  build: {
    target: 'esnext' // Optimisation pour les navigateurs récents (nécessaire pour Pyodide)
  }
})
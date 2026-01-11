
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Usamos './' para que los recursos carguen correctamente sin importar
  // si la página está en la raíz o en una subcarpeta (como en GitHub Pages)
  base: './', 
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
})

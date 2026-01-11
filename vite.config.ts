
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/P-gina-boda-prueba/', // Asegúrate de que coincida con tu repo
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // ⚠️ Make sure this matches your exact repository name on GitHub
  base: '/brandurva_webpage/', 
})

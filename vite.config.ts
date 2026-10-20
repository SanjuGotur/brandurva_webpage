import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // 👇 MAKE SURE THIS HAS BOTH SLASHES SURROUNDING THE REPO NAME
  base: '/brandurva_webpage/', 
})

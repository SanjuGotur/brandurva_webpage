import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  // Ensures URLs match your exact GitHub repository subfolder path
  base: '/brandurva_webpage/', 
})

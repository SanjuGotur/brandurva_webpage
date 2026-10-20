import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/brandurva_webpage/', // ⚠️ Make sure this matches your exact GitHub repository name
})

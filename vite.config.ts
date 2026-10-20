import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 CHANGED THIS LINE

export default defineConfig({
  plugins: [react()],
  base: '/brandurva_webpage-main/', // Ensures URLs match your GitHub repository name
})

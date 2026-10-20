import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react' depending on your framework

export default defineConfig({
  plugins: [react()],
  base: '/brandurva_webpage-main/', // 👈 ADD THIS LINE (use your exact repository name)
})

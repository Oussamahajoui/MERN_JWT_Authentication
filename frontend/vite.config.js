import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      '/api': {
        // target: 'http://localhost:3000', // Changing to deployed version
        target: 'https://jwt-authentication-app.onrender.com/',
        changeOrigin: true,
      }
    }
  }
})

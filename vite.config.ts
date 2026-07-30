import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para GitHub Pages (proyecto en subcarpeta del repo)
  base: '/CuestionarioBase-ExamenTe-ricoClaseB/',
})

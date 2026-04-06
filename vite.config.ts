import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Byt 'my-react-app' till ditt repo-namn
export default defineConfig({
  plugins: [react()],
  base: '/Soy_Luna/',
})

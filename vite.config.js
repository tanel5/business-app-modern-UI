import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "business-app-modern-UI",
  plugins: [react()],
  base: '/business-app-modern-UI/',
})

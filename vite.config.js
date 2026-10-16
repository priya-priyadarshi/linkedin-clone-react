import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/linkedin-clone-react/',
  plugins: [react(), tailwindcss()],
})

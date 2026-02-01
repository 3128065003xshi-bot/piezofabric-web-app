import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  // ...
  resolve: {
    alias: {
      "./aws-exports.js": "./aws-exports.js",
    },
  },

  plugins: [react()],
  base: '/',   // ← Add this line if missing
})
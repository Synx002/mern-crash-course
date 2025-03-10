import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      }
    }
  },
  build: {
    // Change output directory for Vercel
    outDir: 'public',
    
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000,
    
    // Configure manual chunks for better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Group major dependencies together
          vendor: ['react', 'react-dom', 'zustand'],
          // Add more chunks as needed
        }
      }
    }
  }
})
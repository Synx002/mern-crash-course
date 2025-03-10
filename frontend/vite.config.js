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
    outDir: 'public', // This should change the output directory
    chunkSizeWarningLimit: 1000
  }
})
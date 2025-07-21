import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    allowedHosts: ['http://localhost:5173'],
  },
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@layouts": "/src/layouts",
      "@assets": "/src/assets",
      "@stores": "/src/stores",
      "@styles": "/src/assets/styles",
      "@features": "/src/features",
      "@icons": "/src/assets/icons",
      "@shared": "/src/shared",
      "@hooks": "/src/shared/hooks"
    },
  },
})

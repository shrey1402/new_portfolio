import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lottie': ['@lottiefiles/react-lottie-player']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    open: true,
    host: true
  }
});
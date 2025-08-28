import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker'; // ✅ import plugin

export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: true // ✅ show error overlay in browser
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lucide-react', 'framer-motion', 'react-router-dom', 'react-hot-toast'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});

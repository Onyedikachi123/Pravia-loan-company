import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/f': {
        target: 'https://formspree.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/f/, ''),
      }
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [
      react(),
      viteCompression()
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      chunkSizeWarningLimit: 1000
    },
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif']
  }
});
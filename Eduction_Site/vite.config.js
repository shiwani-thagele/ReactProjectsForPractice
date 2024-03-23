import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginImage } from 'vite-plugin-image';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginImage({
      // Configuration options for the image plugin
    }),
  ],
});


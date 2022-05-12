import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, "./src/components"),
      '@pages': path.resolve(__dirname, "./src/pages"),
    }
  }
});

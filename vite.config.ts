import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), cssInjectedByJsPlugin( { relativeCSSInjection: true, })],
  plugins: [react(), libCss()],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "umd",
        // manualChunks: undefined,
      },
    },
    cssCodeSplit: false,
  }
})

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js', // Specify output file name
        format: 'iife', // Or 'umd' or 'cjs' depending on your needs
      }
    }
  }
});

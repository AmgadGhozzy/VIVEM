import { defineConfig } from 'vite';

// Relative base so the build works both at the GitHub Pages subpath
// (/VIVEM/) and at a custom-domain root, with no rebuild difference.
export default defineConfig({
  base: './',
  build: {
    target: 'es2019',
    assetsInlineLimit: 8192
  }
});

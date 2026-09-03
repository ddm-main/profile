import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/*
 * `dev.html` is the Vite entry (source). The production build is copied to the
 * repo root as `index.html` + `assets/` by scripts/publish-root.mjs, because
 * GitHub Pages serves this repo from the branch root. Keeping the source entry
 * under a separate name is what lets `npm run dev` keep full HMR while the
 * built `index.html` stays committed at the root.
 */
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: 'dev.html',
      output: {
        entryFileNames: 'assets/index-[hash].js',
        chunkFileNames: 'assets/index-[hash].js',
        assetFileNames: (info) =>
          (info.names?.[0] ?? '').endsWith('.css')
            ? 'assets/index-[hash][extname]'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
})

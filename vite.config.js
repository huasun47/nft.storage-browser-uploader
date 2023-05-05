import { join } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  plugins: [svelte()]
})

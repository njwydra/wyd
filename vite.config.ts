import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
})

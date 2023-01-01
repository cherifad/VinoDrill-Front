import { fileURLToPath, URL } from "node:url";
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-icon')
        }
      }
    }
  )],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        GlobalsPolyfills({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
      https: 'agent-base',
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

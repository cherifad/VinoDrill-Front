import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
      compilerOptions: {
        iscustomElement: (tag) => tag === "ion-icon",
        isCustomElement: (tag) => tag === "lord-icon",
      }
    }
    )],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    compilerOptions: {
      iscustomElement: (tag) => tag === "ion-icon",
      isCustomElement: (tag) => tag === "lord-icon",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    open: true,

    proxy: {
      "/api/econverse": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/api\/econverse/, ""),
      },
    },
  },
});
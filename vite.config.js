import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": "{}", // Ensure `process` is not referenced
    process: "{}",
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        format: "iife",
        entryFileNames: "widget.iife.js",
      },
    },
  },
});

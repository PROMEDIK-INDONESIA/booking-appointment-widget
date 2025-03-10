import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // ✅ Fix "process is not defined" error
  },
  esbuild: {
    minifyIdentifiers: false, // ✅ Prevents renaming issues (e.g., "ce.render")
  },
});

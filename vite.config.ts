import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: [
      { find: "@Components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@Assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@Utils", replacement: path.resolve(__dirname, "src/components/utils") },
      { find: "@Store", replacement: path.resolve(__dirname, "src/store") },
      { find: "@Pages", replacement: path.resolve(__dirname, "src/pages") },
    ],
  },
});

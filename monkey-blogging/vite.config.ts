import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@apis": path.resolve(__dirname, "./src/apis/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@contexts": path.resolve(__dirname, "./src/contexts/index.ts"),
      "@firebaseConfig": path.resolve(
        __dirname,
        "./src/firebaseConfig/index.ts"
      ),
    },
  },
});

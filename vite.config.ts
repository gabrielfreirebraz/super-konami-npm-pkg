import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      // entry: path.resolve(
      //   "src",
      //   "components/KonamiBackgroundContainer/index.tsx"
      // ),
      name: "SuperKonamiLibrary",
      // formats: ["es", "umd"],
      fileName: (format) => `super-konami-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
}));

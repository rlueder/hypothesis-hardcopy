import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [react()],
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});

// @ts-check
import {defineConfig} from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  vite: {
    optimizeDeps: {
      include: ["@material-tailwind/react"], // Optymalizacja zależności
    },
    build: {
      target: "esnext", // Ustawienie celu na ESNext
      commonjsOptions: {
        include: [/node_modules/], // Włącz wsparcie dla CommonJS
      },
    },
  },
});

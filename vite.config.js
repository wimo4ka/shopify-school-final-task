import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "assets",
    emptyOutDir: false,
    minify: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        tailwind: path.resolve(__dirname, "src/tailwind.input.css"),
        swiper: path.resolve(__dirname, "src/swiper-init.js"),
      },
      output: {
        entryFileNames: (chunk) => {
          return chunk.name === "swiper" ? "section-swiper.js" : "tailwind.js";
        },
        assetFileNames: (chunk) => {
          return chunk.name === "tailwind.css"
            ? "tailwind.output.css"
            : "section-swiper.css";
        },
      },
    },
  },
  },
);

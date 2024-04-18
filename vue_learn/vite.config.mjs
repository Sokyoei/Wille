import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    // assetsDir: "./violet-frontend/src/assets",
    // rollupOptions: {
    //   input: {
    //     home: path.resolve(__dirname, "./violet-frontend/public/index.html")
    //   }
    // },
    // root: path.resolve(__dirname, "./violet-frontend/public"),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [vue()],
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssModules from "vite-plugin-css-modules";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local", // 局部作用域
      // generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `@import "src/styles/variables.scss";`, // 如果需要全局导入 SCSS 变量
      },
    },
  },
});

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import glob from "glob";
import pathRewritePlugin from "./plugin/pathRewritePlugin";

// 保存页面文件路径
// const pageEntry = {};
// const multiPage = {};
// function getInput() {
//   const allEntry = glob.sync("./src/site/**/index.html");
//   allEntry.forEach((entry: string) => {
//     const pathArr = entry.split("/");
//     const name = pathArr[pathArr.length - 2];
//     multiPage[name] = {
//       name,
//       rootPage: `/src/site/${name}/index.html`,
//     };
//     pageEntry[name] = resolve(__dirname, `/src/site/${name}/index.html`);
//   });
// }
// // 调用一下
// getInput();

// console.log(pageEntry);

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/assets/style/base.less';@import '@/component/plumeUi/var.less';`,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@plumeUi": resolve(__dirname, "./src/component/plumeUi"),
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
      },
    },
  },
});

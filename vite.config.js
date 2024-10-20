import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
const pathResolve = (dir) => resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@": pathResolve("./src"), // 新增
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/sahaja-music-discs/' : '/', // 动态设置 base
})

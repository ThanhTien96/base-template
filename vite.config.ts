import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginSvgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  build: {
    outDir: 'dist'
  },
  server: {
    open: true,
    host: true,
    port: 3003,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    vitePluginSvgr({
      svgrOptions: {
        icon: true
      }
    })
  ],
})

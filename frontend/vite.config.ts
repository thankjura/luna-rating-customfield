import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteExternalsPlugin } from "vite-plugin-externals";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteExternalsPlugin({
      'luna': '__LUNA_COMPONENTS__',
      'vue': 'Vue',
      'axios': 'axios',
      'I18N': 'I18N'
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      entry: [
          resolve(__dirname, 'src/components/RatingFieldView.vue'),
          resolve(__dirname, 'src/components/RatingFieldEdit.vue')],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'axios'],
      output: {
        entryFileNames: '[name].js',
        exports: 'named',
        globals: {
          vue: 'Vue',
          axios: 'axios'
        },
      },
    },
    outDir: resolve(__dirname, '../src/main/resources/frontend'),
  },
})

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        }
    },
    build: {
        lib: {
            entry: [resolve(__dirname, 'src/components/RatingFieldView.vue'), resolve(__dirname, 'src/components/RatingFieldEdit.vue')],
            // name: 'RatingFieldView',
            formats: ['es'], // adding 'umd' requires globals set to every external module
        },
        rollupOptions: {
            // external modules won't be bundled into your library
            external: ['vue', /primevue\/.+/], // not every external has a global
            output: {
                // disable warning on src/index.ts using both default and named export
                exports: 'named',
                // Provide global variables to use in the UMD build
                // for externalized deps (not useful if 'umd' is not in lib.formats)
                globals: {
                    vue: 'Vue',
                },
            },
        },
        outDir: resolve(__dirname, '../src/main/resources/rating-customfield')
    },
});

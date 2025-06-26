import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                format: 'es',
            },
        },
    },
    optimizeDeps: {
        include: ['pdfjs-dist/build/pdf.worker.mjs']
    },
    assetsInclude: ['**/*.pdf']
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        tailwind(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@assets': path.resolve(__dirname, './src/images'),
            '@data': path.resolve(__dirname, './src/data'),
        },
    },
    server: {
        port: 3000,
    },
});

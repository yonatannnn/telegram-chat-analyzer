import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/__': {
                target: 'http://localhost:5001', // Firebase Emulator or endpoint
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/__/, '/')
            },
        },
    },
});

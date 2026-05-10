import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import {FLOCI_REST_API_ORIGIN} from './deploy-defaults'

/** Bun `packages/api` — NOT the Floci S3-compatible host (`deploy-defaults.ts` comment). */
const API_PROXY_TARGET = FLOCI_REST_API_ORIGIN

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {'@': path.resolve(__dirname, './src')},
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'query-vendor': ['@tanstack/react-query', '@tanstack/react-query-devtools'],
                    'ui-vendor': ['lucide-react'],
                },
            },
        },
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: API_PROXY_TARGET,
                changeOrigin: true,
            },
        },
    },
})

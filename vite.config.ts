import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: isProd 
          ? 'https://fasttripgo.com'
          : 'http://localhost/project-08052025/project',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.error('Proxy error:', err);
          });
          proxy.on('proxyReq', (_proxyReq, req) => {
            console.log('Proxy request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Proxy response:', proxyRes.statusCode, req.url);
          });
        },
      }
    },
    headers: {
      'Content-Security-Policy': [
        "default-src 'self' https: http: data: ws: wss:;",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;",
        "style-src 'self' 'unsafe-inline' https:;",
        "img-src 'self' https: data:;",
        "font-src 'self' https: data:;",
        "connect-src 'self' http: https:;",
        "frame-src 'self' https:;",
        "form-action 'self' https:;"
      ].join(' '),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Disable sourcemaps in production to reduce complexity
    sourcemap: false,
    manifest: true,
    // Ensure proper mime types
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Simplify chunks to avoid MIME type issues
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
        },
        // Use simpler asset naming
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const ext = name.split('.').pop() || '';
          let extType = 'assets';
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            extType = 'fonts';
          } else if (/css/i.test(ext)) {
            extType = 'css';
          } else if (/js/i.test(ext)) {
            extType = 'js';
          }
          
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js'
      }
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({base:process.env.GITHUB_PAGES_BASE || '/',plugins:[react()],build:{rollupOptions:{input:{home:resolve('index.html'),life:resolve('life/index.html'),lab:resolve('lab/index.html'),admin:resolve('admin/index.html')}}}});

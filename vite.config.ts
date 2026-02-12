import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: [
      'bec8-2405-201-a431-a801-5c48-6935-66a5-3e40.ngrok-free.app',
    ],
  },
});

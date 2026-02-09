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
      '4832-2405-201-a431-a801-a980-ad03-8449-aabe.ngrok-free.app',
    ],
  },
});

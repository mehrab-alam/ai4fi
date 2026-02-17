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
      '6ba9-2405-201-a431-a801-6817-6f7d-2b45-f9c4.ngrok-free.app',
    ],
  },
});

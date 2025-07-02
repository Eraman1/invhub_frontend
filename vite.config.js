import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows access from local network
    port: 5173,      // Or any other port you're using
    proxy: {
      "/api": {
        target: "https://tall-rosemaria-mwinfoserve-0b3c5186.koyeb.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});

<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5180, strictPort: true, host: true }
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
react(),
tailwindcss(),
],
server: {
port: 5180,
strictPort: true,
},
})
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0

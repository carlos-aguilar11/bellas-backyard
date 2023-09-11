import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
    // https: {
    //   key: 'bellasbackyard.com-key.pem',
    //   cert: 'bellasbackyard.com.pem',
    // },
  },
})

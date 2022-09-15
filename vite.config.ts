import { defineConfig } from 'vite'
import { CreateVitePlugins } from './config/vite/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: CreateVitePlugins()
})

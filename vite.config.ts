import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost',
    port: 5500,
    open: true,
  },
  resolve: {
    alias: [
      {find: '@app', replacement:'/src/app'},
      {find: '@api', replacement:'/src/utils/api'},
      {find: '@assets', replacement:'/public/assets'},
      {find: '@components', replacement:'/src/shared/components'},
      {find: '@helpers', replacement:'/src/utils/helpers'},
      {find: '@hooks', replacement:'/src/shared/hooks'},
      {find: '@pages', replacement:'/src/pages'},
      {find: '@store', replacement:'/src/shared/store'},
      {find: '@models', replacement:'/src/shared/models'},
      {find: '@widgets', replacement:'/src/widgets'},
    ]
  }
})

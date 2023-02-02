/// <reference types="vitest" />
//
import react from '@vitejs/plugin-react'
import transformImports from 'unplugin-transform-imports'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    mkcert(),
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    // TODO configure this
    // transformImports.vite({
    //   parseOptions: {
    //     plugins: ['typescript', 'jsx'],
    //   },
    //   modules: [
    //     { path: 'lodash' },
    //     {
    //       path: '@mui/icons-material',
    //       transform: `\${moduleName}/\${importName}`,
    //     },
    //     {
    //       path: 'phosphor-react',
    //       transform: (importName, moduleName) =>
    //         `${moduleName}/dist/icons/${importName}.esm.js`,
    //     },
    //     {
    //       path: 'mdi-material-ui',
    //     },
    //   ],
    // }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    port: 4000,
    https: true,
  },
})

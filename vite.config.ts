/// <reference types="vitest" />
//
import mkcert from'vite-plugin-mkcert'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
		mkcert(),
		react(), 
		viteTsconfigPaths(), 
		svgrPlugin()
	],
	test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
      ],
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
});

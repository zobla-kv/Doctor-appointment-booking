import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['__tests__/**/*.{ts,tsx}'],
    watch: false,
  },
});

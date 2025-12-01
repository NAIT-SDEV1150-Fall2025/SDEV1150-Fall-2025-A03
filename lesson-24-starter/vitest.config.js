import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // environment: 'jsdom',
    environment: 'happy-dom',
    // use this if you're getting document is not defined.
  },
});

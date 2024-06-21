import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4561
  },
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
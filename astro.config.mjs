import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkPluginText from './src/utils/remark-plugin-text.js'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4561
  },
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
      remarkPluginText
    ],
    shikiConfig: {
      theme: 'github-light'
    }
  }
});

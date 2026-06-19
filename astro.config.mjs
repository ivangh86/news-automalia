import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://news.automalia.ai',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});

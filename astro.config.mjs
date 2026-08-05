import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sartorianotarile.it',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sartorianotarile.it',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
  redirects: {
    '/lugo': '/ravenna',
    '/faenza': '/ravenna',
    '/cervia': '/ravenna',
    '/imola': '/bologna',
    '/casalecchio-di-reno': '/bologna',
    '/san-lazzaro-di-savena': '/bologna',
    '/forli': '/forli-cesena',
    '/cesena': '/forli-cesena',
    '/riccione': '/rimini',
    '/cento': '/ferrara',
    '/carpi': '/modena',
    '/formigine': '/modena',
    '/sassuolo': '/modena',
    '/castelfranco-emilia': '/modena',
    '/vignola': '/modena',
    '/trieste': '/rovigo',
    '/gorizia': '/rovigo',
    '/udine': '/rovigo',
    '/pordenone': '/rovigo',
    '/monfalcone': '/rovigo',
    '/vicenza': '/rovigo',
    '/padova': '/rovigo',
    '/verona': '/rovigo'
  },
});

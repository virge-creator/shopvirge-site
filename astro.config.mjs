import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://virge-creator.github.io',
  base: '/shopvirge-site/',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});

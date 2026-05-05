import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://shopvirge.com',
  base: '/',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});

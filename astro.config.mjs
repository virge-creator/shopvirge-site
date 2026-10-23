import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  site: 'https://shopvirge.com',
  base: '/',
  redirects: Object.fromEntries(
    ['en', 'nl'].flatMap((lang) =>
      ['', 'photo', 'lego', 'woocommerce'].map((slug) => [
        `/${lang}/ai-demos/${slug ? `${slug}/` : ''}`,
        `/${lang}/cases/${slug ? `${slug}/` : ''}`,
      ])
    )
  ),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: { nl: 'nl', en: 'en' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});

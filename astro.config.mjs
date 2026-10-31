import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠️ Set this to your real domain before going live.
  // It is used for canonical URLs, the sitemap and link previews.
  site: 'https://thefinerthingsjournal.com',

  // Clean URLs with no trailing slash: /about, /journal/my-article
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [sitemap()],
});

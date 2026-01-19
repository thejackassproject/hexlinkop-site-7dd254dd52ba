import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://sellyourstufftoday.bid',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx()
  ],
  prefetch: true,
  build: {
    assets: '_bundled',
    inlineStylesheets: 'always',
  }
});

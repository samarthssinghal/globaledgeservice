// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Two deploy targets, switched via env vars (defaults = the GitHub Pages
// PROJECT url, which is what works before the custom domain DNS is live):
//
//   • Preview (default): https://samarthssinghal.github.io/globaledgeservice/
//   • Custom domain:     set SITE=https://globaledgeservice.com BASE=/
//                        (then add the DNS records + restore public/CNAME)
//
// All internal links/assets go through src/lib/paths.ts so they respect `base`
// automatically — switching targets needs no other code changes.
const SITE = process.env.SITE ?? 'https://samarthssinghal.github.io';
const BASE = process.env.BASE ?? '/globaledgeservice';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

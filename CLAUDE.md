# Global Edge Enterprise — Website

Marketing website for **Global Edge Enterprise, LLC**, a recruitment & staffing firm.
Static site built with **Astro + Tailwind CSS v4**, deployed to **GitHub Pages** at
**globaledgeservice.com**. See [SPEC.md](SPEC.md) for the original brief.

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | [Astro 5](https://astro.build) (`output: static`)   |
| Styling        | Tailwind CSS v4 via `@tailwindcss/vite`             |
| SEO            | `@astrojs/sitemap` + per-page meta in `BaseLayout`  |
| Forms          | Google Forms (embedded via iframe)                  |
| Hosting / CI   | GitHub Pages via GitHub Actions (`withastro/action`)|

Everything used is free. GitHub Actions + Pages are free **for public repositories** —
keep the repo public.

## Project structure

```
public/                 Static assets served as-is
  favicon.svg, robots.txt
  images/               Placeholder logo / hero / og-image (swap these out)
src/
  data/site.ts          ★ Single source of truth: company info, nav, services, form URLs
  lib/paths.ts          url()/isActive() helpers — prefix every link with the base path
  layouts/BaseLayout    <head>, SEO/OG meta, Header + Footer wrapper
  components/            Header, Footer, Hero, ServiceCard, CTA
  pages/                index, about, services, careers, contact
  styles/global.css     Tailwind import + brand color tokens (@theme)
.github/workflows/deploy.yml   Build + deploy to GitHub Pages on push to main
```

> **Base path:** GitHub Pages serves this repo under the sub-path
> `/globaledgeservice/` until the custom domain is live. `astro.config.mjs` sets
> `base` from the `SITE`/`BASE` env vars (defaulting to the project URL), and all
> internal links/assets go through `src/lib/paths.ts` so they respect it. **Always
> link with `url("/about")` — never a bare `/about`** — or assets will 404 on the
> project URL.

## Local development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # production build -> dist/
npm run preview  # serve the built dist/ locally
```

## How to customize (no deep code changes needed)

Most edits happen in **`src/data/site.ts`** — the single source of truth:

- **Company details** — email, phone, address, LinkedIn.
- **Google Form URLs** — set `contactFormUrl` and `careersFormUrl` to your Google Form
  *viewform* share links. The code appends `?embedded=true` automatically for the iframe.
- **Services** — edit/add items in the `services` array (title, summary, details, icon).
- **Differentiators / stats** — edit the `differentiators` and `stats` arrays.
- **Navigation** — edit the `nav` array.

Other common changes:
- **Brand colors** — edit the `@theme` tokens in `src/styles/global.css` (e.g. `--color-navy`,
  `--color-accent`). They flow everywhere via classes like `bg-navy`, `text-accent`.
- **Logo / images** — replace the placeholder files in `public/images/` (keep the same
  filenames, or update references in `Header.astro` / `Footer.astro` / `Hero.astro`).
- **Copy** — page text lives in the `src/pages/*.astro` files; search for `TODO` markers.

> The current copy, logo, images, contact details, and Google Form URLs are all **placeholders**.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages. The repo must be **public** (free Actions/Pages) and Pages **Source** must be
set to **GitHub Actions** (Settings → Pages).

### Current state — preview on the project URL

With the default config the site builds for and is live at:

`https://samarthssinghal.github.io/globaledgeservice/`

This works **without any DNS setup**. Just push to `main`.

### Cutover to the custom domain (globaledgeservice.com)

When you're ready to use the real domain:

1. **DNS** at your registrar:
   - Apex `globaledgeservice.com` → GitHub Pages A records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (or `ALIAS`/`ANAME` → `samarthssinghal.github.io` if supported).
   - `www` → CNAME to `samarthssinghal.github.io`.
2. **GitHub:** Settings → Pages → set the custom domain to `globaledgeservice.com`
   (this recreates the `CNAME` file). Wait for the check to pass, then tick **Enforce HTTPS**.
3. **Build for root:** make the workflow build at the domain root by adding env to the build
   step in `.github/workflows/deploy.yml`:
   ```yaml
   - uses: withastro/action@v4
     env:
       SITE: https://globaledgeservice.com
       BASE: /
   ```
   Because all links use `src/lib/paths.ts`, no other code changes are needed.
4. Create the two Google Forms (Contact, Careers) and paste their viewform links into
   `src/data/site.ts`.

## Status / TODO

- [ ] Replace placeholder logo, hero, og-image, and favicon with real branding
- [ ] Replace placeholder copy (search `TODO` in `src/pages/`)
- [ ] Set real contact details + Google Form URLs in `src/data/site.ts`
- [ ] Configure GitHub Pages source + custom domain DNS

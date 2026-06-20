/*
 * Base-path aware URL helpers.
 *
 * GitHub Pages serves this project under a sub-path (e.g. /globaledgeservice/)
 * until the custom domain is live, so every internal link and asset must be
 * prefixed with Astro's configured `base`. These helpers do that automatically
 * using import.meta.env.BASE_URL, so the same code works on both the project
 * URL and the apex domain (base "/").
 */

const BASE_URL = import.meta.env.BASE_URL; // e.g. "/globaledgeservice/" or "/"
const BASE = BASE_URL.replace(/\/$/, ""); // strip trailing slash -> "" or "/globaledgeservice"

const EXTERNAL = /^(?:[a-z]+:|\/\/|#)/i; // http:, https:, mailto:, tel:, //, #anchor

/** Prefix an internal path with the site base. External/anchor links pass through. */
export function url(path: string): string {
  if (EXTERNAL.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}` || "/";
}

/** Is `href` the current page? `pathname` is Astro.url.pathname (includes base). */
export function isActive(pathname: string, href: string): boolean {
  let current = pathname;
  if (BASE && current.startsWith(BASE)) current = current.slice(BASE.length) || "/";
  current = current.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  return target === "/" ? current === "/" : current.startsWith(target);
}

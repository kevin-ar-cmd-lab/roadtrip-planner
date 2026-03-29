/**
 * Returns the base URL of the site.
 * In production, uses NEXT_PUBLIC_SITE_URL (set via next.config.ts from Netlify's URL env var).
 * Falls back to NEXT_PUBLIC_VERCEL_URL, then window.location.origin on the client,
 * or localhost for local dev.
 */
export function getSiteUrl(): string {
  // Prefer explicitly configured site URL
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  // Fallback to window.location.origin on client side
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Server-side fallback: check Netlify URL env var directly
  if (process.env.URL) {
    return process.env.URL.replace(/\/+$/, "");
  }
  return "http://localhost:3000";
}

/**
 * Returns the base URL of the site.
 * In production, uses NEXT_PUBLIC_SITE_URL or the Netlify-provided URL.
 * Falls back to window.location.origin for local development.
 */
export function getSiteUrl(): string {
  // Prefer explicitly configured site URL
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  // Netlify sets URL env var in production builds
  if (process.env.NEXT_PUBLIC_URL) {
    return process.env.NEXT_PUBLIC_URL.replace(/\/+$/, "");
  }
  // Fallback for local development
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:3000";
}

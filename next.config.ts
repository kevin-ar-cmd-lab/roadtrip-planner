import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Expose the Netlify-provided URL so getSiteUrl() resolves correctly on the client.
    // DEPLOY_PRIME_URL is more specific (includes branch deploy URLs), URL is the main site URL.
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.DEPLOY_PRIME_URL ||
      process.env.URL ||
      "",
  },
};

export default nextConfig;

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Root page — redirects to /dashboard (authenticated) or /login (not authenticated).
 * Also handles Supabase auth error redirects that arrive with hash-fragment params
 * (e.g. #error=access_denied&error_code=otp_expired), which the middleware cannot read.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check for auth error params in the hash fragment
    const hash = window.location.hash.substring(1); // remove leading #
    if (hash) {
      const params = new URLSearchParams(hash);
      const error = params.get("error");
      const errorCode = params.get("error_code");
      if (error || errorCode) {
        const loginParams = new URLSearchParams();
        if (error) loginParams.set("error", error);
        if (errorCode) loginParams.set("error_code", errorCode);
        const desc = params.get("error_description");
        if (desc) loginParams.set("error_description", desc);
        router.replace(`/login?${loginParams.toString()}`);
        return;
      }
    }

    // Check query params too (middleware handles most, but this is a fallback)
    const query = new URLSearchParams(window.location.search);
    if (query.get("error") || query.get("error_code")) {
      router.replace(`/login?${query.toString()}`);
      return;
    }

    // Default: redirect to dashboard (middleware will redirect to /login if not authenticated)
    router.replace("/dashboard");
  }, [router]);

  return null;
}

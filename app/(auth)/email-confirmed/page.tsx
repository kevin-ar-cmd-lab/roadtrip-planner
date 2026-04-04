"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmailConfirmedPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/dashboard";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Email confirmed!
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Your email has been verified successfully. Your account is now active
          and ready to use.
        </p>

        <div className="mt-8 space-y-3">
          <Link
            href="/dashboard"
            className="block w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Go to Dashboard
          </Link>
          <p className="text-xs text-muted-foreground">
            Redirecting automatically in {countdown} second
            {countdown !== 1 ? "s" : ""}...
          </p>
        </div>
      </div>
    </div>
  );
}

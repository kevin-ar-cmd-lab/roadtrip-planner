"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          RoadTrip Planner
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
          <Link href="/faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</Link>
          <div className="ml-2 flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Log in</Link>
            <Link href="/register" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark">Sign up</Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link href="/features" className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">Features</Link>
            <Link href="/pricing" className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">Pricing</Link>
            <Link href="/about" className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">About</Link>
            <Link href="/contact" className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">Contact</Link>
            <Link href="/faq" className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">FAQ</Link>
            <hr className="my-2 border-border" />
            <Link href="/login" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">Log in</Link>
            <Link href="/register" className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-dark">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

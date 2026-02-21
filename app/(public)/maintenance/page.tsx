import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <svg className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 113.18-3.18l.72.72 7.78-7.78a2.25 2.25 0 013.18 3.18l-7.78 7.78.72.72a2.25 2.25 0 01-3.18 3.18l-5.1-5.1zM14.12 6.88L17.3 10.06" />
          </svg>
        </div>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Under Maintenance</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We&apos;re currently performing scheduled maintenance to improve your experience. We&apos;ll be back
          shortly.
        </p>

        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">What&apos;s happening?</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-6">
            Our team is working on system upgrades and improvements. This maintenance window is expected
            to be brief. Thank you for your patience.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Plan Your Perfect{" "}
              <span className="text-primary">Road Trip</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Map your routes, discover hidden gems, and organize every stop along the way.
              The all-in-one planner for unforgettable road trip adventures.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                Start Planning Free
              </Link>
              <Link
                href="/features"
                className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Everything You Need for the Open Road</h2>
            <p className="mt-4 text-lg text-muted-foreground">Powerful tools to plan, track, and share your road trips.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { title: "Interactive Maps", desc: "Plot routes with drag-and-drop waypoints on detailed maps. Visualize your entire journey at a glance.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { title: "Smart Itineraries", desc: "Organize stops, set time estimates, and keep your schedule on track with intelligent planning tools.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { title: "Save & Share", desc: "Save your favorite locations, share trips with friends, and collaborate on group adventures.", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Hit the Road?</h2>
          <p className="mt-4 text-lg text-white/80">Join thousands of travelers planning their next adventure.</p>
          <Link
            href="/register"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-gray-100"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}

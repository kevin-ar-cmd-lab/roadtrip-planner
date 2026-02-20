export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">About RoadTrip Planner</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We believe every road trip should be an adventure worth remembering. RoadTrip Planner was built
          by a team of travel enthusiasts who wanted a better way to plan, organize, and share their journeys.
        </p>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              To make road trip planning effortless and enjoyable. Whether you&apos;re mapping a cross-country
              adventure or a weekend getaway, our tools help you focus on what matters most &mdash; the experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">What We Offer</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Interactive map-based route planning with drag-and-drop waypoints",
                "Smart itinerary builder with time and distance estimates",
                "Community-curated points of interest and hidden gems",
                "Trip sharing and collaboration features",
                "Offline access to your trip plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "50K+", label: "Trips Planned" },
              { stat: "120K+", label: "Happy Travelers" },
              { stat: "30+", label: "Countries" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-primary">{item.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

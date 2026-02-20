import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
          Plan Your Perfect Road Trip
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Map out routes, organize stops, and create unforgettable road trip
          itineraries. Drag and drop your way to the ultimate adventure.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/plan"
            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Start Planning
          </Link>
          <Link
            href="/explore"
            className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Explore Routes
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
          <div className="mb-4 text-3xl">&#x1F5FA;&#xFE0F;</div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Interactive Maps
          </h3>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Visualize your entire route on an interactive map. See distances,
            estimated drive times, and points of interest along the way.
          </p>
          <Link
            href="/plan"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-200"
          >
            Open Map &rarr;
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
          <div className="mb-4 text-3xl">&#x1F4CB;</div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Drag &amp; Drop Itinerary
          </h3>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Reorder stops with a simple drag and drop. Build your day-by-day
            itinerary effortlessly and adjust on the fly.
          </p>
          <Link
            href="/plan"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-200"
          >
            Plan Itinerary &rarr;
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
          <div className="mb-4 text-3xl">&#x1F30E;</div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Discover Destinations
          </h3>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Browse popular road trip routes and hidden gems. Get inspired by
            curated destinations across the country.
          </p>
          <Link
            href="/explore"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-200"
          >
            Explore &rarr;
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Ready to Hit the Road?
        </h2>
        <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Check out your saved trips or start building a brand new route today.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/trips"
            className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            View My Trips
          </Link>
          <Link
            href="/plan"
            className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            New Trip
          </Link>
        </div>
      </section>
    </div>
  );
}

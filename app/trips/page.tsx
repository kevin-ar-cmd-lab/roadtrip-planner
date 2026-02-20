import Link from "next/link";

const savedTrips = [
  {
    id: 1,
    name: "Pacific Coast Highway",
    from: "San Francisco",
    to: "Los Angeles",
    stops: 5,
    distance: "380 mi",
    days: 5,
  },
  {
    id: 2,
    name: "Route 66 Classic",
    from: "Chicago",
    to: "Santa Monica",
    stops: 12,
    distance: "2,451 mi",
    days: 14,
  },
  {
    id: 3,
    name: "New England Fall Foliage",
    from: "Boston",
    to: "Portland, ME",
    stops: 8,
    distance: "620 mi",
    days: 7,
  },
];

export default function MyTrips() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* Page Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            My Trips
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            View and manage all your saved road trip itineraries.
          </p>
        </div>
        <Link
          href="/plan"
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          + New Trip
        </Link>
      </div>

      {/* Trips Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedTrips.map((trip) => (
          <div
            key={trip.id}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <span className="text-4xl">&#x1F697;</span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {trip.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {trip.from} &rarr; {trip.to}
            </p>
            <div className="mt-4 flex gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <span>{trip.stops} stops</span>
              <span>{trip.distance}</span>
              <span>{trip.days} days</span>
            </div>
            <div className="mt-5 flex gap-3">
              <Link
                href="/plan"
                className="flex-1 rounded-lg bg-zinc-900 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              >
                Edit Trip
              </Link>
              <Link
                href="/explore"
                className="flex-1 rounded-lg border border-zinc-200 py-2 text-center text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                View Route
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State / CTA */}
      <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
        <div className="text-4xl">&#x2795;</div>
        <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Plan a New Adventure
        </h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Start from scratch or get inspired by popular routes.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/plan"
            className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Start Planning
          </Link>
          <Link
            href="/explore"
            className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Browse Routes
          </Link>
        </div>
      </div>
    </div>
  );
}

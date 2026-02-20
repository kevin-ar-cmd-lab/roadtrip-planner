import Link from "next/link";

export default function PlanTrip() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Plan Your Trip
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Add stops, reorder your itinerary, and visualize your route on the
          map.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Itinerary Sidebar */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Itinerary
              </h2>
              <button className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
                + Add Stop
              </button>
            </div>

            {/* Example Stops */}
            <div className="space-y-3">
              {[
                {
                  day: "Day 1",
                  name: "San Francisco, CA",
                  detail: "Starting point",
                },
                {
                  day: "Day 2",
                  name: "Monterey, CA",
                  detail: "2h drive &middot; Cannery Row",
                },
                {
                  day: "Day 3",
                  name: "Big Sur, CA",
                  detail: "1h drive &middot; Bixby Bridge",
                },
                {
                  day: "Day 4",
                  name: "San Luis Obispo, CA",
                  detail: "2.5h drive &middot; Downtown",
                },
                {
                  day: "Day 5",
                  name: "Los Angeles, CA",
                  detail: "3h drive &middot; Destination",
                },
              ].map((stop) => (
                <div
                  key={stop.name}
                  className="flex cursor-grab items-center gap-4 rounded-xl border border-zinc-100 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:border-zinc-600"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                    {stop.day.split(" ")[1]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {stop.name}
                    </p>
                    <p
                      className="text-xs text-zinc-500 dark:text-zinc-400"
                      dangerouslySetInnerHTML={{ __html: stop.detail }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-zinc-400 dark:text-zinc-500">
              Drag stops to reorder your itinerary
            </p>
          </div>

          <div className="mt-4 flex gap-3">
            <Link
              href="/trips"
              className="flex-1 rounded-lg border border-zinc-200 py-2.5 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Save Trip
            </Link>
            <Link
              href="/explore"
              className="flex-1 rounded-lg border border-zinc-200 py-2.5 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Browse Ideas
            </Link>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-3">
          <div className="flex h-[500px] items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-center">
              <div className="text-5xl">&#x1F5FA;&#xFE0F;</div>
              <p className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Interactive map will load here
              </p>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                Powered by Leaflet
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-zinc-200 p-4 text-center dark:border-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Total Distance
              </p>
              <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                380 mi
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 text-center dark:border-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Drive Time
              </p>
              <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                8.5 hrs
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 text-center dark:border-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Stops</p>
              <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

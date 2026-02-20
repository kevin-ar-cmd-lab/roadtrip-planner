import Link from "next/link";

const popularRoutes = [
  {
    id: 1,
    name: "Pacific Coast Highway",
    region: "California",
    distance: "655 mi",
    highlights: ["Big Sur", "Hearst Castle", "Malibu"],
    duration: "5-7 days",
  },
  {
    id: 2,
    name: "Blue Ridge Parkway",
    region: "Virginia & North Carolina",
    distance: "469 mi",
    highlights: ["Shenandoah", "Asheville", "Great Smokies"],
    duration: "4-6 days",
  },
  {
    id: 3,
    name: "Route 66",
    region: "Chicago to Santa Monica",
    distance: "2,451 mi",
    highlights: ["Cadillac Ranch", "Painted Desert", "Grand Canyon"],
    duration: "10-14 days",
  },
  {
    id: 4,
    name: "Great River Road",
    region: "Minnesota to Louisiana",
    distance: "3,000 mi",
    highlights: ["St. Louis", "Memphis", "New Orleans"],
    duration: "10-14 days",
  },
  {
    id: 5,
    name: "Overseas Highway",
    region: "Florida Keys",
    distance: "113 mi",
    highlights: ["Key Largo", "Marathon", "Key West"],
    duration: "2-3 days",
  },
  {
    id: 6,
    name: "Going-to-the-Sun Road",
    region: "Montana",
    distance: "50 mi",
    highlights: ["Glacier NP", "Logan Pass", "Lake McDonald"],
    duration: "1-2 days",
  },
];

const categories = [
  { name: "Coastal Drives", icon: "&#x1F30A;" },
  { name: "Mountain Roads", icon: "&#x26F0;&#xFE0F;" },
  { name: "Desert Routes", icon: "&#x1F3DC;&#xFE0F;" },
  { name: "Historic Trails", icon: "&#x1F3DB;&#xFE0F;" },
  { name: "National Parks", icon: "&#x1F332;" },
  { name: "City Hopping", icon: "&#x1F3D9;&#xFE0F;" },
];

export default function Explore() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Explore Routes
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Discover popular road trip routes and find inspiration for your next
          adventure.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12 grid grid-cols-3 gap-3 md:grid-cols-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            <span
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: cat.icon }}
            />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Popular Routes */}
      <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">
        Popular Routes
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {popularRoutes.map((route) => (
          <div
            key={route.id}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700">
              <span className="text-3xl">&#x1F30E;</span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {route.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {route.region}
            </p>
            <div className="mt-3 flex gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span>{route.distance}</span>
              <span>&middot;</span>
              <span>{route.duration}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {route.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {h}
                </span>
              ))}
            </div>
            <Link
              href="/plan"
              className="mt-5 block rounded-lg bg-zinc-900 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Use This Route
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Have Your Own Route in Mind?
        </h3>
        <p className="mt-2 max-w-md text-sm text-zinc-500 dark:text-zinc-400">
          Create a custom itinerary from scratch with our trip planner. Add
          any stops you want and visualize them on the map.
        </p>
        <Link
          href="/plan"
          className="mt-6 rounded-full bg-zinc-900 px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Create Custom Trip
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

const trips = [
  { id: "pch-2026", name: "Pacific Coast Highway", dates: "Mar 5-12, 2026", stops: 8, miles: 650, status: "Planned", image: "bg-blue-100 dark:bg-blue-900/30" },
  { id: "route66", name: "Route 66 Adventure", dates: "Apr 1-14, 2026", stops: 15, miles: 2400, status: "Planned", image: "bg-orange-100 dark:bg-orange-900/30" },
  { id: "new-england", name: "New England Fall Tour", dates: "Oct 10-18, 2025", stops: 11, miles: 980, status: "Completed", image: "bg-red-100 dark:bg-red-900/30" },
  { id: "yellowstone", name: "Yellowstone & Grand Teton", dates: "Jun 15-22, 2026", stops: 9, miles: 520, status: "Draft", image: "bg-green-100 dark:bg-green-900/30" },
  { id: "florida-keys", name: "Florida Keys Drive", dates: "Feb 1-5, 2026", stops: 6, miles: 280, status: "Completed", image: "bg-cyan-100 dark:bg-cyan-900/30" },
  { id: "southwest", name: "Southwest Canyon Tour", dates: "May 10-20, 2026", stops: 12, miles: 1800, status: "Draft", image: "bg-amber-100 dark:bg-amber-900/30" },
];

export default function TripsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Trips</h1>
          <p className="mt-1 text-sm text-muted-foreground">View and manage all your road trips.</p>
        </div>
        <Link
          href="/planner"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Plan New Trip
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex gap-2">
        {["All", "Planned", "Draft", "Completed"].map((filter) => (
          <button
            key={filter}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === "All" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Trip Cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <Link
            key={trip.id}
            href={`/trips/${trip.id}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className={`h-32 ${trip.image} flex items-center justify-center`}>
              <svg className="h-12 w-12 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{trip.name}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  trip.status === "Completed" ? "bg-success/10 text-success" :
                  trip.status === "Planned" ? "bg-primary/10 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {trip.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{trip.dates}</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{trip.stops} stops</span>
                <span>{trip.miles} miles</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

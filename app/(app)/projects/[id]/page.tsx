import Link from "next/link";

const projectTrips = [
  { id: "trip-1", name: "Pacific Coast Highway", date: "Mar 5-12, 2026", stops: 8, miles: 650, status: "Planned" },
  { id: "trip-2", name: "Yosemite Weekend", date: "Mar 20-22, 2026", stops: 4, miles: 320, status: "Draft" },
  { id: "trip-3", name: "Napa Valley Wine Tour", date: "Apr 8-10, 2026", stops: 6, miles: 180, status: "Planned" },
  { id: "trip-4", name: "Big Sur Camping", date: "Apr 25-28, 2026", stops: 5, miles: 240, status: "Draft" },
];

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/projects" className="hover:text-foreground">Projects</Link>
        <span>/</span>
        <span className="text-foreground">Summer 2026 Adventures</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Summer 2026 Adventures</h1>
          <p className="mt-1 text-sm text-muted-foreground">4 trips planned across California and the West Coast.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Share Project
          </button>
          <Link href="/planner" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
            Add Trip
          </Link>
        </div>
      </div>

      {/* Project Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {[
          { label: "Total Trips", value: "4" },
          { label: "Total Stops", value: "23" },
          { label: "Total Miles", value: "1,390" },
          { label: "Collaborators", value: "3" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Trip List */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Trips</h2>
        <div className="mt-4 space-y-3">
          {projectTrips.map((trip) => (
            <Link
              key={trip.id}
              href={`/trips/${trip.id}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{trip.name}</h3>
                  <p className="text-xs text-muted-foreground">{trip.date} &middot; {trip.stops} stops &middot; {trip.miles} mi</p>
                </div>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                trip.status === "Planned" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {trip.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

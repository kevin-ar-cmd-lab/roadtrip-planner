import Link from "next/link";

const stats = [
  { label: "Total Trips", value: "12", change: "+2 this month", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Miles Planned", value: "4,280", change: "+680 this month", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { label: "Saved Locations", value: "38", change: "+5 this month", icon: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" },
  { label: "Active Projects", value: "3", change: "1 completed", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
];

const recentTrips = [
  { name: "Pacific Coast Highway", date: "Feb 15, 2026", stops: 8, status: "In Progress" },
  { name: "Route 66 Adventure", date: "Jan 20, 2026", stops: 15, status: "Planned" },
  { name: "New England Fall Tour", date: "Dec 5, 2025", stops: 11, status: "Completed" },
];

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Welcome back! Here&apos;s an overview of your trips.</p>
        </div>
        <Link
          href="/planner"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Plan New Trip
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Trips */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Recent Trips</h2>
          <Link href="/trips" className="text-sm font-medium text-primary hover:text-primary-dark">View all</Link>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Trip Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Stops</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {recentTrips.map((trip) => (
                <tr key={trip.name} className="hover:bg-muted/30">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{trip.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{trip.date}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{trip.stops}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      trip.status === "Completed" ? "bg-success/10 text-success" :
                      trip.status === "In Progress" ? "bg-primary/10 text-primary" :
                      "bg-accent/10 text-accent-dark"
                    }`}>
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Link href="/planner" className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
          <h3 className="font-semibold text-foreground">Plan a Trip</h3>
          <p className="mt-1 text-sm text-muted-foreground">Create a new road trip itinerary</p>
        </Link>
        <Link href="/map" className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
          <h3 className="font-semibold text-foreground">Explore Map</h3>
          <p className="mt-1 text-sm text-muted-foreground">Discover new routes and locations</p>
        </Link>
        <Link href="/saved-locations" className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
          <h3 className="font-semibold text-foreground">Saved Places</h3>
          <p className="mt-1 text-sm text-muted-foreground">View your bookmarked locations</p>
        </Link>
      </div>
    </>
  );
}

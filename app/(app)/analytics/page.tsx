const monthlyData = [
  { month: "Sep", trips: 1, miles: 450 },
  { month: "Oct", trips: 2, miles: 920 },
  { month: "Nov", trips: 1, miles: 380 },
  { month: "Dec", trips: 2, miles: 1100 },
  { month: "Jan", trips: 3, miles: 1450 },
  { month: "Feb", trips: 2, miles: 680 },
];

const topDestinations = [
  { name: "California", trips: 5, miles: 2200 },
  { name: "Oregon", trips: 3, miles: 1100 },
  { name: "Arizona", trips: 2, miles: 850 },
  { name: "Nevada", trips: 2, miles: 600 },
  { name: "Utah", trips: 1, miles: 450 },
];

export default function AnalyticsPage() {
  const maxMiles = Math.max(...monthlyData.map((d) => d.miles));

  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
      <p className="mt-1 text-sm text-muted-foreground">Track your travel patterns and statistics.</p>

      {/* Overview Stats */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Distance", value: "12,450 mi", sub: "All time" },
          { label: "Trips This Year", value: "8", sub: "2026" },
          { label: "Average Trip Length", value: "536 mi", sub: "Per trip" },
          { label: "States Visited", value: "14", sub: "Out of 50" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Monthly Activity Chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Monthly Mileage</h2>
          <p className="text-sm text-muted-foreground">Miles driven per month over the last 6 months.</p>
          <div className="mt-6 flex items-end gap-3" style={{ height: 200 }}>
            {monthlyData.map((data) => (
              <div key={data.month} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">{data.miles}</span>
                <div
                  className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary"
                  style={{ height: `${(data.miles / maxMiles) * 160}px` }}
                />
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Top Destinations</h2>
          <p className="text-sm text-muted-foreground">Most visited states by number of trips.</p>
          <div className="mt-6 space-y-4">
            {topDestinations.map((dest, i) => (
              <div key={dest.name} className="flex items-center gap-4">
                <span className="w-6 text-center text-sm font-bold text-muted-foreground">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{dest.name}</span>
                    <span className="text-xs text-muted-foreground">{dest.trips} trips &middot; {dest.miles} mi</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(dest.trips / topDestinations[0].trips) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

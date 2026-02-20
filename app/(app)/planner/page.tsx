"use client";

export default function PlannerPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Trip Planner</h1>
          <p className="mt-1 text-sm text-muted-foreground">Plan your route, add stops, and organize your itinerary.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Import Route
          </button>
          <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
            Save Trip
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Stops Panel */}
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-4">
            <h2 className="text-sm font-semibold text-foreground">Trip Details</h2>
            <div className="mt-3 space-y-3">
              <input
                type="text"
                placeholder="Trip name"
                className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="date"
                  className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Stops</h2>
              <button className="text-xs font-medium text-primary hover:text-primary-dark">+ Add Stop</button>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { num: 1, name: "San Francisco, CA", type: "Start" },
                { num: 2, name: "Half Moon Bay, CA", type: "Stop" },
                { num: 3, name: "Santa Cruz, CA", type: "Stop" },
                { num: 4, name: "Monterey, CA", type: "Stop" },
                { num: 5, name: "Big Sur, CA", type: "Stop" },
                { num: 6, name: "San Luis Obispo, CA", type: "End" },
              ].map((stop) => (
                <div
                  key={stop.num}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/30"
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                    stop.type === "Start" ? "bg-success" : stop.type === "End" ? "bg-destructive" : "bg-primary"
                  }`}>
                    {stop.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{stop.name}</p>
                    <p className="text-xs text-muted-foreground">{stop.type}</p>
                  </div>
                  <svg className="h-4 w-4 cursor-grab text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h2 className="text-sm font-semibold text-foreground">Trip Summary</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { label: "Total Distance", value: "350 mi" },
                { label: "Est. Drive Time", value: "6h 30m" },
                { label: "Stops", value: "6" },
                { label: "Days", value: "3" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <div className="flex h-full min-h-[500px] items-center justify-center rounded-xl border border-border bg-muted/30">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="mt-4 text-sm font-medium text-muted-foreground">Interactive Map</p>
              <p className="mt-1 text-xs text-muted-foreground">Your route will be displayed here with Leaflet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

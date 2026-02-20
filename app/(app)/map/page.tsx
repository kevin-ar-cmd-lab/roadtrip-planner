"use client";

export default function MapPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Explore Map</h1>
          <p className="mt-1 text-sm text-muted-foreground">Discover routes, points of interest, and plan visually.</p>
        </div>
        <div className="flex gap-3">
          <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
            <option>All Categories</option>
            <option>Scenic Routes</option>
            <option>Campgrounds</option>
            <option>Restaurants</option>
            <option>Gas Stations</option>
            <option>Viewpoints</option>
          </select>
          <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
            Add to Trip
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search locations..."
                className="block w-full rounded-lg border border-border bg-background py-2 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-sm font-semibold text-foreground">Nearby Points of Interest</h3>
            <div className="mt-3 space-y-2">
              {[
                { name: "Golden Gate Viewpoint", type: "Viewpoint", dist: "0.5 mi" },
                { name: "Fisherman's Wharf", type: "Restaurant", dist: "1.2 mi" },
                { name: "Muir Woods", type: "Nature", dist: "12 mi" },
                { name: "Sausalito", type: "Town", dist: "5 mi" },
                { name: "Point Reyes", type: "Nature", dist: "35 mi" },
              ].map((poi) => (
                <button
                  key={poi.name}
                  className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-muted"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{poi.name}</p>
                    <p className="text-xs text-muted-foreground">{poi.type} &middot; {poi.dist}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-3">
          <div className="flex h-full min-h-[600px] items-center justify-center rounded-xl border border-border bg-muted/30">
            <div className="text-center">
              <svg className="mx-auto h-20 w-20 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="mt-4 text-base font-medium text-muted-foreground">Interactive Map</p>
              <p className="mt-1 text-sm text-muted-foreground">Leaflet map will render here with your routes and locations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

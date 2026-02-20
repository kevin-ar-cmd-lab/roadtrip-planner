const savedLocations = [
  { id: 1, name: "Big Sur - Bixby Creek Bridge", category: "Scenic Viewpoint", state: "California", notes: "Iconic bridge, best at sunset. Parking available on the north side.", saved: "Feb 10, 2026" },
  { id: 2, name: "Yellowstone Old Faithful", category: "Nature", state: "Wyoming", notes: "Erupts approximately every 90 minutes. Get there early for good seats.", saved: "Jan 25, 2026" },
  { id: 3, name: "Blue Ridge Parkway - Milepost 382", category: "Scenic Route", state: "North Carolina", notes: "Best fall foliage viewpoint. October is peak season.", saved: "Jan 18, 2026" },
  { id: 4, name: "Marfa Lights Viewing Area", category: "Attraction", state: "Texas", notes: "Free viewing area on Route 67. Best viewed on clear nights.", saved: "Jan 5, 2026" },
  { id: 5, name: "Acadia National Park - Cadillac Mountain", category: "Nature", state: "Maine", notes: "First place to see sunrise in the US (seasonally). Reservation required.", saved: "Dec 20, 2025" },
  { id: 6, name: "In-N-Out Burger - Barstow", category: "Restaurant", state: "California", notes: "Classic road trip stop on I-15 between LA and Vegas.", saved: "Dec 15, 2025" },
  { id: 7, name: "Crater Lake Lodge", category: "Lodging", state: "Oregon", notes: "Book 6+ months ahead. Rim Drive is spectacular.", saved: "Dec 1, 2025" },
  { id: 8, name: "Route 66 Midpoint - Adrian, TX", category: "Attraction", state: "Texas", notes: "Official midpoint of Route 66. MidPoint Cafe has great pie.", saved: "Nov 20, 2025" },
];

const categories = ["All", "Scenic Viewpoint", "Nature", "Scenic Route", "Attraction", "Restaurant", "Lodging"];

export default function SavedLocationsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Saved Locations</h1>
          <p className="mt-1 text-sm text-muted-foreground">Your personal library of bookmarked places and points of interest.</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
          Add Location
        </button>
      </div>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              cat === "All" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Location Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {savedLocations.map((location) => (
          <div
            key={location.id}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {location.category}
              </span>
              <button className="text-muted-foreground transition-colors hover:text-destructive">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
            <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary">{location.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{location.state}</p>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{location.notes}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs text-muted-foreground">Saved {location.saved}</span>
              <button className="text-xs font-medium text-primary hover:text-primary-dark">Add to Trip</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

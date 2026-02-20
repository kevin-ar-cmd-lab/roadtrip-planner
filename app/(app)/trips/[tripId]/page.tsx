import Link from "next/link";

const stops = [
  { num: 1, name: "San Francisco", location: "Golden Gate Bridge", day: "Day 1", time: "8:00 AM", notes: "Start of the trip! Grab coffee before heading out." },
  { num: 2, name: "Half Moon Bay", location: "Coastside Trail", day: "Day 1", time: "10:00 AM", notes: "Short beach walk and lunch at the harbor." },
  { num: 3, name: "Santa Cruz", location: "Santa Cruz Beach Boardwalk", day: "Day 1", time: "1:00 PM", notes: "Afternoon at the boardwalk. Check into hotel." },
  { num: 4, name: "Monterey", location: "Monterey Bay Aquarium", day: "Day 2", time: "9:00 AM", notes: "Full morning at the aquarium, then Cannery Row." },
  { num: 5, name: "17-Mile Drive", location: "Pebble Beach", day: "Day 2", time: "2:00 PM", notes: "Scenic drive along the coast. Lone Cypress photo stop." },
  { num: 6, name: "Big Sur", location: "Bixby Creek Bridge", day: "Day 3", time: "9:00 AM", notes: "Iconic bridge overlook and hiking at Pfeiffer Burns." },
  { num: 7, name: "Hearst Castle", location: "San Simeon", day: "Day 3", time: "2:00 PM", notes: "Tour the castle. Book tickets in advance!" },
  { num: 8, name: "San Luis Obispo", location: "Downtown SLO", day: "Day 3", time: "5:00 PM", notes: "End of trip. Dinner on Higuera Street." },
];

export default function TripDetailPage({ params }: { params: Promise<{ tripId: string }> }) {
  return (
    <>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/trips" className="hover:text-foreground">My Trips</Link>
        <span>/</span>
        <span className="text-foreground">Pacific Coast Highway</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pacific Coast Highway</h1>
          <p className="mt-1 text-sm text-muted-foreground">Mar 5-12, 2026 &middot; 8 stops &middot; 650 miles</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Share
          </button>
          <Link href="/planner" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
            Edit Trip
          </Link>
        </div>
      </div>

      {/* Trip Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {[
          { label: "Distance", value: "650 mi" },
          { label: "Drive Time", value: "12h 30m" },
          { label: "Stops", value: "8" },
          { label: "Duration", value: "3 days" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Itinerary */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Itinerary</h2>
        <div className="mt-4 space-y-3">
          {stops.map((stop, i) => (
            <div key={stop.num} className="relative flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                  i === 0 ? "bg-success" : i === stops.length - 1 ? "bg-destructive" : "bg-primary"
                }`}>
                  {stop.num}
                </div>
                {i < stops.length - 1 && <div className="mt-1 h-full w-0.5 bg-border" />}
              </div>

              {/* Stop Card */}
              <div className="mb-3 flex-1 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{stop.name}</h3>
                    <p className="text-sm text-muted-foreground">{stop.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{stop.day}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{stop.time}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{stop.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

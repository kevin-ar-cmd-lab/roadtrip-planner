const notifications = [
  {
    id: 1,
    title: "Trip Reminder",
    message: "Your Pacific Coast Highway trip starts in 3 days. Make sure everything is ready!",
    time: "2 hours ago",
    read: false,
    type: "reminder",
  },
  {
    id: 2,
    title: "Collaboration Invite",
    message: "Alex invited you to collaborate on 'Southwest Canyon Tour'. Click to view the trip.",
    time: "5 hours ago",
    read: false,
    type: "invite",
  },
  {
    id: 3,
    title: "Trip Updated",
    message: "Sarah added 2 new stops to 'Route 66 Adventure'. Check out the updated itinerary.",
    time: "1 day ago",
    read: true,
    type: "update",
  },
  {
    id: 4,
    title: "New Feature",
    message: "Offline maps are now available! Download your trip routes for offline navigation.",
    time: "2 days ago",
    read: true,
    type: "feature",
  },
  {
    id: 5,
    title: "Weekly Summary",
    message: "You planned 2 trips and saved 5 new locations this week. Keep exploring!",
    time: "3 days ago",
    read: true,
    type: "summary",
  },
];

const typeIcons: Record<string, string> = {
  reminder: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  invite: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  update: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  feature: "M13 10V3L4 14h7v7l9-11h-7z",
  summary: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
};

export default function NotificationsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="mt-1 text-sm text-muted-foreground">Stay up to date with your trip activity.</p>
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary-dark">
          Mark all as read
        </button>
      </div>

      <div className="mt-8 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex gap-4 rounded-xl border p-5 transition-colors ${
              notification.read
                ? "border-border bg-card"
                : "border-primary/20 bg-primary/5"
            }`}
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              notification.read ? "bg-muted" : "bg-primary/10"
            }`}>
              <svg className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={typeIcons[notification.type]} />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h3 className={`text-sm font-semibold ${notification.read ? "text-foreground" : "text-primary"}`}>
                  {notification.title}
                </h3>
                <span className="ml-4 shrink-0 text-xs text-muted-foreground">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
            </div>
            {!notification.read && (
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProfilePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Profile</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your personal information and preferences.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Avatar Section */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
              JD
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">Jane Doe</h2>
            <p className="text-sm text-muted-foreground">jane@example.com</p>
            <p className="mt-2 text-xs text-muted-foreground">Member since Jan 2025</p>
            <button className="mt-4 w-full rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              Change avatar
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Travel Stats</h3>
            <div className="mt-4 space-y-3">
              {[
                { label: "Trips completed", value: "8" },
                { label: "Total miles", value: "12,450" },
                { label: "States visited", value: "14" },
                { label: "Saved locations", value: "38" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="text-sm font-medium text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
            <form className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground">First name</label>
                  <input id="firstName" type="text" defaultValue="Jane" className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground">Last name</label>
                  <input id="lastName" type="text" defaultValue="Doe" className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input id="email" type="email" defaultValue="jane@example.com" className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-foreground">Bio</label>
                <textarea id="bio" rows={3} defaultValue="Road trip enthusiast and adventure seeker." className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground">Location</label>
                <input id="location" type="text" defaultValue="San Francisco, CA" className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function BillingPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your subscription and payment methods.</p>

      {/* Current Plan */}
      <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">Pro Plan</h2>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Active</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">$9/month &middot; Renews on March 15, 2026</p>
          </div>
          <div className="flex gap-3">
            <Link href="/pricing" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              Change Plan
            </Link>
            <button className="rounded-lg border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/5">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Payment Method */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Payment Method</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-dark">Update</button>
          </div>
          <div className="mt-4 flex items-center gap-4 rounded-lg border border-border p-4">
            <div className="flex h-10 w-14 items-center justify-center rounded bg-muted text-xs font-bold text-muted-foreground">
              VISA
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Visa ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2027</p>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Usage This Month</h2>
          <div className="mt-4 space-y-4">
            {[
              { label: "Trips created", used: 8, limit: "Unlimited" },
              { label: "Collaborators", used: 3, limit: "5" },
              { label: "Storage", used: 45, limit: "100 MB", unit: "MB" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">{item.used}{item.unit ? ` ${item.unit}` : ""} / {item.limit}</span>
                </div>
                {item.limit !== "Unlimited" && (
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${(item.used / parseInt(item.limit)) * 100}%` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Billing History</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {[
                { date: "Feb 15, 2026", desc: "Pro Plan - Monthly", amount: "$9.00", status: "Paid" },
                { date: "Jan 15, 2026", desc: "Pro Plan - Monthly", amount: "$9.00", status: "Paid" },
                { date: "Dec 15, 2025", desc: "Pro Plan - Monthly", amount: "$9.00", status: "Paid" },
              ].map((invoice, i) => (
                <tr key={i} className="hover:bg-muted/30">
                  <td className="px-6 py-4 text-sm text-muted-foreground">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{invoice.desc}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">Reset your password</h1>
        <p className="mt-2 text-sm text-muted-foreground">Enter your new password below.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground">New password</label>
            <input
              id="password"
              type="password"
              required
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter new password"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">Must be at least 8 characters.</p>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">Confirm new password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Confirm new password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Reset password
          </button>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link href="/login" className="font-medium text-primary hover:text-primary-dark">Back to sign in</Link>
      </p>
    </div>
  );
}

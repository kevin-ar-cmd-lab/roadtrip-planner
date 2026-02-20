import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="/planner" className="text-sm text-muted-foreground hover:text-foreground">Trip Planner</Link></li>
              <li><Link href="/map" className="text-sm text-muted-foreground hover:text-foreground">Map</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Account</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Log in</Link></li>
              <li><Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">Sign up</Link></li>
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} RoadTrip Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual trip planners.",
    features: [
      "Up to 3 trips",
      "Basic route planning",
      "Community points of interest",
      "Share trips via link",
    ],
    cta: "Get Started",
    href: "/register",
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For frequent travelers and road trip enthusiasts.",
    features: [
      "Unlimited trips",
      "Advanced route optimization",
      "Offline trip access",
      "Custom waypoint categories",
      "Collaboration with up to 5 people",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/register",
    featured: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For travel groups and organizations.",
    features: [
      "Everything in Pro",
      "Unlimited collaborators",
      "Team trip library",
      "Admin controls & permissions",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">Choose the plan that fits your adventure style.</p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 ${
              tier.featured
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border bg-card"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-foreground">{tier.price}</span>
              <span className="text-muted-foreground">{tier.period}</span>
            </div>
            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                tier.featured
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

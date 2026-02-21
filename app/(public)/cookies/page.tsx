import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">What Are Cookies</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Cookies are small text files that are placed on your device when you visit a website. They are widely
              used to make websites work efficiently and to provide information to site owners. RoadTrip Planner
              uses cookies and similar technologies to deliver a better experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">How We Use Cookies</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We use different types of cookies for the following purposes:
            </p>

            <div className="mt-6 space-y-6">
              {[
                {
                  type: "Essential Cookies",
                  description:
                    "Required for the basic functionality of our platform. These cookies enable core features like user authentication, session management, and security. They cannot be disabled.",
                  examples: "Session tokens, CSRF protection, load balancing",
                },
                {
                  type: "Functional Cookies",
                  description:
                    "Help us remember your preferences and settings to enhance your experience. These cookies allow features like remembering your preferred map view, language, and trip display settings.",
                  examples: "Language preferences, map zoom level, theme settings",
                },
                {
                  type: "Analytics Cookies",
                  description:
                    "Help us understand how visitors interact with our platform. We use this data to improve our services, identify popular features, and fix usability issues.",
                  examples: "Page views, feature usage, navigation patterns",
                },
                {
                  type: "Marketing Cookies",
                  description:
                    "Used to track visitors across websites to display relevant advertisements. We may use these cookies to measure the effectiveness of our advertising campaigns.",
                  examples: "Ad tracking, campaign attribution, retargeting",
                },
              ].map((cookie) => (
                <div key={cookie.type} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{cookie.type}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-6">{cookie.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Examples:</span> {cookie.examples}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Cookies</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Some cookies are placed by third-party services that appear on our pages. We use trusted
              third-party providers for mapping, analytics, and payment processing. These providers may set
              their own cookies according to their privacy policies.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Map tile providers for rendering interactive maps",
                "Analytics services for understanding usage patterns",
                "Payment processors for secure transaction handling",
                "Authentication providers for social login features",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Managing Cookies</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              You can control and manage cookies in several ways:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Browser settings: Most browsers allow you to block or delete cookies through their settings menu",
                "Opt-out tools: Many analytics and advertising providers offer opt-out mechanisms",
                "Device settings: Mobile devices provide options to limit ad tracking",
                "Our preferences: You can manage non-essential cookies through your account settings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground leading-7">
              Please note that disabling certain cookies may affect the functionality of our platform and limit
              your ability to use some features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Updates to This Policy</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We may update this cookie policy to reflect changes in our practices or for operational, legal,
              or regulatory reasons. We encourage you to review this page periodically for the latest
              information on our cookie practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              If you have questions about our use of cookies, please visit our{" "}
              <Link href="/contact" className="text-primary hover:text-primary-dark underline">
                contact page
              </Link>
              .
            </p>
          </section>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href="/privacy-policy" className="text-primary hover:text-primary-dark underline">
                Privacy Policy
              </Link>
              {" "}&middot;{" "}
              <Link href="/terms-of-service" className="text-primary hover:text-primary-dark underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

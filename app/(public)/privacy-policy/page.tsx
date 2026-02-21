import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Welcome to RoadTrip Planner. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you use our
              road trip planning platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We collect information that you provide directly to us, as well as data generated through your use
              of our services.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Account information: name, email address, and password when you create an account",
                "Trip data: routes, waypoints, saved locations, and itinerary details you create",
                "Profile information: profile picture, preferences, and settings you configure",
                "Payment information: billing details processed securely through our payment providers",
                "Usage data: how you interact with our services, including pages visited and features used",
                "Device information: browser type, operating system, and device identifiers",
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
            <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We use the information we collect to provide, maintain, and improve our services. This includes:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Creating and managing your account and trip plans",
                "Providing route planning, mapping, and navigation features",
                "Processing payments and managing subscriptions",
                "Sending service updates, security alerts, and support messages",
                "Analyzing usage patterns to improve our platform",
                "Personalizing your experience with relevant recommendations",
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
            <h2 className="text-2xl font-semibold text-foreground">4. Data Sharing</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We do not sell your personal data. We may share your information only in the following circumstances:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "With service providers who assist in operating our platform (hosting, analytics, payments)",
                "When you share trips or collaborate with other users through our sharing features",
                "To comply with legal obligations, court orders, or government requests",
                "To protect the rights, safety, and security of RoadTrip Planner and our users",
                "In connection with a merger, acquisition, or sale of assets (with prior notice)",
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
            <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We implement industry-standard security measures to protect your data, including encryption in
              transit and at rest, regular security audits, and access controls. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Access: Request a copy of the personal data we hold about you",
                "Correction: Request correction of inaccurate or incomplete data",
                "Deletion: Request deletion of your personal data",
                "Portability: Request a copy of your data in a portable format",
                "Opt-out: Unsubscribe from marketing communications at any time",
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
            <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We retain your personal data for as long as your account is active or as needed to provide our
              services. If you delete your account, we will remove your personal data within 30 days, except
              where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">8. Children&apos;s Privacy</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              RoadTrip Planner is not intended for children under the age of 13. We do not knowingly collect
              personal data from children. If we become aware that a child has provided us with personal data,
              we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We may update this privacy policy from time to time. We will notify you of any material changes
              by posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              If you have any questions about this privacy policy or our data practices, please contact us
              through our{" "}
              <Link href="/contact" className="text-primary hover:text-primary-dark underline">
                contact page
              </Link>
              .
            </p>
          </section>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href="/terms-of-service" className="text-primary hover:text-primary-dark underline">
                Terms of Service
              </Link>
              {" "}&middot;{" "}
              <Link href="/cookies" className="text-primary hover:text-primary-dark underline">
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

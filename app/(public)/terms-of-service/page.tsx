import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              By accessing or using RoadTrip Planner, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you may not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              RoadTrip Planner provides a web-based platform for planning, organizing, and sharing road trip
              itineraries. Our services include route planning, interactive maps, trip collaboration, saved
              locations, and related features available through free and paid subscription plans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              To access certain features, you must create an account. You are responsible for:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Providing accurate and complete registration information",
                "Maintaining the security and confidentiality of your account credentials",
                "All activities that occur under your account",
                "Notifying us immediately of any unauthorized use of your account",
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
            <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              You agree not to use RoadTrip Planner to:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Violate any applicable laws, regulations, or third-party rights",
                "Upload or transmit malicious code, viruses, or harmful content",
                "Attempt to gain unauthorized access to our systems or other users' accounts",
                "Scrape, crawl, or collect data from our platform without written consent",
                "Use our services for any illegal, fraudulent, or misleading purposes",
                "Interfere with or disrupt the integrity or performance of our services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              The RoadTrip Planner platform, including its design, code, features, and content, is owned by us
              and protected by intellectual property laws. You retain ownership of the content you create
              (trip plans, notes, photos) but grant us a license to host and display it as necessary to
              provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Subscriptions & Payments</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Paid features are available through subscription plans. By subscribing, you agree to:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Pay all fees associated with your chosen plan",
                "Automatic renewal at the end of each billing cycle unless cancelled",
                "Provide accurate and up-to-date payment information",
                "Price changes will be communicated at least 30 days in advance",
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
              Refunds are available within 14 days of initial purchase. Cancellations take effect at the end
              of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">7. Disclaimers</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              RoadTrip Planner is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We make no
              warranties, express or implied, regarding the accuracy of route data, distance estimates, travel
              times, or point-of-interest information. Always verify critical travel details independently and
              exercise caution when driving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              To the maximum extent permitted by law, RoadTrip Planner shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of data, revenue, or
              profits, arising from your use of our services. Our total liability shall not exceed the amount
              you paid us in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">9. Termination</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We reserve the right to suspend or terminate your account if you violate these terms. You may
              delete your account at any time from your settings page. Upon termination, your right to use
              our services ceases immediately, though certain provisions of these terms survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">10. Governing Law</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              These terms are governed by and construed in accordance with applicable laws. Any disputes
              arising from these terms or your use of our services shall be resolved through binding
              arbitration, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              We may update these terms from time to time. We will notify users of material changes via email
              or a prominent notice on our platform. Continued use of our services after changes take effect
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">12. Contact</h2>
            <p className="mt-4 text-muted-foreground leading-7">
              If you have questions about these terms, please reach out through our{" "}
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

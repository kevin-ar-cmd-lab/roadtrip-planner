"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is RoadTrip Planner free to use?",
    answer: "Yes! Our Free plan lets you create up to 3 trips with basic route planning features. For unlimited trips and advanced features, check out our Pro and Team plans.",
  },
  {
    question: "Can I use RoadTrip Planner offline?",
    answer: "Pro and Team subscribers can download their trip plans for offline access. This includes route details, stop information, and notes you've added to your itinerary.",
  },
  {
    question: "How do I share a trip with friends?",
    answer: "You can share any trip by generating a share link from the trip detail page. Collaborators with accounts can edit the trip, while anyone with the link can view it.",
  },
  {
    question: "Can I import routes from Google Maps?",
    answer: "Yes, you can import routes by pasting a Google Maps URL or uploading a KML/GPX file. We'll automatically convert it into an editable trip plan.",
  },
  {
    question: "How accurate are the distance and time estimates?",
    answer: "Our estimates are based on current road data and typical driving conditions. Actual times may vary based on traffic, weather, and road closures.",
  },
  {
    question: "Can I plan trips for multiple vehicles or groups?",
    answer: "With the Team plan, you can manage trips across multiple groups with separate itineraries that share common waypoints and meeting points.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Annual subscriptions are available for additional savings.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime from your billing settings page. Your access continues until the end of your current billing period with no additional charges.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about RoadTrip Planner.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-base font-medium text-foreground">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <h2 className="text-lg font-semibold text-foreground">Still have questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Our support team is happy to help.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

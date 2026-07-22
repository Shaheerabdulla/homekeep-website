import type { Metadata } from "next";
import PlumbingContent from "@/components/pages/services/plumbing";

export const metadata: Metadata = {
  title: "Plumber Doha Qatar | Emergency Plumbing Services",
  description:
    "Emergency & residential plumbing in Doha, Pearl Qatar & Lusail. Leak repair, drain unblocking, fixtures. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/services/plumbing" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Services Qatar",
    provider: {
      "@type": "LocalBusiness",
      name: "Homekeep Qatar",
      telephone: "+97450306582",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Doha",
        addressCountry: "QA",
      },
    },
    areaServed: ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
    description:
      "Professional residential plumbing services in Doha, Pearl Qatar, Lusail and West Bay. Emergency plumber, leak repair, fixture installation, and drain clearing.",
    serviceType: "Plumbing Services",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we provide emergency plumbing response across Doha, Pearl Qatar, Lusail, West Bay, and Simaisma. For burst pipes, flooding, or major leaks, call +974 50306582 immediately.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can a plumber arrive in Pearl Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For emergencies in Pearl Qatar, Lusail, and West Bay, we aim to dispatch a plumber within a few hours. Response times vary by urgency and time of day.",
        },
      },
      {
        "@type": "Question",
        name: "Do you fix leaking pipes inside walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we use acoustic leak detection equipment to locate pipes leaking inside walls or under floors without unnecessary cutting. Once located, we repair the leak with minimal disruption to your finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install bathroom fixtures in my villa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We install all types of bathroom and kitchen fixtures including designer toilets, freestanding baths, rain showers, and premium tap fittings — familiar with the high-spec installations common in Pearl Qatar and Lusail villas.",
        },
      },
      {
        "@type": "Question",
        name: "Do you unblock drains in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we clear blocked drains throughout Qatar using professional drain rods and high-pressure water jetting equipment. We handle kitchen sinks, bathrooms, floor drains, and external drain connections.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <PlumbingContent />
    </>
  );
}

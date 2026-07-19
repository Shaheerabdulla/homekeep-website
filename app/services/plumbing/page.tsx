import type { Metadata } from "next";
import PlumbingContent from "@/components/pages/services/plumbing";

export const metadata: Metadata = {
  title: "Plumber Doha Qatar | Emergency Plumbing Services Pearl Qatar",
  description:
    "Emergency and residential plumbing services in Doha, Pearl Qatar, Lusail and West Bay. Leak repair, drain unblocking, fixture installation, and water heater service. Call +974 50306582.",
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
          text: "Yes — we provide emergency plumbing services across Doha, Pearl Qatar, Lusail, and West Bay. For burst pipes, severe leaks, or flooding, call +974 50306582 immediately for rapid response.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a full range of residential plumbing services in Qatar including leak detection and repair, pipe replacement, bathroom and kitchen fixture installation, water heater service, drain unblocking, and preventative plumbing maintenance for villas.",
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

import type { Metadata } from "next";
import SwimmingPoolMaintenanceContent from "@/components/pages/services/swimming-pool-maintenance";

export const metadata: Metadata = {
  title: "Swimming Pool Maintenance Qatar | Pool Service",
  description:
    "Pool cleaning, water balancing & filter servicing for Qatar villas. AMC from QAR 2,500/yr. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/services/swimming-pool-maintenance" },
  keywords: [
    "swimming pool maintenance Qatar",
    "pool maintenance Doha",
    "pool service Pearl Qatar",
    "pool cleaning Qatar",
    "pool water balancing Qatar",
    "pool pump repair Doha",
    "villa pool maintenance Qatar",
    "pool AMC Qatar",
  ],
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swimming Pool Maintenance Qatar",
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
      "Professional swimming pool maintenance, water balancing, filter servicing, and pump repair for villas in Doha, Pearl Qatar, Lusail, West Bay and Simaisma Qatar.",
    serviceType: "Swimming Pool Maintenance",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should a villa pool be serviced in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Qatar's climate, a villa pool should receive a professional service visit at minimum once a month. During peak summer (May–September) when temperatures exceed 40°C, bi-weekly visits are recommended as high UV and heat rapidly deplete chlorine and accelerate algae growth.",
        },
      },
      {
        "@type": "Question",
        name: "What does a standard pool service visit include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard Homekeep pool service visit includes: water chemistry testing and balancing (pH, chlorine, alkalinity, calcium hardness), pool brushing and vacuuming, skimmer and pump basket cleaning, filter backwash or inspection, and a visual equipment check.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my pool water turn green in Qatar summer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Green water is algae bloom caused by chlorine depletion — extremely common in Qatar summer when high UV and heat rapidly burn off free chlorine. The fix is a shock treatment followed by algaecide, thorough brushing, and then re-establishing a proper maintenance schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service pools in Pearl Qatar and Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we service villa pools throughout Pearl Qatar, Lusail, West Bay, Simaisma, and all Doha residential areas. We also offer scheduled monthly AMC contracts for consistent pool care.",
        },
      },
      {
        "@type": "Question",
        name: "How much does pool maintenance cost in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard monthly service visit starts from QAR 400. Annual Maintenance Contracts start from QAR 2,500 per year and include monthly visits, chemistry consumables, and priority emergency response. Contact us for a quote based on your pool size and location.",
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
      <SwimmingPoolMaintenanceContent />
    </>
  );
}

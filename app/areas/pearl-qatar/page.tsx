import type { Metadata } from "next";
import PearlQatarContent from "@/components/pages/areas/pearl-qatar";

export const metadata: Metadata = {
  title: "AC Service Pearl Qatar | FCU & AHU Servicing",
  description:
    "AC, FCU, AHU, chiller & plumbing service for Pearl Qatar villas. Same/next-day response. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/areas/pearl-qatar" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services Pearl Qatar",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/pearl-qatar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pearl Qatar",
      addressRegion: "Doha",
      addressCountry: "QA",
    },
    areaServed: "Pearl Qatar",
    description:
      "AC service, FCU servicing, AHU maintenance, chiller care, and plumbing for villas in Pearl Qatar.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in Pearl Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep provides AC and HVAC services throughout Pearl Qatar. We cover FCU servicing, AHU maintenance, chiller care, and plumbing for villas and compounds. We operate 7 days a week with same/next-day availability.",
        },
      },
      {
        "@type": "Question",
        name: "How much does FCU servicing cost in Pearl Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCU servicing in Pearl Qatar starts from QAR 225 per unit for a full service and clean. Chemical deep clean starts from QAR 320 per unit. We always confirm the final price before starting work.",
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
      <PearlQatarContent />
    </>
  );
}

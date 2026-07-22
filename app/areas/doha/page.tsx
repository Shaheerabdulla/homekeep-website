import type { Metadata } from "next";
import DohaContent from "@/components/pages/areas/doha";

export const metadata: Metadata = {
  title: "AC Service Doha Qatar | HVAC & Plumbing",
  description:
    "AC, AHU, FCU, chiller & plumbing service for Doha villas and apartments. Same/next-day response. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/areas/doha" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services Doha",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/doha",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    areaServed: ["Doha", "Al Waab", "Al Rayyan", "Ain Khaled", "Madinat Khalifa", "Al Gharrafa", "Wakra"],
    description:
      "AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing for villas and apartments across Doha, Qatar.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep covers all AC, AHU, FCU, chiller, and plumbing servicing across Doha. We serve all neighbourhoods including Al Waab, Madinat Khalifa, Al Gharrafa, Al Rayyan, Ain Khaled, Muaither, and Wakra, 7 days a week.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC service in Doha starts from QAR 150 per split unit. FCU servicing starts from QAR 225 per unit. AHU servicing starts from QAR 700. We always confirm pricing before starting work — no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day AC repair in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer same-day and next-day AC repair across Doha. For emergency AC failures, call +974 50306582 or WhatsApp +974 50002548. AMC customers receive priority dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I service my AC in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend servicing every 3 months in Qatar's climate. Doha's dusty environment clogs filters and coils faster than cooler climates. Quarterly servicing maintains cooling performance, reduces electricity consumption, and prevents breakdowns.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Al Wakra and Al Rayyan for AC service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — our coverage extends to Al Wakra, Al Rayyan, Muaither, Abu Hamour, and surrounding areas. We service the entire Greater Doha region. Contact us to confirm availability for your specific location.",
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
      <DohaContent />
    </>
  );
}

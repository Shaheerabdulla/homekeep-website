import type { Metadata } from "next";
import DohaContent from "@/components/pages/areas/doha";

export const metadata: Metadata = {
  title: "AC Service Doha Qatar | AHU FCU & Chiller Maintenance Doha",
  description:
    "AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing for villas and apartments across Doha Qatar. Same/next-day response. From QAR 150. Call +974 50306582.",
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
          text: "Homekeep provides AC service, AHU maintenance, FCU servicing, chiller maintenance, and plumbing across all Doha neighbourhoods including Al Waab, Madinat Khalifa, Al Gharrafa, Al Rayyan, Ain Khaled, and Wakra. Call +974 50306582 or WhatsApp +974 50002548.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC service in Doha starts from QAR 150 per split unit for a standard service and clean. FCU units start from QAR 225 per unit. AHU servicing starts from QAR 700. We confirm the exact price before starting work.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day AC repair in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Homekeep offers same-day and next-day AC repair across Doha. For emergencies, call +974 50306582 or WhatsApp +974 50002548. AMC customers receive priority same-day dispatch.",
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

import type { Metadata } from "next";
import SimaismaContent from "@/components/pages/areas/simaisma";

export const metadata: Metadata = {
  title: "AC Service Simaisma Qatar | Split AC Repair",
  description:
    "Split AC repair, anti-corrosion treatment & plumbing for Simaisma villas. Coastal specialists. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/areas/simaisma" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services Simaisma",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/simaisma",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Simaisma",
      addressRegion: "Doha",
      addressCountry: "QA",
    },
    areaServed: "Simaisma",
    description:
      "AC service, split AC repair, chiller maintenance, and plumbing for beachfront villas and residential properties in Simaisma, Qatar.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in Simaisma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep provides AC service, split AC repair, and plumbing for villas in Simaisma. We cover beachfront and inland properties. Call +974 50306582 or WhatsApp +974 50002548.",
        },
      },
      {
        "@type": "Question",
        name: "Why do AC units corrode faster in Simaisma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simaisma's coastal location means AC outdoor units are exposed to salt-laden sea air, which accelerates corrosion of condenser coils, fins, and casings. Regular servicing and anti-corrosion coil treatment extends unit life significantly.",
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
      <SimaismaContent />
    </>
  );
}

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
          text: "Homekeep provides AC service, split AC repair, and plumbing across Simaisma. We cover beachfront villas, weekend retreats, and residential compounds throughout the area, 7 days a week.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my AC corrode faster in Simaisma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simaisma's coastal location exposes AC outdoor units to salt-laden sea air, which rapidly corrodes condenser coils, aluminium fins, and steel casings. We apply anti-corrosion coil coating as part of our Simaisma service to significantly extend unit life.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in Simaisma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC service in Simaisma starts from QAR 150 per split unit. Coastal deep clean with anti-corrosion treatment starts from QAR 250 per unit. We recommend the full coastal treatment for beachfront properties.",
        },
      },
      {
        "@type": "Question",
        name: "Can you service my Simaisma villa when I'm not there?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we can coordinate with your caretaker or property manager to access and service your villa. Many Simaisma villa owners arrange this for weekend properties they don't visit regularly. We send a report and photos after every visit.",
        },
      },
      {
        "@type": "Question",
        name: "How often should AC units be serviced in Simaisma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We strongly recommend every 3 months for Simaisma coastal properties. The combination of heavy usage in Qatar's summer heat and salt air corrosion means AC units in Simaisma degrade faster than inland. Quarterly servicing under an AMC is the most cost-effective approach.",
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

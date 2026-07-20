import type { Metadata } from "next";
import WestBayContent from "@/components/pages/areas/west-bay";

export const metadata: Metadata = {
  title: "AC Service West Bay Doha | FCU Servicing",
  description:
    "AC, FCU & AHU maintenance plus plumbing for West Bay apartments and villas. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/areas/west-bay" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services West Bay",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/west-bay",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Bay",
      addressRegion: "Doha",
      addressCountry: "QA",
    },
    areaServed: "West Bay",
    description:
      "AC service, FCU servicing, AHU maintenance, and plumbing for apartments and villas in West Bay, Doha.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in West Bay Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep provides AC service, FCU servicing, AHU maintenance, and plumbing in West Bay Doha. We cover all residential towers and villa compounds in the area. Call +974 50306582 or WhatsApp +974 50002548.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service AC units in West Bay apartments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we service AC and FCU units in West Bay residential apartments and hotel apartments. We can coordinate with building management for tower access. FCU servicing starts from QAR 225 per unit.",
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
      <WestBayContent />
    </>
  );
}

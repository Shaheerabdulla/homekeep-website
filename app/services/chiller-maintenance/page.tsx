import type { Metadata } from "next";
import ChillerMaintenanceContent from "@/components/pages/services/chiller-maintenance";

export const metadata: Metadata = {
  title: "Chiller Maintenance Qatar | Residential Chiller Service",
  description:
    "Chiller servicing, condenser cleaning & fault diagnosis for Qatar villas. AMC contracts available. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/services/chiller-maintenance" },
  keywords: [
    "chiller maintenance Qatar",
    "chiller maintenance Doha",
    "residential chiller service Qatar",
    "chiller repair Pearl Qatar",
    "chiller servicing Lusail",
    "chiller maintenance Simaisma",
    "chiller AMC Qatar",
    "chiller service Doha",
  ],
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chiller Maintenance Qatar",
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
      "Professional residential chiller maintenance, servicing, and repair for villas in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
    serviceType: "Chiller Maintenance",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What type of chiller systems do you maintain in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain air-cooled and water-cooled residential chillers from all major manufacturers including Carrier, York, Trane, McQuay, Daikin, and Climaveneta — commonly found in large villas in Pearl Qatar, Lusail, and West Bay.",
        },
      },
      {
        "@type": "Question",
        name: "How often should a residential chiller be serviced in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quarterly preventative maintenance visits are recommended for residential chillers in Qatar. Full annual overhauls — including tube cleaning and complete refrigerant system checks — should be done once yearly, ideally before summer.",
        },
      },
      {
        "@type": "Question",
        name: "What are warning signs of chiller problems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Warning signs include rooms not cooling adequately, unusual noises from the chiller plant room, increased electricity consumption, frequent tripping, water temperature alarms, or ice forming on any part of the chiller.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service chillers in Pearl Qatar villas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — chiller maintenance in Pearl Qatar is a core part of our business. The large compound and standalone villas in The Pearl, Porto Arabia, and Viva Bahriyah frequently feature standalone residential chiller plants that we are specialists in maintaining.",
        },
      },
      {
        "@type": "Question",
        name: "Can you provide an annual maintenance contract for my chiller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer customized Annual Maintenance Contracts for residential chillers in Qatar, including regular scheduled visits, spare parts management, and 24/7 emergency priority response.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ChillerMaintenanceContent />
    </>
  );
}

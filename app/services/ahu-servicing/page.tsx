import type { Metadata } from "next";
import AhuServicingContent from "@/components/pages/services/ahu-servicing";

export const metadata: Metadata = {
  title: "AHU Servicing Qatar | Air Handling Unit Maintenance",
  description:
    "Professional AHU servicing for villas in Doha, Pearl Qatar & Lusail. Same-day response. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/services/ahu-servicing" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AHU Servicing Qatar",
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
      "Professional Air Handling Unit (AHU) servicing and maintenance for villas and residences in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
    serviceType: "AHU Servicing",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AHU and why does it need servicing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Air Handling Unit (AHU) is the heart of your ducted central air conditioning system. It conditions, filters, and circulates air throughout your villa. In Qatar's dusty, humid environment, AHUs accumulate dust, bacteria, and mold on coils and in drain pans — making regular servicing essential for healthy air quality and efficient cooling.",
        },
      },
      {
        "@type": "Question",
        name: "How often should AHU servicing be done in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every 3–6 months is recommended for residential AHUs in Qatar. The country's dust levels and near-continuous AC operation means filters and coils foul faster than elsewhere. Quarterly servicing is ideal for villas in Pearl Qatar and Lusail.",
        },
      },
      {
        "@type": "Question",
        name: "What are signs my AHU needs servicing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reduced cooling in certain rooms, musty or stale air smells, visible dust from vents, increased electricity bills, water leaks from the unit, or unusual noises are all signs your AHU needs attention.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service AHUs in Pearl Qatar villas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we regularly service AHUs in The Pearl Qatar, Lusail, West Bay, and Simaisma. Many of the large villas in these areas have multi-zone AHU systems that we are fully equipped to service.",
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
      <AhuServicingContent />
    </>
  );
}

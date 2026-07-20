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
        name: "What is an AHU and why does it need servicing in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Air Handling Unit (AHU) is the central component of a ducted HVAC system that conditions and circulates air throughout your villa. In Qatar's dusty environment, AHUs require regular servicing — typically every 3–6 months — to maintain air quality, prevent bacterial growth in coils, and ensure efficient cooling.",
        },
      },
      {
        "@type": "Question",
        name: "How often should AHU servicing be done in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend AHU servicing every 3 to 6 months in Qatar due to the high dust and humidity levels. Regular maintenance prevents coil fouling, blocked drain pans, and poor air quality inside the home.",
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

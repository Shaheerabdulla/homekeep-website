import type { Metadata } from "next";
import AcServiceContent from "@/components/pages/services/ac-service";

export const metadata: Metadata = {
  title: "AC Service Qatar | AC Repair Doha | Split AC & Ducted Maintenance | Homekeep",
  description:
    "AC service in Qatar and Doha for villas and apartments. Split AC cleaning, ducted system maintenance, refrigerant top-up and 24/7 emergency AC repair in Pearl Qatar, Lusail, West Bay & Simaisma. From QAR 150. Call +974 50306582.",
  alternates: { canonical: "https://homekeep.qa/services/ac-service" },
  keywords: [
    "AC service Qatar",
    "AC service Doha",
    "AC repair Qatar",
    "AC repair Doha",
    "air conditioning service Qatar",
    "emergency AC repair Doha",
    "split AC service Qatar",
    "AC maintenance Pearl Qatar",
    "ducted AC service Qatar",
  ],
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AC Service and Repair Doha Qatar",
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
      "Professional residential AC repair, service, installation and maintenance in Doha, Pearl Qatar, Lusail and West Bay. 24/7 emergency AC service available.",
    serviceType: "Air Conditioning Service",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you respond to an AC breakdown in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer rapid emergency response across Doha, Pearl Qatar, Lusail and West Bay. For emergencies, we aim to dispatch a technician within hours of your call.",
        },
      },
      {
        "@type": "Question",
        name: "What types of AC systems do you service in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We service all residential AC types including split AC units, cassette ACs, ducted systems, VRF/VRV systems, and window units across Qatar.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer AC maintenance contracts in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer annual maintenance contracts (AMCs) for residential AC systems in Qatar, covering scheduled servicing, filter cleaning, refrigerant checks and priority emergency response.",
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
      <AcServiceContent />
    </>
  );
}

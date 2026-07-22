import type { Metadata } from "next";
import AcServiceContent from "@/components/pages/services/ac-service";

export const metadata: Metadata = {
  title: "AC Service & Repair Qatar | Split & Ducted AC",
  description:
    "Split & ducted AC service and repair in Qatar. Cleaning, refrigerant top-up, 24/7 emergency repair. From QAR 150. Call +974 5000 2548.",
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
        name: "How often should I service my AC in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Qatar's harsh climate, we recommend AC servicing every 3–4 months. The high dust levels and continuous usage mean filters and coils clog faster than in temperate countries. Quarterly servicing extends unit lifespan and keeps electricity bills low.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you respond to an AC breakdown in Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For emergency no-cooling situations, we aim to dispatch a technician the same day — often within hours. We cover Pearl Qatar, Lusail, West Bay, and central Doha as priority response zones.",
        },
      },
      {
        "@type": "Question",
        name: "What AC brands do you service in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We service all major brands available in Qatar including Daikin, LG, Samsung, Carrier, York, Midea, Haier, Gree, Mitsubishi, and Hitachi, among others.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer AC maintenance contracts for villas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — our Annual Maintenance Contracts (AMCs) are popular with villa owners in Pearl Qatar and Lusail. They include scheduled quarterly visits, emergency priority, and discounted parts.",
        },
      },
      {
        "@type": "Question",
        name: "Can you top up gas/refrigerant for my AC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our technicians carry equipment for R22, R32, and R410A refrigerant top-ups. We also check for leaks before recharging to ensure the fix is permanent.",
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

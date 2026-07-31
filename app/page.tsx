import type { Metadata } from "next";
import HomeContent from "@/components/pages/home";

export const metadata: Metadata = {
  title: "AC Service, FCU & Chiller Maintenance Qatar | Homekeep Qatar",
  description:
    "Qatar's trusted AC, FCU, chiller & plumbing specialists. Same/next-day service for villas in Pearl Qatar, Lusail, West Bay & Simaisma. Call +974 5000 2548.",
  alternates: { canonical: "https://www.homekeep.qa/" },
  keywords: [
    "AC service Qatar",
    "AC service Doha",
    "FCU servicing Qatar",
    "chiller maintenance Qatar",
    "AC repair Qatar",
    "AC repair Doha",
    "AHU servicing Qatar",
    "plumbing Doha",
  ],
  openGraph: {
    title: "AC Service, FCU & Chiller Maintenance Qatar | Homekeep Qatar",
    description:
      "Expert AC service, FCU servicing, chiller maintenance and plumbing for villas in Qatar. Pearl Qatar, Lusail, West Bay & Doha. Call +974 50002548.",
    url: "https://www.homekeep.qa/",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Improvements",
    telephone: "+97450002548",
    url: "https://www.homekeep.qa",
    logo: "https://www.homekeep.qa/homekeep-logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    areaServed: [
      "Doha",
      "Pearl Qatar",
      "Lusail",
      "West Bay",
      "Simaisma"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Homekeep Improvements",
    url: "https://www.homekeep.qa",
    logo: "https://www.homekeep.qa/homekeep-logo.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97450002548",
      contactType: "customer service",
      areaServed: "QA",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Homekeep HVAC and Maintenance Services Qatar",
    itemListElement: [
      {
        "@type": "Service",
        name: "AC Service Qatar",
        url: "https://www.homekeep.qa/services/ac-service"
      },
      {
        "@type": "Service",
        name: "FCU Servicing Qatar",
        url: "https://www.homekeep.qa/services/fcu-servicing"
      },
      {
        "@type": "Service",
        name: "AHU Servicing Qatar",
        url: "https://www.homekeep.qa/services/ahu-servicing"
      },
      {
        "@type": "Service",
        name: "Chiller Maintenance Qatar",
        url: "https://www.homekeep.qa/services/chiller-maintenance"
      },
      {
        "@type": "Service",
        name: "Plumbing Services Qatar",
        url: "https://www.homekeep.qa/services/plumbing"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer emergency AC repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we prioritize emergency no-cooling situations, especially during summer. Our rapid response team can be dispatched quickly to Pearl Qatar, Lusail, and West Bay.",
        },
      },
      {
        "@type": "Question",
        name: "Are your technicians certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our technicians are trained to handle residential HVAC systems including FCU, AHU, VRF and central chiller systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide annual maintenance contracts (AMCs)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Homekeep provides annual maintenance contracts for villas and apartments covering AC, HVAC and plumbing systems.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Doha, Pearl Qatar, Lusail, West Bay, Simaisma and surrounding areas across Qatar.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <HomeContent />
    </>
  );
}

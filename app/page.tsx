import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import HomeContent from "@/components/pages/home";

export const metadata = generatePageMetadata({
  title: "Homekeep Qatar | Premium AC Service, FCU & Villa Maintenance",
  description: "Qatar's leading HVAC, FCU chemical cleaning, chiller maintenance & plumbing experts for Pearl Qatar, Lusail, West Bay & Doha.",
  path: "/",
});

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "HVACContractor",
    "@id": "https://www.homekeep.qa/#organization",
    "name": "Homekeep Qatar",
    "telephone": "+97450002548",
    "url": "https://www.homekeep.qa",
    "logo": "https://www.homekeep.qa/homekeep-logo.jpg",
    "image": "https://www.homekeep.qa/opengraph.jpg",
    "priceRange": "QAR 150 - QAR 1500",
    "description": "Qatar's trusted AC, FCU, chiller & plumbing specialists. Same/next-day service for villas in Pearl Qatar, Lusail, West Bay & Simaisma.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "QA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2854",
      "longitude": "51.5310"
    },
    "areaServed": [
      "Doha",
      "Pearl Qatar",
      "Lusail",
      "West Bay",
      "Simaisma",
      "Al Waab",
      "Ain Khaled",
      "Al Rayyan",
      "Al Wakra"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Homekeep HVAC and Maintenance Services Qatar",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AC Service Qatar",
          "url": "https://www.homekeep.qa/services/ac-service"
        },
        "price": "150.00",
        "priceCurrency": "QAR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FCU Servicing Qatar",
          "url": "https://www.homekeep.qa/services/fcu-servicing"
        },
        "price": "225.00",
        "priceCurrency": "QAR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AHU Servicing Qatar",
          "url": "https://www.homekeep.qa/services/ahu-servicing"
        },
        "price": "700.00",
        "priceCurrency": "QAR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chiller Maintenance Qatar",
          "url": "https://www.homekeep.qa/services/chiller-maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Services Qatar",
          "url": "https://www.homekeep.qa/services/plumbing"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer emergency AC repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we prioritize emergency no-cooling situations, especially during summer. Our rapid response team can be dispatched quickly to Pearl Qatar, Lusail, and West Bay."
        }
      },
      {
        "@type": "Question",
        "name": "Are your technicians certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our technicians are trained to handle residential HVAC systems including FCU, AHU, VRF and central chiller systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide annual maintenance contracts (AMCs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Homekeep provides annual maintenance contracts for villas and apartments covering AC, HVAC and plumbing systems."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Doha, Pearl Qatar, Lusail, West Bay, Simaisma, Al Waab, Ain Khaled, Al Rayyan, and Al Wakra."
        }
      }
    ]
  }
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

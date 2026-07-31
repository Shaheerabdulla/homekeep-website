import { generatePageMetadata } from "@/lib/metadata";
import HomeContent from "@/components/pages/home";

export const metadata = generatePageMetadata({
  title:
    "AC Service Qatar | FCU Cleaning, Chiller Maintenance & Villa AMC | Homekeep",
  description:
    "24/7 AC service in Qatar for villas and apartments. Specialists in FCU chemical cleaning, AHU servicing, chiller maintenance and HVAC AMC in Doha, Pearl Qatar, Lusail and West Bay.",
  path: "/",
});

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": "https://www.homekeep.qa/#organization",

    "name": "Homekeep Improvements",
    "url": "https://www.homekeep.qa",

    "logo": "https://www.homekeep.qa/homekeep-logo.jpg",
    "image": "https://www.homekeep.qa/opengraph.jpg",

    "telephone": "+97450002548",

    "priceRange": "QAR 150 - QAR 1500",

    "description":
      "AC repair, FCU cleaning, AHU servicing, chiller maintenance and HVAC annual maintenance contracts in Qatar.",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 1, Building 317, Street 250",
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

    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+97450002548",
      "contactType": "customer service",
      "availableLanguage": [
        "English",
        "Arabic"
      ],
      "url": "https://wa.me/97450002548"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Homekeep HVAC Services Qatar",

    "itemListElement": [
      {
        "@type": "Service",
        "name": "AC Service Qatar",
        "url": "https://www.homekeep.qa/services/ac-service"
      },
      {
        "@type": "Service",
        "name": "FCU Servicing Qatar",
        "url": "https://www.homekeep.qa/services/fcu-servicing"
      },
      {
        "@type": "Service",
        "name": "AHU Maintenance Qatar",
        "url": "https://www.homekeep.qa/services/ahu-servicing"
      },
      {
        "@type": "Service",
        "name": "Chiller Maintenance Qatar",
        "url": "https://www.homekeep.qa/services/chiller-maintenance"
      },
      {
        "@type": "Service",
        "name": "Plumbing Services Qatar",
        "url": "https://www.homekeep.qa/services/plumbing"
      }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.homekeep.qa/"
      }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide AC repair in Qatar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Homekeep provides AC repair, FCU servicing and HVAC maintenance for villas, apartments and commercial properties across Doha, Pearl Qatar and Lusail."
        }
      },

      {
        "@type": "Question",
        "name": "Do you service FCU and chiller systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Homekeep specializes in FCU chemical cleaning, AHU maintenance, chilled water systems and chiller maintenance."
        }
      },

      {
        "@type": "Question",
        "name": "Do you provide annual maintenance contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Homekeep offers annual maintenance contracts covering AC, HVAC, plumbing and villa maintenance services."
        }
      },

      {
        "@type": "Question",
        "name": "Which areas in Qatar do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We cover Doha, Pearl Qatar, Lusail, West Bay, Simaisma, Al Waab, Ain Khaled, Al Rayyan and Al Wakra."
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema)
        }}
      />

      <HomeContent />
    </>
  );
}

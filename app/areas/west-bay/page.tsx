import { generatePageMetadata } from "@/lib/metadata";
import WestBayContent from "@/components/pages/areas/west-bay";

export const metadata = generatePageMetadata({
  title: "AC Service West Bay Doha | FCU & HVAC Maintenance",
  description:
    "Professional AC service in West Bay Doha for apartments, towers and commercial properties. Homekeep provides FCU cleaning, AHU servicing, HVAC maintenance, plumbing and emergency AC repair.",
  path: "/areas/west-bay",
  type: "website",
});

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": "https://www.homekeep.qa/areas/west-bay#business",
    "name": "Homekeep Improvements West Bay",
    "url": "https://www.homekeep.qa/areas/west-bay",
    "telephone": "+97450002548",
    "image": "https://www.homekeep.qa/opengraph.jpg",
    "description":
      "AC repair, FCU servicing, AHU maintenance and HVAC services for West Bay apartments, towers and commercial properties in Doha.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West Bay",
      "addressRegion": "Doha",
      "addressCountry": "QA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3242",
      "longitude": "51.5281"
    },
    "areaServed": [
      "West Bay",
      "Diplomatic Area",
      "Dafna",
      "Onaiza",
      "West Bay Lagoon"
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "QAR",
      "price": "150",
      "url": "https://www.homekeep.qa/services/ac-service"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who provides AC service in West Bay Doha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Homekeep provides AC repair, FCU servicing, AHU maintenance and HVAC solutions for West Bay apartments, residential towers and commercial properties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service FCU units in West Bay towers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, FCU cleaning and maintenance are major services we provide for West Bay high-rise apartments and buildings with chilled water systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide HVAC AMC contracts in West Bay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Homekeep provides annual maintenance contracts for AC, FCU, AHU and HVAC systems for residential and commercial properties."
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
          __html: JSON.stringify(schemas)
        }}
      />

      <WestBayContent />
    </>
  );
}

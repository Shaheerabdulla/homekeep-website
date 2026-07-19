import type { Metadata } from "next";
import LusailContent from "@/components/pages/areas/lusail";

export const metadata: Metadata = {
  title: "AC Service Lusail | AHU & FCU Servicing Lusail City",
  description:
    "AC service, AHU servicing, FCU cleaning, and plumbing for villas and apartments in Lusail City Qatar. Same/next-day response. From QAR 150. Call +974 50306582.",
  alternates: { canonical: "https://homekeep.qa/areas/lusail" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services Lusail",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/lusail",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lusail",
      addressRegion: "Doha",
      addressCountry: "QA",
    },
    areaServed: "Lusail",
    description:
      "AC service, FCU servicing, AHU maintenance, and plumbing for villas and apartments in Lusail City, Qatar.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep provides AC service, AHU maintenance, FCU servicing, and plumbing across Lusail City. We cover all Lusail districts including Fox Hills, Al Erkyah, Waterfront, Marina, and Energy City. Call +974 50306582.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC service in Lusail starts from QAR 150 per split unit. FCU servicing starts from QAR 225 per unit. We provide exact quotes before starting any work.",
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
      <LusailContent />
    </>
  );
}

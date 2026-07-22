import type { Metadata } from "next";
import LusailContent from "@/components/pages/areas/lusail";

export const metadata: Metadata = {
  title: "AC Service Lusail City | HVAC & Plumbing",
  description:
    "AC, AHU & FCU servicing plus plumbing for Lusail City villas. Same/next-day response. Call +974 5000 2548.",
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
          text: "Homekeep covers all AC, AHU, FCU, and plumbing servicing across Lusail City. We serve all districts including Fox Hills, Al Erkyah, Waterfront, Marina District, and Energy City, 7 days a week.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC servicing in Lusail starts from QAR 150 per split unit for a full clean and check. FCU units start from QAR 225. AHU servicing starts from QAR 700. We confirm the exact price before starting work.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve Fox Hills and Al Erkyah in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover every district in Lusail including Fox Hills, Al Erkyah, Lusail Waterfront, Marina District, and Energy City. We also serve the villa compounds and residential towers throughout the city.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I service my AC in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend quarterly servicing in Qatar's climate. Lusail's ongoing construction means higher dust levels in some areas, which can block filters and coils faster. Quarterly servicing prevents performance loss and extends system life.",
        },
      },
      {
        "@type": "Question",
        name: "Can you do emergency AC repair in Lusail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer emergency AC repair across Lusail. Call +974 50306582 or WhatsApp +974 50002548 for a same-day response. AMC customers receive priority dispatch.",
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

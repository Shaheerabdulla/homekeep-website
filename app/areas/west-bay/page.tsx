import type { Metadata } from "next";
import WestBayContent from "@/components/pages/areas/west-bay";

export const metadata: Metadata = {
  title: "AC Service West Bay Doha | FCU Servicing",
  description:
    "AC, FCU & AHU maintenance plus plumbing for West Bay apartments and villas. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/areas/west-bay" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar — AC & HVAC Services West Bay",
    telephone: "+97450306582",
    url: "https://homekeep.qa/areas/west-bay",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Bay",
      addressRegion: "Doha",
      addressCountry: "QA",
    },
    areaServed: "West Bay",
    description:
      "AC service, FCU servicing, AHU maintenance, and plumbing for apartments and villas in West Bay, Doha.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who does AC service in West Bay Doha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homekeep covers AC, FCU, AHU, and plumbing servicing throughout West Bay. We work in residential towers, hotel apartments, and executive apartments, and can coordinate with building management for access.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AC service cost in West Bay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCU servicing in West Bay starts from QAR 225 per unit. Split AC servicing starts from QAR 150 per unit. We confirm the final price before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Can you access my West Bay tower for servicing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we're experienced with West Bay tower access procedures. We can contact your building management or security desk in advance to arrange technician access. Just let us know your building name when you book.",
        },
      },
      {
        "@type": "Question",
        name: "How often should FCUs be serviced in a West Bay apartment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend quarterly FCU servicing in Qatar's climate. West Bay towers are tightly sealed with heavy AC usage, which means coils and drain pans accumulate debris quickly. Quarterly cleaning maintains air quality and prevents drain blockages.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do emergency AC repair in West Bay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer emergency AC and FCU repair across West Bay. Call or WhatsApp us for a same/next-day appointment. AMC customers receive priority same-day dispatch.",
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
      <WestBayContent />
    </>
  );
}

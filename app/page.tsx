import type { Metadata } from "next";
import HomeContent from "@/components/pages/home";

export const metadata: Metadata = {
  title: "AC Service, FCU & Chiller Maintenance Qatar | Homekeep Qatar",
  description:
    "Qatar's trusted AC, FCU, chiller & plumbing specialists. Same/next-day service for villas in Pearl Qatar, Lusail, West Bay & Simaisma. Call +974 5000 2548.",
  alternates: { canonical: "https://homekeep.qa/" },
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
      "Expert AC service, FCU servicing, chiller maintenance and plumbing for villas in Qatar. Pearl Qatar, Lusail, West Bay & Doha. Call +974 50306582.",
    url: "https://homekeep.qa/",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Homekeep Qatar",
    telephone: "+97450306582",
    url: "https://homekeep.qa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
    },
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
          text: "Absolutely. All our technicians undergo rigorous training and are certified to handle complex HVAC systems, including central chillers and VRF systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide annual maintenance contracts (AMCs)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer tailored annual maintenance contracts for villas and apartments to keep your AC and plumbing systems running efficiently year-round.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve all premium residential communities in Qatar, with focused rapid response in The Pearl Qatar, Lusail City, West Bay, and Simaisma.",
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

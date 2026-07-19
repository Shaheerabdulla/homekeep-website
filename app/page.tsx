import type { Metadata } from "next";
import HomeContent from "@/components/pages/home";

export const metadata: Metadata = {
  title: "AC Service Qatar & Doha | FCU Servicing | Chiller Maintenance | Homekeep",
  description:
    "Qatar's trusted home maintenance specialists. AC service & repair in Qatar and Doha, FCU servicing, chiller maintenance, AHU repair, and plumbing for villas in Pearl Qatar, Lusail, West Bay & Simaisma. Same/next-day response. Call +974 50306582.",
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
    title: "AC Service Qatar & Doha | FCU Servicing | Chiller Maintenance | Homekeep",
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
      ratingValue: "4.9",
      reviewCount: "63",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer emergency AC repair in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we prioritize emergency no-cooling situations, especially during summer. Our rapid response team can be dispatched quickly to Pearl Qatar, Lusail, and West Bay.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you serve in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all premium residential communities in Qatar, with focused rapid response in The Pearl Qatar, Lusail City, West Bay, and Simaisma.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer annual maintenance contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer tailored annual maintenance contracts for villas and apartments to keep your AC and plumbing systems running efficiently year-round.",
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

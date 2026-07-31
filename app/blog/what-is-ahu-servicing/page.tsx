import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import WhatIsAhuServicing from "@/components/pages/blog/what-is-ahu-servicing";

export const metadata = generatePageMetadata({
  title: "What Is AHU Servicing? Does My Qatar Villa Need It?",
  description: "What is an AHU (Air Handling Unit), does your Qatar villa have one, and what does AHU servicing include? Complete guide for Doha, Pearl Qatar, and Lusail homeowners.",
  path: "/blog/what-is-ahu-servicing",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is AHU Servicing and Does My Villa Need It?",
  datePublished: "2025-04-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "What is an AHU (Air Handling Unit)? Does your Qatar villa have one? What does AHU servicing include? Complete guide for Doha homeowners.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/what-is-ahu-servicing",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhatIsAhuServicing />
    </>
  );
}

import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ChillerVsSplitAcQatar from "@/components/pages/blog/chiller-vs-split-ac-qatar";

export const metadata = generatePageMetadata({
  title: "Chiller vs Split AC in Qatar: What",
  description: "Chiller-fed FCU or split AC? Many Qatar villa owners don",
  path: "/blog/chiller-vs-split-ac-qatar",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chiller vs Split AC: Which System Is in Your Qatar Villa?",
  datePublished: "2026-03-05",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Chiller or split AC? Many Qatar villa owners don't know which system they have or what it means for maintenance. This guide explains the difference, the pros and cons, and the maintenance requirements for each.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/chiller-vs-split-ac-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ChillerVsSplitAcQatar />
    </>
  );
}

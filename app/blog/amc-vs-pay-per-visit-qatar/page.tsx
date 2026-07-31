import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import AmcVsPayPerVisitQatar from "@/components/pages/blog/amc-vs-pay-per-visit-qatar";

export const metadata = generatePageMetadata({
  title: "AMC vs Pay-Per-Visit: Which Saves More in Qatar?",
  description: "A real cost comparison between Annual Maintenance Contracts and pay-per-visit AC servicing in Qatar, plus when each option makes more sense.",
  path: "/blog/amc-vs-pay-per-visit-qatar",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AMC vs Pay-Per-Visit: Which Saves More in Qatar?",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "A real cost comparison between Annual Maintenance Contracts and pay-per-visit AC servicing in Qatar, plus when each option makes more sense.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/amc-vs-pay-per-visit-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AmcVsPayPerVisitQatar />
    </>
  );
}

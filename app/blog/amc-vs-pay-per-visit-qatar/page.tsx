import type { Metadata } from "next";
import AmcVsPayPerVisitQatar from "@/components/pages/blog/amc-vs-pay-per-visit-qatar";

export const metadata: Metadata = {
  title: "AMC vs Pay-Per-Visit: Which Saves More in Qatar?",
  description:
    "A real cost comparison between Annual Maintenance Contracts and pay-per-visit AC servicing in Qatar, plus when each option makes more sense.",
  alternates: { canonical: "https://homekeep.qa/blog/amc-vs-pay-per-visit-qatar" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AMC vs Pay-Per-Visit: Which Saves More in Qatar?",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "A real cost comparison between Annual Maintenance Contracts and pay-per-visit AC servicing in Qatar, plus when each option makes more sense.",
  mainEntityOfPage: "https://homekeep.qa/blog/amc-vs-pay-per-visit-qatar",
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

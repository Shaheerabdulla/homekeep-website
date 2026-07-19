import type { Metadata } from "next";
import AmcWorthItQatar from "@/components/pages/blog/amc-worth-it-qatar";

export const metadata: Metadata = {
  title: "Is an AC Annual Maintenance Contract Worth It in Qatar?",
  description:
    "AMC vs pay-as-you-go AC servicing in Qatar — we break down the real numbers for a typical Doha villa. Is an Annual Maintenance Contract worth it? Honest analysis.",
  alternates: { canonical: "https://homekeep.qa/blog/amc-worth-it-qatar" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is an Annual Maintenance Contract Worth It in Qatar?",
  datePublished: "2025-03-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "Is an AC Annual Maintenance Contract (AMC) worth it in Qatar? We break down the real numbers for a typical Doha villa and compare AMC vs pay-as-you-go servicing.",
  mainEntityOfPage: "https://homekeep.qa/blog/amc-worth-it-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AmcWorthItQatar />
    </>
  );
}

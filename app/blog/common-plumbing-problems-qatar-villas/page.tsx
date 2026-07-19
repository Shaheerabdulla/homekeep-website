import type { Metadata } from "next";
import CommonPlumbingProblemsQatarVillas from "@/components/pages/blog/common-plumbing-problems-qatar-villas";

export const metadata: Metadata = {
  title: "Common Plumbing Problems in Qatar Villas — Prevention Guide",
  description:
    "The most common plumbing problems in Qatar villas: slab leaks, hot water failure, low pressure, hard water damage. Prevention tips and when to call a plumber in Doha and Pearl Qatar.",
  alternates: {
    canonical: "https://homekeep.qa/blog/common-plumbing-problems-qatar-villas",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Common Plumbing Problems in Qatar Villas — and How to Prevent Them",
  datePublished: "2026-04-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "The most common plumbing problems in Qatar villas: hot water failure, slab leaks, low pressure, blocked drains, and hard water damage. Prevention tips for Pearl Qatar and Doha homeowners.",
  mainEntityOfPage: "https://homekeep.qa/blog/common-plumbing-problems-qatar-villas",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CommonPlumbingProblemsQatarVillas />
    </>
  );
}

import type { Metadata } from "next";
import PrepareAcQatarSummer2026 from "@/components/pages/blog/prepare-ac-qatar-summer-2026";

export const metadata: Metadata = {
  title: "How to Prepare Your AC for Qatar Summer 2026 | Homekeep Checklist",
  description:
    "Qatar summer 2026 AC preparation checklist. What to service, when to book, and how to avoid a breakdown in peak heat. Expert guide for Pearl Qatar, Lusail, and Doha villas.",
  alternates: { canonical: "https://homekeep.qa/blog/prepare-ac-qatar-summer-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Prepare Your AC for Qatar Summer 2026",
  datePublished: "2026-02-10",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "Qatar summer 2026 AC preparation checklist. What to service before June, how to avoid breakdown in peak heat, and when to book your pre-summer AC service in Doha and Pearl Qatar.",
  mainEntityOfPage: "https://homekeep.qa/blog/prepare-ac-qatar-summer-2026",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PrepareAcQatarSummer2026 />
    </>
  );
}

import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import RamadanMaintenanceChecklistQatar from "@/components/pages/blog/ramadan-maintenance-checklist-qatar";

export const metadata = generatePageMetadata({
  title: "Ramadan Home Maintenance Checklist for Qatar Villas",
  description: "Prepare your Qatar villa",
  path: "/blog/ramadan-maintenance-checklist-qatar",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ramadan Home Maintenance Checklist for Qatar Villas",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Prepare your Qatar villa's AC, plumbing, and pool for Ramadan hosting — a pre-Ramadan maintenance checklist for villa owners.",
  mainEntityOfPage: "https://homekeep.qa/blog/ramadan-maintenance-checklist-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RamadanMaintenanceChecklistQatar />
    </>
  );
}

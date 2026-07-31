import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import PearlQatarVillaMaintenanceChecklist2026 from "@/components/pages/blog/pearl-qatar-villa-maintenance-checklist-2026";

export const metadata = generatePageMetadata({
  title: "Pearl Qatar Villa Maintenance Checklist 2026",
  description: "Complete 2026 maintenance checklist for Pearl Qatar villas. Quarterly FCU service, annual chiller checks, plumbing inspections, and seasonal tasks to protect your property.",
  path: "/blog/pearl-qatar-villa-maintenance-checklist-2026",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pearl Qatar Villa Maintenance Checklist 2026",
  datePublished: "2026-05-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Complete 2026 maintenance checklist for Pearl Qatar villas. AC, FCU, chiller, plumbing, and seasonal tasks to protect your investment and stay comfortable year-round.",
  mainEntityOfPage:
    "https://www.homekeep.qa/blog/pearl-qatar-villa-maintenance-checklist-2026",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PearlQatarVillaMaintenanceChecklist2026 />
    </>
  );
}

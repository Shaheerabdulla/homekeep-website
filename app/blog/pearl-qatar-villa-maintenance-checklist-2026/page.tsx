import type { Metadata } from "next";
import PearlQatarVillaMaintenanceChecklist2026 from "@/components/pages/blog/pearl-qatar-villa-maintenance-checklist-2026";

export const metadata: Metadata = {
  title: "Pearl Qatar Villa Maintenance Checklist 2026",
  description:
    "Complete 2026 maintenance checklist for Pearl Qatar villas. Quarterly FCU service, annual chiller checks, plumbing inspections, and seasonal tasks to protect your property.",
  alternates: {
    canonical: "https://homekeep.qa/blog/pearl-qatar-villa-maintenance-checklist-2026",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pearl Qatar Villa Maintenance Checklist 2026",
  datePublished: "2026-05-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "Complete 2026 maintenance checklist for Pearl Qatar villas. AC, FCU, chiller, plumbing, and seasonal tasks to protect your investment and stay comfortable year-round.",
  mainEntityOfPage:
    "https://homekeep.qa/blog/pearl-qatar-villa-maintenance-checklist-2026",
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

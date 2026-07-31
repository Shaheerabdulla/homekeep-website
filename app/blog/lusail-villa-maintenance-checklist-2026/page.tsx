import type { Metadata } from "next";
import LusailVillaMaintenanceChecklist2026 from "@/components/pages/blog/lusail-villa-maintenance-checklist-2026";

export const metadata: Metadata = {
  title: "Lusail Villa Maintenance Checklist 2026",
  description:
    "Complete 2026 maintenance checklist for Lusail villas. Quarterly, biannual, and annual tasks tailored to Lusail's ongoing construction and dust levels.",
  alternates: { canonical: "https://www.homekeep.qa/blog/lusail-villa-maintenance-checklist-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lusail Villa Maintenance Checklist 2026",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Complete 2026 maintenance checklist for Lusail villas. Quarterly, biannual, and annual tasks tailored to Lusail's ongoing construction and dust levels.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/lusail-villa-maintenance-checklist-2026",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LusailVillaMaintenanceChecklist2026 />
    </>
  );
}

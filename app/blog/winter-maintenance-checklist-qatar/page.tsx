import type { Metadata } from "next";
import WinterMaintenanceChecklistQatar from "@/components/pages/blog/winter-maintenance-checklist-qatar";

export const metadata: Metadata = {
  title: "Winter Maintenance Checklist for Qatar Villas",
  description:
    "Why winter is the ideal time to service your AC, chiller, and plumbing in Qatar — get ahead of the summer rush with this checklist.",
  alternates: { canonical: "https://www.homekeep.qa/blog/winter-maintenance-checklist-qatar" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Winter Maintenance Checklist for Qatar Villas",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Why winter is the ideal time to service your AC, chiller, and plumbing in Qatar — get ahead of the summer rush with this checklist.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/winter-maintenance-checklist-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WinterMaintenanceChecklistQatar />
    </>
  );
}

import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import WaterHeaterMaintenanceQatar from "@/components/pages/blog/water-heater-maintenance-qatar";

export const metadata = generatePageMetadata({
  title: "Water Heater Maintenance in Qatar Villas",
  description: "Why water heaters fail faster in Qatar, signs of sediment buildup, and how often to service your tank. A guide for Qatar villa owners.",
  path: "/blog/water-heater-maintenance-qatar",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Water Heater Maintenance in Qatar: What Villa Owners Should Know",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "Why water heaters fail faster in Qatar, signs of sediment buildup, and how often to service your tank. A guide for Qatar villa owners.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/water-heater-maintenance-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WaterHeaterMaintenanceQatar />
    </>
  );
}

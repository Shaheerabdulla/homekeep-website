import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import WestBayApartmentAcMaintenance from "@/components/pages/blog/west-bay-apartment-ac-maintenance";

export const metadata = generatePageMetadata({
  title: "West Bay Apartment AC Maintenance Guide",
  description: "How AC maintenance differs for West Bay towers — FCU systems, building access coordination, and how often to service apartment units.",
  path: "/blog/west-bay-apartment-ac-maintenance",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "West Bay Apartment AC Maintenance Guide",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "How AC maintenance differs for West Bay towers — FCU systems, building access coordination, and how often to service apartment units.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/west-bay-apartment-ac-maintenance",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WestBayApartmentAcMaintenance />
    </>
  );
}

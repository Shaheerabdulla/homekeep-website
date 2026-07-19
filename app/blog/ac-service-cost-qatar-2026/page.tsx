import type { Metadata } from "next";
import AcServiceCostQatar2026 from "@/components/pages/blog/ac-service-cost-qatar-2026";

export const metadata: Metadata = {
  title: "AC Service Cost in Qatar 2026 — Full Price Guide",
  description:
    "How much does AC servicing cost in Qatar in 2026? Prices for split AC, FCU, AHU, and chiller maintenance in Doha, Pearl Qatar, and Lusail. Compare Homekeep's transparent rates.",
  alternates: { canonical: "https://homekeep.qa/blog/ac-service-cost-qatar-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AC Service Cost in Qatar 2026 — What to Expect",
  datePublished: "2026-01-15",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "How much does AC servicing cost in Qatar in 2026? Full price breakdown for split AC service, FCU cleaning, AHU service, and chiller maintenance in Doha, Pearl Qatar, and Lusail.",
  mainEntityOfPage: "https://homekeep.qa/blog/ac-service-cost-qatar-2026",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AcServiceCostQatar2026 />
    </>
  );
}

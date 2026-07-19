import type { Metadata } from "next";
import PricingContent from "@/components/pages/pricing";

export const metadata: Metadata = {
  title: "AC Service Prices Qatar | HVAC & Plumbing Pricing Doha",
  description:
    "Transparent pricing for AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing in Doha Qatar. Starting prices from QAR 150. Call +974 50306582 for a quote.",
  alternates: { canonical: "https://homekeep.qa/pricing" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Service Pricing Qatar",
  provider: {
    "@type": "LocalBusiness",
    name: "Homekeep Qatar",
    telephone: "+97450306582",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
  },
  areaServed: ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  description:
    "Transparent pricing for AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing services in Qatar.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricingContent />
    </>
  );
}

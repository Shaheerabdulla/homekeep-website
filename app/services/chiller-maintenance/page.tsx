import type { Metadata } from "next";
import ChillerMaintenanceContent from "@/components/pages/services/chiller-maintenance";

export const metadata: Metadata = {
  title: "Chiller Maintenance Qatar | Residential Chiller Service Doha & Pearl Qatar | Homekeep",
  description:
    "Residential chiller maintenance in Qatar. Chiller servicing, condenser cleaning, fault diagnosis and emergency chiller repair for villas in Pearl Qatar, Lusail, Simaisma and Doha. Preventative AMC contracts available. Call +974 50306582.",
  alternates: { canonical: "https://homekeep.qa/services/chiller-maintenance" },
  keywords: [
    "chiller maintenance Qatar",
    "chiller maintenance Doha",
    "residential chiller service Qatar",
    "chiller repair Pearl Qatar",
    "chiller servicing Lusail",
    "chiller maintenance Simaisma",
    "chiller AMC Qatar",
    "chiller service Doha",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chiller Maintenance Qatar",
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
    "Professional residential chiller maintenance, servicing, and repair for villas in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
  serviceType: "Chiller Maintenance",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ChillerMaintenanceContent />
    </>
  );
}

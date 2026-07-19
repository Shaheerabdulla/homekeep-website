import type { Metadata } from "next";
import FcuServicingContent from "@/components/pages/services/fcu-servicing";

export const metadata: Metadata = {
  title: "FCU Servicing Qatar | Fan Coil Unit Service Doha & Pearl Qatar | Homekeep",
  description:
    "FCU servicing across Qatar — fan coil unit cleaning, coil chemical wash, drain pan service and filter replacement for villas in Pearl Qatar, Lusail, West Bay and Doha. Eliminate odours, prevent water leaks, restore cooling. From QAR 225. Call +974 50306582.",
  alternates: { canonical: "https://homekeep.qa/services/fcu-servicing" },
  keywords: [
    "FCU servicing Qatar",
    "FCU services Doha",
    "fan coil unit service Qatar",
    "FCU cleaning Pearl Qatar",
    "fan coil unit maintenance Doha",
    "FCU chemical clean Qatar",
    "FCU service Lusail",
    "FCU servicing West Bay",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FCU Servicing Qatar",
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
    "Professional Fan Coil Unit (FCU) servicing and maintenance for villas and apartments in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
  serviceType: "FCU Servicing",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FcuServicingContent />
    </>
  );
}

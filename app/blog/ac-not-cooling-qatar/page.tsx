import type { Metadata } from "next";
import AcNotCoolingQatar from "@/components/pages/blog/ac-not-cooling-qatar";

export const metadata: Metadata = {
  title: "AC Not Cooling in Qatar Summer? What to Check First",
  description:
    "AC running but not cooling in Qatar? Check these 6 common causes before calling a technician. Some fixes take 5 minutes — others need a professional. Qatar-specific guide.",
  alternates: { canonical: "https://homekeep.qa/blog/ac-not-cooling-qatar" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AC Not Cooling in Qatar Summer — What to Check First",
  datePublished: "2025-05-15",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "AC not cooling in Qatar? Before calling a technician, check these common causes: dirty filters, low refrigerant, blocked condenser, thermostat settings, and outdoor unit issues.",
  mainEntityOfPage: "https://homekeep.qa/blog/ac-not-cooling-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AcNotCoolingQatar />
    </>
  );
}

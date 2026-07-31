import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import AcNotCoolingQatar from "@/components/pages/blog/ac-not-cooling-qatar";

export const metadata = generatePageMetadata({
  title: "AC Not Cooling in Qatar Summer? What to Check First",
  description: "AC running but not cooling in Qatar? Check these 6 common causes before calling a technician. Some fixes take 5 minutes — others need a professional. Qatar-specific guide.",
  path: "/blog/ac-not-cooling-qatar",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AC Not Cooling in Qatar Summer — What to Check First",
  datePublished: "2025-05-15",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
  description:
    "AC not cooling in Qatar? Before calling a technician, check these common causes: dirty filters, low refrigerant, blocked condenser, thermostat settings, and outdoor unit issues.",
  mainEntityOfPage: "https://www.homekeep.qa/blog/ac-not-cooling-qatar",
};

export default function Page() {
    const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://www.homekeep.qa/blog/ac-not-cooling-qatar#article",
    "headline": "Why Is My AC Not Cooling in Qatar? (Troubleshooting & Fixes)",
    "description": "Troubleshooting guide for AC units not cooling in Qatar homes. Learn common causes like dirty FCU filters, low refrigerant gas, and outdoor unit dust buildup.",
    "image": "https://www.homekeep.qa/blog/ac-not-cooling-qatar.jpg",
    "datePublished": "2026-05-15T08:00:00+03:00",
    "dateModified": "2026-07-20T10:30:00+03:00",
    "author": {
      "@type": "Organization",
      "name": "Homekeep Qatar Technical Team",
      "url": "https://www.homekeep.qa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Homekeep Qatar",
      "url": "https://www.homekeep.qa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.homekeep.qa/homekeep-logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.homekeep.qa/blog/ac-not-cooling-qatar"
    }
  };

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

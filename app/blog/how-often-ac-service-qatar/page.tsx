import type { Metadata } from "next";
import HowOftenAcServiceQatar from "@/components/pages/blog/how-often-ac-service-qatar";

export const metadata: Metadata = {
  title: "How Often Should You Service Your AC in Qatar?",
  description:
    "How often should you service your AC in Qatar? Expert advice on AC service frequency, signs of a dirty unit, and why quarterly servicing is essential in Qatar's climate.",
  alternates: { canonical: "https://homekeep.qa/blog/how-often-ac-service-qatar" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Often Should You Service Your AC in Qatar?",
  datePublished: "2025-06-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "How often should you service your AC in Qatar? Expert advice on AC service frequency, signs of a dirty unit, and why quarterly servicing is essential in Qatar's climate.",
  mainEntityOfPage: "https://homekeep.qa/blog/how-often-ac-service-qatar",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HowOftenAcServiceQatar />
    </>
  );
}

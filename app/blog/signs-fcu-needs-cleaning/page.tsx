import type { Metadata } from "next";
import SignsFcuNeedsCleaning from "@/components/pages/blog/signs-fcu-needs-cleaning";

export const metadata: Metadata = {
  title: "5 Signs Your FCU Unit Needs Cleaning | Qatar Villa Guide",
  description:
    "5 warning signs your FCU unit needs cleaning: water dripping, musty smell, weak airflow, ice on coils, and rising electricity bills. Qatar villa guide from Homekeep.",
  alternates: { canonical: "https://homekeep.qa/blog/signs-fcu-needs-cleaning" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Signs Your FCU Unit Needs Cleaning Right Now",
  datePublished: "2025-05-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "5 warning signs your FCU fan coil unit needs cleaning: water dripping, musty smell, weak airflow, ice on coils, and rising electricity bills. Qatar villa guide.",
  mainEntityOfPage: "https://homekeep.qa/blog/signs-fcu-needs-cleaning",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SignsFcuNeedsCleaning />
    </>
  );
}

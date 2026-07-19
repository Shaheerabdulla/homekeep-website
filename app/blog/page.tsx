import type { Metadata } from "next";
import BlogIndexContent from "@/components/pages/blog/index";

export const metadata: Metadata = {
  title: "AC & HVAC Maintenance Blog Qatar | Homekeep Tips & Advice",
  description:
    "Expert advice on AC service frequency, FCU cleaning signs, AHU maintenance, and home HVAC care in Qatar. Practical tips for Pearl Qatar, Lusail, West Bay and Doha homeowners.",
  alternates: { canonical: "https://homekeep.qa/blog" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Homekeep AC & HVAC Maintenance Blog Qatar",
  description:
    "Expert advice on AC service, AHU maintenance, FCU servicing, and home maintenance in Qatar.",
  url: "https://homekeep.qa/blog",
  publisher: {
    "@type": "LocalBusiness",
    name: "Homekeep Qatar",
    telephone: "+97450306582",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogIndexContent />
    </>
  );
}

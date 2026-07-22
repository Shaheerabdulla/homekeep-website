import type { Metadata } from "next";
import SignsYouNeedAPlumberQatarVilla from "@/components/pages/blog/signs-you-need-a-plumber-qatar-villa";

export const metadata: Metadata = {
  title: "Signs You Need a Plumber in Your Qatar Villa",
  description:
    "Low water pressure, slab leaks, water heater issues — warning signs Qatar villa owners shouldn't ignore, and when to call a plumber.",
  alternates: { canonical: "https://homekeep.qa/blog/signs-you-need-a-plumber-qatar-villa" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Signs You Need a Plumber in Your Qatar Villa",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450306582" },
  description:
    "Low water pressure, slab leaks, water heater issues — warning signs Qatar villa owners shouldn't ignore, and when to call a plumber.",
  mainEntityOfPage: "https://homekeep.qa/blog/signs-you-need-a-plumber-qatar-villa",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SignsYouNeedAPlumberQatarVilla />
    </>
  );
}

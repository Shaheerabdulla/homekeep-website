import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import SignsYouNeedAPlumberQatarVilla from "@/components/pages/blog/signs-you-need-a-plumber-qatar-villa";

export const metadata = generatePageMetadata({
  title: "Signs You Need a Plumber in Your Qatar Villa",
  description: "Low water pressure, slab leaks, water heater issues — warning signs Qatar villa owners shouldn",
  path: "/blog/signs-you-need-a-plumber-qatar-villa",
  type: "article",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Signs You Need a Plumber in Your Qatar Villa",
  datePublished: "2026-07-01",
  author: { "@type": "Organization", name: "Homekeep Qatar" },
  publisher: { "@type": "Organization", name: "Homekeep Qatar", telephone: "+97450002548" },
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

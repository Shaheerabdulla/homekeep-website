import type { Metadata } from "next";
import AmcContent from "@/components/pages/amc";

export const metadata: Metadata = {
  title: "AC AMC Qatar | Annual Maintenance Contract Doha",
  description:
    "Annual Maintenance Contracts (AMC) for AC, AHU, FCU, chiller and plumbing in Qatar. Residential villa AMC packages from QAR 2,000/year. Priority response, zero call-out fees. Call +974 50306582.",
  alternates: { canonical: "https://homekeep.qa/amc" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Annual Maintenance Contract Qatar",
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
      "Annual Maintenance Contracts (AMC) for AC, AHU, FCU, chiller and plumbing services in Qatar. Residential villa and apartment AMC packages in Doha.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AMC for AC in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Annual Maintenance Contract (AMC) for AC in Qatar is a yearly service agreement that covers scheduled servicing of your air conditioning units — typically 4 quarterly visits — at a fixed annual price. AMCs include priority emergency response, discounted labour rates, and often no call-out charges.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an AC AMC cost in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AC AMC prices in Qatar start from around QAR 2,000 per year for a small apartment (up to 4 units) and scale based on number of units, system type (split, ducted, FCU, chiller), and property size. Contact Homekeep for a custom quote.",
        },
      },
      {
        "@type": "Question",
        name: "What does an AMC include in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical residential AMC in Qatar includes 4 scheduled maintenance visits per year, priority emergency response, filter cleaning/replacement, coil cleaning, drain servicing, refrigerant checks, and discounted parts. Premium AMCs may also cover AHU, FCU, chiller, and plumbing systems.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AmcContent />
    </>
  );
}

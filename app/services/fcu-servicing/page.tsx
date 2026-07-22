import type { Metadata } from "next";
import FcuServicingContent from "@/components/pages/services/fcu-servicing";

export const metadata: Metadata = {
  title: "FCU Servicing Qatar | Fan Coil Unit Cleaning",
  description:
    "FCU cleaning, coil wash & filter replacement for Qatar villas. Eliminate odors, prevent leaks. From QAR 225. Call +974 5000 2548.",
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

const schema = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an FCU and where are they found in Qatar villas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fan Coil Units (FCUs) are room-level cooling devices connected to a central chilled water system. They are extremely common in large villas in Pearl Qatar, Lusail, and West Bay where a chiller plant provides centrally cooled water distributed to individual FCUs throughout the property.",
        },
      },
      {
        "@type": "Question",
        name: "How often should FCUs be serviced in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCUs in Qatar residences should be serviced every 3–4 months. High dust levels quickly clog filters and coat coils, reducing cooling output and creating the conditions for mold and bacteria growth that cause unpleasant odors.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my FCU smell bad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Musty or stale smells from FCUs are caused by mold and bacteria growing on damp coil surfaces and in stagnant drain pans. A professional FCU deep-clean with chemical biocide treatment eliminates the odor at its source.",
        },
      },
      {
        "@type": "Question",
        name: "My FCU is leaking water — what should I do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water leaking from an FCU is usually caused by a blocked drain pan or drain pipe, or a faulty drain tray. This needs urgent attention as it can cause ceiling and wall damage. Call us immediately at +974 50306582 for emergency FCU service.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service FCUs in Pearl Qatar apartments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — FCU servicing in Pearl Qatar, Lusail, and West Bay is one of our most common jobs. The large chiller-fed villas and apartment complexes in these areas all use FCU systems that we are fully equipped to service.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FcuServicingContent />
    </>
  );
}

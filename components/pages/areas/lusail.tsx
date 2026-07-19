"use client";

import { AreaPage, AreaPageData } from "@/components/area-page";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar — AC & HVAC Services Lusail",
    "telephone": "+97450306582",
    "url": "https://homekeep.qa/areas/lusail",
    "address": { "@type": "PostalAddress", "addressLocality": "Lusail", "addressRegion": "Doha", "addressCountry": "QA" },
    "areaServed": "Lusail",
    "description": "AC service, FCU servicing, AHU maintenance, and plumbing for villas and apartments in Lusail City, Qatar."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Who does AC service in Lusail?", "acceptedAnswer": { "@type": "Answer", "text": "Homekeep provides AC service, AHU maintenance, FCU servicing, and plumbing across Lusail City. We cover all Lusail districts including Fox Hills, Al Erkyah, Waterfront, Marina, and Energy City. Call +974 50306582." } },
      { "@type": "Question", "name": "How much does AC service cost in Lusail?", "acceptedAnswer": { "@type": "Answer", "text": "AC service in Lusail starts from QAR 150 per split unit. FCU servicing starts from QAR 225 per unit. We provide exact quotes before starting any work." } }
    ]
  }
];

const data: AreaPageData = {
  areaName: "Lusail",
  tagline: "AC & Maintenance Services",
  heroBadge: "Serving Lusail City",
  heroDesc: "Fast, reliable AC service, AHU servicing, FCU cleaning, and plumbing for villas and residential towers across all Lusail districts — same/next-day response.",
  metaTitle: "AC Service Lusail | AHU & FCU Servicing Lusail City | Homekeep Qatar",
  metaDescription: "AC service, AHU servicing, FCU cleaning, and plumbing for villas and apartments in Lusail City Qatar. Same/next-day response. From QAR 150. Call +974 50306582.",
  canonical: "https://homekeep.qa/areas/lusail",
  propertyContext: "Lusail is Qatar's newest planned city, featuring a mix of high-rise residential towers, townhouse compounds, and standalone villas across districts including Fox Hills, Al Erkyah, Waterfront, Marina District, and Energy City.",
  hvacNote: "Lusail properties span both split AC and central chiller-fed FCU systems depending on the development. Many newer towers have district cooling, while villa compounds typically have individual chillers or AHU-based systems.",
  whyPoints: [
    { title: "Fast Coverage Across All Lusail Districts", desc: "We cover every part of Lusail — Fox Hills, Al Erkyah, Waterfront, Marina, and Energy City. Our technicians know the area and can respond quickly without wasting time on navigation." },
    { title: "New-Build HVAC Experience", desc: "Lusail's buildings are modern and often have sophisticated HVAC controls. Our technicians work with current-generation systems and can liaise with building management where required." },
    { title: "Residential & Compound Specialists", desc: "Whether you're in a high-rise apartment or a gated villa compound, we have experience with the access protocols and management requirements typical in Lusail developments." },
    { title: "Transparent Pricing, No Surprises", desc: "We confirm pricing before starting work. No hidden call-out fees, no surprise parts charges — just a clear quote and professional service." },
  ],
  services: [
    { name: "AC Service & Repair", href: "/services/ac-service", desc: "Split and ducted AC cleaning, refrigerant top-up, fault diagnosis, and emergency repair for all AC units in your Lusail property." },
    { name: "AHU Servicing", href: "/services/ahu-servicing", desc: "Full Air Handling Unit service — filters, coil clean, drain pan, fan motor inspection — for Lusail towers and villa compounds." },
    { name: "FCU Servicing", href: "/services/fcu-servicing", desc: "Coil clean, drain pan service, filter service, and fan motor check for fan coil units in Lusail apartments and villas." },
    { name: "Chiller Maintenance", href: "/services/chiller-maintenance", desc: "Residential chiller inspection, tube cleaning, and refrigerant checks for Lusail villa compounds with individual cooling plants." },
    { name: "Plumbing Services", href: "/services/plumbing", desc: "Leak repair, drain unblocking, fixtures, water heater service, and non-invasive leak detection across all Lusail properties." },
    { name: "Annual Maintenance Contract", href: "/amc", desc: "One yearly AMC covering all your systems — priority response, scheduled visits, and zero call-out fees in Lusail." },
  ],
  faqs: [
    { q: "Who does AC service in Lusail?", a: "Homekeep covers all AC, AHU, FCU, and plumbing servicing across Lusail City. We serve all districts including Fox Hills, Al Erkyah, Waterfront, Marina District, and Energy City, 7 days a week." },
    { q: "How much does AC service cost in Lusail?", a: "AC servicing in Lusail starts from QAR 150 per split unit for a full clean and check. FCU units start from QAR 225. AHU servicing starts from QAR 700. We confirm the exact price before starting work." },
    { q: "Do you serve Fox Hills and Al Erkyah in Lusail?", a: "Yes — we cover every district in Lusail including Fox Hills, Al Erkyah, Lusail Waterfront, Marina District, and Energy City. We also serve the villa compounds and residential towers throughout the city." },
    { q: "How often should I service my AC in Lusail?", a: "We recommend quarterly servicing in Qatar's climate. Lusail's ongoing construction means higher dust levels in some areas, which can block filters and coils faster. Quarterly servicing prevents performance loss and extends system life." },
    { q: "Can you do emergency AC repair in Lusail?", a: "Yes — we offer emergency AC repair across Lusail. Call +974 50306582 or WhatsApp +974 50002548 for a same-day response. AMC customers receive priority dispatch." },
  ],
  schema,
};

export default function LusailPage() {
  return <AreaPage data={data} />;
}

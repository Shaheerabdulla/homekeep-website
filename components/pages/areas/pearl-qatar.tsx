"use client";

import { AreaPage, AreaPageData } from "@/components/area-page";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar — AC & HVAC Services Pearl Qatar",
    "telephone": "+97450306582",
    "url": "https://homekeep.qa/areas/pearl-qatar",
    "address": { "@type": "PostalAddress", "addressLocality": "Pearl Qatar", "addressRegion": "Doha", "addressCountry": "QA" },
    "areaServed": "Pearl Qatar",
    "description": "AC service, FCU servicing, AHU maintenance, chiller maintenance, and plumbing for villas and compounds in Pearl Qatar, Doha."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Who does AC service in Pearl Qatar?", "acceptedAnswer": { "@type": "Answer", "text": "Homekeep provides AC service, FCU servicing, AHU maintenance, and plumbing in Pearl Qatar. We operate 7 days a week with same/next-day availability. Call +974 50306582 or WhatsApp +974 50002548." } },
      { "@type": "Question", "name": "How much does AC service cost in Pearl Qatar?", "acceptedAnswer": { "@type": "Answer", "text": "AC service in Pearl Qatar starts from QAR 150 per unit for a standard split AC clean. FCU servicing starts from QAR 225 per unit. Contact Homekeep for an exact quote based on your number of units." } },
      { "@type": "Question", "name": "Do you service FCU systems in Pearl Qatar villas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — FCU (fan coil unit) servicing is one of our most common jobs in Pearl Qatar, where most villas use chiller-fed FCU systems. We service, deep clean, and repair FCU units across all Pearl Qatar compounds." } }
    ]
  }
];

const data: AreaPageData = {
  areaName: "Pearl Qatar",
  tagline: "AC & HVAC Services",
  heroBadge: "Serving Pearl Qatar",
  heroDesc: "Expert AC service, FCU servicing, AHU maintenance, chiller care, and plumbing for villas and compounds across Pearl Qatar — 7 days a week, same/next-day response.",
  metaTitle: "AC Service Pearl Qatar | FCU & AHU Servicing | Homekeep Qatar",
  metaDescription: "AC service, FCU servicing, AHU maintenance, chiller and plumbing for villas in Pearl Qatar. Same/next-day response. From QAR 225 per FCU unit. Call +974 50306582.",
  canonical: "https://homekeep.qa/areas/pearl-qatar",
  propertyContext: "Pearl Qatar is home to luxury villas, compounds, and high-end apartments, many managed by homeowner associations. Properties range from townhouses to large standalone villas with multiple HVAC zones.",
  hvacNote: "Most Pearl Qatar villas use central chiller-fed FCU systems with AHUs, rather than conventional split AC units. These require specialist knowledge of water-side balancing, actuators, and BMS integration.",
  whyPoints: [
    { title: "FCU & Chiller Specialists", desc: "Most Pearl Qatar homes run on chiller-fed FCU systems, not split ACs. Our technicians are trained specifically on these systems — not general AC engineers working out of their comfort zone." },
    { title: "No Need to Chase Contractors", desc: "Pearl Qatar residents tell us finding reliable maintenance contractors is their biggest frustration. We show up when we say we will, work cleanly, and provide a written report after every visit." },
    { title: "Compound & Villa Experience", desc: "We've worked inside Pearl Qatar compounds and understand access protocols, compound management requirements, and how to coordinate with building managers." },
    { title: "AMC Available for Peace of Mind", desc: "Many Pearl Qatar residents opt for our Annual Maintenance Contract — one fixed yearly price covering all scheduled visits, priority emergency response, and zero call-out fees." },
  ],
  services: [
    { name: "FCU Servicing", href: "/services/fcu-servicing", desc: "Full coil clean, drain pan service, fan motor check, and actuator inspection for chiller-fed FCU systems throughout your Pearl Qatar villa." },
    { name: "AHU Servicing", href: "/services/ahu-servicing", desc: "Filters, evaporator coil, drain pan, fan motor, and belt inspection for Air Handling Units serving your villa's central AC system." },
    { name: "Chiller Maintenance", href: "/services/chiller-maintenance", desc: "Residential chiller inspection, condenser tube cleaning, refrigerant checks, and performance reports for Pearl Qatar villas." },
    { name: "AC Service & Repair", href: "/services/ac-service", desc: "Split and ducted AC cleaning, refrigerant top-up, and emergency repair for any supplementary AC units in your home." },
    { name: "Plumbing Services", href: "/services/plumbing", desc: "Leak repair, drain unblocking, bathroom fixtures, water heater service, and non-invasive leak detection for Pearl Qatar villas." },
    { name: "Annual Maintenance Contract", href: "/amc", desc: "One yearly price covering all scheduled services, priority emergency response, and zero call-out charges across all your systems." },
  ],
  faqs: [
    { q: "Who does AC service in Pearl Qatar?", a: "Homekeep provides AC and HVAC services throughout Pearl Qatar. We cover FCU servicing, AHU maintenance, chiller care, and plumbing for villas and compounds. We operate 7 days a week with same/next-day availability." },
    { q: "How much does FCU servicing cost in Pearl Qatar?", a: "FCU servicing in Pearl Qatar starts from QAR 225 per unit for a full service and clean. Chemical deep clean starts from QAR 320 per unit. We always confirm the final price before starting work." },
    { q: "Do you service all compounds in Pearl Qatar?", a: "Yes — we service villas and apartments across all Pearl Qatar precincts including Porto Arabia, Medina Centrale, Viva Bahriyah, Qanat Quartier, and all gated compounds. We work within compound management requirements and can coordinate access in advance." },
    { q: "How often should FCU units be serviced in Pearl Qatar?", a: "We recommend servicing FCU units every 3 months given Qatar's climate and the dusty season. Pearl Qatar's proximity to the sea also means salt air can affect FCU coils faster than inland properties. Quarterly servicing under an AMC is the most cost-effective approach." },
    { q: "Can you service my chiller in Pearl Qatar?", a: "Yes — residential chiller maintenance is a core Homekeep service. We inspect, service, and carry out condenser tube cleaning for chillers in Pearl Qatar villas. Chiller service visits start from QAR 1,200." },
  ],
  schema,
};

export default function PearlQatarPage() {
  return <AreaPage data={data} />;
}

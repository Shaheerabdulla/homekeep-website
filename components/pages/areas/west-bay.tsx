"use client";

import { AreaPage, AreaPageData } from "@/components/area-page";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar — AC & HVAC Services West Bay",
    "telephone": "+97450306582",
    "url": "https://homekeep.qa/areas/west-bay",
    "address": { "@type": "PostalAddress", "addressLocality": "West Bay", "addressRegion": "Doha", "addressCountry": "QA" },
    "areaServed": "West Bay",
    "description": "AC service, FCU servicing, AHU maintenance, and plumbing for apartments and villas in West Bay, Doha."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Who does AC service in West Bay Doha?", "acceptedAnswer": { "@type": "Answer", "text": "Homekeep provides AC service, FCU servicing, AHU maintenance, and plumbing in West Bay Doha. We cover all residential towers and villa compounds in the area. Call +974 50306582 or WhatsApp +974 50002548." } },
      { "@type": "Question", "name": "Do you service AC units in West Bay apartments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we service AC and FCU units in West Bay residential apartments and hotel apartments. We can coordinate with building management for tower access. FCU servicing starts from QAR 225 per unit." } }
    ]
  }
];

const data: AreaPageData = {
  areaName: "West Bay",
  tagline: "AC & HVAC Services",
  heroBadge: "Serving West Bay, Doha",
  heroDesc: "Professional AC service, FCU cleaning, AHU maintenance, and plumbing for residential towers and apartments in West Bay — flexible scheduling, same/next-day availability.",
  metaTitle: "AC Service West Bay Doha | FCU Servicing West Bay | Homekeep Qatar",
  metaDescription: "AC service, FCU cleaning, AHU maintenance, and plumbing for apartments and villas in West Bay Doha. Flexible scheduling, from QAR 225. Call +974 50306582.",
  canonical: "https://homekeep.qa/areas/west-bay",
  propertyContext: "West Bay is Doha's primary business and residential high-rise district, home to residential towers, hotel apartments, and executive apartments housing a large expat community. Properties are mostly apartments in managed towers.",
  hvacNote: "West Bay towers predominantly use central district cooling or building-level chiller systems with FCU units throughout. Building management companies often require advance notice — we coordinate this on your behalf.",
  whyPoints: [
    { title: "Tower Access & Building Management Coordination", desc: "We're experienced working in West Bay high-rises and understand how to coordinate with building management and security for technician access — no stress for you." },
    { title: "FCU Specialists for Tower Apartments", desc: "Most West Bay apartments run on FCU systems. Our technicians specialise in FCU coil cleaning, drain servicing, and actuator maintenance — not just basic split AC servicing." },
    { title: "Flexible Scheduling for Busy Professionals", desc: "West Bay is home to many professionals with demanding schedules. We offer early morning, evening, and weekend slots to fit around your work life." },
    { title: "No Call-Out Fee for AMC Customers", desc: "West Bay residents who sign up for an AMC get zero call-out fees year-round, priority response, and a dedicated contact at Homekeep." },
  ],
  services: [
    { name: "FCU Servicing", href: "/services/fcu-servicing", desc: "Coil clean, drain pan service, filter replacement, and fan motor check for FCU units in your West Bay apartment or tower." },
    { name: "AC Service & Repair", href: "/services/ac-service", desc: "Split and ducted AC cleaning, refrigerant check, and emergency repair for supplementary AC in West Bay properties." },
    { name: "AHU Servicing", href: "/services/ahu-servicing", desc: "Full AHU maintenance — filters, coil clean, drain, fan motor — for West Bay buildings with central air handling." },
    { name: "Chiller Maintenance", href: "/services/chiller-maintenance", desc: "Residential chiller inspection and tube cleaning for West Bay villas and buildings with on-site cooling plants." },
    { name: "Plumbing Services", href: "/services/plumbing", desc: "Drain unblocking, leak repair, fixture replacement, and water heater service for West Bay apartments and villas." },
    { name: "Annual Maintenance Contract", href: "/amc", desc: "Annual AMC for West Bay residents — one price, all systems, priority response, zero call-out charges." },
  ],
  faqs: [
    { q: "Who does AC service in West Bay Doha?", a: "Homekeep covers AC, FCU, AHU, and plumbing servicing throughout West Bay. We work in residential towers, hotel apartments, and executive apartments, and can coordinate with building management for access." },
    { q: "How much does AC service cost in West Bay?", a: "FCU servicing in West Bay starts from QAR 225 per unit. Split AC servicing starts from QAR 150 per unit. We confirm the final price before any work begins." },
    { q: "Can you access my West Bay tower for servicing?", a: "Yes — we're experienced with West Bay tower access procedures. We can contact your building management or security desk in advance to arrange technician access. Just let us know your building name when you book." },
    { q: "How often should FCUs be serviced in a West Bay apartment?", a: "We recommend quarterly FCU servicing in Qatar's climate. West Bay towers are tightly sealed with heavy AC usage, which means coils and drain pans accumulate debris quickly. Quarterly cleaning maintains air quality and prevents drain blockages." },
    { q: "Do you do emergency AC repair in West Bay?", a: "Yes — we offer emergency AC and FCU repair across West Bay. Call or WhatsApp us for a same/next-day appointment. AMC customers receive priority same-day dispatch." },
  ],
  schema,
};

export default function WestBayPage() {
  return <AreaPage data={data} />;
}

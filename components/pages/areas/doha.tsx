"use client";

import { AreaPage, AreaPageData } from "@/components/area-page";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar — AC & HVAC Services Doha",
    "telephone": "+97450306582",
    "url": "https://homekeep.qa/areas/doha",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" },
    "areaServed": ["Doha", "Al Waab", "Al Rayyan", "Ain Khaled", "Madinat Khalifa", "Al Gharrafa", "Wakra"],
    "description": "AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing for villas and apartments across Doha, Qatar."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Who does AC service in Doha?", "acceptedAnswer": { "@type": "Answer", "text": "Homekeep provides AC service, AHU maintenance, FCU servicing, chiller maintenance, and plumbing across all Doha neighbourhoods including Al Waab, Madinat Khalifa, Al Gharrafa, Al Rayyan, Ain Khaled, and Wakra. Call +974 50306582 or WhatsApp +974 50002548." } },
      { "@type": "Question", "name": "How much does AC service cost in Doha?", "acceptedAnswer": { "@type": "Answer", "text": "AC service in Doha starts from QAR 150 per split unit for a standard service and clean. FCU units start from QAR 225 per unit. AHU servicing starts from QAR 700. We confirm the exact price before starting work." } },
      { "@type": "Question", "name": "Do you offer same-day AC repair in Doha?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Homekeep offers same-day and next-day AC repair across Doha. For emergencies, call +974 50306582 or WhatsApp +974 50002548. AMC customers receive priority same-day dispatch." } }
    ]
  }
];

const data: AreaPageData = {
  areaName: "Doha",
  tagline: "AC & HVAC Services",
  heroBadge: "Serving All of Doha",
  heroDesc: "Expert AC service, AHU maintenance, FCU servicing, chiller care, and plumbing across all Doha neighbourhoods — same/next-day response, 7 days a week.",
  metaTitle: "AC Service Doha Qatar | AHU FCU & Chiller Maintenance Doha | Homekeep",
  metaDescription: "AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing for villas and apartments across Doha Qatar. Same/next-day response. From QAR 150. Call +974 50306582.",
  canonical: "https://homekeep.qa/areas/doha",
  propertyContext: "Doha covers a wide range of residential neighbourhoods including Al Waab, Madinat Khalifa, Al Gharrafa, Al Rayyan, Ain Khaled, Muaither, Wakra, and the older city-centre areas. Properties range from large family villas to modern apartment complexes.",
  hvacNote: "Doha residential properties use a wide mix of HVAC systems — from standard split AC units in older villas to modern ducted systems with AHUs, and chiller-fed FCU systems in newer compounds. Our technicians cover all system types.",
  whyPoints: [
    { title: "All Doha Neighbourhoods Covered", desc: "We serve Al Waab, Al Gharrafa, Madinat Khalifa, Al Rayyan, Ain Khaled, Muaither, Abu Hamour, Wakra, and all other Doha areas. If you're in Qatar, we can reach you." },
    { title: "All HVAC System Types", desc: "Split AC, ducted, VRF, AHU, chiller-fed FCU — our technicians are trained across all system types common in Doha residential properties, old and new." },
    { title: "Same-Day Emergency Response", desc: "AC emergencies in Doha's summer are urgent. We prioritise emergency callouts and aim to respond the same day. Call +974 50306582 for immediate assistance." },
    { title: "Transparent Pricing, Always", desc: "We confirm pricing before starting any work. No surprise parts charges, no hidden fees. What we quote is what you pay — whether you're in a villa or a two-bedroom apartment." },
  ],
  services: [
    { name: "AC Service & Repair", href: "/services/ac-service", desc: "Full split and ducted AC service, refrigerant top-up, fault diagnosis, and emergency repair across all Doha areas." },
    { name: "AHU Servicing", href: "/services/ahu-servicing", desc: "Comprehensive Air Handling Unit maintenance — filters, coil clean, drain pan, fan motor — for Doha villas and compounds." },
    { name: "FCU Servicing", href: "/services/fcu-servicing", desc: "Fan coil unit coil clean, drain service, filter service, and actuator check for chiller-fed FCU systems in Doha properties." },
    { name: "Chiller Maintenance", href: "/services/chiller-maintenance", desc: "Residential chiller inspection, condenser tube cleaning, refrigerant checks, and performance reports for Doha villas." },
    { name: "Plumbing Services", href: "/services/plumbing", desc: "Leak repair, drain unblocking, fixtures, water heater service, and non-invasive leak detection for Doha properties." },
    { name: "Annual Maintenance Contract", href: "/amc", desc: "One AMC covering all your systems — priority emergency response, scheduled visits, and zero call-out fees across Doha." },
  ],
  faqs: [
    { q: "Who does AC service in Doha?", a: "Homekeep covers all AC, AHU, FCU, chiller, and plumbing servicing across Doha. We serve all neighbourhoods including Al Waab, Madinat Khalifa, Al Gharrafa, Al Rayyan, Ain Khaled, Muaither, and Wakra, 7 days a week." },
    { q: "How much does AC service cost in Doha?", a: "AC service in Doha starts from QAR 150 per split unit. FCU servicing starts from QAR 225 per unit. AHU servicing starts from QAR 700. We always confirm pricing before starting work — no hidden charges." },
    { q: "Do you offer same-day AC repair in Doha?", a: "Yes — we offer same-day and next-day AC repair across Doha. For emergency AC failures, call +974 50306582 or WhatsApp +974 50002548. AMC customers receive priority dispatch." },
    { q: "How often should I service my AC in Doha?", a: "We recommend servicing every 3 months in Qatar's climate. Doha's dusty environment clogs filters and coils faster than cooler climates. Quarterly servicing maintains cooling performance, reduces electricity consumption, and prevents breakdowns." },
    { q: "Do you cover Al Wakra and Al Rayyan for AC service?", a: "Yes — our coverage extends to Al Wakra, Al Rayyan, Muaither, Abu Hamour, and surrounding areas. We service the entire Greater Doha region. Contact us to confirm availability for your specific location." },
  ],
  schema,
};

export default function DohaPage() {
  return <AreaPage data={data} />;
}

"use client";

import { AreaPage, AreaPageData } from "@/components/area-page";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar — AC & HVAC Services Simaisma",
    "telephone": "+97450306582",
    "url": "https://homekeep.qa/areas/simaisma",
    "address": { "@type": "PostalAddress", "addressLocality": "Simaisma", "addressRegion": "Doha", "addressCountry": "QA" },
    "areaServed": "Simaisma",
    "description": "AC service, split AC repair, chiller maintenance, and plumbing for beachfront villas and residential properties in Simaisma, Qatar."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Who does AC service in Simaisma?", "acceptedAnswer": { "@type": "Answer", "text": "Homekeep provides AC service, split AC repair, and plumbing for villas in Simaisma. We cover beachfront and inland properties. Call +974 50306582 or WhatsApp +974 50002548." } },
      { "@type": "Question", "name": "Why do AC units corrode faster in Simaisma?", "acceptedAnswer": { "@type": "Answer", "text": "Simaisma's coastal location means AC outdoor units are exposed to salt-laden sea air, which accelerates corrosion of condenser coils, fins, and casings. Regular servicing and anti-corrosion coil treatment extends unit life significantly." } }
    ]
  }
];

const data: AreaPageData = {
  areaName: "Simaisma",
  tagline: "AC Service & Repair",
  heroBadge: "Serving Simaisma",
  heroDesc: "Specialist AC servicing, split AC repair, plumbing, and corrosion protection for beachfront and residential villas in Simaisma — same/next-day response, 7 days a week.",
  metaTitle: "AC Service Simaisma Qatar | Split AC Repair Simaisma | Homekeep",
  metaDescription: "AC service, split AC repair, anti-corrosion treatment, and plumbing for villas in Simaisma Qatar. Coastal specialists. From QAR 150. Call +974 50306582.",
  canonical: "https://homekeep.qa/areas/simaisma",
  propertyContext: "Simaisma is a coastal area northeast of Doha known for beachfront private villas, weekend retreats, and residential compounds. Properties range from older family villas to newer luxury beachfront homes.",
  hvacNote: "Simaisma's coastal salt air environment is uniquely harsh on AC systems. Outdoor condenser coils corrode faster than inland properties, fins clog with salt deposits, and casings rust prematurely. Specialist coastal servicing — including anti-corrosion coil coatings — is essential.",
  whyPoints: [
    { title: "Coastal AC Specialists", desc: "We understand the specific impact of salt air on AC outdoor units in Simaisma. Our servicing includes condenser coil rinse, fin straightening, and anti-corrosion treatment to protect your system from the sea environment." },
    { title: "Older Villa Experience", desc: "Many Simaisma properties have older AC installations that require careful handling. We work with all AC brands and ages — including units that haven't been serviced in years." },
    { title: "Weekend & Flexible Scheduling", desc: "Many Simaisma villas are used as weekend retreats. We offer weekend appointments and can coordinate access with caretakers or property managers when owners are away." },
    { title: "Full Plumbing Service Available", desc: "Simaisma's coastal humidity and older pipework means plumbing issues are common. We handle everything from emergency leak repair to full bathroom refurbishment alongside your AC work." },
  ],
  services: [
    { name: "AC Service & Repair", href: "/services/ac-service", desc: "Full split AC service, condenser coil clean, anti-corrosion treatment, refrigerant top-up, and emergency repair for Simaisma villas." },
    { name: "FCU Servicing", href: "/services/fcu-servicing", desc: "Coil clean, drain service, and fan motor check for any FCU units in your Simaisma property." },
    { name: "AHU Servicing", href: "/services/ahu-servicing", desc: "Full Air Handling Unit service for Simaisma villas with central ducted cooling systems." },
    { name: "Chiller Maintenance", href: "/services/chiller-maintenance", desc: "Residential chiller inspection, tube cleaning, and refrigerant checks for Simaisma properties with on-site cooling plants." },
    { name: "Plumbing Services", href: "/services/plumbing", desc: "Emergency leak repair, drain unblocking, fixture replacement, and water heater service for Simaisma villas." },
    { name: "Annual Maintenance Contract", href: "/amc", desc: "AMC packages for Simaisma villas — covering all scheduled services, priority emergency response, and zero call-out charges." },
  ],
  faqs: [
    { q: "Who does AC service in Simaisma?", a: "Homekeep provides AC service, split AC repair, and plumbing across Simaisma. We cover beachfront villas, weekend retreats, and residential compounds throughout the area, 7 days a week." },
    { q: "Why does my AC corrode faster in Simaisma?", a: "Simaisma's coastal location exposes AC outdoor units to salt-laden sea air, which rapidly corrodes condenser coils, aluminium fins, and steel casings. We apply anti-corrosion coil coating as part of our Simaisma service to significantly extend unit life." },
    { q: "How much does AC service cost in Simaisma?", a: "AC service in Simaisma starts from QAR 150 per split unit. Coastal deep clean with anti-corrosion treatment starts from QAR 250 per unit. We recommend the full coastal treatment for beachfront properties." },
    { q: "Can you service my Simaisma villa when I'm not there?", a: "Yes — we can coordinate with your caretaker or property manager to access and service your villa. Many Simaisma villa owners arrange this for weekend properties they don't visit regularly. We send a report and photos after every visit." },
    { q: "How often should AC units be serviced in Simaisma?", a: "We strongly recommend every 3 months for Simaisma coastal properties. The combination of heavy usage in Qatar's summer heat and salt air corrosion means AC units in Simaisma degrade faster than inland. Quarterly servicing under an AMC is the most cost-effective approach." },
  ],
  schema,
};

export default function SimaismaPage() {
  return <AreaPage data={data} />;
}

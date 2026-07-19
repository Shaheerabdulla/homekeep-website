"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pearl Qatar Villa Maintenance Checklist 2026",
  "datePublished": "2026-05-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "Complete 2026 maintenance checklist for Pearl Qatar villas. AC, FCU, chiller, plumbing, and seasonal tasks to protect your investment and stay comfortable year-round.",
  "mainEntityOfPage": "https://homekeep.qa/blog/pearl-qatar-villa-maintenance-checklist-2026"
};

const quarterly = [
  "FCU units: filter clean, coil inspection, drain pan flush, fan motor check",
  "Split ACs (if applicable): filter clean, indoor coil inspection, drain line flush",
  "Outdoor condenser units: debris clear from fins, fan blade check",
  "Plumbing: check under-sink connections for drips, inspect water heater for sediment signs",
  "Check all AC drain lines — Pearl Qatar's humidity means they fill faster than inland properties",
];

const biannual = [
  "AHU (if installed): full service including coil clean, belt check, drain pan treatment",
  "Water heater: flush sediment (critical in Pearl Qatar due to very hard coastal water)",
  "Showerheads and tap aerators: descale or replace",
  "Outdoor plumbing connections: check garden taps, pool connections, irrigation lines",
  "Check chilled water pipe insulation for condensation damage (common in Pearl Qatar's humidity)",
];

const annual = [
  "Full chemical FCU deep clean for all units (before summer)",
  "Chiller service: refrigerant check, condenser tube inspection, controls calibration",
  "Complete plumbing survey: pressure check all lines, inspect exposed pipes for corrosion",
  "AC system refrigerant pressure test across all units",
  "Electrical: check AC disconnect boxes, condensate pump operation, thermostat calibration",
  "Water quality test if using a water softener — service the softener unit",
];

export default function PearlQatarVillaMaintenanceChecklist2026() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Pearl Qatar Villa Maintenance Checklist 2026 | Homekeep"
        description="Complete 2026 maintenance checklist for Pearl Qatar villas. Quarterly FCU service, annual chiller checks, plumbing inspections, and seasonal tasks to protect your property."
        canonical="https://homekeep.qa/blog/pearl-qatar-villa-maintenance-checklist-2026"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-indigo-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full px-2.5 py-1">Pearl Qatar</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />May 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Pearl Qatar Villa Maintenance Checklist 2026
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Pearl Qatar villas face specific maintenance challenges: coastal humidity accelerates FCU drain blockages and pipe corrosion, hard desalinated water damages fixtures and heaters faster than most areas, and the high density of units means a maintenance backlog can compound quickly. This checklist is designed for Pearl Qatar specifically — with frequency recommendations based on what we actually see in the field.
            </p>

            <div className="space-y-10">
              {[
                { label: "Every 3 Months", color: "bg-primary text-white", items: quarterly, note: "These are non-negotiables in Pearl Qatar. The combination of high occupancy, humidity, and continuous AC use means quarterly is the minimum — not a recommendation." },
                { label: "Every 6 Months", color: "bg-secondary text-foreground", items: biannual, note: "Schedule these alongside your Q1 and Q3 FCU visits to minimize disruption." },
                { label: "Every Year (Pre-Summer)", color: "bg-amber-500 text-white", items: annual, note: "Annual tasks should be completed in March or April before summer load begins. These are the services that prevent the expensive failures." },
              ].map((section, si) => (
                <motion.div key={si} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.1 }}>
                  <div className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold mb-4 ${section.color}`}>
                    {section.label}
                  </div>
                  <div className="space-y-3 mb-3">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  {section.note && (
                    <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-4">{section.note}</p>
                  )}
                  {si < 2 && <div className="mt-8 border-b border-border" />}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8">
              <p className="font-semibold text-indigo-900 text-sm mb-2">Pearl Qatar-Specific Note: Humidity and FCU Drains</p>
              <p className="text-indigo-800 text-sm leading-relaxed">Pearl Qatar's coastal location means FCU drain pans accumulate condensate significantly faster than inland villas. In summer, we recommend checking drain pan levels monthly and clearing drain lines every 6–8 weeks rather than quarterly. A blocked drain in a Pearl Qatar villa can overflow within days during peak humidity months — particularly in August.</p>
            </div>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">AMC for Your Pearl Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Let us manage your maintenance schedule entirely — quarterly FCU visits, annual deep clean, chiller service, and priority emergency response. One annual fee, zero scheduling friction.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548?text=Hi%2C%20I'd%20like%20an%20AMC%20quote%20for%20my%20Pearl%20Qatar%20villa" target="_blank" rel="noreferrer">Get AMC Quote</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/areas/pearl-qatar">Pearl Qatar Services <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

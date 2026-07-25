"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const quarterly = [
  "FCU units: filter clean, coil inspection, drain pan flush, fan motor check",
  "Split ACs (if applicable): filter clean, indoor coil inspection, drain line flush",
  "Outdoor condenser units: clear construction dust and debris from fins — common near active development zones",
  "Plumbing: check under-sink connections for drips, inspect water heater for sediment signs",
  "Check all AC drain lines for blockages from dust infiltration",
];

const biannual = [
  "AHU (if installed): full service including coil clean, belt check, drain pan treatment",
  "Water heater: flush sediment buildup",
  "Showerheads and tap aerators: descale or replace",
  "Window and door seals: check for gaps letting in construction dust",
  "Outdoor plumbing connections: check garden taps and irrigation lines",
];

const annual = [
  "Full chemical FCU deep clean for all units (before summer)",
  "Chiller service for villas with central systems: refrigerant check, condenser tube inspection",
  "Complete plumbing survey: pressure check all lines, inspect exposed pipes for corrosion",
  "AC system refrigerant pressure test across all units",
  "Electrical: check AC disconnect boxes, condensate pump operation, thermostat calibration",
];

export default function LusailVillaMaintenanceChecklist2026() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-indigo-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full px-2.5 py-1">Lusail</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Lusail Villa Maintenance Checklist 2026
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Lusail's rapid, ongoing development means villas here face a maintenance challenge most established neighborhoods don't: elevated ambient dust from nearby construction, which clogs filters and coils faster than in fully built-out areas. This checklist is built around what actually keeps Lusail villas running well.
            </p>

            <div className="space-y-10">
              {[
                { label: "Every 3 Months", color: "bg-primary text-white", items: quarterly, note: "In active construction zones near Fox Hills or the Marina District, consider checking filters monthly rather than quarterly until nearby building work slows down." },
                { label: "Every 6 Months", color: "bg-secondary text-foreground", items: biannual, note: "Pair these with your Q1 and Q3 FCU visits to reduce the number of separate appointments." },
                { label: "Every Year (Pre-Summer)", color: "bg-amber-500 text-white", items: annual, note: "Complete these in March or April, ahead of peak summer AC demand." },
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
              <p className="font-semibold text-indigo-900 text-sm mb-2">Lusail-Specific Note: Construction Dust</p>
              <p className="text-indigo-800 text-sm leading-relaxed">Villas within a few hundred meters of active construction sites see filter and coil fouling at roughly double the normal rate. If you notice reduced airflow or musty smells sooner than expected, don't assume something's broken — it's often just accelerated dust buildup that a filter change resolves.</p>
            </div>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">AMC for Your Lusail Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Let us manage your maintenance schedule entirely — quarterly FCU visits, annual deep clean, and priority emergency response across Lusail City.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548?text=Hi%2C%20I'd%20like%20an%20AMC%20quote%20for%20my%20Lusail%20villa" target="_blank" rel="noreferrer">Get AMC Quote</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/areas/lusail">Lusail Services <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

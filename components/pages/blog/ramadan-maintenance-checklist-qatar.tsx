"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const tasks = [
  "Service AC and FCU units before Ramadan begins — evening gatherings mean longer, heavier cooling use than usual",
  "Check kitchen plumbing (sink, disposal, dishwasher connections) ahead of increased iftar and suhoor cooking loads",
  "Test water heater capacity if hosting overnight guests — usage spikes around suhoor hours",
  "Clean or service pool filtration if hosting outdoor iftars — higher usage means faster chemical depletion",
  "Check outdoor lighting and electrical connections if setting up majlis or outdoor seating areas",
  "Confirm your AC service provider's emergency contact details — breakdowns are especially disruptive during hosting season",
];

export default function RamadanMaintenanceChecklistQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-amber-900 to-slate-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-amber-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full px-2.5 py-1">Seasonal</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />4 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Ramadan Home Maintenance Checklist for Qatar Villas</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Ramadan changes how a Qatar villa gets used — more evening gatherings, heavier kitchen use around iftar and suhoor, and guests staying later into the night. A little maintenance prep beforehand means your home holds up smoothly through the month.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">Why Prepare Before Ramadan Starts</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Hosting family and guests for iftar means your AC, kitchen plumbing, and often your pool all see significantly more use than a typical month — concentrated into evening and nighttime hours when a breakdown is hardest to get fixed quickly. Getting ahead of servicing before Ramadan begins avoids finding out about a weak system mid-gathering.</p>

            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Pre-Ramadan Checklist</h3>
              {tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{task}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Evening AC Load Is Different From Daytime Load</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Many households shift their heaviest AC use from daytime to evening during Ramadan, with living and dining areas running continuously through iftar and late into the night as guests stay. If your system has been coasting on light use, it may not have been tested under this kind of sustained evening load recently — a pre-Ramadan service catches issues before they surface mid-gathering.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Kitchen Plumbing Under Pressure</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Iftar and suhoor cooking means concentrated bursts of sink, disposal, and dishwasher use. A slow drain that was a minor annoyance in a normal month can become a real problem when it's handling nightly cooking cleanup for a full household and guests.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book Your Pre-Ramadan Service</h3>
              <p className="text-muted-foreground text-sm mb-4">AC, plumbing, and pool checks to get your villa hosting-ready before Ramadan begins.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp to Book</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/amc">AMC Packages <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

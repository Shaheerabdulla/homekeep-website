"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const tasks = [
  "Schedule your annual AC/FCU deep clean now — winter's lighter AC use means less disruption than booking in peak summer",
  "Have your chiller serviced and inspected while load is low, catching issues before next summer's demand",
  "Flush your water heater — sediment builds up year-round, and winter is a convenient time to address it",
  "Check AC drain lines and pans for leftover summer debris before the system ramps up again in spring",
  "Inspect outdoor units for dust and debris accumulated over the year",
  "Test smoke detectors and check electrical panels while technicians are on-site for other work",
  "Review your AMC or service contract and renew or adjust coverage before summer demand returns",
];

export default function WinterMaintenanceChecklistQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-sky-900 to-slate-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-sky-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-sky-500/20 text-sky-300 rounded-full px-2.5 py-1">Seasonal</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />4 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Winter Maintenance Checklist for Qatar Villas</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Qatar's mild winter (roughly December through February) is easy to overlook for maintenance — AC demand drops, and it's tempting to assume nothing needs attention. In reality, winter is the best window of the year to get ahead of servicing before the summer rush.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">Why Winter Is the Ideal Maintenance Window</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Two things make winter the smart time to service your systems: lower AC usage means technicians can work on units without disrupting your cooling, and service providers are generally less booked out than during the frantic pre-summer and mid-summer rush. Booking your annual deep clean and chiller service now means you avoid the scheduling backlog that hits every AC company in Qatar come April and May.</p>

            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Winter Checklist</h3>
              {tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{task}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Don't Skip Plumbing Just Because It's Not Cold Enough for Frozen Pipes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Unlike colder countries, Qatar villa owners don't need to worry about frozen pipes — but winter is still a good time for routine plumbing checks: water heater servicing, checking for slow leaks that got ignored during the busy summer, and testing pressure across the villa while demand is lower.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Get Ahead of the Summer Rush</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">By the time peak summer heat arrives, service providers across Qatar are stretched thin with emergency no-cooling calls. Villa owners who complete their annual servicing in winter typically face far shorter wait times, and their systems are less likely to fail entirely once summer load hits.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book Your Winter Service Now</h3>
              <p className="text-muted-foreground text-sm mb-4">Get ahead of the summer rush with a full AC, chiller, and plumbing check across your Qatar villa.</p>
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

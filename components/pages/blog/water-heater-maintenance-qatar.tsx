"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function WaterHeaterMaintenanceQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-slate-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-slate-500/20 text-slate-300 rounded-full px-2.5 py-1">Plumbing</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Water Heater Maintenance in Qatar: What Villa Owners Should Know</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Qatar's water heaters work harder and age faster than in most countries — a combination of hard water, high year-round usage, and heat that most manufacturers didn't design for. Here's what villa owners should know to keep hot water reliable and avoid early replacement.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">Why Water Heaters Struggle in Qatar</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Qatar's tap water has a high mineral content. As water heats, dissolved minerals precipitate out and settle as scale on the heating element and tank bottom. Over months, this scale layer insulates the element from the water, forcing it to work harder and longer to reach temperature — and eventually causing the element to overheat and fail. Combined with near-constant hot water demand for showers, dishwashing, and laundry, this means Qatar water heaters accumulate scale considerably faster than in low-mineral-content countries.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Signs of Sediment Buildup</h2>
            <ul className="space-y-2 mb-6 pl-4">
              <li className="text-muted-foreground">Popping, rumbling, or knocking sounds from the tank (steam bubbles escaping through scale)</li>
              <li className="text-muted-foreground">Hot water running out faster than it used to</li>
              <li className="text-muted-foreground">Longer time to reach hot temperature</li>
              <li className="text-muted-foreground">Reduced hot water pressure at taps</li>
              <li className="text-muted-foreground">Rusty or discolored hot water when a tap is first opened</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">Any of these on their own is worth a look; several together usually means significant sediment has already built up.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Recommended Maintenance Frequency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Given Qatar's water hardness, an annual tank flush is the general recommendation for most villas — more often (every 6 months) for larger households with heavy hot water usage, or properties on well/borehole water with especially high mineral content. A flush clears loose sediment before it hardens into a bonded scale layer that's much harder to remove.</p>

            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">What an Annual Water Heater Service Includes</h3>
              <div><strong className="text-foreground">Tank flush:</strong> <span className="text-muted-foreground">draining the tank fully to remove loose sediment from the bottom.</span></div>
              <div><strong className="text-foreground">Anode rod check:</strong> <span className="text-muted-foreground">the sacrificial anode rod protects the tank from corrosion — it depletes over time and needs replacing periodically.</span></div>
              <div><strong className="text-foreground">Heating element inspection:</strong> <span className="text-muted-foreground">checking for visible scale buildup and testing element function.</span></div>
              <div><strong className="text-foreground">Pressure relief valve test:</strong> <span className="text-muted-foreground">a safety valve that must operate correctly to prevent dangerous pressure buildup.</span></div>
              <div><strong className="text-foreground">Thermostat check:</strong> <span className="text-muted-foreground">confirming the unit heats to the correct, safe temperature.</span></div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Storage vs. Tankless: Which Suits a Qatar Villa?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Most Qatar villas use storage tank heaters, often one per bathroom or a centralized system feeding multiple points. Storage heaters are simpler to maintain and more tolerant of Qatar's water hardness than tankless units, whose narrow internal passages are more prone to scale-related flow restriction. If you're considering a tankless system for space or efficiency reasons, factor in more frequent descaling as part of the tradeoff.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">When to Repair vs. Replace</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">A well-maintained water heater in Qatar typically lasts 6-10 years, somewhat shorter than in milder climates due to the scale factor. Repair makes sense for isolated issues — a failed element, a faulty thermostat, or a stuck valve — in a unit under 6 years old. Beyond that, especially with visible tank corrosion or repeated element failures, replacement is usually more cost-effective than continued repairs.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book a Water Heater Service for Your Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Tank flushing, anode rod replacement, and full water heater servicing across Doha, Pearl Qatar, Lusail, West Bay, and Simaisma.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for Water Heater Service</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/plumbing">Plumbing Service Details <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

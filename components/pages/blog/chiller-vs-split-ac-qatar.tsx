"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Chiller vs Split AC: Which System Is in Your Qatar Villa?",
  "datePublished": "2026-03-05",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "Chiller or split AC? Many Qatar villa owners don't know which system they have or what it means for maintenance. This guide explains the difference, the pros and cons, and the maintenance requirements for each.",
  "mainEntityOfPage": "https://homekeep.qa/blog/chiller-vs-split-ac-qatar"
};

export default function ChillerVsSplitAcQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Chiller vs Split AC in Qatar: What's the Difference? | Homekeep"
        description="Chiller-fed FCU or split AC? Many Qatar villa owners don't know which system they have. This guide explains the difference, maintenance needs, and costs for Pearl Qatar, Lusail, and Doha homes."
        canonical="https://homekeep.qa/blog/chiller-vs-split-ac-qatar"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-cyan-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-cyan-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full px-2.5 py-1">Systems Guide</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />March 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />6 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Chiller vs Split AC: Which System Is in Your Qatar Villa?
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Many homeowners in Qatar — especially those in The Pearl, Lusail, or newer Doha compounds — live with a cooling system they don't fully understand. Knowing which system you have is essential for maintenance, troubleshooting, and cost control.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How to Tell Which System You Have</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="border border-border rounded-2xl p-5 bg-card">
                <div className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide text-primary">Split AC System</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Visible wall-mounted or cassette indoor unit in each room</li>
                  <li>✓ Each unit has its own dedicated outdoor compressor</li>
                  <li>✓ Refrigerant runs directly between indoor and outdoor unit</li>
                  <li>✓ Each unit has its own remote control</li>
                  <li>✓ Outdoor units visible on roof or external wall</li>
                </ul>
              </div>
              <div className="border border-border rounded-2xl p-5 bg-card">
                <div className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide text-cyan-600">Chiller-Fed FCU System</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Ceiling-mounted or concealed FCU units in each room</li>
                  <li>✓ Chilled water pipes run through the building</li>
                  <li>✓ One or more large chillers (usually in a plant room or roof)</li>
                  <li>✓ Thermostat controls each FCU, not a refrigerant circuit</li>
                  <li>✓ Common in Pearl Qatar, Lusail, and managed compounds</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Is a Chiller System?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A chiller cools water (or a water-glycol mixture) to around 6–12°C and circulates it through insulated pipes to fan coil units (FCUs) throughout your villa or building. Each FCU blows air over coils carrying this chilled water, cooling the room. The chiller sits in a plant room and handles the refrigeration cycle centrally — meaning your individual rooms don't have compressors or refrigerant; they just have fan-and-coil units connected to a shared chilled water loop.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This system is common in Pearl Qatar, Lusail, and high-end compound villas because it's efficient at scale, quiet, and allows more precise zone control. It's also the system used in most commercial buildings and hotels in Qatar.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Maintenance Differences</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left p-3 font-semibold text-foreground rounded-tl-xl">Maintenance Task</th>
                    <th className="text-center p-3 font-semibold text-primary">Split AC</th>
                    <th className="text-center p-3 font-semibold text-cyan-600 rounded-tr-xl">Chiller + FCU</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Filter cleaning", "Every 4–6 weeks", "Every 4–6 weeks per FCU"],
                    ["Coil clean", "Every 3 months", "Every 3 months per FCU"],
                    ["Drain service", "Every 3 months", "Every 3 months per FCU"],
                    ["Refrigerant check", "Annual or as needed", "Not applicable (no refrigerant at FCU)"],
                    ["Compressor service", "Annual check", "Annual chiller service (centralised)"],
                    ["Chilled water quality check", "Not applicable", "Annual water treatment"],
                    ["Emergency failure impact", "One room loses cooling", "Multiple rooms or whole villa"],
                  ].map(([task, split, chiller], i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="p-3 text-muted-foreground">{task}</td>
                      <td className="p-3 text-center text-muted-foreground">{split}</td>
                      <td className="p-3 text-center text-muted-foreground">{chiller}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Which Is Better for Qatar?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Neither system is universally better — they serve different contexts. For large villas or buildings with many rooms, a chiller system is typically more efficient and easier to manage centrally. For smaller apartments or villas where individual room control and simpler maintenance is preferred, split ACs offer more flexibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The key difference for Qatar homeowners is the failure mode. A split AC failure affects one room. A chiller failure — if the chiller itself breaks down — can affect the entire villa. This makes chiller preventive maintenance critically important, and an AMC that includes chiller service particularly valuable in Qatar's summer.
            </p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">We Service Both — Split AC and Chiller-FCU Systems</h3>
              <p className="text-muted-foreground text-sm mb-4">Our technicians are trained on all AC system types. Pearl Qatar, Lusail, West Bay, Simaisma, and Doha covered.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for a Quote</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/chiller-maintenance">Chiller Maintenance <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

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
  "headline": "How Often Should You Service Your AC in Qatar?",
  "datePublished": "2025-06-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "How often should you service your AC in Qatar? Expert advice on AC service frequency, signs of a dirty unit, and why quarterly servicing is essential in Qatar's climate.",
  "mainEntityOfPage": "https://homekeep.qa/blog/how-often-ac-service-qatar"
};

export default function HowOftenAcServiceQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="How Often Should You Service Your AC in Qatar? | Homekeep"
        description="How often should you service your AC in Qatar? Expert advice on AC service frequency — why Qatar's heat and dust demand quarterly servicing and what happens when you skip."
        canonical="https://homekeep.qa/blog/how-often-ac-service-qatar"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-blue-300 text-sm mb-6 hover:underline">
                ← Back to all articles
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full px-2.5 py-1">AC Maintenance</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />June 2025</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                How Often Should You Service Your AC in Qatar?
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">Qatar's extreme heat and pervasive dust make AC maintenance more critical than almost anywhere else in the world. Here's exactly how often you should be servicing your units — and why skipping a service costs more than the service itself.</p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">The Short Answer: Every 3 Months</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">In Qatar, the standard recommendation for AC servicing is <strong>quarterly — every three months</strong>. This is more frequent than the "twice a year" advice you'll find in temperate climates, and for good reason.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Qatar's environment combines two factors that are uniquely hard on air conditioning:</p>
              <ul className="space-y-2 mb-6 pl-4">
                <li className="text-muted-foreground"><strong className="text-foreground">Extreme heat:</strong> Summer temperatures regularly exceed 45°C, forcing AC systems to run at full capacity for 8–12 hours a day, every day. That's an enormous operating load compared to a European or American household.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Chronic dust:</strong> Qatar's desert air carries fine particulate matter year-round. Shamal winds in spring and summer deposit dust directly into outdoor condenser units and through every gap in a building. Filters that might last three months in the UK need cleaning every 4–6 weeks in Qatar.</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Happens if You Skip AC Service in Qatar?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Skipping an AC service in Qatar isn't like skipping a car wash. The consequences compound quickly:</p>
              <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
                <div><strong className="text-foreground">1. Higher electricity bills.</strong> <span className="text-muted-foreground">A dirty evaporator coil forces your AC to work harder to achieve the same cooling. Studies show a 25–40% reduction in efficiency is common on neglected units in dusty climates. In Qatar, that's significant money on your QEWC bill.</span></div>
                <div><strong className="text-foreground">2. Compressor failure.</strong> <span className="text-muted-foreground">When airflow is restricted by dirty coils, the compressor overheats. In Qatar's summer, an already-stressed compressor + restricted airflow = a failed compressor. Replacement costs range from QAR 800 to QAR 3,000+ depending on unit size.</span></div>
                <div><strong className="text-foreground">3. Water leaks.</strong> <span className="text-muted-foreground">Blocked drain pans are the most common cause of indoor water damage in Qatar villas. A clogged FCU or split AC drain can release litres of water onto your ceiling, walls, and flooring overnight.</span></div>
                <div><strong className="text-foreground">4. Poor air quality.</strong> <span className="text-muted-foreground">Dirty coils and filters become breeding grounds for mould and bacteria, which your AC then circulates throughout your home. This is a genuine health concern, particularly for children and anyone with respiratory conditions.</span></div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Seasonal Guidance for Qatar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { season: "Before Summer (April)", action: "Full service before peak load season. Refrigerant check, full coil clean, drain flush, filter replacement. This is the most important service of the year." },
                  { season: "Mid-Summer (July)", action: "Filter clean and drain check. Your system has been running hard for 3 months. A mid-summer check prevents emergencies during the hottest weeks." },
                  { season: "After Summer (October)", action: "Full post-season service. Flush out the season's buildup, check for wear from months of heavy use, address any minor issues before they become winter problems." },
                  { season: "Winter (January)", action: "Lighter service or filter clean. Winter usage is lower but units still accumulate dust. A quick clean keeps them ready for the next summer season." },
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-xl p-4 bg-card">
                    <div className="font-bold text-foreground text-sm mb-1">{item.season}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Special Cases: FCU, AHU, and Chiller Systems</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">If your villa uses a central chiller-fed FCU system (common in Pearl Qatar, Lusail, and newer Doha compounds), the same quarterly rule applies — but the servicing is more involved:</p>
              <ul className="space-y-2 mb-6 pl-4">
                <li className="text-muted-foreground"><strong className="text-foreground">FCU units</strong> need coil cleaning, drain pan service, and fan motor inspection every 3 months.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">AHUs</strong> serving multiple zones should be serviced at least quarterly — filter changes may be needed more frequently depending on your building's dust exposure.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Chillers</strong> should have a comprehensive service annually, with visual inspections and condenser checks every 6 months.</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">The Easiest Solution: An Annual Maintenance Contract (AMC)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The most common reason Qatar homeowners miss services is simply forgetting to book them. An Annual Maintenance Contract (AMC) removes that entirely — we schedule your quarterly visits, send reminders, and you don't need to think about it.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">AMC customers also benefit from priority emergency response (no waiting behind ad-hoc bookings in peak summer), discounted parts, and zero call-out charges. For most villas in Qatar, the AMC pays for itself if it prevents even one compressor failure per year.</p>
            </div>

            <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book a Service for Your Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Our technicians cover Pearl Qatar, Lusail, West Bay, Simaisma, and all Doha areas. Same/next-day availability.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for a Quote</a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/amc">View AMC Packages <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

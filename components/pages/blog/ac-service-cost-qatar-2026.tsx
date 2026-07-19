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
  "headline": "AC Service Cost in Qatar 2026 — What to Expect",
  "datePublished": "2026-01-15",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "How much does AC servicing cost in Qatar in 2026? Full price breakdown for split AC service, FCU cleaning, AHU service, and chiller maintenance in Doha, Pearl Qatar, and Lusail.",
  "mainEntityOfPage": "https://homekeep.qa/blog/ac-service-cost-qatar-2026"
};

const rows = [
  ["Split AC — standard service (filter, coil, drain)", "QAR 150 – 250", "Per unit"],
  ["FCU unit — standard service", "QAR 200 – 280", "Per unit"],
  ["FCU unit — chemical deep clean", "QAR 300 – 400", "Per unit"],
  ["AHU — full service", "QAR 600 – 900", "Per unit"],
  ["AHU — chemical coil clean", "QAR 800 – 1,200", "Per unit"],
  ["Chiller — comprehensive service", "QAR 1,000 – 1,500", "Per unit"],
  ["Chiller — condenser tube clean", "QAR 1,500 – 2,200", "Per unit"],
  ["Refrigerant top-up (R410A)", "QAR 150 – 250", "Per unit, excl. leak repair"],
  ["Emergency call-out fee", "QAR 100 – 200", "Waived with AMC"],
];

export default function AcServiceCostQatar2026() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC Service Cost in Qatar 2026 — Full Price Guide | Homekeep"
        description="How much does AC servicing cost in Qatar in 2026? Prices for split AC, FCU, AHU, and chiller maintenance in Doha, Pearl Qatar, and Lusail. Compare Homekeep's transparent rates."
        canonical="https://homekeep.qa/blog/ac-service-cost-qatar-2026"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-blue-950 to-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-blue-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full px-2.5 py-1">Pricing</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />January 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                AC Service Cost in Qatar 2026 — What to Expect
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              AC service prices in Qatar vary widely — and opaque pricing is one of the biggest frustrations homeowners face when booking maintenance. This guide gives you realistic 2026 market rates so you know what to expect before you pick up the phone.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-5">2026 AC Service Price Guide — Qatar</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left p-3 font-semibold text-foreground rounded-tl-xl">Service</th>
                    <th className="text-right p-3 font-semibold text-foreground">Market Range (QAR)</th>
                    <th className="text-right p-3 font-semibold text-foreground rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map(([service, price, note], i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="p-3 text-muted-foreground">{service}</td>
                      <td className="p-3 text-right font-medium text-foreground">{price}</td>
                      <td className="p-3 text-right text-xs text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10 -mt-6">Prices are market estimates for 2026 in Qatar and vary by provider, unit size, and condition. Homekeep's fixed published prices: FCU service QAR 225, FCU deep clean QAR 320, AHU service QAR 700, AHU chemical clean QAR 900, chiller service QAR 1,200.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Affects the Price?</h2>
            <div className="space-y-4 mb-8">
              {[
                ["Unit type and size", "Split ACs are the cheapest to service. FCU units are comparable but vary by access difficulty. AHUs and chillers are more complex and expensive to service — they involve more components, more time on-site, and often specialist equipment."],
                ["Unit condition", "A unit that hasn't been serviced in two or more years will cost more to bring back to standard — heavy biofilm, blocked drains, and corroded fins all require additional time and chemical treatment."],
                ["Number of units", "Most providers offer per-unit pricing, but volume discounts apply when servicing 5+ units in a single visit. This makes villas with many FCUs cheaper per unit than a small apartment with two splits."],
                ["Access and location", "Units in confined ceiling voids, high-rise plant rooms, or requiring scaffolding access will carry an additional charge. Ground-floor split ACs with easy outdoor access are the cheapest to service."],
                ["Emergency vs. scheduled", "Emergency call-outs (same-day, out-of-hours) carry a premium of QAR 100–200 over the base service price. AMC holders typically pay no call-out fee."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <strong className="text-foreground">{title}: </strong>
                    <span className="text-muted-foreground">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">AMC vs. Pay-As-You-Go: The Cost Comparison</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a typical 4-bedroom villa with 8 FCU units and 1 AHU, the annual cost of quarterly servicing on a pay-as-you-go basis runs to approximately <strong className="text-foreground">QAR 8,000–10,000</strong>. An Annual Maintenance Contract for the same property typically costs <strong className="text-foreground">QAR 4,500–6,000</strong> — a saving of 30–45%, plus priority summer response and no call-out fees.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The AMC break-even point for most Qatar villas is just 2 scheduled services. Everything after that — including emergency visits — is included.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Red Flags When Getting Quotes</h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8 space-y-3">
              {[
                "Prices significantly below market rate often mean the technician will upsell unnecessary parts once on-site.",
                "No published price list — reputable providers list their rates; those who don't often apply variable pricing based on perceived customer budget.",
                "Refrigerant top-ups offered without a leak test — low refrigerant always means a leak. Topping up without fixing the leak is wasted money.",
                "Pressure to sign a contract on the spot without a written scope of work or price breakdown.",
              ].map((flag, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-muted-foreground text-sm">{flag}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Get a Transparent Quote from Homekeep</h3>
              <p className="text-muted-foreground text-sm mb-4">Fixed prices. No call-out surprises. We cover Pearl Qatar, Lusail, West Bay, Simaisma, and all Doha areas.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for a Quote</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/pricing">See Our Prices <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

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
  "headline": "Is an Annual Maintenance Contract Worth It in Qatar?",
  "datePublished": "2025-03-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "Is an AC Annual Maintenance Contract (AMC) worth it in Qatar? We break down the real numbers for a typical Doha villa and compare AMC vs pay-as-you-go servicing.",
  "mainEntityOfPage": "https://homekeep.qa/blog/amc-worth-it-qatar"
};

export default function AmcWorthItQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Is an AC Annual Maintenance Contract Worth It in Qatar? | Homekeep"
        description="AMC vs pay-as-you-go AC servicing in Qatar — we break down the real numbers for a typical Doha villa. Is an Annual Maintenance Contract worth it? Honest analysis."
        canonical="https://homekeep.qa/blog/amc-worth-it-qatar"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-green-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-green-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-green-500/20 text-green-300 rounded-full px-2.5 py-1">AMC</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />March 2025</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Is an Annual Maintenance Contract Worth It in Qatar?</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">AMC or pay-as-you-go? We break down the real numbers for a typical Doha villa — and explain why most homeowners find an Annual Maintenance Contract saves money, stress, and time over a single AC season.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-6">The Numbers: A Typical Qatar Villa</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Let's use a realistic example: a 4-bedroom villa in Pearl Qatar or Al Waab with 8 FCU units and 1 AHU. Pay-as-you-go vs. AMC Standard over one year:</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left p-3 font-semibold text-foreground rounded-tl-xl">Service</th>
                    <th className="text-right p-3 font-semibold text-foreground">Pay-as-you-go</th>
                    <th className="text-right p-3 font-semibold text-primary rounded-tr-xl">AMC Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["4× FCU service visits (8 units @ QAR 225)", "QAR 7,200", "Included"],
                    ["1× AHU full service", "QAR 700", "Included"],
                    ["Emergency call-out fees (avg. 2/year)", "QAR 400", "QAR 0"],
                    ["1× refrigerant top-up (1 unit)", "QAR 200", "Included"],
                    ["Priority scheduling (summer emergencies)", "Not guaranteed", "Guaranteed"],
                  ].map(([item, payg, amc], i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="p-3 text-muted-foreground">{item}</td>
                      <td className="p-3 text-right text-muted-foreground">{payg}</td>
                      <td className="p-3 text-right font-medium text-primary">{amc}</td>
                    </tr>
                  ))}
                  <tr className="bg-primary/5 font-semibold">
                    <td className="p-3 text-foreground rounded-bl-xl">Total</td>
                    <td className="p-3 text-right text-foreground">~QAR 8,500</td>
                    <td className="p-3 text-right text-primary rounded-br-xl">From QAR 4,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">That's roughly <strong className="text-foreground">QAR 4,000 saved per year</strong> on the same services, before considering the value of priority summer response — which is genuinely priceless if your AC fails during a 47°C July week.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">The Non-Financial Case for an AMC</h2>
            <div className="space-y-4 mb-8">
              {[
                ["No scheduling friction", "The single biggest reason Qatar homeowners miss services is forgetting to book them. With an AMC, we contact you to schedule each visit. You don't need to remember, search for a contractor, or wait for quotes."],
                ["One relationship, not many", "When your AC breaks down at 11pm in August, you want one number to call — a team that already knows your villa, your systems, and your history. Ad-hoc contractors don't have that context."],
                ["Better technician familiarity", "AMC technicians visit your property quarterly. They know which unit has the weak drain, which FCU runs hot, and which filter gets clogged first. That institutional knowledge catches problems before they escalate."],
                ["Genuine emergency priority", "In Qatar's peak summer, every AC contractor is overwhelmed. AMC customers jump the queue. This isn't just a perk — during a July heatwave, it's the difference between a same-day fix and waiting three days."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{title}: </strong>
                    <span className="text-muted-foreground">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">When an AMC Might Not Be Right for You</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">An AMC is less compelling if: your property is a small apartment with only 2–3 units; you spend significant time outside Qatar and the property is unoccupied for extended periods; or your systems are brand new and under manufacturer warranty. In those cases, pay-as-you-go may be more flexible. That said, even for smaller properties, the priority response benefit alone justifies an Essential AMC during Qatar's summer months.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Get a Free AMC Quote for Your Property</h3>
              <p className="text-muted-foreground text-sm mb-4">We'll assess your systems and give you a firm AMC price within 24 hours. No obligation.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548?text=Hi%2C%20I'm%20interested%20in%20an%20AMC%20for%20my%20property%20in%20Qatar" target="_blank" rel="noreferrer">WhatsApp for AMC Quote</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/amc">View AMC Packages <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

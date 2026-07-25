"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function AmcVsPayPerVisitQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-slate-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-emerald-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full px-2.5 py-1">AMC</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />6 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">AMC vs Pay-Per-Visit: Which Saves More in Qatar?</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Qatar villa owners generally choose between two maintenance models: an Annual Maintenance Contract (AMC) with a fixed yearly fee, or paying per visit as issues come up. The right choice depends mostly on how many units you have and how you value convenience — here's the actual math.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">What an AMC Includes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">A typical residential AMC in Qatar covers scheduled quarterly servicing for AC/FCU units, priority emergency response, and often discounted parts or call-out waivers. Packages generally start from around QAR 2,000 per year for a standard villa, scaling up with the number of units and systems covered (chiller, AHU, plumbing add-ons).</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Pay-Per-Visit Looks Like</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Without a contract, you pay for each service individually: roughly QAR 150 per split AC service, QAR 225 per FCU unit, and higher for AHU or chiller work. You call when something needs attention, with no guaranteed response priority during peak summer demand.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">A Simple Cost Comparison</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Take a villa with 6 FCU units serviced quarterly (the recommended frequency in Qatar's climate):</p>
            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              <div><strong className="text-foreground">Pay-per-visit:</strong> <span className="text-muted-foreground">6 units × QAR 225 × 4 visits/year = QAR 5,400/year, before any repairs or emergency call-outs.</span></div>
              <div><strong className="text-foreground">AMC:</strong> <span className="text-muted-foreground">Comparable coverage typically runs QAR 2,500–QAR 3,500/year depending on package, often with call-out fees waived and priority dispatch included.</span></div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">For villas with multiple units serviced on a regular schedule, an AMC is very often the cheaper option on pure cost alone — before even factoring in the convenience of not scheduling four separate visits a year.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">When Pay-Per-Visit Makes More Sense</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">If you have only one or two units and don't need frequent servicing — for example, a small apartment or a rarely-occupied property — paying per visit as issues arise can work out cheaper than a contract with a base yearly fee. AMCs make the most financial sense once you're managing 4+ units or multiple systems (AC plus chiller plus plumbing).</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">The Non-Cost Factor: Priority Response</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">During Qatar's peak summer months, service providers get flooded with emergency calls. AMC customers typically receive priority dispatch ahead of pay-per-visit customers — which can matter more than the cost difference when your AC fails on a 45°C day. This is often the deciding factor for villa owners who choose AMC even when the raw numbers are close.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Get an AMC Quote for Your Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Tell us your unit count and systems, and we'll put together a package that actually reflects your villa's needs.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548?text=Hi%2C%20I'd%20like%20an%20AMC%20quote" target="_blank" rel="noreferrer">Get AMC Quote</a></Button>
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

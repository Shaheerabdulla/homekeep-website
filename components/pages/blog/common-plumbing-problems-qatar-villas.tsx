"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Common Plumbing Problems in Qatar Villas — and How to Prevent Them",
  "datePublished": "2026-04-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "The most common plumbing problems in Qatar villas: hot water failure, slab leaks, low pressure, blocked drains, and hard water damage. Prevention tips for Pearl Qatar and Doha homeowners.",
  "mainEntityOfPage": "https://homekeep.qa/blog/common-plumbing-problems-qatar-villas"
};

const problems = [
  {
    title: "Hot Water System Failure",
    urgency: "High",
    desc: "Qatar's water heaters work hard. The combination of very hot ambient temperatures, high humidity in coastal areas, and Qatar's famously hard water accelerates sediment buildup in tank-type water heaters. The result: reduced heating efficiency, strange rumbling or popping sounds as sediment is disturbed, and eventually premature failure of the heating element or tank. Annual flushing of tank-type heaters and anode rod replacement every 2–3 years dramatically extends heater life.",
    tip: "If your water heater is more than 8 years old and you've never had it serviced, book a flush and inspection before it fails completely.",
  },
  {
    title: "Slab and Concealed Pipe Leaks",
    urgency: "Critical",
    desc: "Qatar villas are commonly built with pipes running through concrete slabs or within rendered walls — this makes leak detection genuinely difficult. Slab leaks often present as inexplicably high water bills, warm spots on tiled floors, or damp patches on walls with no obvious source. They are frequently caused by Qatar's hard water eroding copper pipes over time, or by ground movement in sandy soil. Early detection with acoustic or thermal imaging equipment is essential — left untreated, slab leaks cause serious structural damage.",
    tip: "If your water bill has increased by more than 20% without a change in usage, suspect a concealed leak and call for a detection survey.",
  },
  {
    title: "Low Water Pressure",
    urgency: "Medium",
    desc: "Low pressure is endemic in many Doha villas, particularly in properties with older pipework or those at the end of long water supply runs. It can also be caused by a faulty pressure regulator, partially closed gate valves, or mineral buildup restricting flow in pipes and fixtures. Shower heads and tap aerators in Qatar need cleaning or replacement every 12–18 months due to calcium and magnesium deposits from hard water.",
    tip: "Unscrew your shower head and soak it in white vinegar for 30 minutes. If pressure improves significantly, mineral buildup was the culprit.",
  },
  {
    title: "Blocked Drains and Slow Drainage",
    urgency: "Medium",
    desc: "Qatar's hard water leaves calcium scale deposits inside drain pipes over time, progressively narrowing the pipe bore and slowing drainage. Compound this with the usual culprits (hair, soap scum, food waste) and blockages become inevitable in villas that aren't maintained. Outdoor drains are also vulnerable to sand and debris ingress, particularly after Shamal windstorms. Professional jetting is far more effective than chemical drain cleaners, which can damage older pipes.",
    tip: "Never pour grease or oil down drains — it solidifies in Qatar's moderately warm water temperatures and combines with calcium scale to create stubborn blockages.",
  },
  {
    title: "Hard Water Damage to Fixtures and Appliances",
    urgency: "Low-Medium",
    desc: "Qatar's municipal water supply is among the hardest in the world, with extremely high calcium and magnesium content. Without water softeners or filtration, this water causes white scale buildup on every surface it touches, damages washing machine heating elements and dishwasher components, furs up shower heads and taps, and gradually restricts water heater efficiency. Many Pearl Qatar and Lusail villas now install whole-house water softeners or at minimum point-of-use filters for drinking water.",
    tip: "Scale on external surfaces (taps, showers) can be managed with vinegar. Scale inside pipes and appliances requires professional treatment or replacement.",
  },
  {
    title: "Toilet Cistern and Float Valve Faults",
    urgency: "Low-Medium",
    desc: "A constantly running toilet is one of Qatar's most common 'silent' water wasters — a faulty float valve or flapper can waste 200–500 litres per day without being immediately obvious. Hard water degrades float valve rubber seals faster than in softer-water countries. If you hear your toilet cistern refilling when nobody has flushed it, the float valve needs replacing — this is a quick, cheap repair that prevents significant water waste.",
    tip: "Add a few drops of food colouring to the cistern. If colour appears in the bowl without flushing, the flapper is faulty and needs replacing.",
  },
];

const urgencyColors: Record<string, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  "Medium": "bg-yellow-100 text-yellow-700",
  "Low-Medium": "bg-blue-100 text-blue-700",
};

export default function CommonPlumbingProblemsQatarVillas() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Common Plumbing Problems in Qatar Villas — Prevention Guide | Homekeep"
        description="The most common plumbing problems in Qatar villas: slab leaks, hot water failure, low pressure, hard water damage. Prevention tips and when to call a plumber in Doha and Pearl Qatar."
        canonical="https://homekeep.qa/blog/common-plumbing-problems-qatar-villas"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-blue-900 to-teal-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-teal-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full px-2.5 py-1">Plumbing</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />April 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />7 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Common Plumbing Problems in Qatar Villas — and How to Prevent Them
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Qatar's unique combination of extremely hard water, high temperatures, and a relatively young housing stock creates a specific set of plumbing challenges. Here are the six most common issues we see in villas across Pearl Qatar, Lusail, West Bay, and Doha — and what you can do about them.
            </p>

            <div className="space-y-10">
              {problems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-xl font-serif font-bold text-foreground">{i + 1}. {p.title}</h2>
                    <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${urgencyColors[p.urgency]}`}>{p.urgency}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex items-start gap-2 bg-secondary/40 rounded-xl p-3">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Pro tip: </strong>{p.tip}</p>
                  </div>
                  {i < problems.length - 1 && <div className="mt-8 border-b border-border" />}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Plumbing Issues in Your Qatar Villa?</h3>
              <p className="text-muted-foreground text-sm mb-4">Our plumbers cover all Qatar areas. Leak detection, drain jetting, water heater service, and full villa plumbing maintenance.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for Plumbing Service</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/plumbing">Plumbing Services <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

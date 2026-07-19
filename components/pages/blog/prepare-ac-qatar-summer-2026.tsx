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
  "headline": "How to Prepare Your AC for Qatar Summer 2026",
  "datePublished": "2026-02-10",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "Qatar summer 2026 AC preparation checklist. What to service before June, how to avoid breakdown in peak heat, and when to book your pre-summer AC service in Doha and Pearl Qatar.",
  "mainEntityOfPage": "https://homekeep.qa/blog/prepare-ac-qatar-summer-2026"
};

const checklist = [
  {
    when: "February – March",
    title: "Book Your Pre-Summer Service Now",
    desc: "April is the last safe window to get your AC serviced before the heat arrives. By late April every reliable contractor in Qatar is booked out. If you wait until your AC fails in June, you'll be competing with every other villa in your compound for the same two available technicians. Book your service slot in February or March — this is the single most impactful thing you can do for summer comfort.",
  },
  {
    when: "March – April",
    title: "Full Service: Coils, Drain, Filters, Refrigerant Check",
    desc: "A proper pre-summer service includes: evaporator and condenser coil inspection and clean, drain pan and drain line flush, filter service or replacement, refrigerant level and pressure check, electrical connections and capacitor inspection, and a full performance run-test. This isn't a filter rinse — it's a comprehensive check of every component that will be under maximum load for the next five months.",
  },
  {
    when: "April",
    title: "Chemical Clean If Needed",
    desc: "If your units weren't deep-cleaned last year, a chemical clean before summer is strongly recommended. Coils coated in biofilm and dust can't transfer heat efficiently — which means your compressor runs harder and longer, your electricity bill climbs, and your rooms never quite reach the set temperature. A chemical clean restores full efficiency before the season where it matters most.",
  },
  {
    when: "April – May",
    title: "Check and Clean Outdoor Condenser Units",
    desc: "Qatar's spring Shamal winds deposit significant dust on outdoor condenser coils. A blocked condenser can't reject heat properly — which causes high discharge pressure, compressor overheating, and eventual failure. Before summer, check every outdoor unit: clear debris from the coil fins, ensure unrestricted airflow around the unit, and check that the fan blade is undamaged. Never cover outdoor units or place objects within 1 metre of them.",
  },
  {
    when: "May",
    title: "Test Every Room and Zone",
    desc: "Before the peak heat arrives, run every AC unit to its lowest set temperature and confirm it reaches the target within a reasonable time. Note any rooms that are slow to cool, any units making new noises, or any areas that simply won't get cold. Catching these problems in May — when technicians are still available — is far better than discovering them during a 47°C July week.",
  },
  {
    when: "June onwards",
    title: "Mid-Summer Filter Checks (DIY)",
    desc: "In Qatar's summer, filters need checking every 4–6 weeks. Slide out each filter, hold it to the light, and rinse under water if it's more than 30% clogged. This is the one maintenance task you can do yourself — and doing it regularly makes a meaningful difference to efficiency and air quality. Keep a reminder on your calendar every 5 weeks.",
  },
];

export default function PrepareAcQatarSummer2026() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="How to Prepare Your AC for Qatar Summer 2026 | Homekeep Checklist"
        description="Qatar summer 2026 AC preparation checklist. What to service, when to book, and how to avoid a breakdown in peak heat. Expert guide for Pearl Qatar, Lusail, and Doha villas."
        canonical="https://homekeep.qa/blog/prepare-ac-qatar-summer-2026"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-amber-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-amber-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full px-2.5 py-1">Seasonal Guide</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />February 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />6 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                How to Prepare Your AC for Qatar Summer 2026
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Qatar's summer begins in earnest in May and peaks between June and September — with outdoor temperatures regularly exceeding 45°C and indoor humidity making every degree feel worse. Your AC is not optional. Here's how to make sure it's ready.
            </p>

            <div className="space-y-8 mb-10">
              {checklist.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-5">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">{item.when}</div>
                    <h2 className="text-xl font-serif font-bold text-foreground mb-2">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
              <p className="text-amber-800 font-semibold text-sm mb-1">⚠️ The Most Common Summer AC Mistake in Qatar</p>
              <p className="text-amber-700 text-sm leading-relaxed">Waiting until the AC breaks to book a service. In June and July, every contractor in Qatar is running at full capacity — response times extend to 3–5 days, parts may need to be ordered, and pricing can be higher due to demand. A pre-season service in March or April costs the same as an emergency callout, takes 90 minutes, and prevents the breakdown entirely.</p>
            </div>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book Your 2026 Pre-Summer AC Service</h3>
              <p className="text-muted-foreground text-sm mb-4">March and April slots fill fast. Cover Pearl Qatar, Lusail, West Bay, Simaisma, and Doha. Book now to guarantee availability.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548?text=Hi%2C%20I'd%20like%20to%20book%20a%20pre-summer%20AC%20service%20for%202026" target="_blank" rel="noreferrer">Book Pre-Summer Service</a></Button>
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

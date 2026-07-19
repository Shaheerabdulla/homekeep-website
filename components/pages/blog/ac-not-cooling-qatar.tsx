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
  "headline": "AC Not Cooling in Qatar Summer — What to Check First",
  "datePublished": "2025-05-15",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "AC not cooling in Qatar? Before calling a technician, check these common causes: dirty filters, low refrigerant, blocked condenser, thermostat settings, and outdoor unit issues.",
  "mainEntityOfPage": "https://homekeep.qa/blog/ac-not-cooling-qatar"
};

export default function AcNotCoolingQatar() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC Not Cooling in Qatar Summer? What to Check First | Homekeep"
        description="AC running but not cooling in Qatar? Check these 6 common causes before calling a technician. Some fixes take 5 minutes — others need a professional. Qatar-specific guide."
        canonical="https://homekeep.qa/blog/ac-not-cooling-qatar"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-orange-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-orange-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-orange-500/20 text-orange-300 rounded-full px-2.5 py-1">Troubleshooting</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />May 2025</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />6 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">AC Not Cooling in Qatar Summer — What to Check First</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Your AC is running but the room isn't cooling. In Qatar's summer, this needs resolving quickly. Before you call a technician, run through these checks — some can be fixed in five minutes without a callout, and others will help you describe the problem accurately when you do call.</p>

            {[
              { num: "1", title: "Check the Filter First", callout: false, desc: "This solves roughly 30% of 'AC not cooling' calls. A completely blocked filter starves the unit of airflow and prevents heat exchange. Find your indoor unit's filter panel (usually a grille on the front or underside), slide out the filter, and hold it up to the light. If you can barely see through it, that's your problem. Wash it under running water, let it dry completely, and reinstall. If this is the issue, your unit should noticeably improve within an hour of restarting." },
              { num: "2", title: "Check the Thermostat Settings", callout: false, desc: "It sounds obvious, but check that your thermostat is set to 'Cool' mode (not 'Fan Only' or 'Dry'), that the set temperature is actually lower than the room temperature, and that the mode hasn't been changed accidentally. In homes with multiple people and smart thermostats, settings change. Also check that the thermostat hasn't been placed near a heat source (sunlight, lamp, oven) that's giving it a false high reading." },
              { num: "3", title: "Check the Outdoor Unit", callout: false, desc: "Go outside and look at your outdoor condenser unit. Is it running at all? Is the fan spinning? Is it buried in sand or dust on the sides and top? Qatar's dust storms can deposit enough debris on an outdoor unit in a single Shamal event to cut airflow by 50%. If the fan isn't running but the indoor unit is, you have a more serious electrical or capacitor fault. If it's running but surrounded by dust, carefully brush off the debris from the fins (without bending them) and see if cooling improves." },
              { num: "4", title: "Low Refrigerant (You Can't Fix This Yourself)", callout: true, desc: "If your filters are clean, settings are correct, and both units are running, low refrigerant is the next most likely cause. Signs include: the air blows but never feels truly cold, ice forming on the indoor unit's coils, or a hissing sound near the refrigerant lines. Refrigerant doesn't 'run out' naturally — low refrigerant means there's a leak somewhere in the system. This requires a licensed technician to locate the leak, repair it, and recharge the system. Don't let anyone just 'top up' refrigerant without fixing the leak." },
              { num: "5", title: "The Unit Is Too Small for the Space", callout: false, desc: "In Qatar's extreme summer heat, an undersized AC unit will run continuously without ever achieving the set temperature. If a unit has always struggled to cool a room, it may simply be the wrong size for the space. This is particularly common in villas where rooms have been extended, converted, or have poor insulation. A properly sized replacement unit is the only real fix." },
              { num: "6", title: "The Compressor Is Failing", callout: true, desc: "If the outdoor unit runs but blows warm air (check by feeling the air from the outdoor fan), the compressor may be failing. Compressors typically fail after years of heavy use — especially in Qatar, where units run almost year-round. You may hear a loud clicking or buzzing from the outdoor unit when it tries to start. A failing compressor needs professional diagnosis. Depending on the unit's age, replacement may be more cost-effective than repair." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-10">
                {item.callout && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-3 w-fit">
                    <AlertTriangle className="h-3.5 w-3.5" /> Needs a professional technician
                  </div>
                )}
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">{item.num}. {item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                {i < 5 && <div className="mt-8 border-b border-border" />}
              </motion.div>
            ))}

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Still Not Cooling? We Can Help.</h3>
              <p className="text-muted-foreground text-sm mb-4">Our technicians diagnose and repair AC units across Qatar — Pearl Qatar, Lusail, West Bay, Simaisma, and all Doha areas. Emergency response available.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for Emergency Repair</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><a href="tel:+97450306582">Call +974 5030 6582</a></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

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
  "headline": "5 Signs Your FCU Unit Needs Cleaning Right Now",
  "datePublished": "2025-05-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "5 warning signs your FCU fan coil unit needs cleaning: water dripping, musty smell, weak airflow, ice on coils, and rising electricity bills. Qatar villa guide.",
  "mainEntityOfPage": "https://homekeep.qa/blog/signs-fcu-needs-cleaning"
};

const signs = [
  { num: "01", title: "Water Dripping from the FCU Unit", desc: "This is the most urgent warning sign — and the most common call we receive from Pearl Qatar and Lusail villas. When an FCU drain pan fills with algae and debris, it blocks the drain line. The pan overflows and water drips from the unit onto your floor, ceiling, or walls. Left unattended, a blocked FCU drain can cause serious water damage to gypsum ceilings, wooden flooring, and built-in furniture. If your FCU is dripping, call immediately — this one won't fix itself." },
  { num: "02", title: "Musty or Mouldy Smell When the AC Runs", desc: "If your villa smells like a damp gym changing room the moment you turn on the AC, your FCU coils have mould growth. FCU evaporator coils run cold and wet — they condense moisture from the air constantly. Without regular cleaning, this moisture enables biofilm, mould, and bacteria to colonise the coil surface. Your AC then blows air over this contaminated surface and distributes the smell (and the microorganisms) throughout your home. A chemical deep clean with biocide treatment eliminates the problem. Masking it with air freshener does not." },
  { num: "03", title: "Reduced Airflow from the FCU", desc: "Hold your hand in front of the FCU grille. If the airflow feels noticeably weaker than it used to, the filter or coil is blocked. A clogged FCU filter is easy to fix — it takes five minutes to clean or replace. But if the coil fins themselves are caked with dust and debris, the restriction is more serious. Blocked coils force the fan motor to work harder, accelerating wear, and prevent adequate heat exchange. Your room takes twice as long to cool and your electricity bill climbs while the system struggles." },
  { num: "04", title: "Ice Forming on the FCU Coil", desc: "Seeing ice or frost inside your FCU unit is counterintuitive but very bad. It happens when airflow over the evaporator coil is so restricted (by a dirty coil or blocked filter) that the refrigerant gets too cold and freezes the moisture on the coil surface. Iced coils mean zero effective cooling — the ice acts as insulation. Worse, when the ice melts, it can overwhelm the drain pan and cause flooding. If you see ice, turn the fan to 'fan only' mode immediately (not off — the coil needs to defrost slowly), then book a service." },
  { num: "05", title: "Higher Electricity Bills Without Explanation", desc: "Your usage habits haven't changed but your QEWC bill has climbed significantly. Dirty FCUs are one of the most common hidden causes. A coil that's 30% coated in biofilm and dust needs to run far longer to achieve the same cooling output. Multiply that inefficiency across 8 or 12 FCU units in a large Pearl Qatar villa and the financial impact is real. We've seen clients reduce their electricity bills by 20–30% after a thorough FCU chemical clean and coil restoration." },
];

export default function SignsFcuNeedsCleaning() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="5 Signs Your FCU Unit Needs Cleaning | Qatar Villa Guide | Homekeep"
        description="5 warning signs your FCU unit needs cleaning: water dripping, musty smell, weak airflow, ice on coils, and rising electricity bills. Qatar villa guide from Homekeep."
        canonical="https://homekeep.qa/blog/signs-fcu-needs-cleaning"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-teal-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-teal-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full px-2.5 py-1">FCU Servicing</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />May 2025</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />4 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">5 Signs Your FCU Unit Needs Cleaning Right Now</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Fan coil units don't announce when they're struggling. They quietly waste energy, spread allergens, and — eventually — drip water onto your ceiling. These are the five warning signs every Pearl Qatar and Lusail villa owner should know.</p>
            <div className="space-y-10">
              {signs.map((sign, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="flex gap-5">
                    <div className="text-4xl font-serif font-bold text-primary/20 shrink-0 w-10">{sign.num}</div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-foreground mb-3">{sign.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{sign.desc}</p>
                    </div>
                  </div>
                  {i < signs.length - 1 && <div className="mt-8 border-b border-border" />}
                </motion.div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">FCU Showing Any of These Signs?</h3>
              <p className="text-muted-foreground text-sm mb-4">Our technicians cover all Pearl Qatar, Lusail, West Bay, Simaisma, and Doha properties. FCU service from QAR 225 per unit.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for FCU Service</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/fcu-servicing">FCU Service Details <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

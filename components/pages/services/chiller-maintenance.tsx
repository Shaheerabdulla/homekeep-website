"use client";

import { motion } from "framer-motion";
import { ThermometerSnowflake, CheckCircle2, Phone, Settings, ShieldCheck, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";
import { QuoteSection } from "@/components/quote-section";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chiller Maintenance Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Professional residential chiller maintenance, servicing, and repair for villas in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
  "serviceType": "Chiller Maintenance"
};

export default function ChillerMaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Chiller Maintenance Qatar | Residential Chiller Service Doha | Homekeep"
        description="Expert residential chiller maintenance and repair in Doha, Pearl Qatar, Lusail and West Bay. Preventative maintenance, emergency chiller service, and annual contracts. Call +974 50306582."
        canonical="https://homekeep.qa/services/chiller-maintenance"
        schema={schema}
      />
      <Nav />

      <main>
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-indigo-950 to-blue-900">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <ThermometerSnowflake className="h-4 w-4 mr-2" /> Chiller Maintenance
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Chiller Maintenance<br />
                <span className="text-indigo-300">Qatar & Doha</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Specialist preventative maintenance, repair, and annual contracts for residential chiller systems in Pearl Qatar, Lusail, West Bay, and Simaisma. Keep your chiller running efficiently through Qatar's demanding summers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-indigo-900 hover:bg-indigo-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Book Chiller Service <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold">
                  <a href="tel:+97450306582">Call +974 5030 6582</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Residential Chiller Maintenance Services</h2>
              <p className="text-lg text-muted-foreground">Comprehensive maintenance programs designed to extend chiller lifespan, maximize efficiency, and prevent costly breakdowns.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Settings, title: "Preventative Maintenance", desc: "Scheduled inspection of compressors, condensers, evaporators, pumps, and controls to identify and address issues before they become failures." },
                { icon: Zap, title: "Performance Optimization", desc: "Condenser tube cleaning, refrigerant level check, water treatment analysis, and system optimization to reduce energy consumption by up to 20%." },
                { icon: ThermometerSnowflake, title: "Refrigerant Management", desc: "Refrigerant level inspection, leak testing, and recharging to maintain rated chiller capacity and comply with refrigerant regulations." },
                { icon: ShieldCheck, title: "Emergency Chiller Repair", desc: "Rapid response to chiller failures — compressor faults, condenser issues, pump failures, and control system problems resolved fast." },
                { icon: CheckCircle2, title: "Annual Maintenance Contracts", desc: "Tailored AMC packages for residential chillers in Qatar — covering scheduled visits, parts, and priority emergency response." },
                { icon: Settings, title: "Controls & BMS Integration", desc: "Chiller controller calibration, BMS point verification, and alarm management to ensure proper system oversight and operation." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border p-7 bg-card hover:shadow-lg transition-shadow">
                  <item.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">Chiller Maintenance FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "What type of chiller systems do you maintain in Qatar?", a: "We maintain air-cooled and water-cooled residential chillers from all major manufacturers including Carrier, York, Trane, McQuay, Daikin, and Climaveneta — commonly found in large villas in Pearl Qatar, Lusail, and West Bay." },
                { q: "How often should a residential chiller be serviced in Qatar?", a: "Quarterly preventative maintenance visits are recommended for residential chillers in Qatar. Full annual overhauls — including tube cleaning and complete refrigerant system checks — should be done once yearly, ideally before summer." },
                { q: "What are warning signs of chiller problems?", a: "Warning signs include rooms not cooling adequately, unusual noises from the chiller plant room, increased electricity consumption, frequent tripping, water temperature alarms, or ice forming on any part of the chiller." },
                { q: "Do you service chillers in Pearl Qatar villas?", a: "Yes — chiller maintenance in Pearl Qatar is a core part of our business. The large compound and standalone villas in The Pearl, Porto Arabia, and Viva Bahriyah frequently feature standalone residential chiller plants that we are specialists in maintaining." },
                { q: "Can you provide an annual maintenance contract for my chiller?", a: "Absolutely. We offer customized Annual Maintenance Contracts for residential chillers in Qatar, including regular scheduled visits, spare parts management, and 24/7 emergency priority response." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="Chiller Maintenance" />

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Protect Your Chiller Investment</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">A well-maintained chiller lasts 20+ years. Neglected chillers fail in Qatar's summer heat. Protect yours today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-primary hover:bg-blue-50 font-semibold">
                <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp +974 5000 2548</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/40 text-white bg-white/10 hover:bg-white/20">
                <a href="tel:+97450306582">Call +974 5030 6582</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h3 className="text-lg font-bold font-serif text-foreground mb-6 text-center">Other Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "AC Service & Repair", href: "/services/ac-service" },
                { label: "AHU Servicing", href: "/services/ahu-servicing" },
                { label: "FCU Servicing", href: "/services/fcu-servicing" },
                { label: "Plumbing Services", href: "/services/plumbing" },
                { label: "Swimming Pool Maintenance", href: "/services/swimming-pool-maintenance" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-16 w-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300" aria-label="Chat on WhatsApp">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}

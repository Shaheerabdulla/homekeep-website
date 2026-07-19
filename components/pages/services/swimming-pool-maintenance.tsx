"use client";

import { motion } from "framer-motion";
import {
  Waves, CheckCircle2, Phone, Droplets, ShieldCheck, ChevronRight,
  Wrench, Calendar, AlertTriangle, Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";
import { QuoteSection } from "@/components/quote-section";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Swimming Pool Maintenance Qatar",
  provider: {
    "@type": "LocalBusiness",
    name: "Homekeep Qatar",
    telephone: "+97450306582",
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  },
  areaServed: ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  description:
    "Professional swimming pool maintenance, water balancing, filter servicing, and pump repair for villas in Doha, Pearl Qatar, Lusail, West Bay and Simaisma Qatar.",
  serviceType: "Swimming Pool Maintenance",
};

const services = [
  {
    icon: Droplets,
    title: "Water Chemistry Balancing",
    desc: "Full analysis and correction of pH, chlorine, alkalinity, calcium hardness, and TDS levels. Correct chemistry protects equipment, bathers, and pool surfaces from damage.",
  },
  {
    icon: Wrench,
    title: "Filter Cleaning & Backwashing",
    desc: "Sand filter backwashing, cartridge filter cleaning, and DE filter servicing to restore water clarity and prevent pump overload. We inspect and replace media when needed.",
  },
  {
    icon: ShieldCheck,
    title: "Pump & Motor Service",
    desc: "Pump inspection, seal replacement, impeller cleaning, and motor bearing checks. A well-serviced pump extends equipment life and keeps running costs low.",
  },
  {
    icon: Waves,
    title: "Pool Brushing & Vacuuming",
    desc: "Manual brushing of walls, steps, and floor, plus thorough vacuuming to remove sediment, algae, and debris before they become staining problems.",
  },
  {
    icon: Star,
    title: "Tile & Waterline Cleaning",
    desc: "Removal of calcium scale, scum lines, and biofilm from tiles and waterline surfaces using specialist poolside chemicals — no acid washing required in most cases.",
  },
  {
    icon: AlertTriangle,
    title: "Salt Chlorinator & Equipment Check",
    desc: "Testing and servicing of salt cells, automation systems, and ancillary equipment. Salt system servicing extends cell life and prevents costly replacement.",
  },
];

const reasons = [
  { title: "Qatar's Climate Makes Monthly Service Essential", desc: "High UV, high temperatures, and dust combine to deplete chlorine rapidly, encourage algae growth, and stress pool equipment. A pool in Qatar needs at minimum monthly professional attention — more during summer." },
  { title: "Villa Pool Specialists", desc: "We understand the specific challenges of villa pools in Pearl Qatar, Lusail, and Simaisma — hard water scaling, salt air corrosion, and the high bather loads of family villas." },
  { title: "Full Equipment Coverage", desc: "We service the full range of residential pool equipment found in Qatar villas — Hayward, Pentair, Waterco, Zodiac, and local-brand systems — with genuine parts." },
  { title: "Flexible AMC Contracts", desc: "Our pool Annual Maintenance Contracts start from QAR 2,500/year and include monthly visits, chemistry consumables, filter servicing, and priority emergency response." },
];

const pricing = [
  { name: "Monthly Pool Service Visit", price: "From QAR 400", note: "Chemistry test & balance, brush & vacuum, filter check, equipment inspection" },
  { name: "Pool Deep Clean", price: "From QAR 600", note: "Full vacuum, tile clean, filter backwash, complete chemistry correction" },
  { name: "Pump Service", price: "From QAR 350", note: "Inspection, seal check, impeller clean, lubrication — parts quoted separately" },
  { name: "Salt Cell Service", price: "From QAR 250", note: "Cell acid wash or replacement, controller calibration" },
  { name: "Annual Maintenance Contract", price: "From QAR 2,500 / year", note: "Monthly visits, priority response, chemistry consumables included" },
];

export default function SwimmingPoolMaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Swimming Pool Maintenance Qatar | Pool Service Doha & Pearl Qatar | Homekeep"
        description="Professional swimming pool maintenance in Qatar. Water balancing, filter servicing, pump repair and pool cleaning for villas in Pearl Qatar, Lusail, West Bay, Simaisma and Doha. Call +974 50306582."
        canonical="https://homekeep.qa/services/swimming-pool-maintenance"
        schema={schema}
      />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-cyan-900 to-blue-800">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/pool-hero.jpg"
              alt="Swimming pool villa Qatar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 to-blue-800/80" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Waves className="h-4 w-4 mr-2" /> Swimming Pool Maintenance
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Swimming Pool<br />
                <span className="text-cyan-300">Maintenance Qatar</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Keep your villa pool crystal clear, chemically balanced, and equipment in top condition. Professional pool maintenance for residences in Pearl Qatar, Lusail, West Bay, Simaisma, and across Doha.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-cyan-900 hover:bg-cyan-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Book Pool Service <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold">
                  <a href="tel:+97450306582">Call +974 5030 6582</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: "Monthly", label: "Service Visits" },
                { value: "7 Days", label: "A Week" },
                { value: "24hr", label: "Emergency Response" },
                { value: "Pearl Qatar", label: "& All Doha Areas" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white font-serif">{stat.value}</p>
                  <p className="text-xs text-blue-200 font-medium uppercase tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Full Pool Service Checklist</h2>
              <p className="text-lg text-muted-foreground">Every visit covers the essentials. Comprehensive pool care keeps your water safe, clear, and your equipment running at full life expectancy.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border p-7 bg-card hover:shadow-lg transition-shadow">
                  <item.icon className="h-7 w-7 text-cyan-600 mb-4" />
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real work photos */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Technicians at Work</h2>
              <p className="text-lg text-muted-foreground">Homekeep teams serving villas across Qatar — meticulous, protective, and professional in every job.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/tech-fcu-villa.jpg", alt: "Homekeep technicians servicing villa HVAC — Qatar" },
                { src: "/images/tech-fcu-kitchen.jpg", alt: "FCU servicing in villa kitchen — Homekeep Qatar" },
                { src: "/images/tech-fcu-office-1.jpg", alt: "Ceiling unit service — Homekeep technician" },
                { src: "/images/tech-fcu-office-2.jpg", alt: "Team HVAC servicing — Homekeep Qatar" },
              ].map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Pool Maintenance Pricing — Qatar</h2>
              <p className="text-muted-foreground text-lg">Starting prices for villa pool services in Doha, Pearl Qatar, and Lusail. Final quote confirmed before we start.</p>
            </motion.div>
            <div className="space-y-4">
              {pricing.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border p-5 bg-card hover:border-cyan-300 transition-colors">
                  <div>
                    <p className="font-bold text-foreground font-serif">{item.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.note}</p>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-cyan-700 bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200">{item.price}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">* Prices are starting rates. Final quote provided after property assessment. Travel surcharge may apply for Simaisma.</p>
          </div>
        </section>

        {/* Why Homekeep */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Homekeep for Pool Maintenance?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reasons.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border p-7 bg-card">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 mb-3" />
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">Pool Maintenance FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "How often should a villa pool be serviced in Qatar?", a: "In Qatar's climate, a villa pool should receive a professional service visit at minimum once a month. During peak summer (May–September) when temperatures exceed 40°C, bi-weekly visits are recommended as high UV and heat rapidly deplete chlorine and accelerate algae growth." },
                { q: "What does a standard pool service visit include?", a: "A standard Homekeep pool service visit includes: water chemistry testing and balancing (pH, chlorine, alkalinity, calcium hardness), pool brushing and vacuuming, skimmer and pump basket cleaning, filter backwash or inspection, and a visual equipment check." },
                { q: "Why does my pool water turn green in Qatar summer?", a: "Green water is algae bloom caused by chlorine depletion — extremely common in Qatar summer when high UV and heat rapidly burn off free chlorine. The fix is a shock treatment followed by algaecide, thorough brushing, and then re-establishing a proper maintenance schedule." },
                { q: "Do you service pools in Pearl Qatar and Lusail?", a: "Yes — we service villa pools throughout Pearl Qatar, Lusail, West Bay, Simaisma, and all Doha residential areas. We also offer scheduled monthly AMC contracts for consistent pool care." },
                { q: "How much does pool maintenance cost in Qatar?", a: "A standard monthly service visit starts from QAR 400. Annual Maintenance Contracts start from QAR 2,500 per year and include monthly visits, chemistry consumables, and priority emergency response. Contact us for a quote based on your pool size and location." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-cyan-300 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="Swimming Pool Maintenance" />

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Pool Turned Green? Call Now.</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Emergency pool shock treatment and same-day service available across Doha, Pearl Qatar, and Lusail.</p>
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

        {/* Other services */}
        <section className="py-14 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h3 className="text-lg font-bold font-serif text-foreground mb-6 text-center">Other Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "AC Service & Repair", href: "/services/ac-service" },
                { label: "AHU Servicing", href: "/services/ahu-servicing" },
                { label: "FCU Servicing", href: "/services/fcu-servicing" },
                { label: "Chiller Maintenance", href: "/services/chiller-maintenance" },
                { label: "Plumbing Services", href: "/services/plumbing" },
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

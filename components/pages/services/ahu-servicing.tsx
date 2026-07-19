"use client";

import { motion } from "framer-motion";
import { Fan, CheckCircle2, Phone, Wind, ShieldCheck, Settings, ChevronRight } from "lucide-react";
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
  "name": "AHU Servicing Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Professional Air Handling Unit (AHU) servicing and maintenance for villas and residences in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
  "serviceType": "AHU Servicing"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AHU and why does it need servicing in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "An Air Handling Unit (AHU) is the central component of a ducted HVAC system that conditions and circulates air throughout your villa. In Qatar's dusty environment, AHUs require regular servicing — typically every 3–6 months — to maintain air quality, prevent bacterial growth in coils, and ensure efficient cooling." }
    },
    {
      "@type": "Question",
      "name": "How often should AHU servicing be done in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend AHU servicing every 3 to 6 months in Qatar due to the high dust and humidity levels. Regular maintenance prevents coil fouling, blocked drain pans, and poor air quality inside the home." }
    }
  ]
};

export default function AhuServicingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AHU Servicing Qatar | Air Handling Unit Maintenance Doha | Homekeep"
        description="Professional AHU servicing and Air Handling Unit maintenance for villas in Doha, Pearl Qatar, Lusail and West Bay. Expert technicians, same-day response. Call +974 50306582."
        canonical="https://homekeep.qa/services/ahu-servicing"
        schema={[schema, faqSchema]}
      />
      <Nav />

      <main>
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-slate-900 to-primary/90">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(255,255,255,0.15),_transparent_60%)]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Fan className="h-4 w-4 mr-2" /> AHU Servicing
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                AHU Servicing<br />
                <span className="text-blue-300">Qatar & Doha</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Specialist Air Handling Unit servicing and maintenance for residential villas in Pearl Qatar, Lusail, West Bay, and across Doha. Improve air quality, prevent breakdowns, and reduce energy costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Book AHU Service <ChevronRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What Our AHU Service Includes</h2>
              <p className="text-lg text-muted-foreground">A comprehensive AHU service checklist to keep your central air system performing at its best.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Wind, title: "Filter Cleaning & Replacement", desc: "We clean or replace all air filters — primary, secondary, and HEPA where fitted — to restore airflow and indoor air quality." },
                { icon: Settings, title: "Coil Cleaning & Inspection", desc: "Evaporator and condenser coil cleaning using chemical agents to remove biofilm, dust, and scale buildup." },
                { icon: CheckCircle2, title: "Drain Pan & Pipe Flush", desc: "Clearing condensate drain pans and pipes to prevent water overflow, mold growth, and ceiling damage." },
                { icon: ShieldCheck, title: "Fan Motor & Belt Check", desc: "Inspection and lubrication of supply and return fan motors, belt tension adjustment, and bearing condition check." },
                { icon: Fan, title: "Airflow Balancing", desc: "Measuring and adjusting supply air volumes across zones to ensure consistent temperature distribution throughout your villa." },
                { icon: Wind, title: "Electrical & Controls Check", desc: "Testing thermostats, control boards, dampers, and actuators to ensure reliable AHU operation." },
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">AHU Servicing FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "What is an AHU and why does it need servicing?", a: "An Air Handling Unit (AHU) is the heart of your ducted central air conditioning system. It conditions, filters, and circulates air throughout your villa. In Qatar's dusty, humid environment, AHUs accumulate dust, bacteria, and mold on coils and in drain pans — making regular servicing essential for healthy air quality and efficient cooling." },
                { q: "How often should AHU servicing be done in Qatar?", a: "Every 3–6 months is recommended for residential AHUs in Qatar. The country's dust levels and near-continuous AC operation means filters and coils foul faster than elsewhere. Quarterly servicing is ideal for villas in Pearl Qatar and Lusail." },
                { q: "What are signs my AHU needs servicing?", a: "Reduced cooling in certain rooms, musty or stale air smells, visible dust from vents, increased electricity bills, water leaks from the unit, or unusual noises are all signs your AHU needs attention." },
                { q: "Do you service AHUs in Pearl Qatar villas?", a: "Yes — we regularly service AHUs in The Pearl Qatar, Lusail, West Bay, and Simaisma. Many of the large villas in these areas have multi-zone AHU systems that we are fully equipped to service." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="AHU Servicing" />

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Book Your AHU Service Today</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Cleaner air. Cooler home. Lower energy bills. Book an AHU service for your Qatar villa today.</p>
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
                { label: "FCU Servicing", href: "/services/fcu-servicing" },
                { label: "Chiller Maintenance", href: "/services/chiller-maintenance" },
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

"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle2, Phone, Wind, Droplets, ShieldCheck, ChevronRight } from "lucide-react";
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
  "name": "FCU Servicing Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Professional Fan Coil Unit (FCU) servicing and maintenance for villas and apartments in Doha, Pearl Qatar, Lusail and West Bay Qatar.",
  "serviceType": "FCU Servicing"
};

export default function FcuServicingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="FCU Servicing Qatar | Fan Coil Unit Cleaning & Maintenance Doha | Homekeep"
        description="Expert FCU servicing and Fan Coil Unit maintenance for villas and apartments in Doha, Pearl Qatar, Lusail and West Bay. Eliminate odors, prevent leaks, restore cooling. Call +974 50306582."
        canonical="https://homekeep.qa/services/fcu-servicing"
        schema={schema}
      />
      <Nav />

      <main>
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-teal-900 to-blue-800">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Wrench className="h-4 w-4 mr-2" /> FCU Servicing
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                FCU Servicing<br />
                <span className="text-teal-300">Qatar & Doha</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Professional Fan Coil Unit cleaning, maintenance, and repair for chiller-fed villas and apartments in Pearl Qatar, Lusail, West Bay, and across Doha. Stop leaks, eliminate odors, and restore cooling performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-teal-900 hover:bg-teal-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Book FCU Service <ChevronRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Complete FCU Service Checklist</h2>
              <p className="text-lg text-muted-foreground">We service all types of fan coil units — ceiling cassette, concealed, floor-standing, and wall-mounted — found in Qatar villas.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Wind, title: "FCU Deep Cleaning", desc: "High-pressure chemical cleaning of coils, fan blades, and casing to remove biofilm, dust, and scale that cause odors and reduced cooling." },
                { icon: Droplets, title: "Drain Pan Cleaning", desc: "Thorough cleaning of condensate drain pans and drain lines to prevent overflow, water stains on ceilings, and mold growth." },
                { icon: Wrench, title: "Fan Motor Service", desc: "Inspection and lubrication of fan motors and bearings. Identification of worn motors before they cause complete unit failure." },
                { icon: CheckCircle2, title: "Filter Service", desc: "Washing or replacing return air filters to restore full airflow and prevent dust from coating the coil surface." },
                { icon: ShieldCheck, title: "Valve & Actuator Check", desc: "Testing water control valves and actuators to ensure proper heating/cooling changeover and prevent valve seizure." },
                { icon: Wind, title: "Performance Testing", desc: "Final temperature and airflow measurements to confirm the FCU is delivering rated cooling capacity after servicing." },
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">FCU Service FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "What is an FCU and where are they found in Qatar villas?", a: "Fan Coil Units (FCUs) are room-level cooling devices connected to a central chilled water system. They are extremely common in large villas in Pearl Qatar, Lusail, and West Bay where a chiller plant provides centrally cooled water distributed to individual FCUs throughout the property." },
                { q: "How often should FCUs be serviced in Qatar?", a: "FCUs in Qatar residences should be serviced every 3–4 months. High dust levels quickly clog filters and coat coils, reducing cooling output and creating the conditions for mold and bacteria growth that cause unpleasant odors." },
                { q: "Why does my FCU smell bad?", a: "Musty or stale smells from FCUs are caused by mold and bacteria growing on damp coil surfaces and in stagnant drain pans. A professional FCU deep-clean with chemical biocide treatment eliminates the odor at its source." },
                { q: "My FCU is leaking water — what should I do?", a: "Water leaking from an FCU is usually caused by a blocked drain pan or drain pipe, or a faulty drain tray. This needs urgent attention as it can cause ceiling and wall damage. Call us immediately at +974 50306582 for emergency FCU service." },
                { q: "Do you service FCUs in Pearl Qatar apartments?", a: "Yes — FCU servicing in Pearl Qatar, Lusail, and West Bay is one of our most common jobs. The large chiller-fed villas and apartment complexes in these areas all use FCU systems that we are fully equipped to service." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="FCU Servicing" />

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">FCU Leaking or Smelling? Call Now.</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Don't let a blocked drain or dirty coil damage your ceiling. Book an FCU service today.</p>
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

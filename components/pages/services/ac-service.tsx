"use client";

import { motion } from "framer-motion";
import { ThermometerSnowflake, CheckCircle2, Phone, Clock, Wrench, ShieldCheck, ChevronRight } from "lucide-react";
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
  "name": "AC Service and Repair Doha Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Professional residential AC repair, service, installation and maintenance in Doha, Pearl Qatar, Lusail and West Bay. 24/7 emergency AC service available.",
  "serviceType": "Air Conditioning Service"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you respond to an AC breakdown in Doha?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer rapid emergency response across Doha, Pearl Qatar, Lusail and West Bay. For emergencies, we aim to dispatch a technician within hours of your call." }
    },
    {
      "@type": "Question",
      "name": "What types of AC systems do you service in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "We service all residential AC types including split AC units, cassette ACs, ducted systems, VRF/VRV systems, and window units across Qatar." }
    },
    {
      "@type": "Question",
      "name": "Do you offer AC maintenance contracts in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer annual maintenance contracts (AMCs) for residential AC systems in Qatar, covering scheduled servicing, filter cleaning, refrigerant checks and priority emergency response." }
    }
  ]
};

export default function AcServicePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC Service Doha Qatar | AC Repair & Maintenance | Homekeep"
        description="Professional AC service, repair and maintenance in Doha, Pearl Qatar, Lusail and West Bay. 24/7 emergency AC repair for villas and residences. Call +974 50306582."
        canonical="https://homekeep.qa/services/ac-service"
        schema={[schema, faqSchema]}
      />
      <Nav />

      <main>
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-950 to-blue-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.15),_transparent_60%)]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <ThermometerSnowflake className="h-4 w-4 mr-2" /> AC Service & Repair
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                AC Service & Repair<br />
                <span className="text-blue-300">Doha, Qatar</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Expert residential air conditioner service, repair, deep-clean maintenance, and emergency AC breakdown response for villas and apartments in Pearl Qatar, Lusail, West Bay, and across Doha.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    WhatsApp for AC Repair <ChevronRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our AC Services in Qatar</h2>
              <p className="text-lg text-muted-foreground">From emergency breakdowns to annual maintenance contracts — we keep your home cool year-round.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Emergency AC Repair", desc: "Rapid response to no-cooling emergencies. We diagnose and fix compressor faults, refrigerant leaks, electrical issues, and more — fast." },
                { title: "AC Deep Cleaning", desc: "Professional indoor unit cleaning, coil decontamination, drain pipe flush, and filter replacement to restore full cooling efficiency." },
                { title: "Split AC Service", desc: "Complete maintenance for split AC systems including gas top-up, fan motor check, thermostat calibration, and full performance test." },
                { title: "Ducted AC Maintenance", desc: "Full servicing for ducted central air conditioning systems in villas — duct inspection, filter cleaning, and airflow balancing." },
                { title: "VRF/VRV System Service", desc: "Specialist servicing for Variable Refrigerant Flow systems common in Pearl Qatar and Lusail luxury villas." },
                { title: "Annual Maintenance Contracts", desc: "AMC plans for Qatar residences — scheduled visits, priority response, and complete peace of mind throughout the year." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border p-7 bg-card hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why Choose Homekeep for AC Service in Qatar?</h2>
                <div className="space-y-5">
                  {[
                    { icon: Clock, title: "24/7 Emergency Response", desc: "AC failures don't keep office hours. Our emergency line is open around the clock, including weekends and public holidays." },
                    { icon: Wrench, title: "Certified HVAC Technicians", desc: "All our engineers are trained in residential HVAC systems, equipped with proper tools and genuine spare parts." },
                    { icon: ShieldCheck, title: "Service Guarantee", desc: "Every AC repair and service job comes with a workmanship guarantee. If the problem recurs, we return at no extra charge." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-xl font-bold font-serif text-foreground mb-6">Service Areas — AC Repair Near You</h3>
                <ul className="space-y-3 text-sm">
                  {["AC Service Pearl Qatar", "AC Repair Lusail City", "AC Maintenance West Bay", "AC Service Simaisma", "AC Repair Msheireb Downtown", "AC Service Al Waab & Al Rayyan", "AC Maintenance Ain Khaled"].map((area) => (
                    <li key={area} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {area}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Need AC service today?</p>
                  <div className="space-y-3">
                    <a href="tel:+97450306582" className="flex items-center gap-3 text-foreground font-semibold hover:text-primary transition-colors">
                      <Phone className="h-5 w-5 text-primary" /> +974 5030 6582
                    </a>
                    <a href="tel:+97450002548" className="flex items-center gap-3 text-foreground font-semibold hover:text-primary transition-colors">
                      <Phone className="h-5 w-5 text-primary" /> +974 5000 2548
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">AC Service FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "How often should I service my AC in Qatar?", a: "In Qatar's harsh climate, we recommend AC servicing every 3–4 months. The high dust levels and continuous usage mean filters and coils clog faster than in temperate countries. Quarterly servicing extends unit lifespan and keeps electricity bills low." },
                { q: "How quickly can you respond to an AC breakdown in Doha?", a: "For emergency no-cooling situations, we aim to dispatch a technician the same day — often within hours. We cover Pearl Qatar, Lusail, West Bay, and central Doha as priority response zones." },
                { q: "What AC brands do you service in Qatar?", a: "We service all major brands available in Qatar including Daikin, LG, Samsung, Carrier, York, Midea, Haier, Gree, Mitsubishi, and Hitachi, among others." },
                { q: "Do you offer AC maintenance contracts for villas?", a: "Yes — our Annual Maintenance Contracts (AMCs) are popular with villa owners in Pearl Qatar and Lusail. They include scheduled quarterly visits, emergency priority, and discounted parts." },
                { q: "Can you top up gas/refrigerant for my AC?", a: "Yes, our technicians carry equipment for R22, R32, and R410A refrigerant top-ups. We also check for leaks before recharging to ensure the fix is permanent." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="AC Service & Repair" />

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">AC Not Working? Call Now.</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Don't suffer in Qatar's heat. Our technicians are ready to get your AC running — fast.</p>
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
                { label: "AHU Servicing", href: "/services/ahu-servicing" },
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

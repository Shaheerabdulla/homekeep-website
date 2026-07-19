"use client";

import { motion } from "framer-motion";
import { Droplets, CheckCircle2, Phone, Wrench, ShieldCheck, Zap, ChevronRight, Settings } from "lucide-react";
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
  "name": "Plumbing Services Doha Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Professional residential plumbing services in Doha, Pearl Qatar, Lusail and West Bay. Emergency plumber, leak repair, fixture installation, and drain clearing.",
  "serviceType": "Plumbing Services"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer emergency plumbing in Doha?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — we provide emergency plumbing services across Doha, Pearl Qatar, Lusail, and West Bay. For burst pipes, severe leaks, or flooding, call +974 50306582 immediately for rapid response." }
    },
    {
      "@type": "Question",
      "name": "What plumbing services do you offer in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer a full range of residential plumbing services in Qatar including leak detection and repair, pipe replacement, bathroom and kitchen fixture installation, water heater service, drain unblocking, and preventative plumbing maintenance for villas." }
    }
  ]
};

export default function PlumbingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Plumber Doha Qatar | Emergency Plumbing Services Pearl Qatar | Homekeep"
        description="Emergency and residential plumbing services in Doha, Pearl Qatar, Lusail and West Bay. Leak repair, drain unblocking, fixture installation, and water heater service. Call +974 50306582."
        canonical="https://homekeep.qa/services/plumbing"
        schema={[schema, faqSchema]}
      />
      <Nav />

      <main>
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-800">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Droplets className="h-4 w-4 mr-2" /> Plumbing Services
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Plumbing Services<br />
                <span className="text-cyan-300">Doha, Qatar</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Reliable residential plumbing for villas and apartments in Pearl Qatar, Lusail, West Bay, Simaisma, and across Doha. From emergency leak repair to complete bathroom renovations — professional, fast, and clean.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    WhatsApp for Plumbing <ChevronRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Residential Plumbing Services in Qatar</h2>
              <p className="text-lg text-muted-foreground">From emergency callouts to planned maintenance — our plumbers serve villas and residences across Qatar with precision and care.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Emergency Leak Repair", desc: "Rapid response to burst pipes, major leaks, and flooding. Available across Doha, Pearl Qatar, and Lusail. Call +974 50306582 any time." },
                { icon: CheckCircle2, title: "Drain Unblocking", desc: "Clearing blocked kitchen drains, bathroom drains, floor drains, and main sewer lines using professional hydro-jetting equipment." },
                { icon: Wrench, title: "Fixture Installation", desc: "Supply and fit of premium bathroom and kitchen fixtures — toilets, basins, showers, baths, taps, and mixers for high-end villas." },
                { icon: Droplets, title: "Water Heater Service", desc: "Servicing, repair, and replacement of electric and gas water heaters. Descaling, anode replacement, and thermostat repair." },
                { icon: ShieldCheck, title: "Pipe Leak Detection", desc: "Non-invasive leak detection using acoustic and thermal equipment to find hidden leaks inside walls and floors without unnecessary damage." },
                { icon: Settings, title: "Preventative Plumbing", desc: "Annual plumbing health checks for villas — inspecting stop valves, checking water pressure, testing drain flow, and identifying risks before they become damage." },
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why Trust Homekeep for Plumbing in Qatar?</h2>
                <div className="space-y-5">
                  {[
                    { icon: Zap, title: "Emergency Response", desc: "Water damage doesn't wait. Our plumbers are dispatched rapidly for emergencies across Doha and surrounding communities." },
                    { icon: ShieldCheck, title: "Villa Specialists", desc: "We understand the high-specification plumbing installations in Pearl Qatar and Lusail villas — premium fixtures, complex pipework, and basement plant rooms." },
                    { icon: CheckCircle2, title: "Clean, Respectful Work", desc: "We use dust sheets, work carefully around expensive flooring and marble, and leave your home exactly as we found it — clean and dry." },
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
                <h3 className="text-xl font-bold font-serif text-foreground mb-6">Plumber Near You in Qatar</h3>
                <ul className="space-y-3 text-sm">
                  {["Plumber Pearl Qatar", "Emergency Plumber Lusail", "Plumbing Services West Bay", "Plumber Simaisma", "Plumbing Msheireb Doha", "Plumber Al Waab & Al Sailiya", "Plumbing Services Ain Khaled"].map((area) => (
                    <li key={area} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {area}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Plumbing emergency? Call now:</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">Plumbing FAQ — Qatar</h2>
            <div className="space-y-4">
              {[
                { q: "Do you offer emergency plumbing in Doha?", a: "Yes — we provide emergency plumbing response across Doha, Pearl Qatar, Lusail, West Bay, and Simaisma. For burst pipes, flooding, or major leaks, call +974 50306582 immediately." },
                { q: "How quickly can a plumber arrive in Pearl Qatar?", a: "For emergencies in Pearl Qatar, Lusail, and West Bay, we aim to dispatch a plumber within a few hours. Response times vary by urgency and time of day." },
                { q: "Do you fix leaking pipes inside walls?", a: "Yes — we use acoustic leak detection equipment to locate pipes leaking inside walls or under floors without unnecessary cutting. Once located, we repair the leak with minimal disruption to your finishes." },
                { q: "Can you install bathroom fixtures in my villa?", a: "Absolutely. We install all types of bathroom and kitchen fixtures including designer toilets, freestanding baths, rain showers, and premium tap fittings — familiar with the high-spec installations common in Pearl Qatar and Lusail villas." },
                { q: "Do you unblock drains in Qatar?", a: "Yes — we clear blocked drains throughout Qatar using professional drain rods and high-pressure water jetting equipment. We handle kitchen sinks, bathrooms, floor drains, and external drain connections." },
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-bold font-serif text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection service="Plumbing Services" />

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Plumbing Problem? We're Ready.</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Don't let a plumbing issue damage your villa. Call or WhatsApp us for fast, professional plumbing service anywhere in Qatar.</p>
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
                { label: "Chiller Maintenance", href: "/services/chiller-maintenance" },
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

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, Shield, Star, Zap, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Annual Maintenance Contract Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Annual Maintenance Contracts (AMC) for AC, AHU, FCU, chiller and plumbing services in Qatar. Residential villa and apartment AMC packages in Doha."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AMC for AC in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "An Annual Maintenance Contract (AMC) for AC in Qatar is a yearly service agreement that covers scheduled servicing of your air conditioning units — typically 4 quarterly visits — at a fixed annual price. AMCs include priority emergency response, discounted labour rates, and often no call-out charges." }
    },
    {
      "@type": "Question",
      "name": "How much does an AC AMC cost in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "AC AMC prices in Qatar start from around QAR 2,000 per year for a small apartment (up to 4 units) and scale based on number of units, system type (split, ducted, FCU, chiller), and property size. Contact Homekeep for a custom quote." }
    },
    {
      "@type": "Question",
      "name": "What does an AMC include in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "A typical residential AMC in Qatar includes 4 scheduled maintenance visits per year, priority emergency response, filter cleaning/replacement, coil cleaning, drain servicing, refrigerant checks, and discounted parts. Premium AMCs may also cover AHU, FCU, chiller, and plumbing systems." }
    }
  ]
};

const plans = [
  {
    name: "Essential",
    tagline: "Apartments & Small Villas",
    price: "From QAR 2,000",
    period: "/ year",
    color: "border-border",
    headerBg: "bg-secondary/40",
    highlight: false,
    coverage: "Up to 6 AC / FCU units",
    includes: [
      "4 scheduled service visits per year",
      "Filter clean & replacement (where due)",
      "Coil clean & drain flush per visit",
      "Performance & refrigerant check",
      "Priority WhatsApp response",
      "Discounted emergency call-out rate",
    ],
    excludes: [
      "AHU servicing",
      "Chiller maintenance",
      "Plumbing",
    ],
  },
  {
    name: "Standard",
    tagline: "Villas & Townhouses",
    price: "From QAR 4,500",
    period: "/ year",
    color: "border-primary",
    headerBg: "bg-primary",
    highlight: true,
    coverage: "Up to 12 AC / FCU units",
    includes: [
      "4 scheduled service visits per year",
      "Filter, coil & drain service per visit",
      "Refrigerant top-up (1 unit included)",
      "1 AHU full service included",
      "Basic plumbing health check included",
      "Zero call-out charge for covered systems",
      "Priority booking — 24hr response",
      "10% discount on parts & repairs",
    ],
    excludes: [
      "Chiller maintenance",
    ],
  },
  {
    name: "Premium",
    tagline: "Large Villas & Compounds",
    price: "Custom Quote",
    period: "",
    color: "border-foreground",
    headerBg: "bg-foreground",
    highlight: false,
    coverage: "Unlimited units",
    includes: [
      "6 scheduled visits per year",
      "Full AC / FCU / AHU service coverage",
      "Chiller maintenance included",
      "Plumbing service included",
      "Zero call-out charges all year",
      "Same-day emergency response",
      "Dedicated account manager",
      "15% discount on all parts & repairs",
      "Annual health report for all systems",
    ],
    excludes: [],
  },
];

const whyAmc = [
  { icon: Shield, title: "Protected Year-Round", desc: "A failing AC in Qatar's summer is an emergency. AMC customers get priority dispatch — no waiting in a queue." },
  { icon: Zap, title: "Prevent Costly Breakdowns", desc: "Regular servicing catches small faults before they become expensive failures. One avoided compressor replacement pays for years of AMC." },
  { icon: Star, title: "Better Air Quality", desc: "Quarterly cleaning removes biofilm, mold, and bacteria from coils and drain pans — protecting your family's health." },
  { icon: Clock, title: "No More Scheduling", desc: "We schedule your visits and remind you. One call gets everything — no need to find and vet different contractors each time." },
];

export default function AmcPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC AMC Qatar | Annual Maintenance Contract Doha | Homekeep"
        description="Annual Maintenance Contracts (AMC) for AC, AHU, FCU, chiller and plumbing in Qatar. Residential villa AMC packages from QAR 2,000/year. Priority response, zero call-out fees. Call +974 50306582."
        canonical="https://homekeep.qa/amc"
        schema={[schema, faqSchema]}
      />
      <Nav />

      <main>
        <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.2),_transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Shield className="h-4 w-4 mr-2" /> Annual Maintenance Contracts
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                AMC Plans for<br />
                <span className="text-blue-300">Qatar Residences</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                One contract. All your AC, AHU, FCU, chiller, and plumbing systems covered. Priority response, no call-out charges, and a team that knows your villa inside out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Get AMC Quote <ChevronRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Choose Your AMC Plan</h2>
              <p className="text-lg text-muted-foreground">All plans include scheduled visits, priority response, and transparent pricing. Contact us for a custom quote tailored to your property.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl border-2 ${plan.color} overflow-hidden flex flex-col ${plan.highlight ? "shadow-2xl shadow-primary/20 scale-[1.02]" : "shadow-lg"}`}
                >
                  <div className={`${plan.headerBg} px-7 py-7`}>
                    {plan.highlight && (
                      <div className="inline-flex items-center rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-xs font-semibold text-white mb-3">
                        Most Popular
                      </div>
                    )}
                    <h3 className={`text-2xl font-serif font-bold mb-1 ${plan.highlight ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>{plan.tagline}</p>
                    <div className={`text-3xl font-bold font-serif ${plan.highlight ? "text-white" : "text-foreground"}`}>
                      {plan.price}
                      {plan.period && <span className={`text-base font-normal ml-1 ${plan.highlight ? "text-blue-200" : "text-muted-foreground"}`}>{plan.period}</span>}
                    </div>
                    <p className={`text-xs mt-2 ${plan.highlight ? "text-blue-200" : "text-muted-foreground"}`}>{plan.coverage}</p>
                  </div>

                  <div className="px-7 py-7 flex flex-col flex-1 bg-card">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.includes.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                      {plan.excludes.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <XCircle className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      size="lg"
                      className={`w-full rounded-xl h-12 font-semibold ${plan.highlight ? "" : "variant-outline"}`}
                      variant={plan.highlight ? "default" : "outline"}
                    >
                      <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                        Get This Plan
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              All prices are in Qatari Riyals (QAR). Final pricing confirmed after a free site survey. VAT included where applicable.
            </p>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Get an AMC in Qatar?</h2>
              <p className="text-lg text-muted-foreground">In Qatar's extreme climate, maintenance isn't optional — it's insurance against the worst possible outcome.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyAmc.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-7">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">How Our AMC Works</h2>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Free Site Survey", desc: "We visit your property, assess all systems, and provide a transparent AMC quote within 24 hours." },
                    { step: "02", title: "Tailored Contract", desc: "We draft an AMC covering exactly your systems — AC, AHU, FCU, chiller, and/or plumbing — with a clear scope." },
                    { step: "03", title: "Scheduled Visits", desc: "We manage the schedule. You receive reminders before each quarterly visit — no chasing required." },
                    { step: "04", title: "Priority for Emergencies", desc: "AMC customers bypass the queue. A WhatsApp message or call gets you a same/next-day technician, even in peak summer." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="h-12 w-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold font-serif text-primary">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">AMC FAQ</h2>
                <div className="space-y-4">
                  {[
                    { q: "What is an AMC for AC in Qatar?", a: "An Annual Maintenance Contract (AMC) is a fixed-price yearly agreement covering scheduled servicing of your AC and other home systems. It replaces ad-hoc servicing with planned quarterly visits, priority response, and agreed rates — giving you peace of mind and lower total costs." },
                    { q: "How much does an AC AMC cost in Qatar?", a: "Our Essential AMC starts from QAR 2,000/year for up to 6 units. The Standard AMC (up to 12 units + AHU + plumbing) starts from QAR 4,500/year. Premium (unlimited units, full systems) is custom quoted. Contact us for a free site survey and firm price." },
                    { q: "Can I get an AMC for FCU and chiller systems?", a: "Yes — our Standard and Premium AMCs cover FCU, AHU, and chiller systems in addition to split AC units. This is particularly popular for large villas in Pearl Qatar and Lusail with chiller-fed FCU systems." },
                    { q: "Is there a contract period?", a: "Our standard AMC term is 12 months. We can discuss multi-year agreements with additional discounts for clients who want long-term coverage." },
                    { q: "What if something breaks between scheduled visits?", a: "AMC customers receive priority emergency response with zero call-out charges (Standard and Premium plans). We aim to respond the same day for AMC clients during emergencies." },
                  ].map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                      <h3 className="text-base font-bold font-serif text-foreground mb-1.5">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Get Your AMC Quote Today</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Tell us your property type, location, and number of units — we'll come to you for a free survey and provide a firm AMC price within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-primary hover:bg-blue-50 font-semibold">
                <a href="https://wa.me/97450002548?text=Hi%2C%20I'm%20interested%20in%20an%20AMC%20for%20my%20property%20in%20Qatar" target="_blank" rel="noreferrer">
                  WhatsApp for AMC Quote
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/40 text-white bg-white/10 hover:bg-white/20">
                <a href="tel:+97450306582">
                  <Phone className="mr-2 h-5 w-5" /> +974 5030 6582
                </a>
              </Button>
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

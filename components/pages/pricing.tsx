"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Phone, Info } from "lucide-react";
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
  "name": "AC Service Pricing Qatar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582",
    "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" }
  },
  "areaServed": ["Doha", "Pearl Qatar", "Lusail", "West Bay", "Simaisma"],
  "description": "Transparent pricing for AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing services in Qatar."
};

const services = [
  {
    category: "AC Services",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    items: [
      { name: "Split AC Service & Clean (per unit)", price: "From QAR 150", note: "Includes filter, coil clean, drain flush, performance check" },
      { name: "AC Deep Chemical Clean (per unit)", price: "From QAR 250", note: "High-pressure foam clean, biocide treatment, full decontamination" },
      { name: "AC Refrigerant Top-Up (R410A / R32)", price: "From QAR 200", note: "Per unit, includes leak check before recharge" },
      { name: "Emergency AC Repair (call-out)", price: "From QAR 200", note: "Call-out fee + diagnosis; parts quoted separately" },
      { name: "Ducted AC System Service", price: "From QAR 500", note: "Full ducted system including AHU filter, coil, and drain" },
    ]
  },
  {
    category: "AHU Servicing",
    color: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    items: [
      { name: "AHU Full Service (per unit)", price: "From QAR 700", note: "Filters, coil clean, drain pan, fan motor, belt check" },
      { name: "AHU Chemical Coil Clean", price: "From QAR 900", note: "Full evaporator coil chemical clean and flush" },
      { name: "AHU Filter Replacement", price: "From QAR 150", note: "Supply and fit — price varies by filter type" },
    ]
  },
  {
    category: "FCU Servicing",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    items: [
      { name: "FCU Service & Clean (per unit)", price: "From QAR 225", note: "Coil clean, drain pan, filter service, fan motor check" },
      { name: "FCU Chemical Deep Clean (per unit)", price: "From QAR 320", note: "Chemical coil treatment, biocide, drain flush, odor removal" },
      { name: "FCU Drain Pan Unblock (per unit)", price: "From QAR 120", note: "Emergency drain clearing to stop water overflow" },
      { name: "FCU Valve/Actuator Replacement", price: "From QAR 300", note: "Supply and fit; price depends on valve type" },
    ]
  },
  {
    category: "Chiller Maintenance",
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    items: [
      { name: "Residential Chiller Service Visit", price: "From QAR 1,200", note: "Comprehensive inspection, performance check, log review" },
      { name: "Condenser Tube Cleaning", price: "From QAR 1,800", note: "Full tube bundle brush-clean; pricing depends on chiller size" },
      { name: "Refrigerant Leak Test & Report", price: "From QAR 500", note: "Full refrigerant circuit check with written report" },
      { name: "Annual Chiller Overhaul", price: "Contact us", note: "Comprehensive annual overhaul — custom quoted by chiller size" },
    ]
  },
  {
    category: "Plumbing",
    color: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    items: [
      { name: "Plumbing Call-Out & Diagnosis", price: "From QAR 150", note: "Call-out fee; repairs quoted on-site before work begins" },
      { name: "Drain Unblocking (per drain)", price: "From QAR 200", note: "Machine or manual clearing; hydro-jet available" },
      { name: "Tap / Mixer Replacement", price: "From QAR 150", note: "Labour only; supply of fixtures quoted separately" },
      { name: "Toilet Repair / Replacement", price: "From QAR 200", note: "Flush mechanism, cistern, seat, or full WC replacement" },
      { name: "Water Heater Service", price: "From QAR 300", note: "Flush, anode check, thermostat test, and safety valve check" },
      { name: "Leak Detection (non-invasive)", price: "From QAR 400", note: "Acoustic/thermal leak location for hidden pipes" },
    ]
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC Service Prices Qatar | HVAC & Plumbing Pricing Doha | Homekeep"
        description="Transparent pricing for AC service, AHU servicing, FCU cleaning, chiller maintenance, and plumbing in Doha Qatar. Starting prices from QAR 150. Call +974 50306582 for a quote."
        canonical="https://homekeep.qa/pricing"
        schema={schema}
      />
      <Nav />

      <main>
        <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <Info className="h-4 w-4 mr-2" /> Service Pricing
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Transparent Pricing<br />
                <span className="text-blue-300">No Hidden Costs</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Indicative prices for all Homekeep services across Qatar. All prices are starting rates — exact quotes depend on property size, system type, and access. We always confirm before starting work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    Get a Free Quote <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold">
                  <Link href="/amc">View AMC Packages</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-start gap-3 text-sm text-amber-800">
              <Info className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
              <p>All prices shown are <strong>starting rates in Qatari Riyals (QAR)</strong> and exclude VAT where applicable. Final pricing depends on property size, system type, number of units, and ease of access. We provide a confirmed quote before any work begins — no surprises.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {services.map((service, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.05 }}
                >
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">{service.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, ii) => (
                      <div key={ii} className={`rounded-2xl border p-6 ${service.color} flex items-start justify-between gap-4`}>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-lg font-bold text-foreground whitespace-nowrap">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Save More with an Annual Maintenance Contract</h2>
              <p className="text-lg text-muted-foreground">AMC customers receive priority booking, discounted service rates, and zero call-out charges year-round.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Up to 15% off", desc: "All scheduled service visits under AMC" },
                { title: "Zero call-out fees", desc: "For AMC-covered systems year-round" },
                { title: "Priority response", desc: "Your calls go to the front of the queue" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-7 text-center">
                  <div className="text-3xl font-bold font-serif text-primary mb-2">{item.title}</div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-base font-semibold shadow-md">
                <Link href="/amc">View AMC Packages <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Need an Exact Quote?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">WhatsApp or call us with your property type and number of units — we'll give you a firm price within minutes.</p>
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
      </main>

      <Footer />
      <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-16 w-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300" aria-label="Chat on WhatsApp">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Wrench, 
  ThermometerSnowflake, 
  Droplets, 
  Fan, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";
import { ReviewsSection } from "@/components/reviews-section";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer emergency AC repairs in Doha?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we prioritize emergency no-cooling situations, especially during summer. Our rapid response team can be dispatched quickly to Pearl Qatar, Lusail, and West Bay." }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in Qatar?",
      "acceptedAnswer": { "@type": "Answer", "text": "We serve all premium residential communities in Qatar, with focused rapid response in The Pearl Qatar, Lusail City, West Bay, and Simaisma." }
    },
    {
      "@type": "Question",
      "name": "Do you provide annual maintenance contracts (AMCs)?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer tailored annual maintenance contracts for villas and apartments to keep your AC and plumbing systems running efficiently year-round." }
    }
  ]
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "Our team will contact you shortly to confirm your booking.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <SEO
        title="AC Service Doha Qatar | AC Repair, AHU, FCU, Chiller & Plumbing | Homekeep"
        description="Homekeep offers professional AC service, AC repair, AHU servicing, FCU cleaning, chiller maintenance and plumbing in Doha, Pearl Qatar, Lusail, West Bay and Simaisma. Call +974 50306582."
        canonical="https://homekeep.qa/"
        schema={homepageSchema}
      />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-white/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Villa Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Premium Home Maintenance in Qatar
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Keep your home <span className="text-primary">perfectly cool</span> and running seamlessly.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Expert AC servicing, chiller maintenance, and premium plumbing for villas in Pearl Qatar, Lusail, West Bay, and beyond. Professional, punctual, and precise.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25">
                  <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">
                    WhatsApp Us Now <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full text-base h-14 px-8 bg-white/80 backdrop-blur border-border hover:bg-white">
                  <a href="tel:+97450306582">
                    Call +974 5030 6582
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Specialized HVAC & Plumbing</h2>
            <p className="text-lg text-muted-foreground">We focus on the critical systems that keep your residence comfortable year-round in Qatar's demanding climate.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                img: "/images/split-ac-wall.jpg",
                alt: "Wall-mounted split air conditioner unit installed in Qatar villa room",
                icon: <ThermometerSnowflake className="h-5 w-5" />,
                title: "AC Services",
                desc: "Comprehensive residential AC service, repair, and deep-cleaning for split and ducted systems in Qatar.",
                href: "/services/ac-service",
                span: "",
              },
              {
                img: "/images/ahu.jpeg",
                alt: "Air handling unit AHU inside plant room — Homekeep Qatar HVAC servicing",
                icon: <Fan className="h-5 w-5" />,
                title: "AHU Servicing",
                desc: "Air Handling Unit optimization — coil clean, filter service, and full performance check for multi-room ducted systems.",
                href: "/services/ahu-servicing",
                span: "",
              },
              {
                img: "/images/fcu-cassette.jpg",
                alt: "4-way ceiling cassette fan coil unit FCU installed in villa — FCU servicing Qatar",
                icon: <Wrench className="h-5 w-5" />,
                title: "FCU Servicing",
                desc: "Fan Coil Unit cleaning and mechanical servicing to eliminate odors, prevent drain leaks, and maximize cooling efficiency.",
                href: "/services/fcu-servicing",
                span: "",
              },
              {
                img: "/images/chiller.jpg",
                alt: "Industrial water chiller unit in plant room — chiller maintenance Qatar",
                icon: <ThermometerSnowflake className="h-5 w-5" />,
                title: "Chiller Maintenance",
                desc: "Expert diagnostic and preventative maintenance for centralized chiller systems — the heart of your villa's cooling.",
                href: "/services/chiller-maintenance",
                span: "",
              },
              {
                img: "/images/split-ac-install.webp",
                alt: "Professional plumber working on water pipes and fixtures in villa Qatar",
                icon: <Droplets className="h-5 w-5" />,
                title: "Premium Plumbing",
                desc: "Emergency leak repairs, fixture installations, slab leak detection, and water heater maintenance for high-end villas.",
                href: "/services/plumbing",
                span: "",
              },
              {
                img: "/images/pool-testing.jpg",
                alt: "Swimming pool water testing and maintenance in Qatar villa",
                icon: <Waves className="h-5 w-5" />,
                title: "Swimming Pool Maintenance",
                desc: "Regular cleaning, water testing, filtration servicing, and equipment checks to keep your villa's pool crystal clear.",
                href: "/services/swimming-pool-maintenance",
                span: "",
              },
            ].map((svc, i) => (
              <motion.div key={i} variants={fadeIn} className={`group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col ${svc.span}`}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                      {svc.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-serif mb-2 text-foreground">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">{svc.desc}</p>
                  <Link href={svc.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 hover:underline">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Why Qatar Villas Trust Homekeep Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Professional Service, Every Visit</h2>
            <p className="text-lg text-muted-foreground">Trained technicians, proper equipment, and a clean finish — every time.</p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Same-Day Response",
                desc: "Book AC service, FCU cleaning, or plumbing repair in Doha, Pearl Qatar, or Lusail and get a technician scheduled the same day, most of the time.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Licensed & Insured Technicians",
                desc: "Every Homekeep technician is trained and insured for residential HVAC and plumbing work across Qatar's villa communities.",
              },
              {
                icon: <CheckCircle2 className="h-5 w-5" />,
                title: "Transparent, Upfront Pricing",
                desc: "You get a clear quote before any work begins — no hidden call-out charges, no surprise add-ons at the end of the job.",
              },
              {
                icon: <Wrench className="h-5 w-5" />,
                title: "Genuine Parts, Proper Tools",
                desc: "From chiller diagnostics to FCU coil cleaning, we use OEM-grade parts and professional-grade equipment on every visit.",
              },
              {
                icon: <MapPin className="h-5 w-5" />,
                title: "Coverage Across Qatar",
                desc: "Serving villas in Doha, Pearl Qatar, Lusail, West Bay, and Simaisma — our teams know these communities and their systems well.",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Workmanship Guarantee",
                desc: "If something isn't right after we leave, call us and we'll come back to make it right — at no extra cost.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Technicians at Work Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
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
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How it Works Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">How Homekeep Works</h2>
            <p className="text-lg text-muted-foreground">A streamlined process designed to get your home back to perfect comfort with zero hassle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-border z-0"></div>
            
            {[
              { step: "01", title: "Reach Out", desc: "Message us on WhatsApp or call our emergency hotline 24/7." },
              { step: "02", title: "Swift Dispatch", desc: "We deploy a specialized technician to your villa immediately." },
              { step: "03", title: "Expert Diagnosis", desc: "Quick, accurate assessment of your AC or plumbing issue." },
              { step: "04", title: "Cool Comfort", desc: "Professional resolution, leaving your home spotless and perfectly cooled." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="h-24 w-24 rounded-full bg-background border-4 border-white shadow-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold font-serif text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Areas Section */}
      <section id="areas" className="py-24 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Serving Qatar's Most Exclusive Communities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the standards expected in premium residences. Our teams arrive on time, respect your property, and fix the issue correctly the first time.
              </p>
              
              <div className="space-y-4 mb-8">
                {["The Pearl Qatar", "Lusail City", "West Bay & Diplomatic Area", "Simaisma Resort Villas"].map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-border">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=2070" 
                  alt="Modern Home Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-[240px]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-tight">Guaranteed workmanship on all HVAC and plumbing services.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Homekeep Standard</h2>
            <p className="text-lg text-gray-400">No guesswork, no delays. Just professional service when you need it most.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Clock className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Rapid Response</h3>
              <p className="text-gray-400 leading-relaxed">When the AC fails in summer, hours matter. We prioritize emergency calls and arrive exactly when scheduled.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Wrench className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Technical Excellence</h3>
              <p className="text-gray-400 leading-relaxed">Our technicians are certified experts in complex chiller systems, FCUs, and high-end plumbing fixtures.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CheckCircle2 className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Immaculate Execution</h3>
              <p className="text-gray-400 leading-relaxed">We use drop cloths, wear shoe covers, and leave your villa exactly as clean as we found it.</p>
            </div>
          </div>
        </div>
      </section>


      <ReviewsSection />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know about our services, response times, and pricing.
              </p>
              <Button size="lg" asChild className="rounded-full shadow-md font-semibold">
                <a href="#contact">Still have questions?</a>
              </Button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              {[
                {
                  q: "Do you offer emergency AC repairs?",
                  a: "Yes, we prioritize emergency no-cooling situations, especially during summer. Our rapid response team can be dispatched quickly to Pearl Qatar, Lusail, and West Bay."
                },
                {
                  q: "Are your technicians certified?",
                  a: "Absolutely. All our technicians undergo rigorous training and are certified to handle complex HVAC systems, including central chillers and VRF systems."
                },
                {
                  q: "Do you provide annual maintenance contracts (AMCs)?",
                  a: "Yes, we offer tailored annual maintenance contracts for villas and apartments to keep your AC and plumbing systems running efficiently year-round."
                },
                {
                  q: "What areas do you cover?",
                  a: "We proudly serve all premium residential communities in Qatar, with focused rapid response in The Pearl Qatar, Lusail City, West Bay, and Simaisma."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card hover:border-primary/50 transition-colors">
                  <h4 className="text-lg font-bold font-serif text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Request a Service</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below or contact us directly via WhatsApp for immediate assistance. We typically respond within 15 minutes.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground"><a href="tel:+97450306582" className="hover:text-primary transition-colors">+974 5030 6582</a><br/><a href="tel:+97450002548" className="hover:text-primary transition-colors">+974 5000 2548</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+974 5000 2548</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="bg-card border border-border p-8 rounded-3xl shadow-xl">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input required placeholder="Your full name" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone / WhatsApp</label>
                      <Input required placeholder="+974 XXXX XXXX" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Required</label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ac-service">AC Repair & Service</SelectItem>
                        <SelectItem value="ahu">AHU Servicing</SelectItem>
                        <SelectItem value="fcu">FCU Servicing</SelectItem>
                        <SelectItem value="chiller">Chiller Maintenance</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message / Issue Details</label>
                    <Textarea required placeholder="Please describe the issue..." className="min-h-[120px] bg-background" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-base h-12 rounded-xl mt-4">
                    Submit Request
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <a 
        href="https://wa.me/97450002548" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-16 w-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}

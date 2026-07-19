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
  "headline": "What Is AHU Servicing and Does My Villa Need It?",
  "datePublished": "2025-04-01",
  "author": { "@type": "Organization", "name": "Homekeep Qatar" },
  "publisher": { "@type": "Organization", "name": "Homekeep Qatar", "telephone": "+97450306582" },
  "description": "What is an AHU (Air Handling Unit)? Does your Qatar villa have one? What does AHU servicing include? Complete guide for Doha homeowners.",
  "mainEntityOfPage": "https://homekeep.qa/blog/what-is-ahu-servicing"
};

export default function WhatIsAhuServicing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="What Is AHU Servicing? Does My Qatar Villa Need It? | Homekeep"
        description="What is an AHU (Air Handling Unit), does your Qatar villa have one, and what does AHU servicing include? Complete guide for Doha, Pearl Qatar, and Lusail homeowners."
        canonical="https://homekeep.qa/blog/what-is-ahu-servicing"
        schema={schema}
      />
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-slate-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-slate-500/20 text-slate-300 rounded-full px-2.5 py-1">AHU Maintenance</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />April 2025</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">What Is AHU Servicing and Does My Villa Need It?</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">If your villa has a central ducted AC system, there's almost certainly an Air Handling Unit (AHU) somewhere — often hidden in a plant room, a ceiling void, or a utility space. Here's what it does, why it needs regular servicing, and what happens when it's ignored.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">What Is an AHU?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">An Air Handling Unit is the central component of a ducted HVAC system. Unlike a split AC (which has a small indoor unit and an outdoor unit), an AHU is a larger box-like unit that conditions air and distributes it through a network of ducts to multiple rooms in your villa.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">Inside, an AHU typically contains: a large evaporator coil (which cools the air), a blower fan (which pushes air through the ducts), filters, a drain pan, and sometimes heating elements or humidification controls. The AHU connects to an outdoor condensing unit, which handles the refrigerant circuit.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Does My Qatar Villa Have an AHU?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">If your home has:</p>
            <ul className="space-y-2 mb-6 pl-4">
              <li className="text-muted-foreground">Vents or grilles in the ceiling or walls (rather than visible cassette or wall-mounted units in each room)</li>
              <li className="text-muted-foreground">A plant room, utility cupboard, or ceiling void with a large metal box and ductwork</li>
              <li className="text-muted-foreground">A single thermostat controlling cooling for multiple rooms</li>
              <li className="text-muted-foreground">A large outdoor unit (not a standard split AC outdoor unit)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">…then you have a ducted system with an AHU. This is common in larger Doha villas, newer compounds, and some older-style Qatari homes that had central AC installed during renovation.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Does AHU Servicing Include?</h2>
            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              {[
                ["Filter service", "Filters in an AHU are typically larger and more substantial than split AC filters. They need cleaning or replacement every 1–3 months depending on dust exposure. A blocked AHU filter causes all the same problems as a blocked split AC filter — but affects every room in the villa simultaneously."],
                ["Evaporator coil clean", "The evaporator coil collects dust, biofilm, and mould over time. Cleaning requires removing the coil or using chemical foam cleaners to break down buildup, then flushing with water. This is the most important part of an AHU service."],
                ["Drain pan inspection and clean", "AHUs produce significant condensation. The drain pan collects this water and routes it away via a drain line. Algae and sludge block these lines, causing the pan to overflow — a major source of ceiling water damage in Qatar villas."],
                ["Fan motor and belt check", "AHU fan motors and drive belts wear over time. A worn belt causes vibration, noise, and inefficiency. Motor checks identify bearing wear before it becomes a failure."],
                ["Performance check", "After servicing, we run the system and measure airflow and temperature differentials to confirm the AHU is operating correctly."],
              ].map(([title, desc], i) => (
                <div key={i}><strong className="text-foreground">{title}:</strong> <span className="text-muted-foreground">{desc}</span></div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">What Happens If You Don't Service Your AHU?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">An unserviced AHU affects your entire villa's comfort, not just one room. Common consequences include: poor cooling in all rooms simultaneously, musty smells throughout the house, high electricity bills, water leaks from the drain pan, and eventually motor or compressor failure. Because an AHU serves multiple rooms, the impact of a failure is far more disruptive than a single split AC breaking down.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book an AHU Service for Your Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">AHU servicing from QAR 700 per unit. We cover all Qatar areas including Pearl Qatar, Lusail, West Bay, Simaisma, and Doha.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for AHU Service</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/ahu-servicing">AHU Service Details <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

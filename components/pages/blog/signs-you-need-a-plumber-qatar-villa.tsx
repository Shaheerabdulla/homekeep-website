"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function SignsYouNeedAPlumberQatarVilla() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-slate-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-slate-500/20 text-slate-300 rounded-full px-2.5 py-1">Plumbing</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Signs You Need a Plumber in Your Qatar Villa</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Qatar's hard water, high water pressure supply, and slab-on-grade villa construction create plumbing problems that look different from what you'd see elsewhere. Here are the warning signs worth acting on before they become expensive repairs.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">Low Water Pressure Throughout the Villa</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">If pressure has dropped gradually across every tap and shower — not just one fixture — the cause is usually mineral scale building up inside pipework from Qatar's hard water, or a fault with the villa's booster pump. A drop in just one fixture is more often a local blockage. Either way, prolonged low pressure is worth investigating rather than living with.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Water Heater Producing Inconsistent Hot Water</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Water heaters in Qatar work harder than in milder climates and accumulate scale deposits faster due to hard water. If hot water runs out quickly, takes longer to heat, or the heater makes popping or rumbling noises, sediment buildup on the heating element is a common cause. Left unaddressed, this shortens the heater's lifespan significantly.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Damp Patches, Musty Smells, or Warm Spots on Floors</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Many Qatar villas have pipework embedded in the concrete slab beneath the ground floor. A leak in this pipework — a "slab leak" — doesn't always show as visible water. Instead, watch for:</p>
            <ul className="space-y-2 mb-6 pl-4">
              <li className="text-muted-foreground">Unexplained damp patches or discoloration on floors or lower walls</li>
              <li className="text-muted-foreground">A persistent musty smell with no obvious source</li>
              <li className="text-muted-foreground">An unusually warm patch of flooring (often indicates a hot water line leak)</li>
              <li className="text-muted-foreground">A water meter that keeps running even when every tap in the villa is off</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">Slab leaks need acoustic leak detection equipment to locate precisely without unnecessary cutting into floors — this is not a DIY-diagnosable problem.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Gurgling Drains or Slow Drainage</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">A gurgling sound from a drain, or water that drains slower than usual, usually signals a partial blockage building up in the pipe — often a mix of grease, hair, and mineral scale. If multiple drains in the villa are affected at once, the blockage may be further down the main line and needs professional drain rodding or jetting rather than a shop-bought drain cleaner.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Discolored or Rusty-Looking Water</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Brownish or rust-tinted water, especially after not using a tap for a while, points to corrosion inside older galvanized steel pipework — more common in older villas. This is worth having assessed, since ongoing corrosion can eventually lead to pinhole leaks inside walls.</p>

            <div className="bg-secondary/40 rounded-2xl p-6 mb-6 space-y-3">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">When to Call Immediately vs. Schedule a Visit</h3>
              <div><strong className="text-foreground">Call immediately:</strong> <span className="text-muted-foreground">burst pipes, active flooding, sewage backup, or a water heater leaking near electrical fittings.</span></div>
              <div><strong className="text-foreground">Schedule a routine visit:</strong> <span className="text-muted-foreground">gradual pressure loss, minor drain slowness, water heater inefficiency, or discolored water that isn't actively worsening.</span></div>
            </div>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Get a Plumber to Your Qatar Villa</h3>
              <p className="text-muted-foreground text-sm mb-4">Emergency and scheduled plumbing across Doha, Pearl Qatar, Lusail, West Bay, and Simaisma.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp for Plumbing Help</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/services/plumbing">Plumbing Service Details <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

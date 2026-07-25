"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function WestBayApartmentAcMaintenance() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center text-slate-300 text-sm mb-6 hover:underline">← Back to all articles</Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-slate-500/20 text-slate-300 rounded-full px-2.5 py-1">West Bay</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Calendar className="h-3.5 w-3.5" />July 2026</span>
                <span className="flex items-center gap-1 text-xs text-blue-200"><Clock className="h-3.5 w-3.5" />5 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">West Bay Apartment AC Maintenance Guide</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">Apartment AC maintenance in West Bay's residential towers comes with a different set of considerations than a standalone villa — building access procedures, shared systems, and tightly sealed construction all change what good maintenance looks like.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-4">FCU Systems Are the Norm in West Bay Towers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Most West Bay residential and hotel apartments use Fan Coil Units (FCUs) fed by a centralized chilled water system managed by the building. This means your maintenance responsibility is typically limited to the FCU itself — filter, coil, and drain pan — rather than an entire standalone AC system. Knowing this distinction helps when reporting issues: a cooling problem affecting your unit alone is usually FCU-side; a building-wide issue is a chiller plant matter for building management.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Coordinating Building Access</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Tower access for servicing usually requires advance coordination with building security or management — particularly for units above ground floor or in buildings with visitor registration systems. Book your service a day or two ahead where possible, and have your building name and unit number ready. We regularly coordinate directly with West Bay building management to streamline this.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Why Sealed Towers Need More Frequent FCU Cleaning</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">West Bay towers are tightly sealed for energy efficiency, which means less natural air exchange than a villa. Combined with near-continuous AC operation, this causes FCU coils and drain pans to accumulate debris and biofilm faster than in more naturally ventilated properties. Quarterly FCU servicing is the recommended minimum for West Bay apartments — more often if you notice reduced airflow or odors sooner.</p>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Common Issues in West Bay Apartments</h2>
            <ul className="space-y-2 mb-6 pl-4">
              <li className="text-muted-foreground">Drain pan overflow causing ceiling stains in the unit below (a frequent complaint in older towers)</li>
              <li className="text-muted-foreground">Musty odors from biofilm buildup in sealed, humid conditions</li>
              <li className="text-muted-foreground">Uneven cooling between rooms if individual FCU units haven't been balanced or serviced evenly</li>
              <li className="text-muted-foreground">Noise from worn fan motors, more noticeable in quiet, sealed apartment interiors</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">Is an AMC Worth It for an Apartment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">For a single apartment with 2-4 FCU units, an Annual Maintenance Contract removes the need to remember scheduling, coordinates building access on your behalf over time, and typically includes priority response if a unit fails during peak summer. For owners renting out West Bay units, an AMC also gives tenants a direct number to call rather than routing every issue through you.</p>

            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">Book FCU Servicing in West Bay</h3>
              <p className="text-muted-foreground text-sm mb-4">We coordinate directly with West Bay building management for smooth access — just let us know your building name when booking.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-xl"><a href="https://wa.me/97450002548" target="_blank" rel="noreferrer">WhatsApp to Book</a></Button>
                <Button asChild variant="outline" className="rounded-xl"><Link href="/areas/west-bay">West Bay Services <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

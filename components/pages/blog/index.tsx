"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Homekeep AC & HVAC Maintenance Blog Qatar",
  "description": "Expert advice on AC service, AHU maintenance, FCU servicing, and home maintenance in Qatar.",
  "url": "https://homekeep.qa/blog",
  "publisher": {
    "@type": "LocalBusiness",
    "name": "Homekeep Qatar",
    "telephone": "+97450306582"
  }
};

export const articles = [
  {
    slug: "signs-you-need-a-plumber-qatar-villa",
    title: "Signs You Need a Plumber in Your Qatar Villa",
    excerpt: "Low water pressure, slab leaks, water heater issues, gurgling drains — the plumbing warning signs Qatar villa owners shouldn't ignore, and when to call a professional.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Plumbing",
  },
  {
    slug: "pearl-qatar-villa-maintenance-checklist-2026",
    title: "Pearl Qatar Villa Maintenance Checklist 2026",
    excerpt: "Complete quarterly, biannual, and annual maintenance checklist for Pearl Qatar villas. FCU, chiller, plumbing, and seasonal tasks — with frequencies based on coastal humidity and hard water realities.",
    date: "May 2026",
    readTime: "5 min read",
    category: "Pearl Qatar",
  },
  {
    slug: "common-plumbing-problems-qatar-villas",
    title: "Common Plumbing Problems in Qatar Villas — and How to Prevent Them",
    excerpt: "Slab leaks, hot water failure, low pressure, hard water damage — Qatar's unique water supply and climate create specific plumbing challenges. Prevention tips and red flags every Qatar villa owner should know.",
    date: "April 2026",
    readTime: "7 min read",
    category: "Plumbing",
  },
  {
    slug: "chiller-vs-split-ac-qatar",
    title: "Chiller vs Split AC: Which System Is in Your Qatar Villa?",
    excerpt: "Many Pearl Qatar and Lusail homeowners don't know whether they have a chiller-fed FCU system or a split AC — and don't realise the difference changes everything about maintenance, costs, and failure modes.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Systems Guide",
  },
  {
    slug: "prepare-ac-qatar-summer-2026",
    title: "How to Prepare Your AC for Qatar Summer 2026",
    excerpt: "Qatar summer begins in May and peaks at 47°C. This month-by-month checklist covers every step to take before the heat arrives — and why the worst time to find an AC technician is when your AC breaks in June.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Seasonal Guide",
  },
  {
    slug: "ac-service-cost-qatar-2026",
    title: "AC Service Cost in Qatar 2026 — What to Expect",
    excerpt: "Full price breakdown for split AC service, FCU cleaning, AHU maintenance, and chiller servicing in Qatar. 2026 market rates, what affects the price, and red flags to watch for when getting quotes.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Pricing",
  },
  {
    slug: "how-often-ac-service-qatar",
    title: "How Often Should You Service Your AC in Qatar?",
    excerpt: "Qatar's extreme heat and dust make AC maintenance more critical than almost anywhere else in the world. Here's exactly how often you should be servicing your units — and why skipping a service costs more than the service itself.",
    date: "June 2025",
    readTime: "5 min read",
    category: "AC Maintenance",
  },
  {
    slug: "signs-fcu-needs-cleaning",
    title: "5 Signs Your FCU Unit Needs Cleaning Right Now",
    excerpt: "Fan coil units don't announce when they're struggling — they just quietly waste energy, spread allergens, and drip water onto your floor. These are the warning signs every Pearl Qatar and Lusail villa owner should know.",
    date: "May 2025",
    readTime: "4 min read",
    category: "FCU Servicing",
  },
  {
    slug: "ac-not-cooling-qatar",
    title: "AC Not Cooling in Qatar Summer — What to Check First",
    excerpt: "Your AC is running but the room isn't cooling. Before you call a technician, run through these checks — some can be fixed without a callout, and others will help you describe the problem accurately when you do call.",
    date: "May 2025",
    readTime: "6 min read",
    category: "Troubleshooting",
  },
  {
    slug: "what-is-ahu-servicing",
    title: "What Is AHU Servicing and Does My Villa Need It?",
    excerpt: "If your villa has a central ducted AC system, there's almost certainly an Air Handling Unit hiding in a plant room somewhere. Here's what it does, why it needs regular servicing, and what happens when it's ignored.",
    date: "April 2025",
    readTime: "5 min read",
    category: "AHU Maintenance",
  },
  {
    slug: "amc-worth-it-qatar",
    title: "Is an Annual Maintenance Contract Worth It in Qatar?",
    excerpt: "AMC or pay-as-you-go? We break down the real numbers for a typical Doha villa — and explain why most homeowners find an AMC saves money, stress, and time over a single AC season.",
    date: "March 2025",
    readTime: "5 min read",
    category: "AMC",
  },
];

const categoryColors: Record<string, string> = {
  "AC Maintenance": "bg-blue-100 text-blue-700",
  "FCU Servicing": "bg-teal-100 text-teal-700",
  "Troubleshooting": "bg-orange-100 text-orange-700",
  "AHU Maintenance": "bg-slate-100 text-slate-700",
  "AMC": "bg-green-100 text-green-700",
  "Pricing": "bg-blue-100 text-blue-800",
  "Seasonal Guide": "bg-amber-100 text-amber-700",
  "Systems Guide": "bg-cyan-100 text-cyan-700",
  "Plumbing": "bg-teal-100 text-teal-800",
  "Pearl Qatar": "bg-indigo-100 text-indigo-700",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AC & HVAC Maintenance Blog Qatar | Homekeep Tips & Advice"
        description="Expert advice on AC service frequency, FCU cleaning signs, AHU maintenance, and home HVAC care in Qatar. Practical tips for Pearl Qatar, Lusail, West Bay and Doha homeowners."
        canonical="https://homekeep.qa/blog"
        schema={schema}
      />
      <Nav />

      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-950">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/80 mb-6">
                <BookOpen className="h-4 w-4" /> Maintenance Advice
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">AC & Home Maintenance Tips for Qatar</h1>
              <p className="text-lg text-blue-100">Practical advice for keeping your villa's AC, AHU, FCU, and plumbing in peak condition in Qatar's extreme climate.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${categoryColors[article.category] ?? "bg-gray-100 text-gray-700"}`}>
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{article.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                      </div>
                      <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                        Read <ChevronRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

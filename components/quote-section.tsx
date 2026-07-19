"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "Pearl Qatar",
  "Lusail",
  "West Bay",
  "Simaisma",
  "Other Doha Area",
];

interface QuoteSectionProps {
  service?: string;
}

export function QuoteSection({ service = "General Enquiry" }: QuoteSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [units, setUnits] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi, I'd like a quote for: ${service}`,
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      area ? `Area: ${area}` : "",
      units ? `Units/Notes: ${units}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/97450002548?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Get a Free Quote
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in your details and we'll send you a price on WhatsApp within minutes.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-3xl p-8 shadow-lg space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmed Al-Mansoori"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Phone / WhatsApp <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+974 5XXX XXXX"
                  required
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Service Required
                </label>
                <input
                  type="text"
                  value={service}
                  readOnly
                  className="w-full rounded-xl border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Your Area
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                >
                  <option value="">Select your area…</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Number of Units / Additional Notes
              </label>
              <input
                type="text"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="e.g. 4 split AC units, or 8 FCU units in a villa"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" size="lg" className="flex-1 rounded-xl h-12 font-semibold text-base">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send via WhatsApp
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-12 font-semibold text-base">
                <a href="tel:+97450306582">
                  <Send className="mr-2 h-5 w-5 rotate-[-45deg]" />
                  Call Instead
                </a>
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground pt-1">
              Your details are only used to respond to your enquiry. We never share your information.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

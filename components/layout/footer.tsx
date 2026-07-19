"use client";

import Link from "next/link";
import { ThermometerSnowflake } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-14 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ThermometerSnowflake className="h-6 w-6 text-primary" />
              <span className="text-xl font-serif font-bold tracking-tight">Homekeep</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Premium residential AC service, chiller maintenance, and plumbing for Qatar's finest villas and residences. Serving Pearl Qatar, Lusail, West Bay, and Simaisma.
            </p>
            <a
              href="https://wa.me/97450002548"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Us Now
            </a>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><Link href="/services/ac-service" className="hover:text-primary transition-colors">AC Service & Repair</Link></li>
              <li><Link href="/services/ahu-servicing" className="hover:text-primary transition-colors">AHU Servicing</Link></li>
              <li><Link href="/services/fcu-servicing" className="hover:text-primary transition-colors">FCU Servicing</Link></li>
              <li><Link href="/services/chiller-maintenance" className="hover:text-primary transition-colors">Chiller Maintenance</Link></li>
              <li><Link href="/services/plumbing" className="hover:text-primary transition-colors">Plumbing Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 font-serif">Contact</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="tel:+97450306582" className="hover:text-primary transition-colors">+974 5030 6582</a></li>
              <li><a href="tel:+97450002548" className="hover:text-primary transition-colors">+974 5000 2548</a></li>
              <li><a href="mailto:info@homekeep.qa" className="hover:text-primary transition-colors">info@homekeep.qa</a></li>
              <li className="pt-2 text-gray-500">Doha, Qatar</li>
              <li className="text-gray-500 text-xs mt-3 leading-relaxed">Service Areas: Pearl Qatar, Lusail, West Bay, Simaisma</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Homekeep Qatar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">AC Service · AHU · FCU · Chiller · Plumbing · Doha</p>
        </div>
      </div>
    </footer>
  );
}

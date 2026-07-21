"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "AC Service & Repair", href: "/services/ac-service" },
  { label: "AHU Servicing", href: "/services/ahu-servicing" },
  { label: "FCU Servicing", href: "/services/fcu-servicing" },
  { label: "Chiller Maintenance", href: "/services/chiller-maintenance" },
  { label: "Plumbing Services", href: "/services/plumbing" },
  { label: "Swimming Pool Maintenance", href: "/services/swimming-pool-maintenance" },
];

const areas = [
  { label: "Pearl Qatar", href: "/areas/pearl-qatar" },
  { label: "Lusail", href: "/areas/lusail" },
  { label: "West Bay", href: "/areas/west-bay" },
  { label: "Simaisma", href: "/areas/simaisma" },
  { label: "Doha", href: "/areas/doha" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/homekeep-logo.jpg"
            alt="Homekeep Qatar — AC Service, FCU Servicing & Chiller Maintenance"
            width={160}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary transition-colors py-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors ${
                      pathname === s.href ? "text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Areas dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary transition-colors py-2"
              aria-expanded={areasOpen}
              aria-haspopup="true"
            >
              Areas <ChevronDown className="h-4 w-4" />
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                {areas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className={`block px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors ${
                      pathname === a.href ? "text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`hover:text-primary transition-colors ${pathname.startsWith("/blog") ? "text-primary font-semibold" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/amc"
            className={`hover:text-primary transition-colors ${pathname === "/amc" ? "text-primary font-semibold" : ""}`}
          >
            <span className="relative">
              AMC
              <span className="absolute -top-2 -right-5 text-[10px] font-bold bg-primary text-white rounded-full px-1.5 py-0.5 leading-none">
                New
              </span>
            </span>
          </Link>
          <a href="/#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              24/7 Emergency
            </span>
            <a
              href="tel:+97450306582"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Phone className="h-3.5 w-3.5" /> +974 5030 6582
            </a>
          </div>
          <Button asChild size="lg" className="rounded-full shadow-md font-semibold">
            <a href="/#contact">Book Service</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
            Services
          </p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="border-t border-border my-3" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
            Areas
          </p>
          {areas.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              onClick={() => setMenuOpen(false)}
            >
              {a.label}
            </Link>
          ))}
          <div className="border-t border-border my-3" />
          <Link href="/blog" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/amc" className="block px-2 py-2 text-sm font-semibold text-primary" onClick={() => setMenuOpen(false)}>AMC Packages</Link>
          <div className="border-t border-border my-3" />
          <a href="/#contact" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="border-t border-border my-3" />
          <a href="tel:+97450306582" className="block px-2 py-2 text-sm font-bold text-primary">
            Call +974 5030 6582
          </a>
          <a href="https://wa.me/97450002548" target="_blank" rel="noreferrer" className="block px-2 py-2 text-sm font-bold text-[#25D366]">
            WhatsApp +974 5000 2548
          </a>
        </div>
      )}
    </nav>
  );
}

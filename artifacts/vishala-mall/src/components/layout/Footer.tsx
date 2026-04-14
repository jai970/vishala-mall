import { Link } from "wouter";
import { MapPin, Phone, Instagram, Facebook, Globe, Clock } from "lucide-react";
import { business, categories } from "@/data/store";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a0408" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-semibold text-white">Vishala</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest">Shopping Mall · Sircilla</p>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Sircilla's most loved fashion destination. Trusted by thousands of families
              since 2021 — sarees, bridal wear, ethnic wear and more, all under one roof.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={business.social.instagram1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={business.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Google Business"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/70 text-xs uppercase tracking-widest font-medium mb-4">Collections</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-xs uppercase tracking-widest font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/vishala/about" },
                { label: "Contact Us", href: "/vishala/contact" },
                { label: "Visit Our Mall", href: "/vishala/contact" },
                { label: "WhatsApp Us", href: `https://wa.me/${business.whatsapp}` },
                { label: "Follow on Instagram", href: business.social.instagram1.url },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/45 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-white/45 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-xs uppercase tracking-widest font-medium mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-[var(--gold)] shrink-0 mt-0.5" />
                <p className="text-sm text-white/50 leading-relaxed">
                  {business.address.full}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="text-sm text-white/50 hover:text-white transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={15} className="text-[var(--gold)] shrink-0 mt-0.5" />
                <div className="text-sm text-white/50">
                  <p>Mon – Sat: 10am – 8:30pm</p>
                  <p>Sunday: 10am – 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Vishala Shopping Mall, Sircilla. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Est. {business.established} &middot; Rajanna Sircilla, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}

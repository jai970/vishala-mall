import { Link } from "wouter";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white border-t border-white/10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/srinilaya-logo.png"
              alt="Srinilaya Metro Shopping Mall"
              className="h-12 w-auto mb-4 object-contain"
            />
            <p className="text-sm text-white/55 leading-relaxed">
              <strong className="text-white/85">Srinilaya Metro Shopping Mall</strong>{" "}
              — your destination for the finest Indian ethnic wear, sarees and lehengas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white/70 text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Offer Zone", href: "/collections/offer-zone" },
                { label: "Best Sellers", href: "/collections/best-sellers" },
                { label: "New Arrivals", href: "/collections/new-arrivals" },
                { label: "Sarees", href: "/collections/sarees" },
                { label: "Lehengas", href: "/collections/lehengas" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white/70 text-xs uppercase tracking-wider mb-4">
              Information
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/pages/about" },
                { label: "Contact Us", href: "/pages/contact" },
                { label: "Shipping Policy", href: "/policies/shipping-policy" },
                { label: "Refund Policy", href: "/policies/refund-policy" },
                { label: "Privacy Policy", href: "/policies/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white/70 text-xs uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="space-y-3">
              {[
                { handle: "@srinilayametro", href: "https://www.instagram.com/srinilayametro/" },
              ].map((social) => (
                <a
                  key={social.handle}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Instagram size={15} className="text-white/35 group-hover:text-white/80 transition-colors" />
                  {social.handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Srinilaya Metro Shopping Mall. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Pan-India Shipping &middot; Secure Packaging &middot; Easy Returns
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { business } from "@/data/store";

export function ContactCTA() {
  return (
    <section style={{ backgroundColor: "#fdfaf6" }} className="py-14 sm:py-20 px-4 border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-3">Visit Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--maroon)] font-semibold mb-4 leading-tight">
              Come & Explore<br />Our Mall Today
            </h2>
            <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              We're conveniently located in the heart of Sircilla. Walk in and let our expert
              staff help you find the perfect outfit for your next occasion.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[var(--maroon)]" />
                </div>
                <div>
                  <p className="text-stone-800 font-medium text-sm mb-0.5">Our Address</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{business.address.full}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[var(--maroon)]" />
                </div>
                <div>
                  <p className="text-stone-800 font-medium text-sm mb-0.5">Call / WhatsApp</p>
                  <a
                    href={`tel:${business.phone.replace(/\s/g, "")}`}
                    className="text-[var(--maroon)] hover:underline text-sm font-medium"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[var(--maroon)]" />
                </div>
                <div>
                  <p className="text-stone-800 font-medium text-sm mb-0.5">Opening Hours</p>
                  <p className="text-stone-500 text-sm">Mon – Sat: 10:00 AM – 8:30 PM</p>
                  <p className="text-stone-500 text-sm">Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <Link href="/vishala/contact" className="btn-outline-maroon inline-block">
                Get Directions
              </Link>
            </div>
          </div>

          <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-stone-100">
            <iframe
              title="Vishala Shopping Mall Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Vishala+Shopping+Mall+Sircilla+Telangana"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { business } from "@/data/store";
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, Send, Check } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <div style={{ backgroundColor: "var(--maroon)" }} className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-2">
              Get in Touch
            </h1>
            <p className="text-white/60 text-sm">We'd love to hear from you — walk in, call, or WhatsApp</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-stone-800 font-semibold text-lg mb-2">Thank You!</h3>
                  <p className="text-stone-500 text-sm">We've received your message and will get back to you soon. Or WhatsApp us for a faster response!</p>
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 mt-6"
                  >
                    <MessageCircle size={14} />
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-stone-200 bg-white text-stone-800 placeholder-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--maroon)] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-stone-200 bg-white text-stone-800 placeholder-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--maroon)] transition-colors"
                      placeholder="+91 xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 uppercase tracking-wider mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-stone-200 bg-white text-stone-800 placeholder-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--maroon)] transition-colors resize-none"
                      placeholder="What are you looking for? (sarees, bridal, men's wear...)"
                    />
                  </div>
                  <button type="submit" className="btn-maroon flex items-center gap-2">
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-8">
                Our Details
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[var(--maroon)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm mb-1">Address</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{business.address.full}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[var(--maroon)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm mb-1">Phone / WhatsApp</p>
                    <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="text-[var(--maroon)] text-sm hover:underline font-medium">
                      {business.phone}
                    </a>
                    <p className="text-stone-400 text-xs mt-0.5">Available during store hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[var(--maroon)]/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[var(--maroon)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm mb-1">Store Hours</p>
                    <p className="text-stone-500 text-sm">Monday – Saturday: 10:00 AM – 8:30 PM</p>
                    <p className="text-stone-500 text-sm">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6">
                <p className="font-semibold text-stone-700 text-sm mb-4">Follow Us</p>
                <div className="space-y-3">
                  <a
                    href={business.social.instagram1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-600 hover:text-[var(--maroon)] transition-colors group"
                  >
                    <Instagram size={18} className="text-stone-400 group-hover:text-[var(--maroon)] transition-colors" />
                    <span>@{business.social.instagram1.handle}</span>
                    <span className="text-stone-300 text-xs">{business.social.instagram1.followers} followers</span>
                  </a>
                  <a
                    href={business.social.instagram2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-600 hover:text-[var(--maroon)] transition-colors group"
                  >
                    <Instagram size={18} className="text-stone-400 group-hover:text-[var(--maroon)] transition-colors" />
                    <span>@{business.social.instagram2.handle}</span>
                    <span className="text-stone-300 text-xs">{business.social.instagram2.followers} followers</span>
                  </a>
                  <a
                    href={business.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-600 hover:text-[var(--maroon)] transition-colors group"
                  >
                    <Facebook size={18} className="text-stone-400 group-hover:text-[var(--maroon)] transition-colors" />
                    <span>Vishala Shopping</span>
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp — Fastest Response
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}

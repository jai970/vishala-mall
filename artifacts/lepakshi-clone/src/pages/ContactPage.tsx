import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Instagram, Send, Check } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-normal text-white">Contact Us</h1>
            <p className="text-white/45 text-sm mt-2">We'd love to hear from you</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-normal text-white mb-8">Get in Touch</h2>

              {submitted ? (
                <div className="bg-[#1a1a1a] rounded-sm p-8 text-center">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Message Sent!</h3>
                  <p className="text-white/55 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-[#1a1a1a] px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors flex items-center gap-2"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <h2 className="font-heading text-2xl font-normal text-white mb-8">Find Us</h2>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[hsl(26,72%,55%)]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">Showroom Address</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Srinilaya Metro Shopping Mall<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[hsl(26,72%,55%)]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">WhatsApp / Phone</h3>
                  <p className="text-white/55 text-sm">Available Mon–Sat, 10am–7pm IST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center shrink-0">
                  <Instagram size={18} className="text-[hsl(26,72%,55%)]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Follow on Instagram</h3>
                  <div className="space-y-1.5">
                    {[
                      { handle: "@srinilayametro", href: "https://www.instagram.com/srinilayametro/" },
                    ].map((s) => (
                      <a
                        key={s.handle}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-white/55 hover:text-white transition-colors"
                      >
                        {s.handle}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

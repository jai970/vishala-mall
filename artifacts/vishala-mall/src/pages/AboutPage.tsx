import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { business, categories } from "@/data/store";
import { MessageCircle } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1800&q=85"
            alt="Vishala Shopping Mall Sircilla"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-[var(--maroon)]/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-2">
              Est. {business.foundedDate}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl text-white font-semibold mb-2">
              Our Story
            </h1>
            <p className="text-white/60 text-sm italic font-heading text-lg">
              "{business.tagline}"
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="space-y-10 text-stone-600 text-sm leading-relaxed">

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-4">
                Born in Sircilla — Telangana's Textile Town
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
              <p className="mb-3">
                Vishala Shopping Mall was founded on <strong className="text-[var(--maroon)]">February 21, 2021</strong> with
                a single vision — to bring an entire world of authentic ethnic wear, bridal collections, and
                quality textiles under one roof for the families of Sircilla and Rajanna Sircilla district.
              </p>
              <p>
                Registered as a <strong className="text-[var(--maroon)]">Partnership Firm — MSME Small Enterprise</strong>,
                we are rooted in Sircilla, Telangana's proud Textile Town, known across India for its remarkable
                Matchbox Silk Sarees — handwoven silk that weighs just 100 grams for 5.5 metres, so light it
                folds into a matchbox. We carry this legacy forward in everything we do.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-4">
                What Makes Us Different
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
              <p className="mb-4">
                At Vishala, <em>"A Mall For All"</em> isn't just our tagline — it's our promise. Our
                three floors are home to six complete departments: Sarees (including our exclusive
                Sircilla Matchbox Silk collection), Bridal &amp; Wedding, Men's Wear, Ethnic Wear,
                Kids' Wear, and a full Suiting &amp; Shirting fabric department.
              </p>
              <p>
                Every saree we carry is sourced directly from the weavers — Gadwal, Pochampally Ikat,
                Narayanpet, Mangalagiri, Dharmavaram, Uppada and Kanjivaram. Every fabric in our
                Suiting &amp; Shirting section is premium quality — Raymond PV, Terrycot, poly-viscose
                blends and fine cotton shirting.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-4">
                Our Departments
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="flex items-center gap-2 p-3 border border-stone-200 rounded hover:border-[var(--maroon)] hover:text-[var(--maroon)] transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--maroon)]/30 group-hover:bg-[var(--maroon)] transition-colors shrink-0" />
                    <span className="text-xs font-medium">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-4">
                Trusted by 82,000+ Followers
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
              <p>
                Since opening in February 2021, we've grown to become Sircilla's most-followed fashion
                destination with over <strong className="text-[var(--maroon)]">82,000 Instagram followers</strong> on
                our primary account <em>@sircilla_vishalashoppingmall</em>. Our community follows us
                for daily saree reels, bridal showcases, Gadwal &amp; Ikat arrivals, and festive
                collections. Our customers are not just shoppers — they are part of the Vishala family.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold mb-4">
                Find Us in Sircilla
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
              <p>
                We are located at <strong className="text-[var(--maroon)]">{business.address.full}</strong>.{" "}
                Open Monday to Saturday 10 AM – 8:30 PM and Sundays 10 AM – 6 PM. Walk in, explore
                all three floors, and let our experienced team guide you to your perfect outfit.
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap gap-3">
            <Link href="/vishala/collections/sarees" className="btn-maroon inline-block">
              Shop Sarees
            </Link>
            <Link href="/vishala/collections/bridal" className="btn-maroon inline-block">
              Bridal Collection
            </Link>
            <Link href="/vishala/contact" className="btn-outline-maroon inline-block">
              Get Directions
            </Link>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
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

import { Link } from "wouter";
import { business } from "@/data/store";

export function AboutBanner() {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "var(--cream-dark)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=85"
                alt="Vishala Shopping Mall Sircilla"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"; }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-full text-center"
              style={{ backgroundColor: "var(--maroon)" }}
            >
              <span className="font-heading text-3xl text-[var(--gold)] font-semibold leading-none">
                {new Date().getFullYear() - parseInt(business.established)}+
              </span>
              <span className="text-white/80 text-[10px] uppercase tracking-widest mt-1">Years</span>
            </div>
          </div>

          <div>
            <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--maroon)] font-semibold mb-4 leading-tight">
              Sircilla's Premier<br />Fashion Destination
            </h2>
            <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Founded on <strong className="text-[var(--maroon)]">{business.foundedDate}</strong> as a
              Partnership Firm &amp; {business.msme}, Vishala Shopping Mall has grown to become
              Sircilla's most trusted fashion destination — right in the heart of Markandeya Nagar,
              near Gandhi Chowk, Telangana's proud Textile Town.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              From exclusive Sircilla Matchbox Silk Sarees and bridal Kanjivaram silks to suiting
              &amp; shirting fabrics, kids' Langa Voni sets and festive menswear — our six
              departments serve every family across Rajanna Sircilla district. Our tagline says it
              all: <strong className="text-[var(--maroon)]">"A Mall For All."</strong>
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 pb-6 border-b border-stone-200">
              {[
                { number: "82K+", label: "Instagram Followers" },
                { number: "6", label: "Departments" },
                { number: "1000+", label: "Designs Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl sm:text-3xl text-[var(--maroon)] font-semibold">{stat.number}</p>
                  <p className="text-stone-500 text-[11px] uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/vishala/about" className="btn-maroon inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

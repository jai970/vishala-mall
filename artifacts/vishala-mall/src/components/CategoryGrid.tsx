import { Link } from "wouter";
import { categories } from "@/data/store";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-14 sm:py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-2">
          Our Collections
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--maroon)] font-semibold mb-3">
          Shop by Category
        </h2>
        <div className="section-divider" />
        <p className="text-stone-500 text-sm mt-4 max-w-md mx-auto">
          Six departments, three floors, thousands of designs — from Sircilla Matchbox Silk Sarees to
          premium Raymond suiting, all under one roof
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="cat-card group rounded-lg bg-stone-100"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=70";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white/70 text-[10px]">Shop now</span>
                  <ArrowRight size={10} className="text-[var(--gold-light)]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

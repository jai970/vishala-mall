import { Link } from "wouter";
import { collections } from "@/data/products";

export function CollectionGrid() {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-2">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-[hsl(26,72%,50%)] mx-auto" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {collections.map((col) => (
          <Link
            key={col.id}
            href={col.href}
            className="group relative aspect-[3/4] overflow-hidden rounded bg-[#1e1e1e]"
          >
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-white font-medium text-xs sm:text-sm uppercase tracking-wider">
                {col.title}
              </h3>
            </div>
            <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-300 rounded" />
          </Link>
        ))}
      </div>
    </section>
  );
}

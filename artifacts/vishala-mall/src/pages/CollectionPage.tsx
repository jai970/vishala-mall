import { useState } from "react";
import { useParams, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { categories, sampleProducts, business } from "@/data/store";
import { MessageCircle, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

function badgeClass(badge: string) {
  if (badge === "SALE") return "bg-red-600 text-white";
  if (badge === "HOT") return "bg-[var(--maroon)] text-white";
  if (badge === "LOCAL") return "bg-[#1a5c2a] text-white";
  return "bg-[var(--gold-dark)] text-white";
}

export function CollectionPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "sarees";
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const { addItem } = useCart();

  const category = categories.find((c) => c.id === slug) ?? categories[0];
  const products = sampleProducts[slug] ?? sampleProducts["sarees"];
  const isFabric = slug === "suiting-shirting";

  function handleAdd(product: (typeof products)[number]) {
    addItem({ ...product, isFabric });
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1800);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <div style={{ backgroundColor: "var(--maroon)" }} className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-xs text-white/40 flex items-center gap-1.5 mb-4">
              <Link href="/vishala/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/70">{category.name}</span>
            </nav>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-3">
              {category.name}
            </h1>
            <p className="text-white/60 text-sm max-w-xl">{category.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {category.subcategories.map((sub) => (
                <span
                  key={sub}
                  className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-stone-500 text-sm">{products.length} designs shown</p>
            {isFabric && (
              <p className="text-stone-400 text-xs italic">* Prices per metre</p>
            )}
          </div>

          {slug === "sarees" && (
            <div className="mb-8 bg-[#1a5c2a]/5 border border-[#1a5c2a]/20 rounded-lg px-5 py-4 flex gap-3 items-start">
              <span className="text-lg">🧵</span>
              <div>
                <p className="text-[#1a5c2a] font-semibold text-sm">
                  Sircilla Matchbox Silk — Our Local Specialty
                </p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Sircilla, Telangana's Textile Town, is famous for these extraordinary handwoven silk sarees — 5.5 metres of pure silk weighing just 100 grams, light enough to fold into a matchbox. Available exclusively at Vishala Shopping Mall.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => {
              const discount = product.comparePrice
                ? Math.round(
                    ((product.comparePrice - product.price) / product.comparePrice) * 100
                  )
                : null;
              const added = addedIds.has(product.id);

              return (
                <div key={product.id} className="product-card group flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-t">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=70";
                      }}
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${badgeClass(product.badge)}`}
                      >
                        {product.badge}
                      </span>
                    )}
                    {discount && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5">
                        -{discount}%
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 border border-stone-100 border-t-0 rounded-b p-2.5">
                    {product.tag && (
                      <p className="text-[var(--gold-dark)] text-[10px] uppercase tracking-wider font-medium mb-0.5">
                        {product.tag}
                      </p>
                    )}
                    <p className="text-stone-800 text-xs sm:text-sm font-medium line-clamp-2 mb-1.5 flex-1">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[var(--maroon)] font-semibold text-sm">
                        ₹{product.price.toLocaleString("en-IN")}
                        {isFabric && (
                          <span className="text-stone-400 text-[10px] font-normal">/m</span>
                        )}
                      </span>
                      {product.comparePrice && (
                        <span className="text-stone-400 text-xs line-through">
                          ₹{product.comparePrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center justify-center gap-1.5 w-full text-white text-[11px] font-semibold uppercase tracking-wider py-2 rounded transition-all ${
                        added
                          ? "bg-green-600"
                          : "bg-[var(--maroon)] hover:bg-[var(--maroon-dark)]"
                      }`}
                    >
                      {added ? (
                        <>
                          <Check size={12} />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={12} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[var(--maroon)]/5 border border-[var(--maroon)]/10 rounded-lg p-8 text-center">
            <p className="text-stone-600 text-sm mb-2">Don't see what you're looking for?</p>
            <h3 className="font-heading text-2xl text-[var(--maroon)] font-semibold mb-4">
              {isFabric ? "100+ Fabric Varieties In Store!" : "1000+ More Designs In Store!"}
            </h3>
            <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto">
              {isFabric
                ? "We stock many more suiting and shirting varieties — Raymond, Vimal, Terrycot, Cotton and more. Visit us or WhatsApp for swatches and pricing."
                : "Our store has thousands more designs. Visit us in Sircilla or WhatsApp us for a personalised shopping experience."}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to know more about your ${category.name} collection at Vishala Shopping Mall, Sircilla.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp for More
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vishala+Shopping+Mall+Sircilla"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-maroon inline-block"
              >
                Get Directions
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

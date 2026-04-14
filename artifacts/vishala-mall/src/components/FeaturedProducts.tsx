import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Check } from "lucide-react";
import { sampleProducts } from "@/data/store";
import { useCart } from "@/context/CartContext";

const tabs = [
  { id: "sarees", label: "Sarees" },
  { id: "bridal", label: "Bridal" },
  { id: "mens-wear", label: "Men's" },
  { id: "ethnic-wear", label: "Ethnic" },
  { id: "kids-wear", label: "Kids'" },
  { id: "suiting-shirting", label: "Suiting" },
];

function badgeClass(badge: string) {
  if (badge === "SALE") return "bg-red-600 text-white";
  if (badge === "HOT") return "bg-[var(--maroon)] text-white";
  if (badge === "LOCAL") return "bg-[#1a5c2a] text-white";
  return "bg-[var(--gold-dark)] text-white";
}

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("sarees");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const products = (sampleProducts[activeTab] ?? []).slice(0, 8);
  const isFabric = activeTab === "suiting-shirting";
  const { addItem } = useCart();

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
    <section className="py-14 sm:py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-2">
          Curated For You
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--maroon)] font-semibold mb-3">
          Featured Collections
        </h2>
        <div className="section-divider" />
      </div>

      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all border ${
              activeTab === tab.id
                ? "bg-[var(--maroon)] text-white border-[var(--maroon)]"
                : "bg-transparent text-stone-600 border-stone-200 hover:border-[var(--maroon)] hover:text-[var(--maroon)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isFabric && (
        <p className="text-center text-stone-400 text-xs mb-6 italic">
          * Prices are per metre. WhatsApp us for tailoring & bulk orders.
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => {
          const discount = product.comparePrice
            ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
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
                  <span className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${badgeClass(product.badge)}`}>
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
                    {isFabric && <span className="text-stone-400 text-[10px] font-normal">/m</span>}
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

      <div className="text-center mt-10">
        <Link href={`/vishala/collections/${activeTab}`} className="btn-outline-maroon inline-block">
          View All {tabs.find((t) => t.id === activeTab)?.label}
        </Link>
      </div>
    </section>
  );
}

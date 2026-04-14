import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { ChevronRight } from "lucide-react";

type Tab = "best-sellers" | "new-arrivals" | "offer-zone";

const tabs: { label: string; value: Tab }[] = [
  { label: "Best Sellers", value: "best-sellers" },
  { label: "New Arrivals", value: "new-arrivals" },
  { label: "Offer Zone", value: "offer-zone" },
];

interface ProductTabsProps {
  title?: string;
}

export function ProductTabs({ title = "Featured Products" }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("best-sellers");

  const filtered = products.filter((p) => p.collection === activeTab).slice(0, 8);

  return (
    <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-4">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-white text-[#1a1a1a] font-semibold"
                  : "text-white/60 hover:text-white border border-white/20 hover:border-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <a
          href={`/collections/${activeTab}`}
          className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:text-white hover:border-white px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
        >
          View All
          <ChevronRight size={14} />
        </a>
      </div>
    </section>
  );
}

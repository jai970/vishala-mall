import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  return (
    <div className="product-card-hover group relative flex flex-col">
      <Link
        href={product.href}
        className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm mb-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://lepakshigdk.com/cdn/shop/files/Lepakshi_Show_Room_1.jpg?v=1772178145&width=400";
          }}
        />

        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${
              product.badge === "SALE"
                ? "bg-red-600 text-white"
                : product.badge === "HOT"
                ? "bg-[#7b3d14] text-[#fffafa]"
                : "bg-[#333] text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        {discount && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            -{discount}%
          </span>
        )}

        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pb-3">
          <button
            className="bg-white text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider px-5 py-2.5 hover:bg-white/90 transition-colors flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingBag size={13} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="flex flex-col gap-1 px-0.5">
        <Link href={product.href} className="text-white/90 hover:text-white text-xs sm:text-sm font-medium uppercase tracking-wide line-clamp-2 transition-colors">
          {product.title}
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-semibold">₹{product.price.toLocaleString("en-IN")}</span>
          {product.compareAtPrice && (
            <span className="text-white/40 text-xs line-through">
              ₹{product.compareAtPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

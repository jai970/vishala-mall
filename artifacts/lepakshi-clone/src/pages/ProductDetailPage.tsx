import { useState } from "react";
import { useParams, Link } from "wouter";
import { ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="font-heading text-5xl font-normal text-white mb-4">404</h1>
            <p className="text-white/60 mb-6">Product not found</p>
            <Link href="/collections/all" className="inline-block bg-white text-[#1a1a1a] px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors uppercase tracking-wider">
              View All Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = [product.image, ...(product.hoverImage ? [product.hoverImage] : [])];
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <nav className="text-xs text-white/40 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/collections/${product.category === "saree" ? "sarees" : "lehengas"}`} className="hover:text-white/70 transition-colors">
              {product.category === "saree" ? "Sarees" : "Lehengas"}
            </Link>
            <span>/</span>
            <span className="text-white/60">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm">
                {product.badge && (
                  <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                    product.badge === "SALE" ? "bg-red-600 text-white" :
                    product.badge === "HOT" ? "bg-[#7b3d14] text-[#fffafa]" : "bg-[#333] text-white"
                  }`}>
                    {product.badge}
                  </span>
                )}
                {discount && (
                  <span className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm">
                    -{discount}%
                  </span>
                )}
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://lepakshigdk.com/cdn/shop/files/Lepakshi_Show_Room_1.jpg?v=1772178145&width=800";
                  }}
                />
              </div>

              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-20 aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm border-2 transition-colors ${
                        selectedImage === i ? "border-white/70" : "border-transparent hover:border-white/30"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.title} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:pt-4">
              <p className="text-[hsl(26,72%,55%)] text-xs uppercase tracking-widest font-medium mb-2">
                {product.category === "saree" ? "Saree" : "Lehanga"}
              </p>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-semibold text-white">₹{product.price.toLocaleString("en-IN")}</span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-white/40 text-lg line-through">₹{product.compareAtPrice.toLocaleString("en-IN")}</span>
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-sm">Save {discount}%</span>
                  </>
                )}
              </div>

              {product.description && (
                <p className="text-white/60 text-sm leading-relaxed mb-6 border-t border-white/10 pt-6">
                  {product.description}
                </p>
              )}

              <div className="space-y-3 mb-8 text-sm">
                {product.fabric && (
                  <div className="flex gap-3">
                    <span className="text-white/40 w-20 shrink-0">Fabric</span>
                    <span className="text-white/80">{product.fabric}</span>
                  </div>
                )}
                {product.care && (
                  <div className="flex gap-3">
                    <span className="text-white/40 w-20 shrink-0">Care</span>
                    <span className="text-white/80">{product.care}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-white text-[#1a1a1a] hover:bg-white/90"
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to Cart
                  </>
                )}
              </button>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                {[
                  { label: "Pan-India Shipping", sub: "Free on orders ₹999+" },
                  { label: "Easy Returns", sub: "7-day return policy" },
                  { label: "Secure Packaging", sub: "Safe & carefully packed" },
                  { label: "Authentic Products", sub: "Quality since 1996" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#1a1a1a] rounded-sm px-3 py-3">
                    <p className="text-white/80 text-xs font-semibold">{item.label}</p>
                    <p className="text-white/40 text-[11px] mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/10">
              <h2 className="font-heading text-2xl font-normal text-white mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getCollectionProducts } from "@/data/products";

export function CollectionPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "all";
  const { title, products } = getCollectionProducts(slug);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
            <nav className="text-xs text-white/40 mb-3 flex items-center gap-1.5">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>/</span>
              <span className="text-white/60">{title}</span>
            </nav>
            <h1 className="font-heading text-3xl sm:text-4xl font-normal text-white">{title}</h1>
            <p className="text-white/45 text-sm mt-2">{products.length} product{products.length !== 1 ? "s" : ""}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg mb-6">No products found in this collection yet.</p>
              <a
                href="/collections/all"
                className="inline-block bg-white text-[#1a1a1a] px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors uppercase tracking-wider"
              >
                View All Products
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

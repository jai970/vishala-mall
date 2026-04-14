import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="https://lepakshigdk.com/cdn/shop/files/Lepakshi_Show_Room_1.jpg?v=1772178145&width=1800"
            alt="Srinilaya Metro Shopping Mall"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-normal text-white text-center px-4">
              Our Story
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="space-y-8 text-white/65 leading-relaxed text-base">
            <div>
              <h2 className="font-heading text-2xl font-normal text-white mb-4">Rooted in Tradition</h2>
              <p>
                Srinilaya Metro Shopping Mall was founded with a single vision — to bring the finest Indian ethnic
                wear to women across the country at honest, accessible prices. We have curated sarees and lehengas
                that celebrate the rich textile heritage of India.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-normal text-white mb-4">Craftsmanship & Authenticity</h2>
              <p>
                Every saree and lehanga in our collection is handpicked directly from weavers and artisans
                across India — from the silk weavers of Kanchipuram and Uppada to the cotton craftsmen of
                Mangalagiri and Narayanpet. We believe in preserving these ancient weaving traditions by
                giving them a platform in the modern world.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-normal text-white mb-4">Honest Prices, Always</h2>
              <p>
                We cut out the middlemen and work directly with weavers to offer you genuine products
                at fair prices. What you see is what you pay — no hidden charges, no inflated MRPs.
                Our customers trust us because we have never compromised on quality or transparency.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-normal text-white mb-4">Pan-India Delivery</h2>
              <p>
                From our showroom to your doorstep — we ship across India with careful, secure packaging
                to ensure your precious garments arrive in perfect condition. We take pride in every
                order we fulfill, treating each saree as a piece of art.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/collections/all"
              className="inline-flex items-center justify-center bg-white text-[#1a1a1a] px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Shop Our Collection
            </Link>
            <Link
              href="/pages/contact"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white/60 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

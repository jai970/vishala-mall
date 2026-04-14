import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroBanner } from "@/components/HeroBanner";
import { TrustBanner } from "@/components/TrustBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutBanner } from "@/components/AboutBanner";
import { InstagramSection } from "@/components/InstagramSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import { business } from "@/data/store";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <TrustBanner />
        <CategoryGrid />
        <FeaturedProducts />
        <AboutBanner />
        <InstagramSection />
        <ContactCTA />
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

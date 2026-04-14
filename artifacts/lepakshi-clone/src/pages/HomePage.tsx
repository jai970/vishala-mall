import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { CollectionGrid } from "@/components/CollectionGrid";
import { ProductTabs } from "@/components/ProductTabs";
import { InstagramSection } from "@/components/InstagramSection";
import { TrustBanner } from "@/components/TrustBanner";
import { BrandScroll } from "@/components/BrandScroll";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <TrustBanner />
        <CollectionGrid />
        <div className="h-px bg-white/5 mx-4" />
        <ProductTabs title="Featured Products" />
        <BrandScroll />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}

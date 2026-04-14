export interface Product {
  id: string;
  title: string;
  image: string;
  hoverImage?: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  href: string;
  category: "saree" | "lehanga";
  collection: "best-sellers" | "new-arrivals" | "offer-zone";
  tags: string[];
  description?: string;
  fabric?: string;
  care?: string;
}

const CDN = "//lepakshigdk.com/cdn/shop/files";

export const products: Product[] = [
  {
    id: "semi-kanchi-vintage",
    title: "SEMI KANCHI VINTAGE",
    image: `${CDN}/WhatsAppImage2026-04-08at2.48.51PM.jpg?v=1775640285&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-04-08_at_2.48.51_PM_1.jpg?v=1775640295&width=1100`,
    price: 1299,
    compareAtPrice: 1899,
    badge: "HOT",
    href: "/products/semi-kanchi-vintage",
    category: "saree",
    collection: "new-arrivals",
    tags: ["sarees", "pattu-sarees", "new-arrivals", "all"],
    description: "A stunning Semi Kanchi Vintage saree with rich traditional weaving patterns. Perfect for festive occasions and celebrations.",
    fabric: "Semi Kanchipuram Silk",
    care: "Dry clean only",
  },
  {
    id: "lenin-mirror",
    title: "LENIN MIRROR",
    image: `${CDN}/WhatsApp_Image_2026-04-08_at_2.02.43_PM.jpg?v=1775637399&width=1100`,
    hoverImage: `${CDN}/WhatsAppImage2026-04-07at7.54.35PM.jpg?v=1775637399&width=1100`,
    price: 799,
    compareAtPrice: 1199,
    badge: "SALE",
    href: "/products/lenin-mirror",
    category: "saree",
    collection: "new-arrivals",
    tags: ["sarees", "work-sarees", "new-arrivals", "all"],
    description: "Elegant Lenin Mirror saree with delicate mirror work embellishments. A beautiful blend of tradition and contemporary style.",
    fabric: "Lenin Cotton",
    care: "Hand wash recommended",
  },
  {
    id: "banarasi-khaddi-georgette-2",
    title: "BANARASI KHADDI GEORGETTE-2",
    image: `${CDN}/WhatsAppImage2026-04-07at5.17.02PM.jpg?v=1775564397&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-04-07_at_5.17.03_PM.jpg?v=1775564414&width=1100`,
    price: 1099,
    href: "/products/banarasi-khaddi-georgette-2",
    category: "saree",
    collection: "best-sellers",
    tags: ["sarees", "designer-sarees", "best-sellers", "all"],
    description: "Luxurious Banarasi Khaddi Georgette saree with intricate zari work. Inspired by the rich weaving heritage of Varanasi.",
    fabric: "Khaddi Georgette",
    care: "Dry clean only",
  },
  {
    id: "banarasi-khaddi-georgette-1",
    title: "BANARASI KHADDI GEORGETTE-1",
    image: `${CDN}/WhatsAppImage2026-04-07at5.05.51PM.jpg?v=1775562313&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-04-07_at_5.05.51_PM_1.jpg?v=1775562331&width=1100`,
    price: 1099,
    href: "/products/banarasi-khaddi-georgette-1",
    category: "saree",
    collection: "best-sellers",
    tags: ["sarees", "designer-sarees", "best-sellers", "all"],
    description: "Classic Banarasi Khaddi Georgette saree with timeless zari motifs. A must-have for every saree lover's collection.",
    fabric: "Khaddi Georgette",
    care: "Dry clean only",
  },
  {
    id: "mysore-crepe-silk-offer",
    title: "MYSORE CREPE SILK OFFER",
    image: `${CDN}/WhatsAppImage2026-04-07at1.12.36PM.jpg?v=1775549091&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-04-07_at_1.12.36_PM_1.jpg?v=1775549159&width=1100`,
    price: 699,
    compareAtPrice: 999,
    badge: "SALE",
    href: "/products/mysore-crepe-silk-offer",
    category: "saree",
    collection: "offer-zone",
    tags: ["sarees", "pattu-sarees", "offer-zone", "all"],
    description: "Smooth Mysore Crepe Silk saree with a beautiful sheen. Lightweight and comfortable for daily wear and special occasions.",
    fabric: "Mysore Crepe Silk",
    care: "Dry clean recommended",
  },
  {
    id: "mashru-satin-lehanga",
    title: "MASHRU SATIN LEHANGA",
    image: `${CDN}/WhatsAppImage2026-04-06at8.42.10PM.jpg?v=1775547806&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-04-06_at_8.42.10_PM.jpg?v=1775547837&width=1100`,
    price: 2499,
    compareAtPrice: 3499,
    href: "/products/mashru-satin-lehanga",
    category: "lehanga",
    collection: "new-arrivals",
    tags: ["lehengas", "designer-lehengas", "new-arrivals", "all"],
    description: "Breathtaking Mashru Satin Lehanga with traditional embroidery. Perfect for weddings and festive celebrations.",
    fabric: "Mashru Satin",
    care: "Dry clean only",
  },
  {
    id: "mangalagiri-georgette",
    title: "MANGALAGIRI GEORGETTE",
    image: `${CDN}/WhatsAppImage2026-02-26at12.20.40PM_1.jpg?v=1772089186&width=1100`,
    hoverImage: `${CDN}/WhatsApp_Image_2026-02-26_at_12.20.40_PM.jpg?v=1772089802&width=1100`,
    price: 899,
    href: "/products/mangalagiri-georgette",
    category: "saree",
    collection: "best-sellers",
    tags: ["sarees", "work-sarees", "fancy-sarees", "best-sellers", "all"],
    description: "Authentic Mangalagiri Georgette saree with the distinctive temple border. Handwoven by skilled artisans of Andhra Pradesh.",
    fabric: "Mangalagiri Georgette",
    care: "Hand wash with mild detergent",
  },
  {
    id: "koruvai-uppada-silk",
    title: "KORUVAI UPPADA SILK",
    image: `${CDN}/Lepakshi_Show_Room_34.png?v=1768886098&width=1100`,
    price: 3499,
    compareAtPrice: 4999,
    badge: "HOT",
    href: "/products/koruvai-uppada-silk",
    category: "saree",
    collection: "best-sellers",
    tags: ["sarees", "pattu-sarees", "designer-sarees", "best-sellers", "all"],
    description: "Exquisite Koruvai Uppada Silk saree with intricate jamdani weave. A collector's piece for the true connoisseur.",
    fabric: "Uppada Silk",
    care: "Dry clean only",
  },
  {
    id: "ganga-jamuna-georgette",
    title: "GANGA JAMUNA GEORGETTE",
    image: `${CDN}/Lepakshi_Show_Room_28.png?v=1768797859&width=1100`,
    price: 1199,
    href: "/products/ganga-jamuna-georgette",
    category: "saree",
    collection: "offer-zone",
    tags: ["sarees", "fancy-sarees", "designer-sarees", "offer-zone", "all"],
    description: "Beautiful Ganga Jamuna Georgette saree with dual-tone border design. Graceful and versatile for various occasions.",
    fabric: "Georgette",
    care: "Dry clean recommended",
  },
  {
    id: "narayanpet-chanderi",
    title: "NARAYANPET CHANDERI",
    image: `${CDN}/Frame_03.png?v=1768799932&width=1100`,
    price: 899,
    href: "/products/narayanpet-chanderi",
    category: "saree",
    collection: "offer-zone",
    tags: ["sarees", "fancy-sarees", "work-sarees", "offer-zone", "all"],
    description: "Lightweight Narayanpet Chanderi saree with traditional checks and stripes. Comfortable for daily wear with ethnic elegance.",
    fabric: "Chanderi Cotton-Silk",
    care: "Gentle hand wash",
  },
  {
    id: "semi-green-mango",
    title: "SEMI GREEN MANGO",
    image: `${CDN}/Frame02.png?v=1768799467&width=1100`,
    price: 1199,
    compareAtPrice: 1599,
    href: "/products/semi-green-mango",
    category: "saree",
    collection: "new-arrivals",
    tags: ["sarees", "fancy-sarees", "pattu-sarees", "new-arrivals", "all"],
    description: "Vibrant Semi Green Mango saree with traditional mango (paisley) motifs. A timeless pattern reimagined in fresh colours.",
    fabric: "Semi Silk",
    care: "Dry clean only",
  },
  {
    id: "jamdani-pure-cotton",
    title: "JAMDANI PURE COTTON",
    image: `${CDN}/Frame_06.png?v=1768800434&width=1100`,
    price: 799,
    compareAtPrice: 1099,
    badge: "NEW",
    href: "/products/jamdani-pure-cotton",
    category: "saree",
    collection: "new-arrivals",
    tags: ["sarees", "work-sarees", "fancy-sarees", "new-arrivals", "all"],
    description: "Fine Jamdani Pure Cotton saree with intricate hand-woven patterns. A UNESCO heritage craft woven with expertise and patience.",
    fabric: "Pure Cotton",
    care: "Hand wash with cold water",
  },
];

export function getCollectionProducts(slug: string): { title: string; products: Product[] } {
  const map: Record<string, { title: string; filter: (p: Product) => boolean }> = {
    "all": { title: "All Products", filter: () => true },
    "offer-zone": { title: "Offer Zone", filter: (p) => p.collection === "offer-zone" },
    "best-sellers": { title: "Best Sellers", filter: (p) => p.collection === "best-sellers" },
    "new-arrivals": { title: "New Arrivals", filter: (p) => p.collection === "new-arrivals" },
    "sarees": { title: "Sarees", filter: (p) => p.category === "saree" },
    "fancy-sarees": { title: "Fancy Sarees", filter: (p) => p.tags.includes("fancy-sarees") },
    "designer-sarees": { title: "Designer Sarees", filter: (p) => p.tags.includes("designer-sarees") },
    "work-sarees": { title: "Work Sarees", filter: (p) => p.tags.includes("work-sarees") },
    "pattu-sarees": { title: "Pattu Sarees", filter: (p) => p.tags.includes("pattu-sarees") },
    "lehengas": { title: "Lehengas", filter: (p) => p.category === "lehanga" },
    "designer-lehengas": { title: "Designer Lehengas", filter: (p) => p.tags.includes("designer-lehengas") },
  };
  const entry = map[slug] ?? { title: "Collection", filter: () => true };
  return { title: entry.title, products: products.filter(entry.filter) };
}

export const heroSlides = [
  {
    id: 1,
    image: `https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1800&q=90`,
    title: "New Season Collection",
    subtitle: "Exquisite Sarees & Lehengas",
    cta: "Shop Now",
    href: "/collections/all",
    align: "center" as const,
  },
  {
    id: 2,
    image: `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1800&q=90`,
    title: "Rooted in Tradition",
    subtitle: "Timeless Craftsmanship — Honest Prices, Always",
    cta: "View All",
    href: "/collections/all",
    align: "center" as const,
  },
];

export const collections = [
  {
    id: "frame03",
    title: "Fancy Sarees",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_03.png?v=1768799932&width=600`,
    href: "/collections/fancy-sarees",
  },
  {
    id: "frame02",
    title: "Designer Sarees",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame02.png?v=1768799467&width=600`,
    href: "/collections/designer-sarees",
  },
  {
    id: "frame06",
    title: "Work Sarees",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_06.png?v=1768800434&width=600`,
    href: "/collections/work-sarees",
  },
  {
    id: "frame09",
    title: "Pattu Sarees",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_09.png?v=1768800808&width=600`,
    href: "/collections/pattu-sarees",
  },
  {
    id: "frame01",
    title: "Designer Lehengas",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_01.png?v=1768799498&width=600`,
    href: "/collections/lehengas",
  },
];

export const instagramReels = [
  {
    id: "reel1",
    image: `https://lepakshigdk.com/cdn/shop/files/Lepakshi_Show_Room_34.png?v=1768886098&width=400`,
    url: "https://www.instagram.com/reel/DTPepyvAZC9/",
  },
  {
    id: "reel2",
    image: `https://lepakshigdk.com/cdn/shop/files/Lepakshi_Show_Room_28.png?v=1768797859&width=400`,
    url: "https://www.instagram.com/reel/DTcSsangTTY/",
  },
  {
    id: "reel3",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_03.png?v=1768799932&width=400`,
    url: "https://www.instagram.com/reel/DTpNIAhATE1/",
  },
  {
    id: "reel4",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame02.png?v=1768799467&width=400`,
    url: "https://www.instagram.com/reel/DTsUo7JgZyt/",
  },
  {
    id: "reel5",
    image: `https://lepakshigdk.com/cdn/shop/files/Frame_06.png?v=1768800434&width=400`,
    url: "https://www.instagram.com/reel/DTj6pnEgQHs/",
  },
];

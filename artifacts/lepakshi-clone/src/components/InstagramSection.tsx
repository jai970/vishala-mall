import { Instagram, Play } from "lucide-react";
import { instagramReels } from "@/data/products";

export function InstagramSection() {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-2">
          Follow Us on Instagram
        </h2>
        <div className="w-12 h-px bg-[hsl(26,72%,50%)] mx-auto mb-4" />
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {["srinilayametro"].map((handle) => (
            <a
              key={handle}
              href={`https://www.instagram.com/${handle}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
            >
              <Instagram size={13} />
              @{handle}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {instagramReels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-sm"
          >
            <img
              src={reel.image}
              alt="Instagram reel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1.5">
                <Play size={28} className="text-white fill-white" />
                <span className="text-white text-xs font-medium">Watch Reel</span>
              </div>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram size={16} className="text-white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

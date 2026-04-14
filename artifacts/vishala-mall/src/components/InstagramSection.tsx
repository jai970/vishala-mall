import { Instagram } from "lucide-react";
import { instagramPosts, business } from "@/data/store";

export function InstagramSection() {
  return (
    <section className="py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[var(--gold)] text-xs uppercase tracking-widest font-medium mb-2">Social Media</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--maroon)] font-semibold mb-2">
            Follow Our Story
          </h2>
          <div className="section-divider" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <Instagram size={16} className="text-stone-400" />
            <a
              href={business.social.instagram1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 text-sm hover:text-[var(--maroon)] transition-colors"
            >
              @{business.social.instagram1.handle}
            </a>
            <span className="text-stone-300">·</span>
            <span className="text-[var(--maroon)] font-semibold text-sm">{business.social.instagram1.followers} followers</span>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-stone-100 rounded-sm"
              aria-label={post.caption}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&q=70"; }}
              />
              <div className="absolute inset-0 bg-[var(--maroon)]/0 group-hover:bg-[var(--maroon)]/40 transition-all duration-300 flex items-center justify-center">
                <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={business.social.instagram1.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-maroon inline-flex items-center gap-2"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

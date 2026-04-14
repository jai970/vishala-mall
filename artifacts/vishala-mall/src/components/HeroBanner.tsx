import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/store";

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 350);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <div className="relative w-full h-[56vw] min-h-[340px] max-h-[660px] overflow-hidden bg-stone-900 group">
      <div className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1800&q=80"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24 transition-all duration-500 ${
          transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        } ${slide.align === "right" ? "items-end text-right" : slide.align === "center" ? "items-center text-center" : "items-start text-left"}`}
      >
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs font-medium uppercase tracking-widest">
              Vishala Shopping Mall
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={slide.ctaHref}
              className="btn-gold inline-block"
            >
              {slide.cta}
            </Link>
            <Link
              href="/vishala/contact"
              className="btn-outline-maroon bg-white/10 border-white/40 text-white hover:bg-white/20 hover:border-white inline-block"
              style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)", color: "white" }}
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[var(--gold)]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/products";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 300);
    },
    [transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <div className="relative w-full h-[55vw] min-h-[320px] max-h-[680px] overflow-hidden bg-[#1a1a1a] group">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 text-center px-4">
        <h1
          className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 sm:mb-4 transition-all duration-500 ${
            transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.title}
        </h1>
        <p
          className={`text-white/80 text-sm sm:text-base mb-6 max-w-md transition-all duration-500 delay-75 ${
            transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.subtitle}
        </p>
        <Link
          href={slide.href}
          className={`inline-block bg-white text-[#1a1a1a] px-7 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-white/90 transition-all duration-500 delay-100 ${
            transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.cta}
        </Link>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-200 ${
              i === current
                ? "w-6 h-1.5 bg-white rounded-full"
                : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

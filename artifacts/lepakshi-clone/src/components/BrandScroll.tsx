const CDN = "//lepakshigdk.com/cdn/shop/files";

const brandImages = [
  { src: `${CDN}/Frame_03.png?v=1768799932&width=200`, alt: "Brand 1" },
  { src: `${CDN}/Frame02.png?v=1768799467&width=200`, alt: "Brand 2" },
  { src: `${CDN}/Frame_06.png?v=1768800434&width=200`, alt: "Brand 3" },
  { src: `${CDN}/Frame_09.png?v=1768800808&width=200`, alt: "Brand 4" },
  { src: `${CDN}/Frame_01.png?v=1768799498&width=200`, alt: "Brand 5" },
  { src: `${CDN}/Frame_03.png?v=1768799932&width=200`, alt: "Brand 6" },
  { src: `${CDN}/Frame02.png?v=1768799467&width=200`, alt: "Brand 7" },
];

export function BrandScroll() {
  return (
    <div className="border-y border-white/10 bg-[#161616] overflow-hidden py-5">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...brandImages, ...brandImages].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 opacity-50 hover:opacity-80 transition-opacity">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

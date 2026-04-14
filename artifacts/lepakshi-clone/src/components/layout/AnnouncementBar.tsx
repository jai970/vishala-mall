import { useState, useEffect } from "react";
import { X } from "lucide-react";

const announcements = [
  "Sarees & Lehengas from \u20b9300 \u2013 Honest Prices Since 1996",
  "Pan-India Shipping | Secure Packaging",
  "Easy Returns & Refunds Available",
];

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm py-2.5 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <div
          className={`text-center transition-all duration-300 ${
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {announcements[currentIndex]}
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-0 text-white/60 hover:text-white transition-colors p-1"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

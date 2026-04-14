import { useState } from "react";
import { X } from "lucide-react";
import { announcements } from "@/data/store";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [current, setCurrent] = useState(0);

  if (dismissed) return null;

  return (
    <div
      className="text-white text-xs sm:text-sm py-2.5 px-4 flex items-center justify-between gap-2"
      style={{ backgroundColor: "#4a0a12" }}
    >
      <div className="flex-1 overflow-hidden text-center">
        <div className="flex items-center justify-center gap-6">
          <div className="marquee-wrapper overflow-hidden">
            <div className="flex marquee-track whitespace-nowrap gap-12">
              {[...announcements, ...announcements].map((ann, i) => (
                <span key={i} className="inline-block text-white/85 font-light">{ann}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-white/50 hover:text-white shrink-0 ml-2"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

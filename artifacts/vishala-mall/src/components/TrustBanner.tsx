import { ShieldCheck, Store, Users, Star } from "lucide-react";
import { trustPoints } from "@/data/store";

const icons = [ShieldCheck, Store, Users, Star];

export function TrustBanner() {
  return (
    <section style={{ backgroundColor: "var(--maroon)" }} className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[var(--gold-light)]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{point.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed hidden sm:block">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

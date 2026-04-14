import { Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const trustItems = [
  {
    icon: Truck,
    title: "Pan-India Shipping",
    subtitle: "Delivered to your doorstep",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "Hassle-free return policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Packaging",
    subtitle: "Safe & carefully packed",
  },
  {
    icon: Package,
    title: "Honest Prices",
    subtitle: "Quality since 1996",
  },
];

export function TrustBanner() {
  return (
    <div className="border-y border-white/10 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(26,72%,20%)] flex items-center justify-center">
                  <Icon size={18} className="text-[hsl(26,72%,60%)]" />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm font-semibold">{item.title}</p>
                  <p className="text-white/50 text-xs">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

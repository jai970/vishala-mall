import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Search, ShoppingBag } from "lucide-react";
import { business, categories } from "@/data/store";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ backgroundColor: "var(--maroon)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">
            <button
              className="lg:hidden text-white/80 hover:text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <Link href="/vishala/" className="flex items-center gap-3">
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-white font-semibold text-xl sm:text-2xl tracking-wide">
                  Vishala
                </span>
                <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light -mt-1">
                  Shopping Mall · Sircilla
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/vishala/"
                className="nav-item text-white/80 hover:text-white text-sm font-medium px-4 py-5 transition-colors"
              >
                Home
              </Link>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(cat.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={cat.href}
                    className="nav-item flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium px-3 py-5 transition-colors"
                  >
                    {cat.name}
                    <ChevronDown size={12} className="opacity-60" />
                  </Link>
                  {activeDropdown === cat.id && (
                    <div className="absolute top-full left-0 mt-0 bg-white border border-stone-200 shadow-xl py-2 min-w-[200px] z-50">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={cat.href}
                          className="block px-5 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[var(--maroon)] transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="text-white/70 hover:text-white transition-colors" aria-label="Search">
                <Search size={18} />
              </button>

              <button
                onClick={openCart}
                className="relative text-white/80 hover:text-white transition-colors"
                aria-label={`Cart (${totalCount} items)`}
              >
                <ShoppingBag size={20} />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--gold)] text-[var(--maroon)] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                    {totalCount > 9 ? "9+" : totalCount}
                  </span>
                )}
              </button>

              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                <Phone size={13} />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute left-0 top-0 h-full w-72 overflow-y-auto"
            style={{ backgroundColor: "var(--maroon-dark)" }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="font-heading text-white text-xl font-semibold">Vishala</span>
              <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-0.5">
              <Link
                href="/vishala/"
                className="block text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/5"
              >
                Home
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="block text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/5"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10 mt-2 space-y-3">
              <button
                onClick={() => { setMobileOpen(false); openCart(); }}
                className="flex items-center gap-2 text-white/80 text-sm w-full"
              >
                <ShoppingBag size={16} />
                Cart
                {totalCount > 0 && (
                  <span className="ml-1 bg-[var(--gold)] text-[var(--maroon)] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                )}
              </button>
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <Phone size={14} />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

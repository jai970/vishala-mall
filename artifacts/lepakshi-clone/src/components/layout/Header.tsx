import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Offer Zone", href: "/collections/offer-zone" },
  { label: "Best Sellers", href: "/collections/best-sellers" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  {
    label: "Sarees",
    href: "/collections/sarees",
    children: [
      { label: "Fancy Sarees", href: "/collections/fancy-sarees" },
      { label: "Designer Sarees", href: "/collections/designer-sarees" },
      { label: "Work Sarees", href: "/collections/work-sarees" },
      { label: "Pattu Sarees", href: "/collections/pattu-sarees" },
    ],
  },
  {
    label: "Lehengas",
    href: "/collections/lehengas",
    children: [
      { label: "Designer Lehengas", href: "/collections/designer-lehengas" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg" : "bg-[#121212]"
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/srinilaya-logo.png"
              alt="Srinilaya Metro Shopping Mall"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link flex items-center gap-1 text-white/85 hover:text-white text-sm font-medium transition-colors py-1"
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} className="mt-0.5 opacity-60" />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-[#1e1e1e] border border-white/10 rounded shadow-2xl py-1 min-w-[180px] animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Account">
              <User size={18} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors relative" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1.5 bg-[hsl(26,72%,45%)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 bg-[#121212] border-r border-white/10 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link href="/" className="flex items-center">
                <img
                  src="/srinilaya-logo.png"
                  alt="Srinilaya Metro Shopping Mall"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-white/85 hover:text-white text-sm font-medium py-3 flex-1"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        className="p-2 text-white/60"
                      >
                        <ChevronRight
                          size={16}
                          className={`transition-transform ${
                            mobileExpanded === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.label && (
                    <div className="ml-4 border-l border-white/10 pl-4 mb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-white/60 hover:text-white text-sm py-2 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10 mt-4">
              <div className="text-xs text-white/40 space-y-1">
                <p>My Account</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

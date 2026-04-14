import { useCart } from "@/context/CartContext";
import { business } from "@/data/store";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, totalCount, totalPrice } =
    useCart();

  function buildWhatsAppOrder() {
    const lines = items.map(
      (item) =>
        `• ${item.name}${item.isFabric ? " (per metre)" : ""} × ${item.quantity} — ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
    );
    const msg =
      `Hi! I'd like to place an order from Vishala Shopping Mall, Sircilla:\n\n` +
      lines.join("\n") +
      `\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")} (${totalCount} item${totalCount > 1 ? "s" : ""})\n\nPlease confirm availability & delivery details. Thank you!`;
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[70]"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-[80] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-stone-200"
          style={{ backgroundColor: "var(--maroon)" }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-white" />
            <span className="font-heading text-white font-semibold text-lg">
              Your Cart
            </span>
            {totalCount > 0 && (
              <span className="bg-[var(--gold)] text-[var(--maroon)] text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag size={48} className="text-stone-300 mb-4" />
            <p className="font-heading text-xl text-stone-500 mb-2">Your cart is empty</p>
            <p className="text-stone-400 text-sm">Browse our collections and add items you love.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-white rounded-lg p-3 shadow-sm border border-stone-100"
                >
                  <div className="w-16 h-20 shrink-0 overflow-hidden rounded bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=200&q=70";
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    {item.tag && (
                      <p className="text-[var(--gold-dark)] text-[10px] uppercase tracking-wider font-medium">
                        {item.tag}
                      </p>
                    )}
                    <p className="text-stone-800 text-xs font-medium line-clamp-2 mb-1.5">
                      {item.name}
                    </p>
                    <p className="text-[var(--maroon)] font-semibold text-sm mb-2">
                      ₹{item.price.toLocaleString("en-IN")}
                      {item.isFabric && (
                        <span className="text-stone-400 text-[10px] font-normal">/m</span>
                      )}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone-200 rounded overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="px-2 py-1 text-stone-500 hover:bg-stone-100 disabled:opacity-30 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1 text-xs font-semibold text-stone-700 border-x border-stone-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-500 hover:bg-stone-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 px-5 py-4 bg-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-stone-500 text-sm">Subtotal ({totalCount} item{totalCount > 1 ? "s" : ""})</span>
                <span className="text-stone-800 font-semibold text-sm">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-stone-400 text-xs mb-4">
                Final price confirmed on WhatsApp. In-store pickup or home delivery available.
              </p>

              <a
                href={buildWhatsAppOrder()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fba5a] text-white font-semibold text-sm py-3 rounded transition-colors mb-2"
              >
                <MessageCircle size={16} />
                Confirm Order on WhatsApp
              </a>

              <button
                onClick={clearCart}
                className="w-full text-center text-stone-400 hover:text-red-500 text-xs py-1 transition-colors"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export function CartSheet() {
  const { items, itemCount, total, updateQuantity, removeItem } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-all hover:border-primary/40 hover:glow-primary">
          <ShoppingCart className="w-5 h-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-card border-border overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-heading text-foreground">
            {showCheckout ? "Checkout" : "Your Cart"}
          </SheetTitle>
        </SheetHeader>

        {showCheckout ? (
          <CheckoutForm onBack={() => setShowCheckout(false)} />
        ) : (
          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 rounded-lg border border-border p-3">
                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-md object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate">{item.product.name}</h4>
                      <p className="text-sm text-primary font-heading font-bold">${item.product.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="rounded bg-secondary p-1 text-secondary-foreground hover:bg-muted">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="rounded bg-secondary p-1 text-secondary-foreground hover:bg-muted">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeItem(item.product.id)} className="ml-auto text-destructive hover:text-destructive/80">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-heading text-2xl font-bold text-gradient">${total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:glow-primary hover:brightness-110 active:scale-[0.98]"
                  >
                    Send to Store
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

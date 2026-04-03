import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:glow-primary hover:border-primary/40">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {product.category}
        </span>
        <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-heading text-xl font-bold text-gradient">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary hover:brightness-110 active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

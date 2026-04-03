import { useState } from "react";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

const TELEGRAM_BOT_TOKEN = "8713615523:AAEPswkNbpFZtMS1rBLn4blGROpI2f8bw3M";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  shippingAddress: string;
}

export function CheckoutForm({ onBack }: { onBack: () => void }) {
  const { items, total, clearCart } = useCart();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    shippingAddress: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.address || !form.shippingAddress) {
      toast.error("Please fill in all fields");
      return;
    }

    setSending(true);

    const cartText = items
      .map((i) => `• ${i.product.name} x${i.quantity} — $${(i.product.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const message = `🤖 *New Order from RoboBots Store*\n\n` +
      `👤 *Customer Info*\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Address: ${form.address}\n` +
      `Shipping: ${form.shippingAddress}\n\n` +
      `🛒 *Cart Items*\n${cartText}\n\n` +
      `💰 *Total: $${total.toFixed(2)}*`;

    try {
      const chatId = 6759622745;

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      const data = await res.json();
      if (data.ok) {
        toast.success("Order sent successfully! We'll contact you soon.");
        clearCart();
        onBack();
      } else {
        toast.error("Failed to send order. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to cart
      </button>

      <div>
        <label className="text-sm font-medium text-foreground">Name</label>
        <input className={inputClass} placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Phone Number</label>
        <input className={inputClass} placeholder="+1 234 567 890" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Email</label>
        <input className={inputClass} type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Address</label>
        <input className={inputClass} placeholder="123 Main St, City" value={form.address} onChange={(e) => update("address", e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Shipping Address</label>
        <input className={inputClass} placeholder="Same or different address" value={form.shippingAddress} onChange={(e) => update("shippingAddress", e.target.value)} />
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Total</span>
          <span className="font-heading text-xl font-bold text-gradient">${total.toFixed(2)}</span>
        </div>
        <button
          type="submit"
          disabled={sending}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:glow-primary hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
        >
          {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          {sending ? "Sending..." : "Send Cart to Store"}
        </button>
      </div>
    </form>
  );
}

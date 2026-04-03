import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Bot, Cpu, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-20 text-center relative">
          <div className="flex justify-center mb-6">
            <div className="rounded-2xl bg-primary/10 p-4 glow-primary">
              <Bot className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-gradient mb-4">
            RoboBots
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Premium robotics components, kits, and sensors for builders, makers, and innovators.
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span>Quality Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Fast Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 RoboBots. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

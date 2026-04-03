import { CartSheet } from "./CartSheet";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8 text-primary" />
          <span className="font-heading text-xl font-bold text-gradient">RoboBots</span>
        </div>
        <CartSheet />
      </div>
    </nav>
  );
}

import { CartSheet } from "./CartSheet";
import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="RoboBots" className="w-10 h-10 object-contain" />
          <span className="font-heading text-xl font-bold text-gradient">RoboBots</span>
        </div>
        <CartSheet />
      </div>
    </nav>
  );
}

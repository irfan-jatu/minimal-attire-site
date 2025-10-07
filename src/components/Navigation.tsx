import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, MoreVertical, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Apparel",
    path: "/clothes"
  }, {
    name: "Footwear",
    path: "/shoes"
  }, {
    name: "Timepieces",
    path: "/watches"
  }, {
    name: "Leather Goods",
    path: "/bags"
  }, {
    name: "Eyewear",
    path: "/glasses"
  }, {
    name: "Our Story",
    path: "/about"
  }, {
    name: "Get in Touch",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
            <span className="text-2xl font-serif font-light tracking-[0.2em]">BMJ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 relative group ${isActive(link.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <MoreVertical className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block py-2 text-sm tracking-wide transition-colors ${isActive(link.path) ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </Link>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;
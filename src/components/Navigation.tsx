import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
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
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-semibold tracking-wider">BMJ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm tracking-wide transition-colors ${isActive(link.path) ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
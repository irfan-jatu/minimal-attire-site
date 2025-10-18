import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, MoreVertical, X, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import CartDrawer from "@/components/CartDrawer";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
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
      <div className="container-wide">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
            <span className="text-xl sm:text-2xl font-serif font-light tracking-[0.2em]">I.J.JATU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm uppercase tracking-[0.15em] transition-all duration-300 relative group ${isActive(link.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>)}
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <User className="h-6 w-6" strokeWidth={1.5} />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCartOpen(true)}
              className="relative hover:bg-muted"
            >
              <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-foreground text-background w-5 h-5 rounded-full text-xs flex items-center justify-center font-light">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <User className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCartOpen(true)}
              className="relative hover:bg-muted"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-foreground text-background w-5 h-5 rounded-full text-xs flex items-center justify-center font-light">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:bg-muted">
              {isOpen ? <X className="h-5 w-5" /> : <MoreVertical className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden pb-4 pt-2 animate-fade-in border-t border-border/50">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block py-3 text-sm tracking-wide transition-colors ${isActive(link.path) ? "text-foreground font-normal" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </Link>)}
          </div>}
      </div>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </nav>;
};
export default Navigation;
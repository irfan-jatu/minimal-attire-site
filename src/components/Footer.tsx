import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16 md:mt-24">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <ShoppingBag className="h-6 w-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <span className="text-2xl font-serif font-light tracking-[0.2em]">BMJ</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium fashion and accessories for the modern lifestyle. Timeless elegance meets contemporary design.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-light text-base mb-4 tracking-wide">Collections</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/clothes" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Apparel</Link></li>
              <li><Link to="/shoes" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Footwear</Link></li>
              <li><Link to="/watches" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Timepieces</Link></li>
              <li><Link to="/bags" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Leather Goods</Link></li>
              <li><Link to="/glasses" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Eyewear</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-light text-base mb-4 tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-light text-base mb-4 tracking-wide">Follow Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Facebook</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} BMJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

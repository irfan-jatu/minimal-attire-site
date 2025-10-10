import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, image, title, price, category: "", description: "" });
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden border-none shadow-none bg-transparent transition-all duration-500 group cursor-pointer hover-lift">
        <div className="aspect-square overflow-hidden bg-card relative mb-4 rounded-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 group-hover:from-black/30 transition-all duration-500 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <Button
            onClick={handleAddToCart}
            size="icon"
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-full shadow-lg hover:shadow-xl w-10 h-10 sm:w-11 sm:h-11"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
        <CardContent className="p-0 text-center space-y-1">
          <h3 className="font-light text-foreground text-xs sm:text-sm tracking-wide group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          <p className="text-foreground font-light text-sm sm:text-base tracking-wider">
            ${price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;

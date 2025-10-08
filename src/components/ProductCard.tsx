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
      <Card className="overflow-hidden border-none shadow-none bg-transparent transition-all duration-700 group cursor-pointer">
        <div className="aspect-square overflow-hidden bg-card relative mb-4">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700 z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <Button
            onClick={handleAddToCart}
            size="icon"
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-full"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
        <CardContent className="p-0 text-center">
          <h3 className="font-light text-foreground mb-2 text-sm tracking-wide">{title}</h3>
          <p className="text-foreground font-light text-sm tracking-wider">${price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;

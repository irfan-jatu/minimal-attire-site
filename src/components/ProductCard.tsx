import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
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

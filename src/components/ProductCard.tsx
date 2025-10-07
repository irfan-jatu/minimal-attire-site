import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 group">
      <div className="aspect-square overflow-hidden bg-card">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-1">{title}</h3>
        <p className="text-accent font-semibold">{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

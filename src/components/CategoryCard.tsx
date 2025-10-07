import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  image: string;
  title: string;
  path: string;
}

const CategoryCard = ({ image, title, path }: CategoryCardProps) => {
  return (
    <Link to={path}>
      <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group">
        <div className="aspect-square overflow-hidden bg-card">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-lg font-medium tracking-wide">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;

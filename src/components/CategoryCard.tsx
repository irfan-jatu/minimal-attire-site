import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  image: string;
  title: string;
  path: string;
}

const CategoryCard = ({ image, title, path }: CategoryCardProps) => {
  return (
    <Link to={path} className="group block">
      <Card className="overflow-hidden border-none shadow-none bg-transparent transition-all duration-700">
        <div className="aspect-[3/4] overflow-hidden bg-card relative">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700 z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="py-6 text-center">
          <h3 className="text-sm font-serif tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all duration-300">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;

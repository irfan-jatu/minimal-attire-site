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
      <Card className="overflow-hidden border-none shadow-none bg-transparent transition-all duration-500 hover-lift">
        <div className="aspect-[3/4] overflow-hidden bg-card relative rounded-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 group-hover:from-black/50 transition-all duration-500 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-white text-xs tracking-[0.15em] uppercase font-light">
              Explore Collection →
            </span>
          </div>
        </div>
        <div className="py-4 sm:py-6 text-center">
          <h3 className="text-sm sm:text-base font-serif tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all duration-300">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;

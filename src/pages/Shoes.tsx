import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import shoesImg from "@/assets/category-shoes.jpg";

const Shoes = () => {
  const products = [
    { title: "Leather Oxfords", price: "$189", image: shoesImg },
    { title: "Classic Sneakers", price: "$129", image: shoesImg },
    { title: "Chelsea Boots", price: "$249", image: shoesImg },
    { title: "Loafers", price: "$159", image: shoesImg },
    { title: "Running Shoes", price: "$139", image: shoesImg },
    { title: "Dress Shoes", price: "$199", image: shoesImg },
    { title: "Sandals", price: "$89", image: shoesImg },
    { title: "High Heels", price: "$169", image: shoesImg },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4">Shoes</h1>
          <p className="text-center text-muted-foreground mb-12">
            Step into style with our footwear collection
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollFadeIn key={product.title} delay={index * 50}>
              <ProductCard {...product} />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shoes;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import glassesImg from "@/assets/category-glasses.jpg";

const Glasses = () => {
  const products = [
    { title: "Aviator Sunglasses", price: "$149", image: glassesImg },
    { title: "Wayfarer Style", price: "$129", image: glassesImg },
    { title: "Round Frames", price: "$139", image: glassesImg },
    { title: "Cat Eye", price: "$159", image: glassesImg },
    { title: "Sport Sunglasses", price: "$119", image: glassesImg },
    { title: "Vintage Frames", price: "$169", image: glassesImg },
    { title: "Blue Light Glasses", price: "$89", image: glassesImg },
    { title: "Oversized Frames", price: "$179", image: glassesImg },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4">Glasses</h1>
          <p className="text-center text-muted-foreground mb-12">
            See the world through premium lenses
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

export default Glasses;

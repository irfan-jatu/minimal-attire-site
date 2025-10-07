import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import watchesImg from "@/assets/category-watches.jpg";

const Watches = () => {
  const products = [
    { title: "Chronograph Watch", price: "$299", image: watchesImg },
    { title: "Minimalist Timepiece", price: "$179", image: watchesImg },
    { title: "Dive Watch", price: "$349", image: watchesImg },
    { title: "Smart Watch", price: "$399", image: watchesImg },
    { title: "Vintage Style", price: "$259", image: watchesImg },
    { title: "Sports Watch", price: "$189", image: watchesImg },
    { title: "Dress Watch", price: "$429", image: watchesImg },
    { title: "Automatic Watch", price: "$599", image: watchesImg },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4">Watches</h1>
          <p className="text-center text-muted-foreground mb-12">
            Timeless elegance for every occasion
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

export default Watches;

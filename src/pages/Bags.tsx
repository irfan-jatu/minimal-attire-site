import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import bagsImg from "@/assets/category-bags.jpg";

const Bags = () => {
  const products = [
    { title: "Leather Tote", price: "$189", image: bagsImg },
    { title: "Messenger Bag", price: "$149", image: bagsImg },
    { title: "Backpack", price: "$129", image: bagsImg },
    { title: "Crossbody Bag", price: "$99", image: bagsImg },
    { title: "Clutch", price: "$79", image: bagsImg },
    { title: "Duffle Bag", price: "$199", image: bagsImg },
    { title: "Laptop Bag", price: "$159", image: bagsImg },
    { title: "Evening Bag", price: "$119", image: bagsImg },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4">Bags</h1>
          <p className="text-center text-muted-foreground mb-12">
            Carry your essentials in style
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

export default Bags;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import clothesImg from "@/assets/category-clothes.jpg";

const Clothes = () => {
  const products = [
    { title: "Classic White Shirt", price: "$79", image: clothesImg },
    { title: "Tailored Blazer", price: "$249", image: clothesImg },
    { title: "Cotton T-Shirt", price: "$45", image: clothesImg },
    { title: "Denim Jeans", price: "$129", image: clothesImg },
    { title: "Wool Sweater", price: "$159", image: clothesImg },
    { title: "Linen Pants", price: "$99", image: clothesImg },
    { title: "Casual Polo", price: "$69", image: clothesImg },
    { title: "Evening Dress", price: "$299", image: clothesImg },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4">Clothes</h1>
          <p className="text-center text-muted-foreground mb-12">
            Explore our collection of premium clothing
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

export default Clothes;

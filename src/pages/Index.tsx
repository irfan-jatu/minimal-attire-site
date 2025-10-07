import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";
import clothesImg from "@/assets/category-clothes.jpg";
import shoesImg from "@/assets/category-shoes.jpg";
import watchesImg from "@/assets/category-watches.jpg";
import bagsImg from "@/assets/category-bags.jpg";
import glassesImg from "@/assets/category-glasses.jpg";

const Index = () => {
  const categories = [
    { title: "Clothes", image: clothesImg, path: "/clothes" },
    { title: "Shoes", image: shoesImg, path: "/shoes" },
    { title: "Watches", image: watchesImg, path: "/watches" },
    { title: "Bags", image: bagsImg, path: "/bags" },
    { title: "Glasses", image: glassesImg, path: "/glasses" },
  ];

  const featuredProducts = [
    { title: "Premium Cotton Shirt", price: "$89", image: clothesImg },
    { title: "Leather Sneakers", price: "$159", image: shoesImg },
    { title: "Chronograph Watch", price: "$299", image: watchesImg },
    { title: "Designer Tote Bag", price: "$179", image: bagsImg },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium fashion and accessories
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Shop by Category
          </h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ScrollFadeIn key={category.title} delay={index * 100}>
              <CategoryCard {...category} />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-card">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Featured Products
          </h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ScrollFadeIn key={product.title} delay={index * 100}>
              <ProductCard {...product} />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

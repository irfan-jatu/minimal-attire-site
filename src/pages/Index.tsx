import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
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
    products.find(p => p.id === "clothes-1"),
    products.find(p => p.id === "shoes-2"),
    products.find(p => p.id === "watches-1"),
    products.find(p => p.id === "bags-1"),
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wide mb-8 text-white">
            Timeless Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 font-light tracking-wide">
            Where heritage meets contemporary elegance
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-12 py-6 text-sm tracking-[0.2em] uppercase"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-center mb-4 tracking-wide">
            Collections
          </h2>
          <p className="text-center text-muted-foreground mb-20 text-sm tracking-wider uppercase">
            Curated for the Discerning
          </p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <ScrollFadeIn key={category.title} delay={index * 100}>
              <CategoryCard {...category} />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-center mb-4 tracking-wide">
              Featured Selection
            </h2>
            <p className="text-center text-muted-foreground mb-20 text-sm tracking-wider uppercase">
              Handpicked Essentials
            </p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product, index) => (
              <ScrollFadeIn key={product!.id} delay={index * 100}>
                <ProductCard {...product!} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

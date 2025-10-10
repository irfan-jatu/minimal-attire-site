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
import bagsImg from "@/assets/category-bags-new.jpg";
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 animate-fade-in-up max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide mb-6 md:mb-8 text-white leading-tight">
            Timeless Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 md:mb-12 font-light tracking-wide max-w-2xl mx-auto">
            Where heritage meets contemporary elegance
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-500 px-8 sm:px-12 h-12 sm:h-14 text-xs sm:text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-wide py-20 md:py-32">
        <ScrollFadeIn>
          <h2 className="font-serif font-light text-center mb-3 md:mb-4 tracking-wide">
            Collections
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-20 text-xs sm:text-sm tracking-wider uppercase">
            Curated for the Discerning
          </p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <ScrollFadeIn key={category.title} delay={index * 100}>
              <CategoryCard {...category} />
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container-wide">
          <ScrollFadeIn>
            <h2 className="font-serif font-light text-center mb-3 md:mb-4 tracking-wide">
              Featured Selection
            </h2>
            <p className="text-center text-muted-foreground mb-12 md:mb-20 text-xs sm:text-sm tracking-wider uppercase">
              Handpicked Essentials
            </p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
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

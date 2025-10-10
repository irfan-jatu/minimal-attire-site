import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container-wide py-20 md:py-32 pt-24 md:pt-32 text-center">
          <h1 className="font-serif font-light mb-4 md:mb-6 text-3xl md:text-4xl tracking-wide">Product Not Found</h1>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">The product you're looking for doesn't exist</p>
          <Button onClick={() => navigate("/")} variant="outline" size="lg">
            Return Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleOrderNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="container-wide py-12 md:py-16 lg:py-20 pt-20 md:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ScrollFadeIn>
            <div className="aspect-square bg-card overflow-hidden rounded-none shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 md:mb-4">
                  {product.category}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 md:mb-6 tracking-wide leading-tight">
                  {product.title}
                </h1>
                <p className="text-2xl md:text-3xl font-light tracking-wide mb-6 md:mb-8">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed tracking-wide text-sm md:text-base">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
                <Button
                  onClick={handleAddToCart}
                  className="w-full uppercase tracking-[0.2em] text-xs h-11 md:h-12 shadow-sm hover:shadow-md"
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleOrderNow}
                  variant="outline"
                  className="w-full uppercase tracking-[0.2em] text-xs h-11 md:h-12"
                >
                  Order Now
                </Button>
              </div>

              <div className="pt-6 md:pt-8 border-t space-y-3 md:space-y-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex gap-3 items-start">
                  <span className="font-light leading-relaxed">Free shipping on orders over $200</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="font-light leading-relaxed">Easy returns within 30 days</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="font-light leading-relaxed">Authenticity guaranteed</span>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;

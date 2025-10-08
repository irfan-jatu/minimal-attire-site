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
      <div className="min-h-screen pt-16">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-serif font-light mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
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

  return (
    <div className="min-h-screen pt-16">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollFadeIn>
            <div className="aspect-square bg-card overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {product.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
                  {product.title}
                </h1>
                <p className="text-3xl font-light tracking-wide mb-8">
                  ${product.price}
                </p>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full uppercase tracking-[0.2em] text-xs h-12"
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  className="w-full uppercase tracking-[0.2em] text-xs h-12"
                >
                  Order Now
                </Button>
              </div>

              <div className="pt-8 border-t space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <span className="font-light">Free shipping on orders over $200</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-light">Easy returns within 30 days</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-light">Authenticity guaranteed</span>
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

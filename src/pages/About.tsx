import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-center mb-6">About LUXE</h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Redefining modern luxury through timeless design
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded with a vision to bring premium fashion and accessories to the modern consumer, 
                LUXE has established itself as a destination for those who appreciate quality, craftsmanship, 
                and timeless design.
              </p>

              <p>
                Our carefully curated collection spans across fashion essentials and lifestyle accessories, 
                from contemporary clothing to elegant watches, luxurious bags, and sophisticated eyewear. 
                Each piece is selected with meticulous attention to detail, ensuring that our customers 
                receive only the finest products.
              </p>

              <p>
                We believe that true luxury lies in the perfect balance of form and function. Our commitment 
                to excellence extends beyond our products to every aspect of the customer experience, from 
                our minimalist store design to our personalized service.
              </p>

              <p>
                At LUXE, we're not just selling products – we're offering a lifestyle that celebrates 
                sophistication, quality, and the art of mindful consumption.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-3xl font-light mb-2">10+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-light mb-2">50K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-light mb-2">1000+</h3>
              <p className="text-muted-foreground">Premium Products</p>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      <Footer />
    </div>
  );
};

export default About;

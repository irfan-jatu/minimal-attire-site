import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  contact: z.string().min(10, "Please enter a valid contact number").max(15),
  address: z.string().min(10, "Please enter your complete address").max(500),
  deliveryNotes: z.string().max(500).optional(),
  paymentMethod: z.enum(["cod", "online", "card"], {
    required_error: "Please select a payment method",
  }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      contact: "",
      address: "",
      deliveryNotes: "",
      paymentMethod: "cod",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Order placed:", data);
    
    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Thank you ${data.name}! Your order will be delivered soon.`,
    });
    
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container-wide py-16 md:py-24 pt-24 md:pt-32 text-center">
          <h1 className="font-serif font-light mb-4 md:mb-6 text-3xl md:text-4xl tracking-wide">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">Add some items to get started</p>
          <Button onClick={() => navigate("/")} variant="default" size="lg">
            Continue Shopping
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container-wide py-12 md:py-16 pt-24 md:pt-28">
        <h1 className="font-serif font-light mb-8 md:mb-12 text-3xl md:text-4xl tracking-wide">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="border border-border p-6 md:p-8 sticky top-28 bg-card/50 backdrop-blur-sm rounded-none shadow-sm">
              <h2 className="text-xl md:text-2xl font-serif font-light mb-6 tracking-wide">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm gap-4">
                    <span className="text-muted-foreground flex-1 truncate">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-light whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 flex justify-between text-base md:text-lg font-light">
                <span className="tracking-wide">Total</span>
                <span className="font-normal">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                <div className="border border-border p-6 md:p-8 bg-card/30 backdrop-blur-sm rounded-none shadow-sm">
                  <h2 className="text-xl md:text-2xl font-serif font-light mb-6 md:mb-8 tracking-wide">Delivery Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Delivery Address</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your complete address with pincode" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deliveryNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special instructions for delivery"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border border-border p-6 md:p-8 bg-card/30 backdrop-blur-sm rounded-none shadow-sm">
                  <h2 className="text-xl md:text-2xl font-serif font-light mb-6 md:mb-8 tracking-wide">Payment Method</h2>
                  
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-3 border border-border p-4 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
                              <RadioGroupItem value="cod" id="cod" />
                              <FormLabel htmlFor="cod" className="cursor-pointer flex-1 font-normal">
                                Cash on Delivery
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 border border-border p-4 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
                              <RadioGroupItem value="online" id="online" />
                              <FormLabel htmlFor="online" className="cursor-pointer flex-1 font-normal">
                                Online Payment (UPI/Wallets)
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 border border-border p-4 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
                              <RadioGroupItem value="card" id="card" />
                              <FormLabel htmlFor="card" className="cursor-pointer flex-1 font-normal">
                                Credit/Debit Card
                              </FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate(-1)}
                    className="flex-1 order-2 sm:order-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 order-1 sm:order-2">
                    Place Order
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Check your email",
        description: "We sent you a magic link to sign in",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-light tracking-wider">Welcome</h1>
            <p className="text-muted-foreground">Sign in or create an account</p>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-6 mt-8">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12"
              disabled={loading}
            >
              {loading ? "Sending..." : "Continue with Email"}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              We'll send you a magic link to sign in
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;

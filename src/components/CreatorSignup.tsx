import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreatorSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    youtubeUrl: "",
    followerCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.youtubeUrl.trim()) {
      toast({
        title: "YouTube URL required",
        description: "Please enter your YouTube channel URL.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.followerCount.trim()) {
      toast({
        title: "Follower count required",
        description: "Please enter your follower count.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Iconic Chat! 🎉",
        description: "You've been added to our creator waitlist. We'll be in touch soon!",
      });
      setFormData({
        fullName: "",
        email: "",
        youtubeUrl: "",
        followerCount: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="creator-signup" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <Badge className="mb-8 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              For Creators
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Become a Founding Iconic Chat Creator
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Scale your presence. Deepen your connections.
              <br />
              Engage personally at every level.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-card p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe"
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  maxLength={255}
                />
              </div>

              <div>
                <label htmlFor="youtubeUrl" className="block text-sm font-medium text-foreground mb-2">
                  YouTube Channel URL *
                </label>
                <Input
                  id="youtubeUrl"
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://youtube.com/@yourchannel"
                  required
                  maxLength={500}
                />
              </div>

              <div>
                <label htmlFor="followerCount" className="block text-sm font-medium text-foreground mb-2">
                  Follower Count *
                </label>
                <Input
                  id="followerCount"
                  type="text"
                  value={formData.followerCount}
                  onChange={(e) => setFormData({ ...formData, followerCount: e.target.value })}
                  placeholder="e.g. 10K, 100K, 1M+"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full text-lg px-8 py-6 h-auto bg-gradient-hero-reverse text-white hover:opacity-90 transition-opacity shadow-elegant"
              >
                {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSignup;

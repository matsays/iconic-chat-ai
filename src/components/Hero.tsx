import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("creator-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Chat Network Visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_0_60px_rgba(168,85,247,0.7)]">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Redefining the Relationship Between Fans & Creators
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Iconic Chat allows fans to connect directly with their favorite YouTube creators 
            and build unique, personal relationships anytime and anywhere.
          </p>

          <div className="pt-4 space-y-3">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="text-lg px-8 py-6 h-auto animate-scale-in bg-gradient-hero-reverse text-white hover:opacity-90 transition-opacity shadow-elegant"
            >
              Join Creator Waitlist
            </Button>
            <p className="text-sm text-white/80">
              Be among the first to experience the future of fan engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

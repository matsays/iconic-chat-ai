import { Sparkles, MessageCircle, Users } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-32 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
            Our Mission
          </h2>
          <div className="flex justify-center gap-6 mb-8">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <MessageCircle className="w-8 h-8 text-purple-400" />
            <Users className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Authentic connections, amplified.</span>
            <br />
            Iconic Chat reimagines how fans engage with their favorite creators replacing comments 
            and likes with authentic conversations that happen 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

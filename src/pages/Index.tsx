import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CreatorSignup from "@/components/CreatorSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <CreatorSignup />
      <Footer />
    </main>
  );
};

export default Index;

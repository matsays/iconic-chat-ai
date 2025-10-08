import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Separator className="bg-muted-foreground/30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Transform Fan Engagement<br />without Being There Yourself
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We grow your audience using technology by transforming what engagement means, 
            enabling you to reach significantly more followers without the significant hassle. 
            Join the future of building authentic relationships.
          </p>
        </div>
        <div className="mt-[60px] text-center">
          <p className="text-muted-foreground text-sm">
            ©2025 Iconic Labs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

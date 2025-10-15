import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Separator className="bg-pink-400" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Don't Just Build a Following -<br />Build Relationships.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join the platform that turns following into genuine fan connection through one-on-one personal engagement.
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

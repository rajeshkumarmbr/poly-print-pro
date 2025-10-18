import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-printing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
            PRECISION POLY PRINTING
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl font-medium">
            Trusted Packaging Solutions
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl">
            Leading specialist in poly-printing solutions, delivering high-quality, innovative and reliable printed packaging for consumer goods, retail, and industrial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

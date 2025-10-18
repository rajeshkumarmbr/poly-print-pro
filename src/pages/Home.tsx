import { ArrowRight, Award, Factory, Leaf, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-printing.jpg";
import packagingImage from "@/assets/packaging-products.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
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
                asChild
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-lg px-8 group"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="text-lg px-8 bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/50"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              INDIA'S TRUSTED POLY-PRINTING PARTNER
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With years of experience and a strong technical team, we pride ourselves on accuracy, speed, and customer value across FMCG, food & beverage, pharmaceuticals, and industrial sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">Quality Excellence</h3>
              <p className="text-muted-foreground">Stringent quality standards for every print job</p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Factory className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">Advanced Equipment</h3>
              <p className="text-muted-foreground">State-of-the-art printing machinery and technology</p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">Scalable Production</h3>
              <p className="text-muted-foreground">Flexible capabilities for all order sizes</p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">Sustainable</h3>
              <p className="text-muted-foreground">Eco-friendly practices and materials</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                COMPREHENSIVE POLY-PRINTING SOLUTIONS
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From high-resolution flexographic printing to custom finishes, we offer end-to-end poly-printing services for pouches, bags, wraps, and industrial covers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <span className="text-foreground">High-resolution flexographic/gravure printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <span className="text-foreground">Multi-colour and multi-layer printing with barrier laminates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <span className="text-foreground">Custom sizes and finishes (matte, gloss, resealable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <span className="text-foreground">Complete support from artwork to quality control</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform rotate-3" />
              <img 
                src={packagingImage} 
                alt="Poly packaging products on production line"
                className="relative rounded-lg shadow-elevated w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can enhance your brand's packaging with our precision poly-printing solutions.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8"
          >
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

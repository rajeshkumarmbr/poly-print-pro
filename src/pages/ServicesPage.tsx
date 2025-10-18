import { Layers, Palette, Settings, ClipboardCheck, Package, Sparkles, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import packagingImage from "@/assets/packaging-products.jpg";
import heroImage from "@/assets/hero-printing.jpg";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Palette,
      title: "High-Resolution Flexographic/Gravure Printing",
      description: "State-of-the-art flexographic and gravure printing technology for exceptional clarity and vibrant colors on poly substrates. Our advanced printing presses deliver consistent, high-quality results with superior ink adhesion and color reproduction.",
      features: [
        "Up to 10-color printing capabilities",
        "Superior print resolution and clarity",
        "Consistent color matching and reproduction",
        "Fast turnaround times"
      ]
    },
    {
      icon: Layers,
      title: "Multi-Colour & Multi-Layer Printing",
      description: "Complex multi-layer printing with barrier laminates for enhanced product protection. We specialize in creating sophisticated packaging structures that combine aesthetics with functional performance.",
      features: [
        "Multi-layer laminated structures",
        "Barrier films for moisture and oxygen protection",
        "Combination of different substrate materials",
        "Custom layer configurations"
      ]
    },
    {
      icon: Settings,
      title: "Custom Sizes & Finishes",
      description: "Tailored packaging solutions with various sizes, shapes, and finishes to match your brand requirements. From standard to highly specialized configurations.",
      features: [
        "Matte and gloss finishes",
        "Resealable zipper options",
        "Tear notches and easy-open features",
        "Custom shapes and sizes"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "End-to-End Support",
      description: "Comprehensive service from initial concept to final delivery. Our team supports you through artwork review, substrate selection, production, and rigorous quality control.",
      features: [
        "Pre-press artwork consultation",
        "Material recommendation and selection",
        "In-process quality monitoring",
        "Post-production inspection"
      ]
    }
  ];

  const packagingTypes = [
    {
      icon: Package,
      name: "Pouches & Bags",
      description: "Stand-up pouches, flat pouches, gusseted bags, and ziplock bags for FMCG and food products"
    },
    {
      icon: Sparkles,
      name: "Flexible Wraps",
      description: "Flow wraps, shrink wraps, and protective films for various consumer goods"
    },
    {
      icon: Shield,
      name: "Industrial Covers",
      description: "Heavy-duty poly covers and liners for industrial and agricultural applications"
    },
    {
      icon: Zap,
      name: "Specialty Packaging",
      description: "Custom-designed packaging for unique product requirements and specifications"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
              OUR SERVICES
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive poly-printing solutions for diverse packaging needs across industries. From concept to delivery, we ensure excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Specialization Overview */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform -rotate-3" />
              <img 
                src={packagingImage} 
                alt="Poly packaging products on production line"
                className="relative rounded-lg shadow-elevated w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                POLY-PRINTING SPECIALIZATION
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We specialize in poly printing on polyethylene (PE) and polypropylene (PP) substrates for a wide variety of packaging applications. Our expertise covers flexible packaging solutions for consumer goods, food & beverage, pharmaceuticals, and industrial sectors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With advanced printing technology and experienced operators, we deliver consistent quality, vibrant colors, and durable prints that enhance brand appeal while ensuring product protection.
              </p>
            </div>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-lg flex-shrink-0">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              PACKAGING APPLICATIONS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We produce a diverse range of poly-printed packaging solutions tailored to specific industry requirements and product characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {packagingTypes.map((type, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{type.name}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Card>
            ))}
          </div>

          {/* Production Process */}
          <div className="bg-gradient-section rounded-lg p-10">
            <h3 className="font-display text-3xl text-foreground mb-8 text-center">
              OUR PRODUCTION PROCESS
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Artwork Review", desc: "Pre-press consultation and file preparation" },
                { step: "02", title: "Material Selection", desc: "Substrate and ink specification" },
                { step: "03", title: "Printing", desc: "High-quality production on advanced presses" },
                { step: "04", title: "Quality Control", desc: "Rigorous inspection and packaging" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-display text-primary/30 mb-4">{process.step}</div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
              INDUSTRIES WE SERVE
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "FMCG & Consumer Goods", desc: "Detergents, personal care, home care products" },
                { name: "Food & Beverage", desc: "Snacks, confectionery, beverages, frozen foods" },
                { name: "Pharmaceuticals", desc: "Medical supplies, OTC drugs, healthcare products" },
                { name: "Industrial", desc: "Chemicals, fertilizers, construction materials" },
                { name: "Agriculture", desc: "Seeds, animal feed, agricultural inputs" },
                { name: "Retail", desc: "Shopping bags, promotional packaging, gift wraps" }
              ].map((industry, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold text-lg text-foreground mb-2">{industry.name}</h4>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            LET'S DISCUSS YOUR PACKAGING NEEDS
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you create the perfect poly-printed packaging solution for your products.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

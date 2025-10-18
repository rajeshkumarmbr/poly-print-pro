import { Layers, Palette, Settings, ClipboardCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import packagingImage from "@/assets/packaging-products.jpg";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "High-Resolution Printing",
      desc: "Flexographic/gravure printing for poly substrates with exceptional clarity"
    },
    {
      icon: Layers,
      title: "Multi-Layer Solutions",
      desc: "Multi-colour and multi-layer printing with barrier laminates"
    },
    {
      icon: Settings,
      title: "Custom Finishes",
      desc: "Custom sizes and finishes including matte, gloss, and resealable features"
    },
    {
      icon: ClipboardCheck,
      title: "End-to-End Support",
      desc: "Complete support from artwork review to quality control"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              OUR SERVICES
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specialized in poly printing (polyethylene/polypropylene) for a variety of packaging applications including pouches, bags, wraps, and industrial covers.
            </p>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-all hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
  );
};

export default Services;

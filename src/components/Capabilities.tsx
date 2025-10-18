import { Factory, CheckCircle, Clock, Truck } from "lucide-react";
import factoryImage from "@/assets/factory-floor.jpg";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Large Production Capacity",
      desc: "Strict quality management with scalable manufacturing"
    },
    {
      icon: CheckCircle,
      title: "Full Customer Support",
      desc: "From artwork to packaging rollout, we're with you every step"
    },
    {
      icon: Clock,
      title: "Rigorous Quality Checks",
      desc: "Color consistency, substrate adhesion, and print durability"
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      desc: "Reliable logistics ensuring your products arrive when needed"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            OUR CAPABILITIES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            With cutting-edge technology and a commitment to excellence, we deliver comprehensive poly-printing solutions that meet the highest industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src={factoryImage} 
              alt="Modern factory floor with printing machinery"
              className="rounded-lg shadow-elevated w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 grid gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-secondary/10 rounded-lg border-l-4 border-secondary">
          <h3 className="font-display text-2xl text-foreground mb-4">SUSTAINABILITY COMMITMENT</h3>
          <p className="text-muted-foreground text-lg">
            Aarti Printing is committed to sustainable packaging practices by exploring recycled substrates, low-migration inks, and energy-efficient production processes. We believe in creating value while protecting our environment for future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

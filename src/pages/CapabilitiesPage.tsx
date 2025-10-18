import { Factory, CheckCircle, Clock, Truck, Cpu, Users, LineChart, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import factoryImage from "@/assets/factory-floor.jpg";
import heroImage from "@/assets/hero-printing.jpg";

const CapabilitiesPage = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Large Production Capacity",
      description: "Our state-of-the-art manufacturing facility is equipped with multiple high-speed printing lines capable of handling both small-batch custom orders and large-scale production runs. We maintain strict quality management systems throughout our production floor.",
      details: [
        "Multiple flexographic and gravure printing lines",
        "24/7 production capability for urgent orders",
        "Capacity to handle orders from 1,000 to 10 million+ units",
        "ISO-certified quality management systems"
      ]
    },
    {
      icon: CheckCircle,
      title: "Full Customer Support",
      description: "From initial consultation to final delivery, our dedicated team provides comprehensive support at every stage of your packaging project. We work as your partner to ensure perfect results.",
      details: [
        "Pre-press artwork consultation and file preparation",
        "Material selection guidance and recommendations",
        "In-process updates and progress tracking",
        "Post-delivery support and feedback"
      ]
    },
    {
      icon: Clock,
      title: "Rigorous Quality Checks",
      description: "Quality is never compromised at Aarti Printing. We implement multi-stage quality control processes to ensure every package meets our stringent standards for color, adhesion, and durability.",
      details: [
        "Color consistency verification using spectrophotometers",
        "Substrate adhesion and lamination strength testing",
        "Print registration and clarity inspection",
        "Final visual inspection before packaging"
      ]
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "We understand the importance of timely delivery in the packaging industry. Our efficient logistics network and production planning ensure your orders arrive when you need them.",
      details: [
        "Reliable logistics partnerships across India",
        "Real-time order tracking",
        "Flexible delivery scheduling",
        "Emergency rush order capabilities"
      ]
    }
  ];

  const technicalCapabilities = [
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Latest flexographic and gravure printing equipment with digital controls"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Experienced technicians and operators with specialized training"
    },
    {
      icon: LineChart,
      title: "Process Optimization",
      description: "Continuous improvement in efficiency, waste reduction, and quality"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Sustainable substrates, water-based inks, and recyclable materials"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
              OUR CAPABILITIES
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Cutting-edge technology, experienced team, and proven processes delivering excellence in poly-printing.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              COMPREHENSIVE MANUFACTURING EXCELLENCE
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With cutting-edge technology, experienced professionals, and a commitment to continuous improvement, we deliver comprehensive poly-printing solutions that meet the highest industry standards. Our capabilities span from small custom orders to large-scale production runs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <img 
                src={factoryImage} 
                alt="Modern factory floor with printing machinery"
                className="rounded-lg shadow-elevated w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="font-display text-3xl text-foreground mb-8">
                STATE-OF-THE-ART FACILITY
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our manufacturing facility houses the latest printing technology, climate-controlled production areas, and dedicated quality control labs. Every aspect of our facility is designed to optimize production efficiency while maintaining the highest quality standards.
              </p>
              <ul className="space-y-3">
                {[
                  "10,000+ sq ft production floor",
                  "Climate-controlled printing environment",
                  "Dedicated pre-press and post-press sections",
                  "In-house quality control laboratory",
                  "Secure storage for finished goods"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            CORE CAPABILITIES
          </h2>
          
          <div className="grid gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-all">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                    <capability.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl text-foreground mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {capability.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            TECHNICAL EXCELLENCE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {technicalCapabilities.map((tech, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <tech.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>

          {/* Equipment Details */}
          <div className="bg-card rounded-lg p-10 border border-border max-w-4xl mx-auto">
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">
              PRINTING EQUIPMENT SPECIFICATIONS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Flexographic Printing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Up to 10-color central impression presses</li>
                  <li>• Web widths: 600mm to 1600mm</li>
                  <li>• Speeds: up to 200 meters/minute</li>
                  <li>• Anilox roller technology for consistent ink transfer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Gravure Printing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-resolution engraved cylinders</li>
                  <li>• Web widths: 800mm to 2000mm</li>
                  <li>• Speeds: up to 300 meters/minute</li>
                  <li>• Doctor blade systems for precision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-secondary/10 rounded-lg p-10 border-l-4 border-secondary">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-secondary/20 rounded-lg flex-shrink-0">
                  <Leaf className="h-10 w-10 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    SUSTAINABILITY COMMITMENT
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Aarti Printing is committed to sustainable packaging practices by exploring recycled substrates, low-migration inks, and energy-efficient production processes. We believe in creating value while protecting our environment for future generations.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Eco-Friendly Materials</h4>
                  <p className="text-sm text-muted-foreground">Recyclable and biodegradable substrate options</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Waste Reduction</h4>
                  <p className="text-sm text-muted-foreground">Optimized production to minimize material waste</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Energy Efficiency</h4>
                  <p className="text-sm text-muted-foreground">Modern equipment with reduced energy consumption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO EXPERIENCE OUR CAPABILITIES?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our advanced capabilities can meet your packaging requirements.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8"
          >
            <Link to="/contact">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;

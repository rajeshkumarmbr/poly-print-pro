import { Target, Eye, Award, Users, Lightbulb, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Quality & Precision",
      description: "Ensuring every print meets stringent standards. We employ rigorous quality control processes at every stage of production, from pre-press artwork review to final packaging inspection. Our commitment to precision means zero compromise on print clarity, color accuracy, and substrate adhesion."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Investing in modern printing technologies and refining capabilities. We continuously upgrade our machinery, explore new substrate materials, and adopt the latest flexographic and gravure printing techniques to stay ahead of industry trends and deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Delivering tailored solutions for every brand. We understand that each client has unique packaging requirements. Our team works closely with you from concept to completion, ensuring your brand vision is accurately translated into high-quality printed packaging."
    },
    {
      icon: Heart,
      title: "Responsibility",
      description: "Committed to sustainable and efficient operations. We prioritize environmental stewardship by reducing waste, optimizing energy consumption, and exploring eco-friendly ink and substrate options. Our goal is to create packaging solutions that are both effective and environmentally responsible."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
              ABOUT AARTI PRINTING
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Leading specialist in poly-printing solutions, committed to delivering high-quality, innovative and reliable printed packaging for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              WHO WE ARE
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aarti Printing is a leading specialist in poly-printing solutions, committed to delivering high-quality, innovative and reliable printed packaging for clients in consumer goods, retail, and industrial sectors. With years of experience and a strong technical team, we pride ourselves on accuracy, speed, and customer value.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our expertise spans across polyethylene and polypropylene printing for diverse packaging applications including pouches, bags, wraps, and industrial covers. We serve major brands in FMCG, food & beverage, pharmaceuticals, and industrial markets, providing them with packaging solutions that enhance brand visibility and ensure product integrity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With state-of-the-art equipment, experienced production teams, and an unwavering commitment to quality, Aarti Printing has established itself as a trusted partner for businesses seeking reliable, innovative, and cost-effective poly-printing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-10 shadow-elevated hover:shadow-elevated transition-shadow border-l-4 border-primary">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-4">OUR MISSION</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide best-in-class poly-printing services that enhance brand visibility, ensure packaging integrity, and create value for our customers. We aim to be the partner of choice by delivering exceptional quality, innovation, and service excellence in every project we undertake.
              </p>
            </Card>

            <Card className="p-10 shadow-elevated hover:shadow-elevated transition-shadow border-l-4 border-secondary">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-4">OUR VISION</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted poly-printing partner in the region by continuously improving our processes, adopting sustainable practices, and exceeding client expectations. We envision a future where Aarti Printing sets the industry standard for quality, innovation, and environmental responsibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from production to customer service, ensuring we deliver excellence in every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elevated transition-all">
                <div className="flex items-start gap-6 mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              EXPERIENCE THAT MATTERS
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-12">
              Years of industry experience have equipped us with deep technical knowledge, strong supplier relationships, and proven processes that ensure consistent, high-quality results for our clients across diverse sectors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-display mb-4">15+</div>
                <p className="text-lg text-primary-foreground/80">Years of Excellence</p>
              </div>
              <div>
                <div className="text-5xl font-display mb-4">500+</div>
                <p className="text-lg text-primary-foreground/80">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-5xl font-display mb-4">1M+</div>
                <p className="text-lg text-primary-foreground/80">Packages Printed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

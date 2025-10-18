import { Target, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            ABOUT AARTI PRINTING
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aarti Printing is a leading specialist in poly-printing solutions, committed to delivering high-quality, innovative and reliable printed packaging for clients in consumer goods, retail, and industrial sectors. With years of experience and a strong technical team, we pride ourselves on accuracy, speed, and customer value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">OUR MISSION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide best-in-class poly-printing services that enhance brand visibility, ensure packaging integrity, and create value for our customers.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">OUR VISION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted poly-printing partner in the region by continuously improving our processes, adopting sustainable practices, and exceeding client expectations.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="font-display text-3xl text-foreground mb-8">CORE VALUES</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality & Precision", desc: "Ensuring every print meets stringent standards" },
              { title: "Innovation", desc: "Investing in modern printing technologies" },
              { title: "Customer-Centricity", desc: "Delivering tailored solutions for every brand" },
              { title: "Responsibility", desc: "Committed to sustainable operations" }
            ].map((value, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-semibold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

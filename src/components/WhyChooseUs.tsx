import { Award, Users, TrendingUp, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "State-of-the-Art Equipment",
      desc: "Advanced machinery for sharp print quality and consistent output"
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Experienced production and quality teams with domain expertise"
    },
    {
      icon: TrendingUp,
      title: "Scalable Production",
      desc: "Flexible capabilities for all order sizes, from prototype to mass production"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      desc: "Commitment to reduced waste and eco-friendly materials"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            WHY CHOOSE US
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Serving brands across FMCG, food & beverage, pharmaceuticals, and industrial sectors with a focus on timely delivery, cost-efficiency, and packaging innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="mb-4 p-4 bg-primary-foreground/10 rounded-lg w-fit group-hover:bg-secondary/20 transition-colors">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

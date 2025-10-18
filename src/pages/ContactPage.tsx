import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL with form data
    const subject = `Quote Request from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;
    
    const mailtoUrl = `mailto:info@aartiprinting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    toast.success("Opening email client...", {
      description: "Your quote request will be sent shortly."
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@aartiprinting.com",
      secondary: "sales@aartiprinting.com",
      description: "Send us your queries anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 XXX XXX XXXX",
      secondary: "+91 XXX XXX XXXX",
      description: "Mon-Sat 9:00 AM to 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Manufacturing Facility",
      secondary: "Industrial Area, [City, State]",
      description: "Schedule a facility tour"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
              CONTACT US
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ready to talk? Reach out to our team or visit our facility to discuss your next poly-printing project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-8 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-4">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.primary}</p>
                <p className="text-muted-foreground text-sm mb-3">{info.secondary}</p>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>

          {/* Quote Request Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                REQUEST A QUOTE
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <Card className="p-8 md:p-12 shadow-elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your packaging requirements, quantities, timeline, etc."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-lg group"
                >
                  Send Quote Request
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
              WHAT HAPPENS NEXT?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-display text-primary/30 mb-4">01</div>
                <h3 className="font-semibold text-lg text-foreground mb-3">We Review Your Request</h3>
                <p className="text-sm text-muted-foreground">
                  Our team analyzes your requirements and prepares a detailed response
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-display text-primary/30 mb-4">02</div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Consultation Call</h3>
                <p className="text-sm text-muted-foreground">
                  We schedule a call to discuss your project in detail and answer questions
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-display text-primary/30 mb-4">03</div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Detailed Proposal</h3>
                <p className="text-sm text-muted-foreground">
                  You receive a comprehensive quote with specifications and timeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-3xl mx-auto p-10 shadow-card border-l-4 border-primary">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-4">BUSINESS HOURS</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  For urgent inquiries outside business hours, please email us and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            PREFER TO VISIT US?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a facility tour to see our printing capabilities firsthand and meet our team.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/50 text-lg px-8"
            onClick={() => window.location.href = "mailto:info@aartiprinting.com?subject=Facility Tour Request"}
          >
            Schedule a Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const handleQuoteRequest = () => {
    // Placeholder for quote request functionality
    window.location.href = "mailto:info@aartiprinting.com?subject=Quote Request";
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            CONTACT US
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to talk? Reach out to our team or visit our facility to discuss your next poly-printing project.
          </p>
          <Button 
            onClick={handleQuoteRequest}
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 group"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground">info@aartiprinting.com</p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
            <div className="mx-auto w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Manufacturing Facility</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

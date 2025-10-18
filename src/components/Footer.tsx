import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl mb-4">AARTI PRINTING</h3>
            <p className="text-primary-foreground/80">
              Precision Poly Printing, Trusted Packaging Solutions
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/capabilities" className="hover:text-secondary transition-colors">Capabilities</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>FMCG</li>
              <li>Food & Beverage</li>
              <li>Pharmaceuticals</li>
              <li>Industrial Sectors</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Aarti Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

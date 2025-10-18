import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-2xl lg:text-3xl tracking-wide text-primary">
              AARTI PRINTING
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slideDown">
          <div className="flex flex-col items-start px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium w-full ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

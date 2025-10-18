import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-2xl lg:text-3xl tracking-wide text-primary">
              AARTI PRINTING
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              end
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/capabilities"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Capabilities
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Contact
            </NavLink>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

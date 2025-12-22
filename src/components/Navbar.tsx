import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import pisonLogo from "@/assets/pison-logo.png";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Why Pison", href: "/why-pison" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={pisonLogo} 
            alt="Pison Group Logo" 
            className={`h-8 w-auto transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-all duration-300 relative ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              } ${location.pathname === link.href ? "text-accent" : ""}`}
            >
              {link.name}
              {location.pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="gold" size="default">
              Join Wait-list
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-xl animate-fade-up border-t border-border">
          <div className="container-wide py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === link.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-4">
              <Button variant="gold" size="lg" className="w-full">
                Join Wait-list
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

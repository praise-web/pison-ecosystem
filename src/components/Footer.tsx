import { Link } from "react-router-dom";
import pisonLogo from "@/assets/pison-logo.png";

const ecosystemLinks = [
  { name: "Leadership Academy", href: "/ecosystem" },
  { name: "Content Design Institute", href: "/ecosystem" },
  { name: "Pison Careers", href: "https://careers.thepisongroup.com/" },
  { name: "Pinnacle Agency", href: "/ecosystem" },
  { name: "Research & Resource", href: "/ecosystem" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Why Pison", href: "/why-pison" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={pisonLogo} 
                alt="Pison Group Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Unlocking human potential. Building systems. Shaping Africa's future.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Ecosystem</h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-5 py-3 bg-accent text-accent-foreground rounded-xl font-semibold text-sm hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Pison Group. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

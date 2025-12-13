const ecosystemLinks = [
  { name: "Leadership Academy", href: "#" },
  { name: "Content Design Institute", href: "#" },
  { name: "Pison Careers", href: "#" },
  { name: "Pinnacle Agency", href: "#" },
  { name: "Research & Resource", href: "#" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Why Pison", href: "#why-pison" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-xl">PISON</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Unlocking human potential. Building systems. Shaping Africa's future.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Ecosystem</h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
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

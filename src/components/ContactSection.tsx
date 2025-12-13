import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Let's Build Africa's Future Together
            </h2>
            
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              For partnerships, collaborations, or service inquiries, reach out to us. We're always excited to connect with visionaries who share our mission.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <a href="mailto:info@pisongroup.com" className="text-primary-foreground font-medium hover:text-accent transition-colors">
                    info@pisongroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Location</p>
                  <p className="text-primary-foreground font-medium">
                    Abeokuta, Ogun State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-strong">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Join Our Wait-list
            </h3>
            <p className="text-muted-foreground mb-8">
              Be the first to know about new programs, opportunities, and resources from the Pison ecosystem.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Interested In...</option>
                  <option value="leadership">Leadership Academy</option>
                  <option value="cdi">Content Design Institute</option>
                  <option value="careers">Pison Careers</option>
                  <option value="pinnacle">Pinnacle Agency</option>
                  <option value="research">Research & Resource</option>
                  <option value="all">All Programs</option>
                </select>
              </div>
              <Button variant="gold" size="lg" className="w-full group">
                Join Wait-list
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

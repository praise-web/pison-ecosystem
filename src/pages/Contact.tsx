import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, ArrowRight, Sparkles, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@pisongroup.com",
    href: "mailto:info@pisongroup.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abeokuta, Ogun State, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24-48 hours",
    href: null,
  },
];

const interests = [
  { value: "", label: "What are you interested in?" },
  { value: "leadership", label: "Leadership Academy" },
  { value: "cdi", label: "Content Design Institute" },
  { value: "careers", label: "Pison Careers" },
  { value: "pinnacle", label: "Pinnacle Agency" },
  { value: "research", label: "Research & Resource" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "all", label: "General Inquiry" },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Pison Group - Let's Build Together</title>
        <meta
          name="description"
          content="Get in touch with Pison Group. For partnerships, collaborations, or service inquiries, reach out to us. We're excited to connect with visionaries who share our mission."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/25 rounded-full blur-[100px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Get In Touch</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  Let's Build Africa's{" "}
                  <span className="text-accent italic">Future</span> Together
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl animate-fade-up stagger-2">
                  For partnerships, collaborations, or service inquiries, reach out to us. We're always excited to connect with visionaries who share our mission.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-[300px]" />
            
            <div className="container-wide relative">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Contact Info */}
                <div className="lg:col-span-2">
                  <span className="section-badge mb-6 animate-fade-up">Contact Information</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 animate-fade-up stagger-1">
                    Ready to connect?
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-up stagger-2">
                    Whether you're seeking personal development, organizational transformation, or partnership opportunities — we'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div 
                        key={item.label} 
                        className="flex items-start gap-5 group animate-fade-up"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm font-medium mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-foreground font-semibold text-lg hover:text-accent transition-colors link-underline">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold text-lg">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Proof */}
                  <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border animate-fade-up stagger-6">
                    <p className="text-muted-foreground text-sm mb-2">Trusted by</p>
                    <p className="text-foreground font-semibold">1000+ individuals and organizations across Africa</p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border animate-fade-up stagger-3">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Send className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-foreground">
                          Join Our Wait-list
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Be the first to know about new programs and opportunities
                        </p>
                      </div>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">First Name</label>
                          <input
                            type="text"
                            placeholder="John"
                            className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Last Name</label>
                          <input
                            type="text"
                            placeholder="Doe"
                            className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">I'm interested in...</label>
                        <select className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                          {interests.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Message (Optional)</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us a bit about yourself and what you're looking for..."
                          className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        />
                      </div>
                      
                      <Button variant="gold" size="xl" className="w-full group">
                        Join Wait-list
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      
                      <p className="text-center text-muted-foreground text-sm">
                        By joining, you agree to receive updates from Pison Group. Unsubscribe anytime.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map/Location Section */}
          <section className="section-padding-sm bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Building from <span className="text-accent">Nigeria</span>, for <span className="text-accent">Africa</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Headquartered in Abeokuta, Ogun State, Nigeria — but our impact spans across the continent. We're building systems that transcend borders.
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-10 h-10 text-accent" />
                  <div>
                    <p className="text-white font-semibold text-lg">Abeokuta, Nigeria</p>
                    <p className="text-white/60 text-sm">West Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;

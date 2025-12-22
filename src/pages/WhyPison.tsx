import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Crown, Building2, Rocket, TrendingUp, CheckCircle2, Sparkles, ArrowRight, Zap, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Users,
    title: "Develop Talent",
    description: "We identify and nurture potential in individuals across Africa, transforming raw ability into refined capability.",
    number: "01",
  },
  {
    icon: Crown,
    title: "Build Leaders",
    description: "We create leaders with competence, character, and vision — leaders who inspire change and drive progress.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Strengthen Institutions",
    description: "We help organizations build systems that last, creating foundations for sustainable growth.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Create Opportunities",
    description: "We open doors that were previously closed, connecting talent with possibility at scale.",
    number: "04",
  },
  {
    icon: TrendingUp,
    title: "Sustain Progress",
    description: "We build for long-term, generational impact — not quick wins, but lasting transformation.",
    number: "05",
  },
];

const stats = [
  { value: "5+", label: "Ecosystem Arms", icon: Zap },
  { value: "1000+", label: "Lives Impacted", icon: Heart },
  { value: "10+", label: "Programs", icon: Globe },
];

const WhyPison = () => {
  return (
    <>
      <Helmet>
        <title>Why Pison | Building Africa's Future Through Human Capital</title>
        <meta
          name="description"
          content="Africa needs ecosystems that develop talent, build leaders, strengthen institutions, create opportunities, and sustain progress. Pison is that ecosystem."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] animate-pulse-glow" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/25 rounded-full blur-[100px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Why Pison Matters</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  Africa doesn't need more{" "}
                  <span className="text-accent italic">businesses.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl animate-fade-up stagger-2">
                  Africa needs ecosystems that develop talent, build leaders, strengthen institutions, create opportunities, and sustain progress.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative -mt-10 z-20">
            <div className="container-wide">
              <div className="bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12 animate-fade-up">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <stat.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Left Content */}
                <div className="lg:sticky lg:top-32">
                  <span className="section-badge mb-6 animate-fade-up">Our Purpose</span>
                  <h2 className="section-title mb-6 animate-fade-up stagger-1">
                    We are here to{" "}
                    <span className="gradient-text">build Africa's future.</span>
                  </h2>
                  
                  <p className="section-subtitle mb-10 animate-fade-up stagger-2">
                    Not to observe it, not to comment on it, but to actively shape it through intentional, systemic intervention.
                  </p>

                  <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 md:p-10 text-primary-foreground mb-8 animate-fade-up stagger-3 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative z-10">
                      <p className="font-heading font-bold text-3xl md:text-4xl mb-3">Pison is that ecosystem.</p>
                      <p className="text-primary-foreground/80 text-lg">
                        We are not here to observe Africa's future — we are here to build it.
                      </p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="gold" size="xl" className="group animate-fade-up stagger-4">
                      Join the Movement
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Right Content - Reasons */}
                <div className="space-y-5">
                  {reasons.map((reason, index) => (
                    <div
                      key={reason.title}
                      className="group relative flex items-start gap-5 p-6 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-up overflow-hidden"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      {/* Background glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Number */}
                      <span className="absolute top-4 right-4 text-3xl font-heading font-bold text-muted/30 group-hover:text-accent/40 transition-colors">
                        {reason.number}
                      </span>
                      
                      <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                        <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      
                      <div className="flex-1 pr-12">
                        <h4 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {reason.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                      </div>
                      
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-6 top-1/2 -translate-y-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
              <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Join Us</span>
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-up stagger-1">
                  Ready to Build <span className="text-accent">Africa's Future?</span>
                </h2>
                
                <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up stagger-2">
                  Whether you're an individual seeking growth, an organization looking for transformation, or a partner ready to collaborate — we want to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
                  <Link to="/contact">
                    <Button variant="gold" size="xl" className="group">
                      Get In Touch
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/ecosystem">
                    <Button variant="heroOutline" size="xl">
                      Explore Ecosystem
                    </Button>
                  </Link>
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

export default WhyPison;

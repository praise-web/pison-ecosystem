import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamGroup from "@/assets/team-group-2.jpg";


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pison Group | Human Capital Development | Africa</title>
        <meta
          name="description"
          content="Pison Group is Africa's leading human capital development ecosystem. We build leaders, creators, and institutions through leadership training, content design, career development, branding, and research."
        />
        <meta
          name="keywords"
          content="human capital development, Africa, leadership training, content design, career development, branding agency, Nigeria"
        />
        <meta property="og:title" content="Pison Group | Human Capital Development | Africa" />
        <meta
          property="og:description"
          content="Unlocking human potential. Building systems. Shaping Africa's future."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pisongroup.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          <HeroSection />

          {/* Quick About Section */}
          <section className="section-padding bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-[400px]" />
            
            <div className="container-wide relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-up">
                  <span className="section-badge mb-6">Who We Are</span>
                  <h2 className="section-title mb-6">
                    Africa's most exciting ecosystem for{" "}
                    <span className="gradient-text">innovators</span>
                  </h2>
                  <p className="section-subtitle mb-8">
                    At Pison, we do not simply provide services; we build people, we build solutions, and we build systems that make progress sustainable.
                  </p>
                  <Link to="/about">
                    <Button variant="default" size="lg" className="group">
                      Discover Our Story
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-6 animate-fade-up stagger-2">
                  {/* Team Image */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-strong group">
                    <img 
                      src={teamGroup} 
                      alt="Pison Group Team" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "5+", label: "Ecosystem Arms" },
                      { value: "1000+", label: "Lives Impacted" },
                      { value: "10+", label: "Programs" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-card rounded-2xl shadow-soft border border-border hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-muted-foreground text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" />
            </div>
            
            <div className="container-wide relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-up">
                Ready to Build <span className="text-accent">Africa's Future?</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-up stagger-1">
                Join our ecosystem and be part of Africa's transformation story.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="group animate-fade-up stagger-2">
                  Join Wait-list
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

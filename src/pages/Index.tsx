import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, GraduationCap, Palette, Briefcase, Megaphone, FlaskConical } from "lucide-react";
import teamGroup from "@/assets/team-group-2.jpg";

const ecosystemTags = [
  { name: "Leadership", icon: GraduationCap, href: "/ecosystem" },
  { name: "Content Design", icon: Palette, href: "/ecosystem" },
  { name: "Careers", icon: Briefcase, href: "https:/careers.thepisongroup.com/" },
  { name: "Branding", icon: Megaphone, href: "/ecosystem" },
  { name: "Research", icon: FlaskConical, href: "/ecosystem" },
];

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
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[150px] animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
              <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[80px]" />
            </div>

            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="container-wide relative z-10 pt-24 pb-16">
              <div className="max-w-5xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-10 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Human Capital Development | Africa
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.05] mb-8 animate-fade-up stagger-1">
                  Unlocking human potential.{" "}
                  <span className="text-accent italic">Building systems.</span>{" "}
                  Shaping Africa's future.
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed animate-fade-up stagger-2">
                  Pison Group is a human capital development ecosystem at the intersection of creativity, technology, leadership, and institutional growth.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
                  <Link to="/ecosystem">
                    <Button variant="gold" size="xl" className="group w-full sm:w-auto">
                      Explore the Ecosystem
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Ecosystem Tags */}
                <div className="flex flex-wrap gap-3 mt-20 animate-fade-up stagger-4">
                  {ecosystemTags.map((tag) => (
                    <Link
                      key={tag.name}
                      to={tag.href}
                      className="group flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                      <tag.icon className="w-4 h-4 text-accent" />
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
              <div className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          </section>

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

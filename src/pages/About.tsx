import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Target, Eye, Lightbulb, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamLeaders from "@/assets/team-leaders.jpg";
import teamGroup from "@/assets/team-group.jpg";

const values = [
  { icon: Eye, text: "See potential where others see scarcity", label: "Vision" },
  { icon: Target, text: "Build systems where others see struggle", label: "Precision" },
  { icon: Lightbulb, text: "Create opportunity where others see impossibility", label: "Innovation" },
  { icon: Users, text: "Growth is not accidental — it is designed", label: "Intention" },
];

const philosophy = [
  { label: "People", color: "primary", description: "We invest in people", number: "01" },
  { label: "Products", color: "accent", description: "We create tools & systems", number: "02" },
  { label: "Profits", color: "secondary", description: "We build prosperity", number: "03" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Pison Group - Building Africa's Future</title>
        <meta
          name="description"
          content="Learn about Pison Group's story, mission, and vision. We're building an ecosystem that develops talent, strengthens institutions, and shapes Africa's future."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Our Story</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  Pison was not born as a{" "}
                  <span className="text-accent italic">business idea.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl animate-fade-up stagger-2">
                  It emerged from a restlessness — a deep desire to see people and organizations across Africa become more.
                </p>
              </div>
            </div>
          </section>

          {/* Story Content */}
          <section className="section-padding bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-[400px]" />
            
            <div className="container-wide relative">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-xl text-foreground font-medium animate-fade-up">
                    We observed a continent filled with potential but limited by systems, narratives, and opportunities. So we decided to build an ecosystem that solves these problems at the root.
                  </p>
                  
                  <div className="relative bg-gradient-to-br from-secondary via-secondary to-primary/80 rounded-3xl p-10 md:p-14 text-white my-16 animate-fade-up stagger-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-[60px]" />
                    
                    <Quote className="w-12 h-12 text-accent mb-6 relative z-10" />
                    <p className="text-2xl md:text-3xl font-heading font-bold italic leading-relaxed relative z-10">
                      At Pison, we do not simply provide services; we build people, we build solutions, and we build systems that make progress sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="text-center mb-16 animate-fade-up">
                <span className="section-badge mb-6">Our Team</span>
                <h2 className="section-title">
                  Meet the <span className="gradient-text">Visionaries</span>
                </h2>
                <p className="section-subtitle max-w-2xl mx-auto">
                  The passionate individuals driving Africa's transformation through innovation and dedication.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up stagger-1">
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-medium hover:shadow-strong transition-all duration-500">
                  <img 
                    src={teamMember1} 
                    alt="Pison Group Team Member" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-medium hover:shadow-strong transition-all duration-500">
                  <img 
                    src={teamMember2} 
                    alt="Pison Group Team Member" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-medium hover:shadow-strong transition-all duration-500 md:col-span-2">
                  <img 
                    src={teamLeaders} 
                    alt="Pison Group Leadership Team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Team Group Photo */}
              <div className="mt-8 animate-fade-up stagger-2">
                <div className="group relative overflow-hidden rounded-3xl aspect-[21/9] shadow-strong">
                  <img 
                    src={teamGroup} 
                    alt="Pison Group Team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <p className="text-white text-xl md:text-2xl font-heading font-semibold">
                      Building Africa's Future, Together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="animate-fade-up">
                  <span className="section-badge mb-6">Who We Are</span>
                  <h2 className="section-title mb-6">
                    Africa's most exciting ecosystem for{" "}
                    <span className="gradient-text">innovators</span>
                  </h2>
                  <p className="section-subtitle">
                    A space to learn, unlearn, build, and rebuild the future with purpose. We work with thinkers, creators, leaders, and problem-solvers who are shaping Africa's next era.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-5 animate-fade-up stagger-2">
                  {values.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-500 border border-border hover:border-accent/30 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">{item.label}</span>
                      </div>
                      <p className="text-foreground font-medium text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Purpose, Vision, Mission */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="text-center mb-16 animate-fade-up">
                <span className="section-badge mb-6">Our Foundation</span>
                <h2 className="section-title">Purpose. Vision. Mission.</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: "Purpose",
                    description: "To enrich lives by empowering people and organizations to achieve more.",
                    gradient: "from-primary to-primary/80",
                    delay: "stagger-1",
                  },
                  {
                    title: "Vision",
                    description: "To build opportunities for every person and organization in Africa to achieve more.",
                    gradient: "from-accent to-accent/80",
                    dark: true,
                    delay: "stagger-2",
                  },
                  {
                    title: "Mission",
                    description: "To identify potential where others see scarcity, build systems and tools that amplify it, and deliver transformative services.",
                    gradient: "from-secondary to-secondary/90",
                    delay: "stagger-3",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-to-br ${item.gradient} ${item.dark ? 'text-accent-foreground' : 'text-white'} animate-fade-up ${item.delay} group hover:-translate-y-2 transition-all duration-500`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                    
                    <span className="text-6xl font-heading font-bold opacity-20 absolute top-4 right-6">0{index + 1}</span>
                    
                    <div className="relative z-10">
                      <h4 className="font-heading font-bold text-2xl mb-4">{item.title}</h4>
                      <p className="text-base opacity-90 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="text-center mb-20 animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Core Philosophy</span>
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                  People. Products. <span className="text-accent">Profits.</span>
                </h2>
              </div>
              
              {/* Philosophy Flow */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 mb-16">
                {philosophy.map((item, index) => (
                  <div key={index} className="flex items-center animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                    <div className="group relative">
                      <div className={`
                        w-40 h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full flex flex-col items-center justify-center
                        transition-all duration-700 cursor-default backdrop-blur-sm
                        ${item.color === "primary" 
                          ? "bg-primary/20 border-2 border-primary/50 hover:bg-primary hover:border-primary" 
                          : item.color === "accent"
                          ? "bg-accent/20 border-2 border-accent/50 hover:bg-accent hover:border-accent"
                          : "bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50"
                        }
                      `}>
                        <span className={`text-xs font-bold tracking-wider mb-1 ${item.color === "accent" ? "text-accent group-hover:text-accent-foreground" : "text-white/60 group-hover:text-white/80"}`}>
                          {item.number}
                        </span>
                        <span className={`
                          font-heading font-bold text-2xl md:text-3xl transition-colors duration-500
                          ${item.color === "primary" 
                            ? "text-primary group-hover:text-primary-foreground" 
                            : item.color === "accent"
                            ? "text-accent group-hover:text-accent-foreground"
                            : "text-white"
                          }
                        `}>
                          {item.label}
                        </span>
                        <span className={`
                          text-sm text-center px-4 mt-2 transition-colors duration-500
                          ${item.color === "accent" 
                            ? "text-accent/80 group-hover:text-accent-foreground/80"
                            : "text-white/60 group-hover:text-white/80"
                          }
                        `}>
                          {item.description}
                        </span>
                      </div>
                    </div>
                    
                    {index < 2 && (
                      <div className="hidden md:flex items-center px-6 lg:px-10">
                        <div className="w-16 lg:w-24 h-[2px] bg-gradient-to-r from-white/30 to-accent/50" />
                        <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-accent/70" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-5">
                This sequence guides every arm of the Pison ecosystem — building 
                <span className="text-accent font-semibold"> sustainable prosperity </span> 
                for individuals, teams, and institutions.
              </p>

              <div className="flex justify-center mt-12 animate-fade-up stagger-6">
                <Link to="/ecosystem">
                  <Button variant="gold" size="xl" className="group">
                    Explore Our Ecosystem
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;

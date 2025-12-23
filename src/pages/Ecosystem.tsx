import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Palette, Briefcase, Megaphone, FlaskConical, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ecosystemUnits = [
  {
    id: "leadership",
    name: "Leadership Academy",
    tagline: "Developing leaders who build, not just manage.",
    description: "Executive leadership training, institutional development, personal growth systems, and strategic thinking mastery.",
    icon: GraduationCap,
    programs: ["The Boat Series™", "Executive Bootcamp", "Communication Mastery"],
    color: "primary",
    number: "01",
  },
  {
    id: "cdi",
    name: "Content Design Institute",
    tagline: "Shaping Africa's narrative through creativity.",
    description: "Training writers, designers, and storytellers who craft meaningful stories that resonate and drive growth.",
    icon: Palette,
    programs: ["Creative Writing Labs", "Design Accelerator", "Brand Workshops"],
    color: "accent",
    number: "02",
  },
  {
    id: "careers",
    name: "Pison Careers",
    tagline: "From confusion to clarity, from search to opportunity.",
    description: "Helping young Africans discover direction, gain relevant skills, and build meaningful careers.",
    icon: Briefcase,
    programs: ["Pison Smart CV", "Career Coaching", "Job Readiness"],
    color: "secondary",
    number: "03",
  },
  {
    id: "pinnacle",
    name: "Pinnacle Agency",
    tagline: "Clarity, identity, and visibility for brands.",
    description: "Branding, marketing, and creative agency helping businesses look great, communicate well, and grow.",
    icon: Megaphone,
    programs: ["Brand Identity", "UI/UX Design", "Social Media"],
    color: "primary",
    number: "04",
  },
  {
    id: "research",
    name: "Research & Resource",
    tagline: "Our think-and-do lab for Africa's future.",
    description: "Studying systems, building frameworks, and developing tools for governance, policy, and institutional leadership.",
    icon: FlaskConical,
    programs: ["Policy Research", "Leadership Models", "Innovation Strategy"],
    color: "accent",
    number: "05",
  },
];

const synergyFlow = [
  { label: "Leadership", desc: "builds capability", icon: GraduationCap },
  { label: "Content", desc: "fuels narratives", icon: Palette },
  { label: "Careers", desc: "drives employment", icon: Briefcase },
  { label: "Branding", desc: "gives visibility", icon: Megaphone },
  { label: "Research", desc: "fuels innovation", icon: FlaskConical },
];

const Ecosystem = () => {
  return (
    <>
      <Helmet>
        <title>Our Ecosystem | Pison Group - Leadership, Content, Careers, Branding</title>
        <meta
          name="description"
          content="Explore Pison Group's interconnected ecosystem: Leadership Academy, Content Design Institute, Pison Careers, Pinnacle Agency, and Research & Resource."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
            </div>
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">The Ecosystem</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  A Network of{" "}
                  <span className="text-accent italic">Interconnected</span> Arms
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-fade-up stagger-2">
                  Building leaders, creators, institutions, and opportunities across Africa.
                </p>
              </div>
            </div>
          </section>

          {/* Ecosystem Units */}
          <section className="section-padding bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-[300px]" />
            
            <div className="container-wide relative">
              {/* Featured Card - Leadership Academy */}
              <div className="mb-12 animate-fade-up">
                <div className="group relative bg-gradient-to-br from-secondary via-secondary to-primary/80 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden text-white">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px]" />
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-accent" />
                        </div>
                        <span className="text-accent font-bold text-lg">01</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                        Leadership Academy
                      </h2>
                      <p className="text-accent font-semibold text-lg mb-4">
                        Developing leaders who build, not just manage.
                      </p>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Executive leadership training, institutional development, personal growth systems, and strategic thinking mastery for Africa's next generation of leaders.
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {ecosystemUnits[0].programs.map((program) => (
                          <span key={program} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                            {program}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="gold" size="lg" className="group/btn">
                        Explore Programs
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Button>
                    </div>
                    
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse-glow" />
                        <div className="absolute inset-4 bg-white/5 rounded-full backdrop-blur-xl flex items-center justify-center">
                          <GraduationCap className="w-24 h-24 text-white/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Units Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {ecosystemUnits.slice(1).map((unit, index) => (
                  <div
                    key={unit.id}
                    className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-xl transition-all duration-500 border border-border hover:border-accent/30 hover:-translate-y-2 animate-fade-up overflow-hidden"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    {/* Background glow on hover */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      unit.color === "accent" ? "bg-accent/20" : unit.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                    }`} />
                    
                    {/* Number */}
                    <span className="absolute top-6 right-6 text-5xl font-heading font-bold text-muted/50 group-hover:text-accent/30 transition-colors">
                      {unit.number}
                    </span>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      unit.color === "primary" 
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white" 
                        : unit.color === "accent"
                        ? "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                    }`}>
                      <unit.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-4">{unit.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {unit.description}
                    </p>

                    {/* Programs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {unit.programs.map((program) => (
                        <span
                          key={program}
                          className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {program}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {unit.id === "careers" ? (
                      <a href="https://careers.thepisongroup.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                          <span className="text-primary font-semibold">Learn More</span>
                          <ExternalLink className="w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </Button>
                      </a>
                    ) : (
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                        <span className="text-primary font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Synergy Section */}
          <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]" />
            </div>
            
            <div className="container-wide relative z-10">
              <div className="text-center mb-16 animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">The Synergy</span>
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                  How Our System <span className="text-accent">Works Together</span>
                </h2>
              </div>
              
              {/* Flow diagram */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-16">
                {synergyFlow.map((item, index) => (
                  <div key={item.label} className="flex flex-col md:flex-row items-center animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <span className="font-heading font-bold text-xl text-white mb-1">{item.label}</span>
                      <span className="text-white/60 text-sm">{item.desc}</span>
                    </div>
                    
                    {index < synergyFlow.length - 1 && (
                      <div className="hidden md:flex items-center px-4 lg:px-6">
                        <div className="w-8 lg:w-12 h-[2px] bg-gradient-to-r from-white/30 to-accent/50" />
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-accent/70" />
                      </div>
                    )}
                    
                    {index < synergyFlow.length - 1 && (
                      <div className="flex md:hidden items-center py-4">
                        <div className="w-[2px] h-8 bg-gradient-to-b from-white/30 to-accent/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-up">
                Together, they form a transformative ecosystem that grows people, builds institutions, and strengthens society.
              </p>

              <div className="flex justify-center mt-12 animate-fade-up">
                <Link to="/why-pison">
                  <Button variant="gold" size="xl" className="group">
                    Discover Why Pison
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

export default Ecosystem;

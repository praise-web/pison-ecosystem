import { GraduationCap, Palette, Briefcase, Megaphone, FlaskConical, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ecosystemUnits = [
  {
    id: "leadership",
    name: "Leadership Academy",
    tagline: "Developing leaders who build, not just manage.",
    description: "Executive leadership training, institutional development, personal growth systems, and strategic thinking mastery.",
    icon: GraduationCap,
    programs: ["The Boat Series™", "Executive Bootcamp", "Communication Mastery"],
    color: "primary",
  },
  {
    id: "cdi",
    name: "Content Design Institute",
    tagline: "Shaping Africa's narrative through creativity.",
    description: "Training writers, designers, and storytellers who craft meaningful stories that resonate and drive growth.",
    icon: Palette,
    programs: ["Creative Writing Labs", "Design Accelerator", "Brand Workshops"],
    color: "accent",
  },
  {
    id: "careers",
    name: "Pison Careers",
    tagline: "From confusion to clarity, from search to opportunity.",
    description: "Helping young Africans discover direction, gain relevant skills, and build meaningful careers.",
    icon: Briefcase,
    programs: ["Pison Smart CV", "Career Coaching", "Job Readiness"],
    color: "secondary",
  },
  {
    id: "pinnacle",
    name: "Pinnacle Agency",
    tagline: "Clarity, identity, and visibility for brands.",
    description: "Branding, marketing, and creative agency helping businesses look great, communicate well, and grow.",
    icon: Megaphone,
    programs: ["Brand Identity", "UI/UX Design", "Social Media"],
    color: "primary",
  },
  {
    id: "research",
    name: "Research & Resource",
    tagline: "Our think-and-do lab for Africa's future.",
    description: "Studying systems, building frameworks, and developing tools for governance, policy, and institutional leadership.",
    icon: FlaskConical,
    programs: ["Policy Research", "Leadership Models", "Innovation Strategy"],
    color: "accent",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">The Ecosystem</span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            A Network of Interconnected Arms
          </h2>
          <p className="text-muted-foreground text-lg">
            Building leaders, creators, institutions, and opportunities across Africa.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemUnits.map((unit, index) => (
            <div
              key={unit.id}
              className={`group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 border border-border hover:border-primary/30 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                unit.color === "primary" 
                  ? "bg-primary/10 text-primary" 
                  : unit.color === "accent"
                  ? "bg-accent/20 text-accent"
                  : "bg-secondary/20 text-secondary"
              } group-hover:scale-110 transition-transform duration-300`}>
                <unit.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {unit.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">{unit.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {unit.description}
              </p>

              {/* Programs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {unit.programs.map((program) => (
                  <span
                    key={program}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                  >
                    {program}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                <span className="text-primary font-semibold">Explore</span>
                <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Synergy Section */}
        <div className="mt-20 bg-secondary rounded-3xl p-8 md:p-12 text-secondary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
              How Our System Works Together
            </h3>
            
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { label: "Leadership", desc: "builds capability" },
                { label: "Content", desc: "fuels narratives" },
                { label: "Careers", desc: "drives employment" },
                { label: "Branding", desc: "gives visibility" },
                { label: "Research", desc: "fuels innovation" },
              ].map((item, index) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg mb-3">
                    {index + 1}
                  </div>
                  <span className="font-heading font-bold text-lg">{item.label}</span>
                  <span className="text-secondary-foreground/70 text-sm">{item.desc}</span>
                  {index < 4 && (
                    <div className="hidden md:block absolute mt-6 text-accent">→</div>
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-center text-secondary-foreground/80 mt-8 max-w-2xl mx-auto">
              Together, they form a transformative ecosystem that grows people, builds institutions, and strengthens society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;

import { Users, Crown, Building2, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Users,
    title: "Develop Talent",
    description: "We identify and nurture potential in individuals across Africa.",
  },
  {
    icon: Crown,
    title: "Build Leaders",
    description: "We create leaders with competence, character, and vision.",
  },
  {
    icon: Building2,
    title: "Strengthen Institutions",
    description: "We help organizations build systems that last.",
  },
  {
    icon: Rocket,
    title: "Create Opportunities",
    description: "We open doors that were previously closed.",
  },
  {
    icon: TrendingUp,
    title: "Sustain Progress",
    description: "We build for long-term, generational impact.",
  },
];

const WhyPisonSection = () => {
  return (
    <section id="why-pison" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Pison Matters</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Africa doesn't need more businesses.
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Africa needs ecosystems that develop talent, build leaders, strengthen institutions, create opportunities, and sustain progress.
            </p>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground mb-8">
              <p className="font-heading font-bold text-2xl mb-2">Pison is that ecosystem.</p>
              <p className="text-primary-foreground/80">
                We are not here to observe Africa's future — we are here to build it.
              </p>
            </div>

            <Button variant="gold" size="lg">
              Join the Movement
            </Button>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPisonSection;

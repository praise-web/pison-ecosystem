import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const phrases = [
  { text: "Unlocking human potential.", isAccent: false },
  { text: "Building systems.", isAccent: true },
  { text: "Shaping Africa's future.", isAccent: false },
];

const HeroSection = () => {
  const { displayText, currentPhraseIndex } = useTypewriter({
    phrases: phrases.map(p => p.text),
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  const currentPhrase = phrases[currentPhraseIndex];
  const isAccentPhrase = currentPhrase?.isAccent;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Human Capital Development | Africa
            </span>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <div className="lg:w-[900px]">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
              <span className={isAccentPhrase ? "text-accent italic" : ""}>{displayText}</span>
              <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-pulse" />
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-up stagger-2">
            Pison Group is a human capital development ecosystem at the intersection of creativity, technology, leadership, and institutional growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button variant="gold" size="xl" className="group">
              Explore the Ecosystem
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Ecosystem Tags */}
          <div className="flex flex-wrap gap-3 mt-16 animate-fade-up stagger-4">
            {["Leadership", "Content Design", "Careers", "Branding", "Research"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-full text-primary-foreground/70 text-sm font-medium hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

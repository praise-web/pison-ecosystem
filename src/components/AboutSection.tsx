import { Quote, Target, Eye, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
            Pison was not born as a business idea.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              It emerged from a restlessness — a deep desire to see people and organizations across Africa become more.
            </p>
            <p>
              We observed a continent filled with potential but limited by systems, narratives, and opportunities. So we decided to build an ecosystem that solves these problems at the root.
            </p>
            <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-r-lg my-8">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-foreground font-medium text-xl italic">
                At Pison, we do not simply provide services; we build people, we build solutions, and we build systems that make progress sustainable.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Who We Are</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-4 mb-6">
              Africa's most exciting ecosystem for innovators
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A space to learn, unlearn, build, and rebuild the future with purpose. We work with thinkers, creators, leaders, and problem-solvers who are shaping Africa's next era.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Eye, text: "See potential where others see scarcity" },
              { icon: Target, text: "Build systems where others see struggle" },
              { icon: Lightbulb, text: "Create opportunity where others see impossibility" },
              { icon: Quote, text: "Growth is not accidental — it is designed" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/20 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
                <p className="text-foreground font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose, Vision, Mission */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Purpose",
              description: "To enrich lives by empowering people and organizations to achieve more.",
              color: "primary",
            },
            {
              title: "Vision",
              description: "To build opportunities for every person and organization in Africa to achieve more.",
              color: "accent",
            },
            {
              title: "Mission",
              description: "To identify potential where others see scarcity, build systems and tools that amplify it, and deliver transformative services.",
              color: "secondary",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8 ${
                item.color === "primary"
                  ? "bg-primary text-primary-foreground"
                  : item.color === "accent"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="font-heading font-bold text-xl mb-4">{item.title}</h4>
              <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-muted rounded-2xl p-8 md:p-12">
            <h4 className="font-heading font-bold text-2xl text-foreground mb-4">
              Our Core Philosophy
            </h4>
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-heading font-bold">
              <span className="text-primary">People</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-accent">Products</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">Profits</span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              We invest in people. We create tools and systems that amplify their value. We build sustainable prosperity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

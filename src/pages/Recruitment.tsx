import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const Recruitment = () => {
  return (
    <>
      <Helmet>
        <title>Recruitment | Pison Group - Join Our Team</title>
        <meta
          name="description"
          content="Apply to join the Pison Group team. Fill out our recruitment form and take the first step toward building Africa's future with us."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        <main>
          <section
            className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/25 rounded-full blur-[100px]" />
            </div>

            <div className="container-wide relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Careers
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  Join the <span className="text-accent italic">Pison</span>{" "}
                  Team
                </h1>

                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl animate-fade-up stagger-2">
                  We're looking for passionate individuals ready to help build
                  Africa's future. Fill out the form below to apply.
                </p>
              </div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-border">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdKzVBSyMxLxBqiH5VrX-_IRUV0sNQf2g7TGF0wt3MjPWMuPA/viewform?embedded=true"
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Pison Group Recruitment Form"
                  className="w-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Recruitment;

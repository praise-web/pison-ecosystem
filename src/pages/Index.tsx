import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyPisonSection from "@/components/WhyPisonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
          <AboutSection />
          <EcosystemSection />
          <WhyPisonSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

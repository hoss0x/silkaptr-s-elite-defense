import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Dynamic Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProblemSolutionSection />
        <CapabilitiesSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

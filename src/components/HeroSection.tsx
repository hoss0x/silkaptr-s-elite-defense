import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 animate-float"
          style={{
            background: "linear-gradient(135deg, hsla(186, 100%, 50%, 0.1) 0%, hsla(270, 91%, 65%, 0.1) 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            filter: "blur(1px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 animate-float-delayed"
          style={{
            background: "linear-gradient(135deg, hsla(270, 91%, 65%, 0.15) 0%, hsla(186, 100%, 50%, 0.15) 100%)",
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            filter: "blur(1px)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-32 h-32 animate-float border border-primary/20 rotate-45"
          style={{
            background: "linear-gradient(135deg, hsla(186, 100%, 50%, 0.05) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full animate-pulse"
          style={{
            background: "radial-gradient(circle, hsla(186, 100%, 50%, 0.2) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute top-1/4 left-1/5 w-16 h-16 animate-float-delayed rotate-12"
          style={{
            background: "linear-gradient(135deg, hsla(186, 100%, 50%, 0.2) 0%, hsla(270, 91%, 65%, 0.2) 100%)",
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              AI-AUGMENTED RED TEAM OPERATIONS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Next-Generation
            <br />
            <span className="gradient-text">Adversary Emulation.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We don't just scan. We simulate advanced persistent threats to expose the vulnerabilities others miss.{" "}
            <span className="text-foreground font-medium">
              The precision of AI, the strategy of elite human hackers.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-cyber-gradient text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.5)] group"
            >
              Start an Engagement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#methodology")}
              className="border-border text-foreground hover:bg-muted/50 font-semibold text-lg px-8 py-6"
            >
              View Methodology
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 font-mono tracking-wider">
              TRUSTED BY SECURITY-CONSCIOUS ORGANIZATIONS
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              <span className="text-muted-foreground font-semibold">FINTECH</span>
              <span className="text-muted-foreground font-semibold">HEALTHCARE</span>
              <span className="text-muted-foreground font-semibold">ENTERPRISE</span>
              <span className="text-muted-foreground font-semibold">GOVERNMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

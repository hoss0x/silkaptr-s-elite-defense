import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--cyber-cyan)) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              AI-POWERED PENETRATION TESTING
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Penetration testing
            <br />
            <span className="gradient-text">at the speed of silicon.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            SilKaPtr finds complex, chained vulnerabilities and validates every finding—no false positives, no noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-cyber-gradient text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.5)] group"
            >
              Request a demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#pricing")}
              className="border-border text-foreground hover:bg-muted/50 font-semibold text-lg px-8 py-6"
            >
              View pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

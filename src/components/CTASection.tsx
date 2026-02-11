import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-cyan)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-purple)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
            <span className="text-primary font-mono text-sm">$</span>
            <span className="font-mono text-sm text-muted-foreground">
              ready_to_secure --your-assets
            </span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Guessing.
            <br />
            <span className="gradient-text">Start Knowing.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            See what a real security assessment looks like — validated findings,
            chained attack paths, and actionable remediation. In hours, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-cyber-gradient text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.5)] group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            >
              Request Assessment
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Free initial consultation{" "}
            <span className="mx-2 text-border">•</span>
            <span className="text-primary">✓</span> No obligations{" "}
            <span className="mx-2 text-border">•</span>
            <span className="text-primary">✓</span> NDA protected
          </p>
        </div>
      </div>
    </section>
  );
};

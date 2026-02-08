import { Check, X } from "lucide-react";

const traditionalItems = [
  "Static scanning",
  "Noisy alerts",
  "Single-vulnerability focus",
];

const silkaptrItems = [
  "Dynamic emulation",
  "Stealth operations",
  "Full attack-chain awareness",
];

export const ProblemSolutionSection = () => {
  return (
    <section id="methodology" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider mb-4 block">
            METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Old Way vs. <span className="gradient-text">The SilKaptr Way</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional security tools only scratch the surface. We dive deep into your attack surface
            with the same techniques used by nation-state adversaries.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Approach */}
          <div className="p-8 rounded-2xl bg-muted/30 border border-border opacity-70">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground">Traditional Scanning</h3>
            </div>
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive/70 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground/70 font-mono">
              // Reactive approach with limited depth
            </p>
          </div>

          {/* SilKaptr Approach */}
          <div className="p-8 rounded-2xl glass-card gradient-border glow-cyan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">The SilKaptr Approach</h3>
            </div>
            <ul className="space-y-4">
              {silkaptrItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary/70 font-mono">
              // Proactive simulation with full coverage
            </p>
          </div>
        </div>

        {/* Key Message Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <p className="text-lg md:text-xl font-medium">
              Go beyond simple compliance.{" "}
              <span className="gradient-text font-bold">Experience a true Red Team operation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

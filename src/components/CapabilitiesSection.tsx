import { Brain, Target, ShieldCheck, Radar } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Understands Your Application",
    description:
      "SilKaPtr doesn't just scan — it reasons about your application's logic, flows, and business rules to find vulnerabilities others miss.",
  },
  {
    icon: Target,
    title: "Chained Vulnerability Discovery",
    description:
      "We don't just find isolated bugs. SilKaPtr maps how vulnerabilities connect and compound into real attack paths.",
  },
  {
    icon: ShieldCheck,
    title: "Validated Results Only",
    description:
      "Every finding is independently confirmed before it reaches your report. No false positives. No noise. Only real, exploitable vulnerabilities.",
  },
  {
    icon: Radar,
    title: "Machine Speed Delivery",
    description:
      "What takes a human penetration testing team days of manual work, SilKaPtr delivers in hours — with proof and remediation steps.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider mb-4 block">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Depth & Precision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An AI-powered platform that combines the intuition of elite pentesters
            with the speed and scale of intelligent automation.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-card hover:glow-cyan transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>

              {/* Decorative element */}
              <div className="mt-4 h-0.5 w-0 bg-cyber-gradient group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

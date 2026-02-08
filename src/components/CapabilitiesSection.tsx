import { Brain, Target, ShieldCheck, Radar } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Adaptive Intelligence",
    description:
      "Our AI agents don't just follow a script; they reason and adapt to your specific environment to find valid entry points.",
  },
  {
    icon: Target,
    title: "Full Kill-Chain Simulation",
    description:
      "We go beyond simple detection. We map the entire attack path from initial access to privilege escalation and lateral movement.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-False Positives",
    description:
      "Every finding is verified by specialized validation agents. We filter out the noise so you can focus on real risks.",
  },
  {
    icon: Radar,
    title: "Advanced Evasion Engine",
    description:
      "Built to bypass modern WAFs. Our system analyzes blocked requests and dynamically mutates payloads to evade detection.",
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
            Engineered for <span className="gradient-text">Maximum Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with battle-tested offensive security techniques
            to deliver unparalleled depth and accuracy.
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

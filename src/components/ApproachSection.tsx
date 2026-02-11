import { Link, GitBranch, FileCheck, ClipboardList } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Discover",
    description: "Map your apps, APIs, and infrastructure automatically.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Analyze",
    description: "AI models reason through logic and flows to find real weaknesses.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Validate",
    description: "Every finding is confirmed with proof—no false positives.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Report",
    description: "Get prioritized issues with remediation steps and risk context.",
  },
];

const extras = [
  {
    title: "Chained vulnerability detection",
    description: "Find complex attack paths that single-point scanners miss entirely.",
  },
  {
    title: "Evidence-based reporting",
    description: "Every vulnerability includes proof-of-concept and remediation guidance.",
  },
  {
    title: "Policy + compliance mapping",
    description: "Map findings to OWASP, NIST, SOC2, and custom security policies.",
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">SilKaPtr</span> works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A continuous loop that keeps your attack surface mapped, tested, and documented—without adding work to your team.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group p-6 rounded-2xl glass-card hover:glow-cyan transition-all duration-500 hover:-translate-y-1"
            >
              <span className="font-mono text-primary text-sm mb-3 block">{step.number}</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {extras.map((extra, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2">{extra.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {extra.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

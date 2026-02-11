import { Search, Zap, ShieldCheck, Link, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    label: "DEPTH",
    title: "Deeper than any scanner.",
    description:
      "Traditional scanners check signatures. SilKaPtr understands your application—its logic, flows, and weaknesses—and finds complex, chained vulnerabilities surface-level tools miss.",
  },
  {
    icon: Zap,
    label: "SPEED",
    title: "What takes days, we deliver in hours.",
    description:
      "Automated discovery, intelligent prioritization, and continuous validation—so your team ships fixes instead of chasing false alarms.",
  },
  {
    icon: ShieldCheck,
    label: "PRECISION",
    title: "Validated results. Zero noise.",
    description:
      "Every finding is independently confirmed before it reaches your report. You get proof, severity, and remediation steps—no false positives.",
  },
  {
    icon: Link,
    label: "CHAINED THREATS",
    title: "We map how vulnerabilities connect.",
    description:
      "SilKaPtr doesn't stop at isolated bugs. It traces attack paths across your stack—showing how small issues compound into real risk.",
  },
  {
    icon: Shield,
    label: "COVERAGE",
    title: "Continuous protection, start to finish.",
    description:
      "From first commit to production, SilKaPtr stays in sync with your codebase—so new changes are tested before they become incidents.",
  },
];

export const ProductSection = () => {
  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start gap-8 mb-20 last:mb-0 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="font-mono text-xs text-primary tracking-wider">
                  {feature.label}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {feature.description}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-sm h-48 rounded-2xl glass-card flex items-center justify-center">
                <feature.icon className="w-16 h-16 text-primary/30" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

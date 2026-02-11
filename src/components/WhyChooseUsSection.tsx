import { Users, Eye, FileText } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Elite-Level Depth",
    description:
      "SilKaPtr delivers the same depth and intuition as a world-class human penetration tester — without the wait or the cost.",
  },
  {
    icon: Eye,
    title: "Beyond Surface-Level",
    description:
      "We don't check signatures. We understand your application's logic, map its attack surface, and find complex chained vulnerabilities.",
  },
  {
    icon: FileText,
    title: "Proof & Remediation",
    description:
      "Every vulnerability comes with exploitation proof and developer-ready remediation steps. No vague findings, no guesswork.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider mb-4 block">
            WHY SILKAPTR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">SilKaPtr</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not another scanner. An AI-powered security assessment platform
            that thinks like a hacker and reports like a consultant.
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Engagements" },
            { value: "99.9%", label: "Verified Findings" },
            { value: "0", label: "Business Disruptions" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

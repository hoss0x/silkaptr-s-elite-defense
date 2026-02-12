import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hossam@silkaptr.com?subject=Demo Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}`)}`;
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-cyan)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-purple)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to see your
            <br />
            <span className="gradient-text">real attack surface?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Get a demo tailored to your stack. No generic pitches—just real findings.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-card/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Work Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Company</label>
              <Input
                placeholder="Your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-card/50 border-border"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-cyber-gradient text-primary-foreground font-semibold text-lg py-6 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.5)] group"
            >
              Request a demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

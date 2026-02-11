import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/silkaptr-icon-flat.png";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <img src={logo} alt="SilKaptr" className="w-9 h-9 rounded-md object-cover transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--cyber-cyan))]" />
            <span className="text-xl font-bold tracking-tight">
              Sil<span className="gradient-text">Kaptr</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium glitch-hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-cyber-gradient text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--cyber-cyan)/0.5)]"
            >
              Request a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); setIsMobileMenuOpen(false); }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => { scrollToSection("#contact"); setIsMobileMenuOpen(false); }}
                className="bg-cyber-gradient text-primary-foreground font-semibold mt-2"
              >
                Request a demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

import logo from "@/assets/silkaptr-icon-flat.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 mb-3"
            >
              <img src={logo} alt="SilKaPtr" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-xl font-bold tracking-tight">
                Sil<span className="gradient-text">KaPtr</span>
              </span>
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div className="space-y-3">
              <a href="mailto:hello@silkaptr.io" className="text-muted-foreground hover:text-primary transition-colors block">
                Email us
              </a>
              <p className="text-muted-foreground">hello@silkaptr.io</p>
            </div>
            <div className="space-y-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SilKaPtr. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

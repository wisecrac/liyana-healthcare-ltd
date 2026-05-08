import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/why-us", label: "Why Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-accent transition-smooth">
            <Phone className="size-3.5" /> +254 700 000 000
          </a>
          <a href="mailto:info@liyanahealthcare.co.ke" className="hidden sm:flex items-center gap-2 hover:text-accent transition-smooth">
            <Mail className="size-3.5" /> info@liyanahealthcare.co.ke
          </a>
          <span className="hidden md:inline opacity-80">PPB Licensed Distributor</span>
        </div>
      </div>
      <div className={`bg-background transition-smooth ${scrolled ? "shadow-card" : "border-b border-border"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-10 rounded-lg bg-gradient-hero grid place-items-center shadow-card group-hover:scale-105 transition-smooth">
              <Pill className="size-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary text-lg">Liyana Health Care</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Pharmaceutical Wholesale</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary font-semibold" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
                className="text-sm font-medium transition-smooth"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="default">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary font-semibold" }}
                  className="text-sm py-1"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <Link to="/quote" onClick={() => setOpen(false)}>Request a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

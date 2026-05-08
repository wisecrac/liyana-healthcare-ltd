import { Link } from "@tanstack/react-router";
import { Pill, MapPin, Phone, Mail, Facebook, Linkedin, MessageCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="size-10 rounded-lg bg-white/10 grid place-items-center">
              <Pill className="size-5" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">Liyana Health Care</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">Pharmaceutical Wholesale</div>
            </div>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Reliable pharmaceutical supply you can trust — serving pharmacies, hospitals and clinics across Kenya.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs bg-white/10 rounded-md px-3 py-2 border border-white/15">
            <ShieldCheck className="size-4 text-accent" />
            <span>Regulated by Pharmacy & Poisons Board of Kenya</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-85">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/why-us", "Why Choose Us"],
              ["/quote", "Request a Quote"],
              ["/faq", "FAQs"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-accent transition-smooth">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Product Categories</h4>
          <ul className="space-y-2 text-sm opacity-85">
            <li><Link to="/products" className="hover:text-accent transition-smooth">Prescription Medicines</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-smooth">OTC Drugs</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-smooth">Antimalarial Drugs</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-smooth">Chronic Disease Meds</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-smooth">Medical Consumables</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-smooth">Surgical Equipment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Contact</h4>
          <ul className="space-y-3 text-sm opacity-85">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-accent" /> Thika-Nairobi Highway, Thika, Kiambu County, Kenya</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0 text-accent" /> +254 700 000 000</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 shrink-0 text-accent" /> info@liyanahealthcare.co.ke</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-smooth"><Facebook className="size-4" /></a>
            <a href="#" aria-label="LinkedIn" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-smooth"><Linkedin className="size-4" /></a>
            <a href="https://wa.me/254700000000" aria-label="WhatsApp" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-smooth"><MessageCircle className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs opacity-75 flex flex-col md:flex-row gap-2 justify-between">
          <span>© 2025 Liyana Health Care Ltd. All Rights Reserved.</span>
          <span>Designed for healthcare professionals · B2B only</span>
        </div>
      </div>
    </footer>
  );
}

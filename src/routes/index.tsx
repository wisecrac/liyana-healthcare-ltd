import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Truck, ShieldCheck, Snowflake, Users, Pill, Stethoscope, Syringe, HeartPulse,
  PackageCheck, Award, ArrowRight, Quote, Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-pharmacy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liyana Health Care Ltd — Pharmaceutical Wholesale Kenya" },
      { name: "description", content: "Reliable pharmaceutical supply you can trust. Quality medicines and healthcare products delivered to pharmacies, hospitals and clinics across Kenya." },
      { property: "og:title", content: "Liyana Health Care Ltd — Pharmaceutical Wholesale Kenya" },
      { property: "og:description", content: "PPB-licensed wholesaler in Thika delivering medicines nationwide." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { v: "500+", l: "Products" },
  { v: "200+", l: "Clients Served" },
  { v: "10+", l: "Years Experience" },
  { v: "47", l: "Counties Reached" },
];

const services = [
  { icon: Truck, title: "Nationwide Delivery", desc: "Timely distribution across Thika, Nairobi and all 47 counties." },
  { icon: Snowflake, title: "Cold Chain Storage", desc: "Validated temperature-controlled handling for sensitive products." },
  { icon: PackageCheck, title: "Bulk Ordering", desc: "Flexible wholesale solutions tailored for institutions." },
  { icon: Users, title: "Dedicated Account Managers", desc: "A single point of contact for every registered client." },
];

const categories = [
  { icon: Pill, name: "Prescription Medicines" },
  { icon: HeartPulse, name: "Chronic Disease Meds" },
  { icon: Syringe, name: "Antibiotics & Antivirals" },
  { icon: Stethoscope, name: "Medical Consumables" },
  { icon: ShieldCheck, name: "Antimalarials" },
  { icon: Award, name: "Vitamins & Supplements" },
];

const testimonials = [
  { name: "Grace Wanjiru", role: "Owner, Wellcare Pharmacy — Thika", text: "Liyana has been our most reliable supplier for over three years. Orders arrive on time, every time, and their pricing keeps us competitive." },
  { name: "Dr. James Otieno", role: "Clinic Manager, Nairobi", text: "Their team understands what a clinic actually needs. From antimalarials to consumables, supply has never been an issue." },
  { name: "Mercy Njeri", role: "Procurement Officer, Central Kenya Hospital", text: "Compliance, quality and consistency. Liyana is a partner we trust for both routine and urgent procurement." },
  { name: "Peter Kamau", role: "NGO Health Program Coordinator", text: "Working with Liyana has simplified our supply chain. Their cold-chain handling for vaccines is excellent." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/15 rounded-full px-3 py-1.5 mb-6">
              <ShieldCheck className="size-3.5 text-accent" /> PPB Licensed Distributor
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Reliable Pharmaceutical <span className="text-accent">Supply</span> You Can Trust
            </h1>
            <p className="mt-6 text-lg opacity-90 leading-relaxed max-w-xl">
              Delivering quality medicines and healthcare products to pharmacies, hospitals and clinics across Kenya — from our Thika hub to your facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/quote">Request a Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm opacity-90">
              <Phone className="size-4 text-accent" />
              <a href="tel:+254700000000" className="hover:text-accent">+254 700 000 000</a>
              <span className="opacity-50">·</span>
              <span>Mon–Sat</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              width={1920}
              height={1080}
              alt="Liyana Health Care pharmaceutical warehouse in Thika, Kenya"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-4 py-20 max-w-3xl text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">About Liyana</div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">A trusted partner to Kenya's healthcare providers</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Based along the Thika-Nairobi Highway, we are a PPB-licensed pharmaceutical wholesaler supplying registered pharmacies, clinics, hospitals, NGOs and government facilities. Our focus is simple: safe, quality, affordable medicines — delivered on time.
        </p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/about">Learn more about us <ArrowRight className="size-4" /></Link>
        </Button>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">What we do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Services built for healthcare professionals</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-background rounded-xl p-6 shadow-card hover:-translate-y-1 transition-smooth border border-border">
                <div className="size-12 rounded-lg bg-gradient-hero grid place-items-center text-white mb-4">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Why choose us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">The wholesale partner Kenya's healthcare providers count on</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From licensing and quality assurance to nationwide logistics, every part of our operation is built around one promise — reliable supply, every time.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Licensed and PPB compliant",
              "500+ products across 11 categories",
              "Cold chain storage available",
              "Flexible payment terms for verified clients",
              "Strong supplier partnerships & QA",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 size-5 rounded-full bg-accent grid place-items-center text-accent-foreground text-xs">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="default" className="mt-8" size="lg">
            <Link to="/why-us">See all reasons <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((c) => (
            <Link key={c.name} to="/products" className="bg-background border border-border rounded-xl p-5 shadow-card hover:border-accent hover:-translate-y-1 transition-smooth">
              <c.icon className="size-7 text-primary mb-3" />
              <div className="font-display font-semibold text-sm">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Client voices</div>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by pharmacies, clinics and hospitals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
                <Quote className="size-7 text-accent mb-3" />
                <p className="leading-relaxed opacity-95">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs opacity-75">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-14 text-center text-primary-foreground shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to partner with us?</h2>
          <p className="mt-4 opacity-90 max-w-xl mx-auto">Get a tailored quote for your pharmacy, clinic or hospital today.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="xl"><Link to="/quote">Request a Quote</Link></Button>
            <Button asChild variant="outlineLight" size="xl"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}

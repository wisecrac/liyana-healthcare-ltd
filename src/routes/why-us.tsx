import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Liyana Health Care Ltd" },
      { name: "description", content: "PPB compliant, competitive pricing, fast nationwide delivery and dedicated account managers — discover why providers choose Liyana." },
      { property: "og:title", content: "Why Choose Liyana Health Care" },
      { property: "og:description", content: "The wholesale partner Kenya's healthcare providers trust." },
    ],
  }),
  component: WhyUsPage,
});

const reasons = [
  { t: "Licensed & PPB Compliant Supplier", d: "Fully regulated by the Pharmacy and Poisons Board of Kenya." },
  { t: "Competitive Wholesale Pricing", d: "Transparent pricing that helps you stay competitive." },
  { t: "Wide Product Range (500+ SKUs)", d: "From antimalarials to surgical consumables." },
  { t: "Fast & Reliable Delivery Across Kenya", d: "Dependable logistics from Thika nationwide." },
  { t: "Cold Chain Storage Available", d: "Temperature-controlled handling for sensitive products." },
  { t: "Dedicated Account Managers", d: "A personal point of contact for every client." },
  { t: "Flexible Payment Terms", d: "Credit terms tailored to verified facilities." },
  { t: "Strong Supplier Partnerships", d: "Direct relationships with leading manufacturers." },
  { t: "Experienced Industry Team", d: "Decades of combined pharmaceutical expertise." },
];

function WhyUsPage() {
  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="Built for Kenya's healthcare providers" subtitle="Nine reasons pharmacies, clinics and hospitals rely on Liyana every day." />

      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.t} className="bg-background border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 transition-smooth">
              <CheckCircle2 className="size-7 text-accent mb-3" />
              <h3 className="font-display font-semibold text-primary">{r.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero text-primary-foreground rounded-3xl p-10 md:p-14 text-center shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-bold">Let's get your facility supplied</h2>
          <p className="mt-4 opacity-90">Talk to our team and start receiving reliable pharmaceutical supply.</p>
          <Button asChild variant="hero" size="xl" className="mt-7"><Link to="/quote">Request a Quote</Link></Button>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Truck, Package, Boxes, Search, Clock, Snowflake, UserCheck, CreditCard } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Liyana Health Care Ltd" },
      { name: "description", content: "Wholesale distribution, bulk ordering, cold-chain handling and dedicated account management for pharmacies and hospitals in Kenya." },
      { property: "og:title", content: "Services — Liyana Health Care Ltd" },
      { property: "og:description", content: "End-to-end pharmaceutical wholesale services across Kenya." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Package, title: "Wholesale Distribution", desc: "Prescription and OTC medicines distributed to registered facilities." },
  { icon: Boxes, title: "Bulk Ordering for Institutions", desc: "Large-volume solutions for hospitals, NGOs and government facilities." },
  { icon: Search, title: "Sourcing & Procurement", desc: "Help locating hard-to-find medicines and specialty products." },
  { icon: Clock, title: "Inventory Management Support", desc: "Reorder schedules and supply forecasting for steady stock." },
  { icon: Truck, title: "Nationwide Delivery", desc: "Reliable logistics from Thika to Nairobi, Central Kenya and beyond." },
  { icon: Snowflake, title: "Cold Chain Storage", desc: "Validated handling for vaccines and temperature-sensitive products." },
  { icon: UserCheck, title: "Dedicated Account Managers", desc: "A personal point of contact for every registered client." },
  { icon: CreditCard, title: "Flexible Payment Terms", desc: "Tailored credit terms for verified healthcare facilities." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Pharmaceutical wholesale, end-to-end" subtitle="Everything Kenya's healthcare providers need from a wholesale partner — under one roof." />

      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-background border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 transition-smooth">
              <div className="size-12 rounded-lg bg-gradient-hero grid place-items-center text-white mb-4">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display font-semibold text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero text-primary-foreground rounded-3xl p-10 md:p-14 text-center shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-bold">Need a custom supply arrangement?</h2>
          <p className="mt-4 opacity-90 max-w-xl mx-auto">Tell us about your facility and we'll design a service plan that fits.</p>
          <Button asChild variant="hero" size="xl" className="mt-7">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

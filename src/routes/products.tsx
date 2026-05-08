import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Pill, Stethoscope, Syringe, HeartPulse, ShieldCheck, Award, Activity, Bandage, Microscope, PawPrint, Sparkles, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Liyana Health Care Ltd" },
      { name: "description", content: "Browse our pharmaceutical product categories — from prescription medicines to surgical equipment. B2B only." },
      { property: "og:title", content: "Products — Liyana Health Care Ltd" },
      { property: "og:description", content: "500+ pharmaceutical products for pharmacies, clinics and hospitals." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  { icon: Pill, name: "Prescription Medicines", tag: "Rx", desc: "A full range of prescription pharmaceuticals from leading manufacturers." },
  { icon: Sparkles, name: "Over-the-Counter (OTC)", tag: "OTC", desc: "Common-use medications stocked in dependable volumes." },
  { icon: Syringe, name: "Antibiotics & Antivirals", tag: "Rx", desc: "Broad and narrow-spectrum agents for clinical use." },
  { icon: ShieldCheck, name: "Antimalarial Drugs", tag: "Rx", desc: "Coartem, Artemether-Lumefantrine and other approved antimalarials." },
  { icon: Activity, name: "Painkillers & Anti-inflammatories", tag: "OTC/Rx", desc: "Analgesics and NSAIDs for routine and clinical needs." },
  { icon: HeartPulse, name: "Chronic Disease Medications", tag: "Rx", desc: "Diabetes, hypertension and asthma management products." },
  { icon: Award, name: "Vitamins, Minerals & Supplements", tag: "OTC", desc: "Nutritional support for all age groups." },
  { icon: Bandage, name: "Medical Consumables & Supplies", tag: "Supplies", desc: "Gloves, dressings, syringes and more." },
  { icon: Microscope, name: "Surgical & Diagnostic Equipment", tag: "Equipment", desc: "Reliable instruments for clinical settings." },
  { icon: PawPrint, name: "Veterinary Drugs", tag: "Vet", desc: "Pharmaceuticals for animal health applications." },
  { icon: Stethoscope, name: "Health & Wellness Products", tag: "OTC", desc: "Everyday wellness items for retail pharmacies." },
];

const filters = ["All", "Rx", "OTC", "Supplies", "Equipment", "Vet"] as const;

function ProductsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = categories.filter((c) => filter === "All" || c.tag.includes(filter));

  return (
    <>
      <PageHero eyebrow="Our Products" title="500+ pharmaceutical products in stock" subtitle="We supply registered pharmacies, clinics, hospitals, NGOs and government health facilities — not the general public." />

      <section className="container mx-auto px-4 py-20">
        <div className="flex items-start gap-3 bg-accent/10 border border-accent/30 rounded-xl p-4 mb-10">
          <AlertCircle className="size-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/85"><strong>B2B only:</strong> We supply to registered pharmacies, clinics, hospitals, NGOs and government health facilities only. We do not sell to the general public.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${filter === f ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((c) => (
            <div key={c.name} className="group bg-background border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 hover:border-accent transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-lg bg-gradient-hero grid place-items-center text-white">
                  <c.icon className="size-6" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-secondary px-2.5 py-1 rounded-full text-primary">{c.tag}</span>
              </div>
              <h3 className="font-display font-semibold text-primary text-lg">{c.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">Contact us for our full product catalog and current pricing.</p>
          <Button asChild variant="hero" size="xl"><Link to="/quote">Request a Quote</Link></Button>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Liyana Health Care Ltd" },
      { name: "description", content: "PPB-licensed pharmaceutical wholesaler in Thika, Kenya. Learn about our mission, vision and team." },
      { property: "og:title", content: "About — Liyana Health Care Ltd" },
      { property: "og:description", content: "Trusted pharmaceutical distributor serving Kenya's healthcare providers." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Chief Executive Officer", role: "Strategic leadership" },
  { name: "Sales & Business Development Manager", role: "Client growth & partnerships" },
  { name: "Logistics & Supply Chain Officer", role: "Distribution & fulfilment" },
  { name: "Pharmacist-in-Charge", role: "Compliance & QA" },
  { name: "Customer Relations Officer", role: "Client support" },
];

const values = ["Integrity", "Quality", "Reliability", "Customer Focus", "Compliance"];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A trusted name in Kenya's pharmaceutical supply" subtitle="We bridge manufacturers and healthcare providers with reliable, compliant and affordable distribution." />

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <p className="text-lg leading-relaxed text-foreground/90">
          Liyana Health Care Ltd is a trusted pharmaceutical wholesaler based in Thika, Kiambu County, Kenya, committed to delivering high-quality medicines and healthcare products to pharmacies, hospitals, clinics and health institutions across the country. We operate in full compliance with the Pharmacy and Poisons Board of Kenya.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-secondary border border-border rounded-xl p-5 shadow-card">
          <div className="size-12 rounded-lg bg-gradient-hero grid place-items-center text-white">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <div className="font-display font-semibold text-primary">PPB Licensed</div>
            <div className="text-sm text-muted-foreground">Regulated by the Pharmacy and Poisons Board of Kenya</div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
            <Target className="size-8 text-accent mb-4" />
            <h2 className="font-display font-bold text-2xl text-primary">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">To ensure reliable access to safe, quality, and affordable medicines for healthcare providers across Kenya.</p>
          </div>
          <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
            <Eye className="size-8 text-accent mb-4" />
            <h2 className="font-display font-bold text-2xl text-primary">Our Vision</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">To be the leading pharmaceutical wholesale distributor in East Africa.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="text-center mb-10">
          <Heart className="size-8 text-accent mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {values.map((v) => (
            <span key={v} className="px-5 py-2.5 rounded-full bg-secondary border border-border font-display font-semibold text-primary">{v}</span>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Leadership Team</h2>
            <p className="mt-3 text-muted-foreground">Experienced professionals leading every part of our operation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m) => (
              <div key={m.name} className="bg-background rounded-xl p-6 shadow-card border border-border text-center">
                <div className="mx-auto size-20 rounded-full bg-gradient-hero grid place-items-center text-white font-display font-bold text-2xl mb-4">
                  {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div className="font-display font-semibold text-primary">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

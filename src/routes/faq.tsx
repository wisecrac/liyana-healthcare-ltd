import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Liyana Health Care Ltd" },
      { name: "description", content: "Answers to common questions about ordering, delivery, payments and PPB compliance." },
      { property: "og:title", content: "FAQ — Liyana Health Care" },
      { property: "og:description", content: "Common questions about our pharmaceutical wholesale services." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How do I place an order?", a: "Submit a request via our Quote page or call/WhatsApp our team. Once your facility registration is verified, we'll confirm pricing and arrange delivery." },
  { q: "What is the minimum order quantity?", a: "Minimum order varies by product category. Contact us for category-specific minimums and bulk pricing." },
  { q: "Do you deliver outside Thika?", a: "Yes — we deliver across Kenya, including Nairobi, Central Kenya, and all 47 counties through our logistics network." },
  { q: "How long does delivery take?", a: "Within Thika and Nairobi, deliveries are usually within 24 hours. Upcountry deliveries typically take 1–3 business days." },
  { q: "Are your products PPB-approved?", a: "Yes. We are licensed and regulated by the Pharmacy and Poisons Board of Kenya, and only stock products approved for the Kenyan market." },
  { q: "Can individuals buy directly from you?", a: "No. We supply to registered pharmacies, clinics, hospitals, NGOs and government facilities only — not to the general public." },
  { q: "What payment methods do you accept?", a: "We accept M-Pesa, bank transfer and cheque. Verified facilities may qualify for flexible credit terms." },
];

function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Common questions, clear answers" subtitle="Everything you need to know before ordering with Liyana Health Care." />

      <section className="container mx-auto px-4 py-20 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-background border border-border rounded-xl px-5 shadow-card">
              <AccordionTrigger className="font-display font-semibold text-primary text-left hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Have another question?</p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>
    </>
  );
}

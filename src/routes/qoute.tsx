import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/qoute")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Liyana Health Care Ltd" },
      { name: "description", content: "Send a wholesale enquiry to Liyana Health Care. We respond to verified facilities within 24 hours." },
      { property: "og:title", content: "Request a Quote — Liyana Health Care" },
      { property: "og:description", content: "Wholesale pharmaceutical enquiries for registered facilities in Kenya." },
    ],
  }),
  component: QuotePage,
});

const schema = z.object({
  business: z.string().trim().min(2, "Please enter your facility name").max(120),
  contact: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  facility: z.string().min(1, "Please select facility type"),
  products: z.string().trim().min(3, "Please describe products of interest").max(2000),
  quantity: z.string().trim().max(100).optional().or(z.literal("")),
  delivery: z.string().max(50).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [facility, setFacility] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    (data as { facility: string }).facility = facility;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the errors in the form.");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Enquiry sent — we'll reply within 24 hours.");
  };

  if (submitted) {
    return (
      <>
        <Toaster />
        <PageHero eyebrow="Thank you" title="Your enquiry has been received" subtitle="Our team will be in touch within 24 hours." />
        <div className="container mx-auto px-4 py-16 max-w-md text-center">
          <CheckCircle2 className="size-16 text-accent mx-auto mb-4" />
          <p className="text-muted-foreground">If urgent, call us on <a href="tel:+254700000000" className="text-primary font-semibold">+254 700 000 000</a>.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster />
      <PageHero eyebrow="Request a Quote" title="Tell us what your facility needs" subtitle="Complete the form and our team will respond within 24 business hours." />

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <form onSubmit={onSubmit} className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-card space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Business / Facility Name" name="business" error={errors.business} required />
            <Field label="Contact Person" name="contact" error={errors.contact} required />
            <Field label="Phone Number" name="phone" type="tel" error={errors.phone} required />
            <Field label="Email Address" name="email" type="email" error={errors.email} required />
          </div>

          <div className="space-y-1.5">
            <Label>Type of Facility *</Label>
            <Select value={facility} onValueChange={setFacility}>
              <SelectTrigger><SelectValue placeholder="Select facility type" /></SelectTrigger>
              <SelectContent>
                {["Pharmacy", "Clinic", "Hospital", "NGO", "Government", "Other"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.facility && <p className="text-xs text-destructive">{errors.facility}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="products">Products of Interest *</Label>
            <Textarea id="products" name="products" rows={4} placeholder="List the products or categories you need" />
            {errors.products && <p className="text-xs text-destructive">{errors.products}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Estimated Quantity" name="quantity" placeholder="e.g. 200 packs" />
            <Field label="Preferred Delivery Date" name="delivery" type="date" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea id="message" name="message" rows={3} />
          </div>

          <Button type="submit" variant="hero" size="xl" className="w-full">Send Enquiry</Button>

          <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-5">
            All orders are subject to valid pharmacy or facility registration. We do not supply to the general public. Our team will contact you within 24 hours.
          </p>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error, required, placeholder }: { label: string; name: string; type?: string; error?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}{required && " *"}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

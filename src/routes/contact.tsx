import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Liyana Health Care Ltd" },
      { name: "description", content: "Visit our offices in Thika or reach us by phone, email or WhatsApp. Mon–Sat business hours." },
      { property: "og:title", content: "Contact Liyana Health Care" },
      { property: "og:description", content: "Get in touch with our pharmaceutical wholesale team in Thika, Kenya." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="We're here to help" subtitle="Talk to our team for orders, partnerships or any pharmaceutical wholesale enquiry." />

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <InfoCard icon={MapPin} title="Address" content="Along Thika-Nairobi Highway, Thika Town, Kiambu County, Kenya" />
            <InfoCard icon={Phone} title="Phone" content={<a href="tel:+254700000000" className="hover:text-primary">+254 700 000 000</a>} />
            <InfoCard icon={Mail} title="Email" content={<a href="mailto:info@liyanahealthcare.co.ke" className="hover:text-primary">info@liyanahealthcare.co.ke</a>} />
            <InfoCard icon={Clock} title="Business Hours" content={<>Mon–Fri: 8:00 AM – 6:00 PM<br/>Sat: 9:00 AM – 2:00 PM<br/>Sun: Closed</>} />
            <div className="flex gap-3 pt-2">
              <Social href="#" icon={Facebook} label="Facebook" />
              <Social href="#" icon={Linkedin} label="LinkedIn" />
              <Social href="https://wa.me/254700000000" icon={MessageCircle} label="WhatsApp" />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-[500px]">
            <iframe
              title="Liyana Health Care location — Thika, Kenya"
              src="https://www.google.com/maps?q=Thika+Town+Kenya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, content }: { icon: React.ComponentType<{ className?: string }>; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-4 bg-background border border-border rounded-xl p-5 shadow-card">
      <div className="size-12 rounded-lg bg-gradient-hero grid place-items-center text-white shrink-0">
        <Icon className="size-6" />
      </div>
      <div>
        <div className="font-display font-semibold text-primary">{title}</div>
        <div className="text-muted-foreground mt-1 leading-relaxed">{content}</div>
      </div>
    </div>
  );
}

function Social({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a href={href} aria-label={label} className="size-11 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-accent hover:text-accent-foreground transition-smooth">
      <Icon className="size-5" />
    </a>
  );
}

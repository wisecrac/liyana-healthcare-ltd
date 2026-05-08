import { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-20 md:py-28 text-center max-w-3xl">
        {eyebrow && <div className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-5 text-lg opacity-90 leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

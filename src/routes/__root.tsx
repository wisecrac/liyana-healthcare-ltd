import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Liyana Health Care Ltd — Pharmaceutical Wholesale in Kenya" },
      { name: "description", content: "PPB-licensed pharmaceutical wholesaler in Thika, Kenya. Reliable supply of medicines and medical products to pharmacies, hospitals and clinics nationwide." },
      { name: "keywords", content: "pharmaceutical wholesale Kenya, medicine supplier Thika, PPB licensed distributor, hospital supplies Kenya" },
      { name: "author", content: "Liyana Health Care Ltd" },
      { property: "og:title", content: "Liyana Health Care Ltd — Pharmaceutical Wholesale in Kenya" },
      { property: "og:description", content: "PPB-licensed pharmaceutical wholesaler delivering quality medicines and healthcare products across Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</a>
      </div>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

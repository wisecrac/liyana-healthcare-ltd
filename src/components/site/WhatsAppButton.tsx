import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20Liyana%20Health%20Care%2C%20I%27d%20like%20to%20enquire%20about..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[oklch(0.74_0.18_148)] text-white grid place-items-center shadow-elegant hover:scale-110 transition-smooth"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.74_0.18_148)] opacity-60 animate-ping" />
    </a>
  );
}

import { useState } from "react";
import { Phone, MessageCircle, Plus } from "lucide-react";
import { SITE } from "../data/site";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-testid="floating-actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      <div
        className={`flex flex-col gap-3 transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp"
          className="flex items-center gap-3 bg-[#4A5D23] text-[#FDFBF7] pl-5 pr-6 py-3 shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          <MessageCircle size={16} strokeWidth={1.5} />
          <span className="label-kicker text-[11px]">WhatsApp</span>
        </a>
        <a
          href={SITE.phoneHref}
          data-testid="floating-call"
          className="flex items-center gap-3 bg-[#8A2E2E] text-[#FDFBF7] pl-5 pr-6 py-3 shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          <Phone size={16} strokeWidth={1.5} />
          <span className="label-kicker text-[11px]">Chiama</span>
        </a>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="floating-toggle"
        aria-label="Azioni rapide"
        className={`w-14 h-14 rounded-full bg-[#2C2A29] text-[#FDFBF7] flex items-center justify-center shadow-xl hover:bg-[#8A2E2E] transition-all duration-500 ${
          open ? "rotate-45" : ""
        }`}
      >
        <Plus size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}

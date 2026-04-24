import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { SITE } from "../data/site";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "Chi Siamo" },
  { id: "menu", label: "Menu" },
  { id: "reservation", label: "Prenota" },
  { id: "reviews", label: "Recensioni" },
  { id: "contact", label: "Contatti" },
];

export default function Footer() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#121110] text-[#FDFBF7] pt-20 pb-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-serif-display text-4xl md:text-5xl tracking-tight">La Cucina</div>
            <div className="label-kicker text-[10px] mt-2 text-[#E6B65A]">
              Pizza & Pasta · Malvaglia
            </div>
            <p className="mt-6 text-[#FDFBF7]/70 text-base leading-relaxed max-w-md">
              Autentica cucina italiana, tradizione del Nord e del Sud, nel cuore della Valle
              di Blenio. Vi aspettiamo.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                data-testid="footer-instagram"
                aria-label="Instagram"
                className="w-11 h-11 border border-[#FDFBF7]/20 flex items-center justify-center hover:border-[#E6B65A] hover:text-[#E6B65A] transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                data-testid="footer-facebook"
                aria-label="Facebook"
                className="w-11 h-11 border border-[#FDFBF7]/20 flex items-center justify-center hover:border-[#E6B65A] hover:text-[#E6B65A] transition-colors"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="label-kicker text-[10px] text-[#E6B65A] mb-6">Navigazione</div>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`footer-link-${l.id}`}
                    onClick={() => go(l.id)}
                    className="text-[#FDFBF7]/80 hover:text-[#E6B65A] transition-colors text-[15px]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="label-kicker text-[10px] text-[#E6B65A] mb-6">Contatti</div>
            <a
              href={SITE.phoneHref}
              data-testid="footer-phone"
              className="flex items-center gap-3 text-[#FDFBF7]/80 hover:text-[#E6B65A] transition-colors"
            >
              <Phone size={15} strokeWidth={1.5} />
              {SITE.phone}
            </a>
            <div className="flex items-start gap-3 mt-4 text-[#FDFBF7]/80">
              <MapPin size={15} strokeWidth={1.5} className="mt-1" />
              <span>{SITE.address}</span>
            </div>

            <div className="label-kicker text-[10px] text-[#E6B65A] mt-8 mb-4">Orari (riassunto)</div>
            <div className="text-[#FDFBF7]/80 text-[14px] space-y-1">
              <div className="flex justify-between"><span>Lun – Sab</span><span>07:00 – 24:00*</span></div>
              <div className="flex justify-between"><span>Domenica</span><span>07:00 – 23:30</span></div>
              <div className="flex justify-between"><span>Martedì</span><span className="text-[#E6B65A]">Chiuso</span></div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#FDFBF7]/50 text-xs">
          <div>© {new Date().getFullYear()} Ristorante La Cucina — Pizza & Pasta. Tutti i diritti riservati.</div>
          <div className="label-kicker text-[10px]">
            Malvaglia · Svizzera
          </div>
        </div>
      </div>
    </footer>
  );
}

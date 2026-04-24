import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "../data/site";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "Chi Siamo" },
  { id: "menu", label: "Menu" },
  { id: "reservation", label: "Prenota" },
  { id: "reviews", label: "Recensioni" },
  { id: "contact", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#E8E1D5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          data-testid="navbar-logo"
          onClick={() => go("home")}
          className="text-left"
        >
          <div
            className={`font-serif-display text-2xl leading-none tracking-tight ${
              scrolled ? "text-[#2C2A29]" : "text-[#FDFBF7]"
            }`}
          >
            La Cucina
          </div>
          <div
            className={`label-kicker text-[10px] mt-1 ${
              scrolled ? "text-[#8A2E2E]" : "text-[#FDFBF7]/80"
            }`}
          >
            Pizza & Pasta · Malvaglia
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className={`label-kicker text-[11px] transition-colors duration-300 hover:text-[#8A2E2E] ${
                scrolled ? "text-[#2C2A29]" : "text-[#FDFBF7]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={SITE.phoneHref}
            data-testid="navbar-call-button"
            className={`inline-flex items-center gap-2 label-kicker text-[11px] transition-colors ${
              scrolled ? "text-[#2C2A29] hover:text-[#8A2E2E]" : "text-[#FDFBF7] hover:text-[#FDFBF7]/70"
            }`}
          >
            <Phone size={14} strokeWidth={1.5} />
            {SITE.phone}
          </a>
          <button
            onClick={() => go("reservation")}
            data-testid="navbar-reserve-button"
            className="btn-primary !py-3 !px-6 !text-[11px]"
          >
            Prenota
          </button>
        </div>

        <button
          className="lg:hidden"
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? (
            <X size={26} className={scrolled ? "text-[#2C2A29]" : "text-[#FDFBF7]"} />
          ) : (
            <Menu size={26} className={scrolled ? "text-[#2C2A29]" : "text-[#FDFBF7]"} />
          )}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-panel"
          className="lg:hidden bg-[#FDFBF7] border-t border-[#E8E1D5] px-6 py-8"
        >
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-mobile-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left font-serif-display text-2xl text-[#2C2A29] hover:text-[#8A2E2E] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={SITE.phoneHref}
              data-testid="navbar-mobile-call"
              className="inline-flex items-center gap-2 text-[#8A2E2E] mt-2 label-kicker text-[11px]"
            >
              <Phone size={14} strokeWidth={1.5} />
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

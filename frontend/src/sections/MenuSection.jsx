import { useState } from "react";
import { MENU, SITE } from "../data/site";

const TABS = [
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "specialita", label: "Specialità" },
];

export default function MenuSection() {
  const [active, setActive] = useState("pizza");
  const items = MENU[active];

  return (
    <section
      id="menu"
      data-testid="section-menu"
      className="relative bg-[#F2EDE4] py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="inline-block w-10 h-px bg-[#8A2E2E]" />
              <span className="label-kicker text-[#8A2E2E] text-[11px]">Il Menu</span>
            </div>
            <h2
              data-testid="menu-title"
              className="reveal reveal-delay-1 font-serif-display text-[#2C2A29] text-4xl md:text-5xl lg:text-[68px] leading-[1.02] tracking-tight"
            >
              Piatti che raccontano
              <br />
              <em className="italic font-light">l'Italia autentica.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-delay-2 text-[#5C5856] text-base md:text-lg leading-relaxed max-w-md">
              Una selezione curata delle nostre specialità. I prezzi sono espressi in CHF e i piatti
              possono subire lievi variazioni secondo la stagionalità degli ingredienti.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="reveal flex items-center gap-2 md:gap-4 mb-14 overflow-x-auto no-scrollbar border-b border-[#E8E1D5]">
          {TABS.map((t) => (
            <button
              key={t.id}
              data-testid={`menu-tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`relative pb-4 px-1 label-kicker text-[12px] transition-colors whitespace-nowrap ${
                active === t.id ? "text-[#8A2E2E]" : "text-[#5C5856] hover:text-[#2C2A29]"
              }`}
            >
              {t.label}
              <span
                className={`absolute left-0 right-0 -bottom-px h-[2px] transition-all duration-500 ${
                  active === t.id ? "bg-[#8A2E2E] opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Items */}
        <div
          key={active}
          data-testid={`menu-list-${active}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
        >
          {items.map((item, idx) => (
            <article
              key={item.name}
              data-testid={`menu-item-${active}-${idx}`}
              className="pop-in group"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-baseline gap-4">
                <h3 className="font-serif-display text-2xl md:text-[28px] text-[#2C2A29] tracking-tight group-hover:text-[#8A2E2E] transition-colors duration-300">
                  {item.name}
                </h3>
                <span
                  className="flex-1 border-b border-dotted border-[#C9C1B3] translate-y-[-4px]"
                  aria-hidden="true"
                />
                <span className="font-serif-display text-xl md:text-2xl text-[#8A2E2E]">
                  CHF {item.price}
                </span>
              </div>
              <p className="mt-2 text-[#5C5856] text-[15px] leading-relaxed max-w-lg">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="reveal mt-20 pt-10 border-t border-[#E8E1D5] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[#5C5856] text-sm max-w-lg">
            Hai intolleranze o allergie? Chiedi al nostro staff — prepariamo con cura opzioni
            senza glutine e vegetariane.
          </p>
          <a
            href={SITE.phoneHref}
            data-testid="menu-call-cta"
            className="label-kicker text-[11px] text-[#8A2E2E] border-b border-[#8A2E2E] pb-1 self-start md:self-auto"
          >
            Chiedi al ristorante →
          </a>
        </div>
      </div>
    </section>
  );
}

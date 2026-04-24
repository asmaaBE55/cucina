import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { SITE } from "../data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="section-contact"
      className="relative bg-[#FDFBF7] py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-6">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="inline-block w-10 h-px bg-[#8A2E2E]" />
              <span className="label-kicker text-[#8A2E2E] text-[11px]">Contatti & Orari</span>
            </div>
            <h2
              data-testid="contact-title"
              className="reveal reveal-delay-1 font-serif-display text-[#2C2A29] text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight"
            >
              Vieni a <em className="italic font-light text-[#4A5D23]">trovarci.</em>
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-[#5C5856] text-base md:text-lg leading-relaxed max-w-md">
              Nel cuore di Malvaglia, a pochi passi dalla chiesa. Ti aspettiamo per una serata
              da ricordare.
            </p>
          </div>

          <div className="lg:col-span-6 flex lg:justify-end items-end">
            <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                data-testid="contact-call-button"
                className="btn-primary"
              >
                <Phone size={14} strokeWidth={1.5} />
                Chiama ora
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-directions-button"
                className="btn-primary !bg-transparent !text-[#8A2E2E] border border-[#8A2E2E] hover:!bg-[#8A2E2E] hover:!text-[#FDFBF7]"
              >
                Indicazioni stradali
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-10">
            <div className="reveal">
              <div className="flex items-start gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-[#8A2E2E] mt-1" />
                <div>
                  <div className="label-kicker text-[10px] text-[#5C5856]">Indirizzo</div>
                  <div className="font-serif-display text-xl md:text-2xl text-[#2C2A29] mt-1">
                    {SITE.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="flex items-start gap-4">
                <Phone size={20} strokeWidth={1.5} className="text-[#8A2E2E] mt-1" />
                <div>
                  <div className="label-kicker text-[10px] text-[#5C5856]">Telefono</div>
                  <a
                    href={SITE.phoneHref}
                    data-testid="contact-phone-link"
                    className="font-serif-display text-xl md:text-2xl text-[#2C2A29] hover:text-[#8A2E2E] transition-colors mt-1 block"
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`https://${SITE.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-website-link"
                    className="mt-2 inline-flex items-center gap-2 label-kicker text-[11px] text-[#4A5D23] hover:text-[#8A2E2E] transition-colors"
                  >
                    <ExternalLink size={12} strokeWidth={1.5} />
                    {SITE.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="flex items-start gap-4">
                <Clock size={20} strokeWidth={1.5} className="text-[#8A2E2E] mt-1" />
                <div className="w-full">
                  <div className="label-kicker text-[10px] text-[#5C5856]">Orari di apertura</div>
                  <ul
                    data-testid="contact-hours-list"
                    className="mt-3 divide-y divide-[#E8E1D5] text-[#2C2A29]"
                  >
                    {SITE.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between py-2 text-[15px]"
                      >
                        <span>{h.day}</span>
                        <span
                          className={`font-medium ${h.closed ? "text-[#8A2E2E]" : "text-[#2C2A29]"}`}
                        >
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="reveal aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden border border-[#E8E1D5]">
              <iframe
                data-testid="contact-map"
                title="Mappa Ristorante La Cucina"
                src="https://www.google.com/maps?q=Malvaglia,%20Svizzera&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.25) contrast(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

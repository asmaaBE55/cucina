import { ArrowDown, Star } from "lucide-react";
import { SITE } from "../data/site";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      data-testid="section-hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#121110]"
    >
      {/* BG image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={SITE.images.hero}
          alt="Pizza artigianale La Cucina"
          className="w-full h-full object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 pt-36">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-px bg-[#FDFBF7]/70" />
            <span className="label-kicker text-[#FDFBF7]/90 text-[11px]">
              Dal cuore della Valle di Blenio
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="reveal reveal-delay-1 font-serif-display text-[#FDFBF7] text-[52px] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[110px] tracking-tight max-w-5xl"
          >
            Autentica <em className="italic font-light opacity-90">Cucina Italiana</em>
            <br className="hidden md:block" /> nel cuore di Malvaglia.
          </h1>

          <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center gap-6">
            <button
              data-testid="hero-cta-reserve"
              onClick={() => scrollTo("reservation")}
              className="btn-primary"
            >
              Prenota un tavolo
            </button>

            <button
              data-testid="hero-cta-menu"
              onClick={() => scrollTo("menu")}
              className="btn-ghost"
            >
              Scopri il menu
            </button>
          </div>

          <div className="reveal reveal-delay-3 mt-14 flex flex-wrap items-center gap-8 text-[#FDFBF7]/85">
            <div className="flex items-center gap-2" data-testid="hero-rating">
              <div className="flex items-center">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={16} className="fill-[#E6B65A] text-[#E6B65A]" strokeWidth={1} />
                ))}
              </div>
              <span className="label-kicker text-[11px]">{SITE.rating} · {SITE.reviewsCount} recensioni</span>
            </div>
            <span className="hidden md:inline-block w-px h-5 bg-[#FDFBF7]/30" />
            <span className="label-kicker text-[11px]">Pizza · Pasta · Specialità</span>
            <span className="hidden md:inline-block w-px h-5 bg-[#FDFBF7]/30" />
            <span className="label-kicker text-[11px]">Tradizione Nord & Sud Italia</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        data-testid="hero-scroll-cue"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 right-6 md:right-12 z-10 text-[#FDFBF7]/80 flex flex-col items-center gap-3 hover:text-[#FDFBF7] transition-colors"
        aria-label="Scorri verso il basso"
      >
        <span className="label-kicker text-[10px] rotate-90 origin-bottom-right mb-8">Scorri</span>
        <ArrowDown size={18} strokeWidth={1} />
      </button>
    </section>
  );
}

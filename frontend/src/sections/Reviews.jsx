import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS, SITE } from "../data/site";

export default function Reviews() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;

  const go = (next) => {
    setIdx((i) => (i + next + total) % total);
  };

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const current = TESTIMONIALS[idx];

  return (
    <section
      id="reviews"
      data-testid="section-reviews"
      className="relative bg-[#121110] text-[#FDFBF7] py-24 md:py-32 overflow-hidden"
    >
      {/* backdrop image */}
      <div className="absolute inset-0 opacity-25">
        <img
          src={SITE.images.interior}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/80 via-[#121110]/60 to-[#121110]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <span className="inline-block w-10 h-px bg-[#E6B65A]" />
          <span className="label-kicker text-[#E6B65A] text-[11px]">Recensioni</span>
          <span className="inline-block w-10 h-px bg-[#E6B65A]" />
        </div>

        <div className="reveal reveal-delay-1 flex items-center justify-center gap-3 mb-6" data-testid="reviews-global-rating">
          <div className="flex">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} size={22} className="fill-[#E6B65A] text-[#E6B65A]" strokeWidth={1} />
            ))}
          </div>
          <span className="font-serif-display text-4xl md:text-5xl">{SITE.rating}</span>
          <span className="label-kicker text-[11px] text-[#FDFBF7]/70">
            · {SITE.reviewsCount} recensioni
          </span>
        </div>

        <h2
          data-testid="reviews-title"
          className="reveal reveal-delay-2 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
        >
          Le parole dei nostri <em className="italic font-light">ospiti.</em>
        </h2>

        <div
          key={idx}
          data-testid={`review-slide-${idx}`}
          className="pop-in mt-14 max-w-3xl mx-auto"
        >
          <Quote size={40} className="mx-auto text-[#E6B65A] opacity-70 mb-6" strokeWidth={1} />
          <blockquote className="font-serif-display text-2xl md:text-3xl lg:text-[34px] leading-[1.35] italic text-[#FDFBF7]/95">
            "{current.text}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#E6B65A] text-[#E6B65A]" strokeWidth={1} />
            ))}
          </div>
          <div className="mt-4 label-kicker text-[11px] text-[#FDFBF7]/70">
            {current.name} · {current.city}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            data-testid="reviews-prev"
            onClick={() => go(-1)}
            aria-label="Precedente"
            className="w-11 h-11 flex items-center justify-center border border-[#FDFBF7]/30 hover:border-[#E6B65A] hover:text-[#E6B65A] transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={1.2} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                data-testid={`reviews-dot-${i}`}
                onClick={() => setIdx(i)}
                aria-label={`Vai alla recensione ${i + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  i === idx ? "w-10 bg-[#E6B65A]" : "w-5 bg-[#FDFBF7]/30"
                }`}
              />
            ))}
          </div>

          <button
            data-testid="reviews-next"
            onClick={() => go(1)}
            aria-label="Successiva"
            className="w-11 h-11 flex items-center justify-center border border-[#FDFBF7]/30 hover:border-[#E6B65A] hover:text-[#E6B65A] transition-colors"
          >
            <ChevronRight size={18} strokeWidth={1.2} />
          </button>
        </div>
      </div>
    </section>
  );
}

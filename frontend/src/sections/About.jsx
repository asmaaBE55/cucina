import { SITE } from "../data/site";

export default function About() {
  return (
    <section
      id="about"
      data-testid="section-about"
      className="relative bg-[#FDFBF7] py-24 md:py-32 overflow-hidden"
    >
      {/* Background marquee */}
      <div className="pointer-events-none absolute inset-0 flex items-center opacity-[0.09]">
        <div className="marquee-track flex whitespace-nowrap">
          <span className="outline-text text-[180px] md:text-[260px] pr-16">
            LA CUCINA · TRADIZIONE · ITALIANA · 
          </span>
          <span className="outline-text text-[180px] md:text-[260px] pr-16">
            LA CUCINA · TRADIZIONE · ITALIANA · 
          </span>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="reveal img-hover-zoom aspect-[4/5] w-full max-w-[520px]">
            <img
              src={SITE.images.about}
              alt="Ingredienti freschi della tradizione italiana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="inline-block w-10 h-px bg-[#8A2E2E]" />
            <span className="label-kicker text-[#8A2E2E] text-[11px]">Chi Siamo</span>
          </div>

          <h2
            data-testid="about-title"
            className="reveal reveal-delay-1 font-serif-display text-[#2C2A29] text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight"
          >
            Una famiglia,<br />
            <em className="italic font-light text-[#4A5D23]">due tradizioni,</em><br />
            una passione.
          </h2>

          <div className="reveal reveal-delay-2 mt-8 space-y-6 text-[#5C5856] text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Da oltre vent'anni, al <span className="text-[#2C2A29] font-medium">Ristorante La Cucina</span> uniamo
              la sapienza della cucina del Nord Italia con il calore dei sapori del Sud. Ogni piatto è il
              racconto di una terra, cotto lentamente come si faceva un tempo.
            </p>
            <p>
              Scegliamo ingredienti freschi di stagione, farine selezionate e una lievitazione lunga 48 ore
              per la nostra pizza. Perché credere nella qualità non è uno slogan — è una promessa che
              rinnoviamo ogni giorno.
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-[#E8E1D5] pt-10">
            <div>
              <div className="font-serif-display text-5xl text-[#8A2E2E]">20+</div>
              <div className="label-kicker text-[10px] mt-2 text-[#5C5856]">Anni di storia</div>
            </div>
            <div>
              <div className="font-serif-display text-5xl text-[#8A2E2E]">48h</div>
              <div className="label-kicker text-[10px] mt-2 text-[#5C5856]">Lievitazione pizza</div>
            </div>
            <div>
              <div className="font-serif-display text-5xl text-[#8A2E2E]">100%</div>
              <div className="label-kicker text-[10px] mt-2 text-[#5C5856]">Pasta fatta in casa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

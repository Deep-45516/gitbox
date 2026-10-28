import { Leaf, Sparkles } from "lucide-react";

export default function About({ t }) {
  return (
    <section id="about" className="section-anchor relative bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-20 px-5 sm:px-8 md:grid-cols-[.9fr_1.1fr] md:gap-20 lg:px-12">
        <div className="mx-auto w-full max-w-[340px]">
          <div className="founder-arch">
            <img src="/images/founder.jpg" alt={t.founderName} />
          </div>
          <div className="founder-tag">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              {t.founderLabel}
            </span>
            <span className="font-display text-xl text-terra-d">{t.founderName}</span>
          </div>
        </div>

        <div>
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" />
            {t.aboutEyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-terra-d sm:text-5xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#6d5648] sm:text-lg">
            {t.aboutText}
          </p>

          <blockquote className="mt-8 border-l-2 border-dotted border-terra pl-5 font-display text-xl italic leading-8 text-terra sm:text-2xl">
            {t.aboutQuote}
          </blockquote>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="chip">
              <Leaf size={16} /> {t.value1}
            </span>
            <span className="chip">
              <Sparkles size={16} /> {t.value2}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

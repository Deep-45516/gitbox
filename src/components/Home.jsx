import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

export default function Home({ t }) {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.02fr_.98fr] md:py-20 lg:px-12">
        <div className="hero-copy relative z-10">
          <div className="eyebrow"><span className="eyebrow-line" />{t.heroEyebrow}</div>
          <h1 className="mt-7 max-w-2xl whitespace-pre-line font-display text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#3b241d] sm:text-6xl lg:text-[76px]">
            {t.heroTitle.split("\n").map((line, i) => <span key={line} className="block">{i === 1 ? <span className="italic text-[#8a3b2e]">{line}</span> : line}</span>)}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#756357] sm:text-lg">{t.heroText}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="button-primary">{t.heroCta}<ArrowUpRight size={17} /></a>
            <a href="#about" className="button-text">{t.discover}<ArrowDownRight size={17} /></a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9b8776]">
            <span className="h-px w-9 bg-[#b88a48]" /> Rajasthan-inspired hospitality
          </div>
        </div>

        {/* Reserved on purpose: add the custom hero animation here when its concept is ready. */}
        <div className="hero-animation-slot" aria-label={t.animationLabel}>
          <div className="slot-ornament slot-ornament-top" aria-hidden="true">✳</div>
          <div className="slot-inner">
            <span className="slot-icon"><Sparkles size={22} strokeWidth={1.4} /></span>
            <span className="slot-title">{t.animationLabel}</span>
            <span className="slot-subtitle">{t.animationHint}</span>
            <span className="slot-dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="slot-ornament slot-ornament-bottom" aria-hidden="true">✳</div>
          <div className="box-caption"><span className="box-caption-dot" />{t.boxLabel}</div>
        </div>

        <a href="#about" className="scroll-cue" aria-label={t.scroll}><span className="scroll-cue-line" />{t.scroll}</a>
      </div>
    </section>
  );
}

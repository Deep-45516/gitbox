<<<<<<< HEAD
import { ArrowUpRight, Hand } from "lucide-react";
import GiftBox from "./GiftBox.jsx";

export default function Home({ t }) {
  const [line1, line2] = t.heroTitle.split("\n");

  return (
    <section id="home" className="hero section-anchor">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[1fr_1fr] md:gap-10 md:pb-28 md:pt-16 lg:px-12">
        <div className="relative z-10 text-center md:text-left">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            {t.heroEyebrow}
          </p>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[68px]">
            <span className="block">{line1}</span>
            <span className="block italic text-[#f3d9a0]">{line2}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-8 text-[#f6dccb] md:mx-0 md:text-lg">
            {t.heroText}
          </p>

          <a href="#contact" className="btn-cream mt-8">
            {t.heroCta}
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="stage-wrap">
          <div className="stage">
            <svg className="arch" viewBox="0 0 300 380" aria-hidden="true">
              <path
                d="M14 380V170Q14 146 36 136Q40 84 82 66Q96 24 150 8Q204 24 218 66Q260 84 264 136Q286 146 286 170V380Z"
                fill="#f7ebd6"
                stroke="#fbf3e4"
                strokeWidth="6"
              />
              <path
                d="M30 380V176Q30 156 48 148Q54 100 92 84Q108 44 150 28Q192 44 208 84Q246 100 252 148Q270 156 270 176V380Z"
                fill="none"
                stroke="#b5472f"
                strokeWidth="1.5"
                strokeDasharray="1 6"
                strokeLinecap="round"
              />
            </svg>

            <div className="man-wrap">
              <img
                src="/images/man.png"
                width="796"
                height="813"
                alt="A Rajasthani host presenting an Atithi gift box"
                className="man-img"
                draggable="false"
              />
              <GiftBox label={t.boxLabel} />
            </div>
          </div>

          <p className="box-hint">
            <Hand size={15} />
            {t.boxHint}
          </p>
        </div>
=======
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
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0
      </div>
    </section>
  );
}

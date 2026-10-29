<<<<<<< HEAD
import ReadMore from "./ReadMore.jsx";

const Paras = ({ items }) =>
  items.map((text) => (
    <p key={text} className="copy">
      {text}
    </p>
  ));

export default function About({ t }) {
  const { about, founder } = t;

  return (
    <>
      {/* ---------- About ATITHI ---------- */}
      <section id="about" className="section-anchor bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" />
            {about.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-terra-d sm:text-5xl">
            {about.title}
          </h2>

          <ReadMore t={t} more={<Paras items={about.more} />}>
            <Paras items={about.intro} />
          </ReadMore>

          <p className="mt-9 border-l-2 border-dotted border-terra pl-5 font-display text-xl italic leading-8 text-terra sm:text-2xl">
            {about.tagline}
          </p>

          <div className="devo-band">
            <span className="devo-phrase" lang="mr">
              {about.devoPhrase}
            </span>
            <p>{about.devoText}</p>
          </div>
        </div>
      </section>

      {/* ---------- Words from the Founder ---------- */}
      <section id="founder" className="section-anchor founder-section py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-20 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:gap-16 lg:px-12">
          <div className="mx-auto w-full max-w-[340px] md:sticky md:top-28">
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
              {founder.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-terra-d sm:text-5xl">
              {founder.title}
            </h2>

            <p className="copy mt-7 font-display text-lg italic text-terra-d">{founder.greeting}</p>

            <ReadMore
              t={t}
              more={
                <>
                  <Paras items={founder.more} />

                  <div className="mt-9">
                    <p className="text-sm text-[#8b7060]">{founder.regards}</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-terra-d">{t.founderName}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{founder.role}</p>
                  </div>

                  <p className="mt-9 border-l-2 border-dotted border-terra pl-5 font-display text-xl italic leading-8 text-terra sm:text-2xl">
                    “{founder.quote}”
                  </p>
                </>
              }
            >
              <Paras items={founder.intro} />
            </ReadMore>
          </div>
        </div>
      </section>
    </>
=======
import { HeartHandshake, Leaf, Sparkles } from "lucide-react";

export default function About({ t }) {
  return (
    <section id="about" className="section-anchor relative overflow-hidden bg-[#efe5d5] py-24 sm:py-32">
      <div className="about-watermark" aria-hidden="true">अतिथि</div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
          <div className="about-photo-wrap">
            {/* Replace /images/founder.jpg with the founder's portrait when available. */}
            <div className="about-photo">
              <div className="photo-placeholder">
                <span className="photo-sun" />
                <span className="photo-placeholder-label">{t.founderPlaceholder}</span>
                <span className="photo-placeholder-hint">/public/images/founder.jpg</span>
              </div>
              <div className="photo-frame-corner" aria-hidden="true" />
            </div>
            <div className="founder-note">
              <span className="founder-note-icon"><HeartHandshake size={21} /></span>
              <div><span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#a27844]">{t.founderLabel}</span><span className="mt-1 block font-display text-lg italic text-[#50382d]">{t.founderNote}</span></div>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{t.aboutEyebrow}</div>
            <h2 className="section-title mt-6 max-w-xl">{t.aboutTitle}</h2>
            <p className="mt-7 text-base leading-8 text-[#756357]">{t.aboutText1}</p>
            <p className="mt-4 text-base leading-8 text-[#756357]">{t.aboutText2}</p>
            <div className="my-8 h-px w-full bg-[#8a3b2e]/15" />
            <blockquote className="flex gap-4 font-display text-xl italic leading-8 text-[#7d3429] sm:text-2xl">
              <span className="mt-1 text-4xl leading-none text-[#b88a48]">“</span>
              {t.aboutQuote}
            </blockquote>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="about-value"><span><Leaf size={19} /></span><div><h3>Rooted in tradition</h3><p>A familiar Indian after-meal ritual, thoughtfully reimagined.</p></div></div>
              <div className="about-value"><span><Sparkles size={19} /></span><div><h3>Made personal</h3><p>Gift boxes that carry each restaurant's own identity.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0
  );
}

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
  );
}

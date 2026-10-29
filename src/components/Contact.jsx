import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

// Replace with the real business contact details before launch.
const OWNER_WHATSAPP = "918847764268";
const OWNER_EMAIL = "prajyotwalewale@gmail.com";

export default function Contact({ t }) {
  const msg = encodeURIComponent(
    "Hello Atithi! I'd like to know more about personalised gift boxes for my restaurant."
  );

  return (
    <section id="contact" className="section-anchor contact relative">
      <div className="merlon-down" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              {t.contactEyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-cream sm:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#f0d6c6] sm:text-lg">
              {t.contactText}
            </p>
            <a
              className="btn-cream mt-8"
              href={`https://wa.me/${OWNER_WHATSAPP}?text=${msg}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              {t.whatsapp}
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-card">
            <a href={`mailto:${OWNER_EMAIL}`} className="contact-row">
              <span className="contact-icon"><Mail size={19} /></span>
              <span>
                <small>{t.emailLabel}</small>
                {OWNER_EMAIL}
              </span>
            </a>
            <div className="contact-row">
              <span className="contact-icon"><MapPin size={19} /></span>
              <span>
                <small>{t.locationLabel}</small>
                {t.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

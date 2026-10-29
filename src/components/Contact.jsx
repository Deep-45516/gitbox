import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

<<<<<<< HEAD
// Replace with the real business contact details before launch.
=======
// Update these with the owner's real contact details before publishing.
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0
const OWNER_WHATSAPP = "919999999999";
const OWNER_EMAIL = "hello@atithi.in";

export default function Contact({ t }) {
<<<<<<< HEAD
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
=======
  const whatsappMessage = encodeURIComponent("Hello Atithi! I'd like to know more about personalised gift boxes for my restaurant.");
  return (
    <section id="contact" className="section-anchor relative overflow-hidden bg-[#762f26] py-24 text-[#fff8ed] sm:py-32">
      <div className="contact-pattern" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.contactEyebrow}</div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#ead6c6] sm:text-lg">{t.contactText}</p>
            <a className="button-cream mt-9" href={`https://wa.me/${OWNER_WHATSAPP}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />{t.whatsapp}<ArrowUpRight size={17} />
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0
            </a>
          </div>

          <div className="contact-card">
<<<<<<< HEAD
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
=======
            <div className="contact-detail">
              <span className="contact-icon"><Mail size={19} /></span>
              <div><span className="contact-detail-label">{t.emailLabel}</span><a href={`mailto:${OWNER_EMAIL}`} className="contact-detail-value">{OWNER_EMAIL}</a></div>
              <ArrowUpRight className="ml-auto text-[#b88a48]" size={18} />
            </div>
            <div className="contact-divider" />
            <div className="contact-detail">
              <span className="contact-icon"><MapPin size={19} /></span>
              <div><span className="contact-detail-label">{t.locationLabel}</span><span className="contact-detail-value">Rajasthan, India</span></div>
            </div>
            <div className="mt-7 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 text-[#ead6c6]">
              <span className="font-semibold text-[#f0d6a4]">Before launch:</span> update the WhatsApp number and email in <code className="rounded bg-black/15 px-1.5 py-0.5 text-xs">Contact.jsx</code>.
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

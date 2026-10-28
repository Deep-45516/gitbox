import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

// Update these with the owner's real contact details before publishing.
const OWNER_WHATSAPP = "919999999999";
const OWNER_EMAIL = "hello@atithi.in";

export default function Contact({ t }) {
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
            </a>
          </div>

          <div className="contact-card">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

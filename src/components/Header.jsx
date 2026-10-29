import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: t.navHome, href: "#home" },
    { label: t.navAbout, href: "#about" },
    { label: t.navContact, href: "#contact" }
  ];

  const LanguagePicker = () => (
    <label className="language-select">
      <Languages size={15} strokeWidth={1.8} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        aria-label="Choose language"
      >
        <option value="en">EN</option>
        <option value="hi">हिंदी</option>
      </select>
    </label>
  );

  return (
    <header className="site-header">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Atithi home">
          <span className="brand-mark">अ</span>
          <span className="font-display text-[26px] font-bold tracking-[-0.05em] text-terra-d">
            Atithi<span className="text-gold">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <LanguagePicker />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguagePicker />
          <button
            className="p-2 text-terra-d"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu md:hidden" aria-label="Mobile navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <div className="merlon-down" aria-hidden="true" />
    </header>
  );
}

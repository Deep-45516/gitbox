import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

<<<<<<< HEAD
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
=======
export default function Header({
language,
setLanguage,
t,
}) {
const [menuOpen, setMenuOpen] = useState(false);

const links = [
{ label: t.navHome, href: "#home" },
{ label: t.navAbout, href: "#about" },
{ label: t.navContact, href: "#contact" },
];

function navigate() {
setMenuOpen(false);
}

return ( <header className="sticky top-0 z-50 border-b border-[#6e3025]/10 bg-[#f8f4ec]/90 backdrop-blur-xl"> <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

```
    <a
      href="#home"
      className="group flex items-center gap-3"
      aria-label="Atithi home"
    >
      <span className="brand-mark">अ</span>

      <span className="leading-none">
        <span className="block font-display text-[27px] font-bold tracking-[-0.06em] text-[#702d25]">
          Atithi<span className="text-[#b88a48]">.</span>
        </span>

        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#806b5b]">
          A gesture of warmth
        </span>
      </span>
    </a>

    <nav
      className="hidden items-center gap-9 md:flex"
      aria-label="Main navigation"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="nav-link"
        >
          {link.label}
        </a>
      ))}

      <label className="language-select">
        <Languages size={15} />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Choose language"
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
        </select>
      </label>
    </nav>

    <div className="flex items-center gap-3 md:hidden">
      <label className="language-select">
        <Languages size={15} />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Choose language"
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
        </select>
      </label>

      <button
        className="rounded-full p-2 text-[#702d25]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>

  {menuOpen && (
    <nav className="mobile-menu md:hidden">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={navigate}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )}
</header>
);
}
>>>>>>> e06872f8fcccdda8db89bc65cdf6e9bd30881af0

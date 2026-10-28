export default function Footer({ t }) {
return ( <footer className="bg-[#f8f4ec]"> <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

```
    <a
      href="#home"
      className="flex items-center gap-2 font-display text-2xl font-bold tracking-[-0.05em] text-[#702d25]"
    >
      Atithi<span className="text-[#b88a48]">.</span>
    </a>

    <p className="text-sm text-[#8b7768]">
      {t.footerLine}
    </p>

    <div className="flex items-center gap-5 text-xs text-[#8b7768]">
      <a href="#home" className="footer-link">
        {t.navHome}
      </a>

      <a href="#about" className="footer-link">
        {t.navAbout}
      </a>

      <a href="#contact" className="footer-link">
        {t.navContact}
      </a>

      <span>
        © {new Date().getFullYear()} Atithi
      </span>
    </div>

  </div>
</footer>
);
}

export default function Footer({ t }) {
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-7 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-12">
        <a href="#home" className="font-display text-2xl font-bold tracking-[-0.05em] text-terra-d">
          Atithi<span className="text-gold">.</span>
        </a>
        <p className="text-sm text-[#8b7060]">{t.footerLine}</p>
        <span className="text-xs text-[#8b7060]">© {new Date().getFullYear()} Atithi</span>
      </div>
    </footer>
  );
}

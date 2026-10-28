import { useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { translations } from "./translations.js";

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Home t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

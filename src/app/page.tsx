import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorks from "../components/HowItWorks";
import SittersSection from "../components/SittersSection";
import SimulatorSection from "../components/SimulatorSection";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { getDictionary } from "../dictionaries";

export default function Home() {
  const t = getDictionary("es");
  return (
    <main>
      <Navbar t={t.navbar} />
      <HeroSection t={t.hero} />
      <StatsBar t={t.numeros} />
      <FadeIn>
        <AboutSection t={t.quienesSomos} />
      </FadeIn>
      <FadeIn delay={100}>
        <ServicesSection t={t.servicios} />
      </FadeIn>
      <FadeIn>
        <HowItWorks t={t.comoFunciona} />
      </FadeIn>
      <FadeIn delay={100}>
        <SittersSection t={t.nineras} />
      </FadeIn>
      <FadeIn>
        <SimulatorSection t={t.simulador} />
      </FadeIn>
      <FadeIn>
        <WhatsAppCTA t={t.ctaFinal} />
      </FadeIn>
      <Footer t={t.footer} />
      <WhatsAppFloat texto={t.flotante} />
    </main>
  );
}

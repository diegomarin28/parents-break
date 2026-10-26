import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import StatsBar from "../../components/StatsBar";
import AboutSection from "../../components/AboutSection";
import ServicesSection from "../../components/ServicesSection";
import HowItWorks from "../../components/HowItWorks";
import SittersSection from "../../components/SittersSection";
import SimulatorSection from "../../components/SimulatorSection";
import WhatsAppCTA from "../../components/WhatsAppCTA";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import { esIdioma } from "../../lib/idiomas";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = getDictionary(lang);
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

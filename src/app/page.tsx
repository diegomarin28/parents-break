import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import SittersSection from "@/components/SittersSection";
import SimulatorSection from "@/components/SimulatorSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FadeIn>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={100}>
        <ServicesSection />
      </FadeIn>
      <FadeIn>
        <HowItWorks />
      </FadeIn>
      <FadeIn delay={100}>
        <SittersSection />
      </FadeIn>
      <FadeIn>
        <SimulatorSection />
      </FadeIn>
      <FadeIn>
        <WhatsAppCTA />
      </FadeIn>
      <Footer />
    </main>
  );
}
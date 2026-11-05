import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Services } from "@/components/Services";
import { AdsAudit } from "@/components/AdsAudit";
import { RoasCalculator } from "@/components/RoasCalculator";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col">
      <Header />
      <Hero />
      <Leadership />
      <Services />
      <AdsAudit />
      <RoasCalculator />
      <Pricing />
      <Process />
      <Faq />
      <ContactSection />
      <Footer />
    </main>
  );
}

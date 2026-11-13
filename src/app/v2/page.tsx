import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import {
  LogoStrip,
  Features,
  TechStack,
  TeamSection,
  ImprovementLoop,
  Testimonials,
  PlatformList,
  Security,
  ClosingCTA,
  FAQ,
  Footer,
} from "./_components/Sections";

export default function V2Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <TechStack />
      <TeamSection />
      <ImprovementLoop />
      <Testimonials />
      <PlatformList />
      <Security />
      <ClosingCTA />
      <FAQ />
      <Footer />
    </main>
  );
}

import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import {
  LogoStrip,
  Features,
  Pipeline,
  Angles,
  AISpotlight,
  Testimonials,
  UseCases,
  Compliance,
  ClosingCTA,
  Footer,
} from "./_components/Sections";

export default function V2Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <Pipeline />
      <Angles />
      <AISpotlight />
      <Testimonials />
      <UseCases />
      <Compliance />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

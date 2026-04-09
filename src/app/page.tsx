import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import { HowItWorks } from "@/components/HowItWorks";
import WhyFrontier from "@/components/WhyFrontier";
import WhoWeServe from "@/components/WhoWeServe";
import PortalShowcase from "@/components/PortalShowcase";
import SecuritySection from "@/components/SecuritySection";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <WhyFrontier />
        <WhoWeServe />
        <PortalShowcase />
        <SecuritySection />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

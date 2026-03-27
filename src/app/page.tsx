import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoWeServe from "@/components/WhoWeServe";
import { HowItWorks } from "@/components/HowItWorks";
import PortalShowcase from "@/components/PortalShowcase";
import WhyFrontier from "@/components/WhyFrontier";
import FAQ from "@/components/FAQ";
import InvestorSection from "@/components/InvestorSection";
import SecuritySection from "@/components/SecuritySection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhoWeServe />
        <HowItWorks />
        <PortalShowcase />
        <WhyFrontier />
        <FAQ />
        <InvestorSection />
        <SecuritySection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

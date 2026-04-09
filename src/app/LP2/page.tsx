import Header from "@/components/lp2/Header";
import { Hero } from "@/components/lp2/Hero";
import StatsBar from "@/components/lp2/StatsBar";
import WhoWeServe from "@/components/lp2/WhoWeServe";
import { HowItWorks } from "@/components/lp2/HowItWorks";
import PortalShowcase from "@/components/lp2/PortalShowcase";
import WhyFrontier from "@/components/lp2/WhyFrontier";
import FAQ from "@/components/lp2/FAQ";
import SecuritySection from "@/components/lp2/SecuritySection";
import CTABand from "@/components/lp2/CTABand";
import Footer from "@/components/lp2/Footer";

export default function LP2Page() {
  return (
    <div className="lp2-root">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhoWeServe />
        <HowItWorks />
        <PortalShowcase />
        <WhyFrontier />
        <FAQ />
        <SecuritySection />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

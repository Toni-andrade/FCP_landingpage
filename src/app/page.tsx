import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import PlatformSection from "@/components/PlatformSection";
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
        <ProblemSection />
        <HowItWorks />
        <PlatformSection />
        <InvestorSection />
        <SecuritySection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useInView } from "@/lib/useInView";
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Monitor,
  BadgeDollarSign,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureData {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: FeatureData[] = [
  {
    title: "AI That Works for You",
    icon: Brain,
    description:
      "Our underwriting analyzes 2,000+ data points across 7 risk factors \u2014 FICO, revenue trend, cash flow stability, fraud risk, time in business, industry risk, and existing obligations. Not a one-size-fits-all score.",
  },
  {
    title: "24-Hour Decisions",
    icon: Zap,
    description:
      "Bank loans take 3\u20136 weeks. Broker-originated deals take days of back-and-forth. Our AI pipeline delivers a funding decision within 24 hours of a complete application.",
  },
  {
    title: "Revenue-Based Repayment",
    icon: TrendingUp,
    description:
      "Your payments flex with your actual business performance. Seasonal slowdown? You pay less. Big month? You pay more. Because your cash flow isn\u2019t a straight line.",
  },
  {
    title: "Your Data, Protected",
    icon: Shield,
    description:
      "AES-256 encryption, mandatory two-factor authentication, row-level database security on every table. Your financial data is treated like what it is \u2014 the most sensitive information your business has.",
  },
  {
    title: "A Portal, Not a Phone Number",
    icon: Monitor,
    description:
      "No calling in to check your balance. No emailing for a payment schedule. Your dedicated Client Portal gives you 24/7 visibility into your funding, documents, and business health.",
  },
  {
    title: "No Hidden Costs",
    icon: BadgeDollarSign,
    description:
      "Your total repayment amount is clear from day one. No origination fees buried in fine print, no prepayment penalties, no surprises. We\u2019ll tell you exactly what the funding costs before you sign anything.",
  },
];

export default function WhyFrontier() {
  const { ref, isVisible } = useInView();

  return (
    <section id="why-frontier" className="bg-light-bg">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Why Frontier</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy">
            What Makes Us Different
          </h2>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-6 shadow-[0_2px_12px_rgba(33,51,99,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

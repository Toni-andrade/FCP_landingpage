"use client";

import { useInView } from "@/lib/useInView";
import { Link2, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Connect Your Business",
    icon: Link2,
    description:
      "Complete our 5-minute application and securely connect your business bank account via Plaid. We analyze your real cash flow \u2014 not just a credit report.",
    chip: "Bank-level encryption \u00b7 No credential sharing",
  },
  {
    number: 2,
    title: "AI-Powered Underwriting",
    icon: Brain,
    description:
      "Our AI underwriting agent evaluates your revenue patterns, cash flow stability, and business health across 7 risk factors and 2,000+ data points. No arbitrary cutoffs \u2014 real analysis of your real business.",
    chip: "Same-day review \u00b7 15-category transaction analysis",
  },
  {
    number: 3,
    title: "Get Funded",
    icon: CheckCircle,
    description:
      "Receive your approval, review your terms, and get capital deployed. Repayment adjusts to your revenue through daily or weekly ACH \u2014 when your business does well, you pay more; when it slows, you pay less.",
    chip: "Funds in 24 hours \u00b7 Revenue-based repayment",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="how-it-works" className="bg-white section-padding px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="section-label">How It Works</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy mt-4">
          From Application to <em className="italic">Funding</em> in Three Steps
        </h2>

        <div
          ref={ref}
          className={`relative mt-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Horizontal connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 h-0.5 bg-navy/15"
            style={{ left: "16.666%", right: "16.666%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center">
                  {/* Numbered circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 flex justify-center">
                    <Icon className="size-6 text-navy/60" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-semibold text-navy">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* Reassurance chip */}
                  <span className="mt-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                    {step.chip}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="https://app.frontiercapital.us"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-mid-navy hover:scale-[1.02]"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}

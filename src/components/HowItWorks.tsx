"use client";

import { useInView } from "@/lib/useInView";
import { FileText, Brain, Banknote, Clock } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Apply Online",
    icon: FileText,
    description:
      "Complete our streamlined application. Connect your business bank account securely via Plaid. No mountains of paperwork \u2014 your cash flow tells the story.",
    time: "5 minutes",
  },
  {
    number: 2,
    title: "AI-Powered Review",
    icon: Brain,
    description:
      "Our AI underwriting agent analyzes your revenue patterns, cash flow stability, and business health using a 7-factor risk model. No arbitrary credit score cutoffs.",
    time: "Same day",
  },
  {
    number: 3,
    title: "Get Funded",
    icon: Banknote,
    description:
      "Receive your funding decision and capital deployment. Repayment adjusts to your actual revenue \u2014 because your business isn\u2019t a fixed-income bond.",
    time: "24 hours",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="bg-light-bg section-padding px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Section header */}
        <p className="section-label">HOW IT WORKS</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy mt-4">
          From Application to Funding in Three Steps
        </h2>

        {/* Steps grid */}
        <div
          ref={ref}
          className={`relative mt-16 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Horizontal connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-navy/20"
            style={{ left: "16.666%", right: "16.666%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center">
                  {/* Numbered circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy">
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 flex justify-center">
                    <Icon className="size-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* Time indicator */}
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    <Clock className="size-3.5" />
                    {step.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="https://app.frontiercapital.us"
            className="inline-block rounded-lg bg-accent px-8 py-3.5 font-semibold text-white transition hover:bg-mid-navy"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "@/lib/useInView";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Securely link your revenue platforms. Our engine analyzes historical performance and future projections within minutes.",
  },
  {
    number: "02",
    title: "Collaborate",
    description:
      "Meet your dedicated partner to structure a facility that honors your growth cycles and operational realities.",
  },
  {
    number: "03",
    title: "Succeed",
    description:
      "Deploy capital instantly. Repay as you earn, with a system that breathes with your business through every season.",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="how-it-works" className="py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div
          ref={ref}
          className={`mb-20 lg:mb-32 space-y-6 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary font-light leading-tight">
            Simple. Fast. <br />
            <span className="italic">Focused on you.</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-16 lg:gap-24 fade-up-children ${
            isVisible ? "visible" : ""
          }`}
        >
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="font-mono text-5xl text-outline/60 group-hover:text-secondary transition-colors duration-500 mb-10">
                {step.number}
              </div>
              <h3 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

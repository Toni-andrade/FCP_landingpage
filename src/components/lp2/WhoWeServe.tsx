"use client";

import { useInView } from "@/lib/useInView";
import { ShieldOff, FileX, Clock, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardData {
  title: string;
  description: string;
  icon: LucideIcon;
}

const cards: CardData[] = [
  {
    title: "Rejected by the Algorithm",
    icon: ShieldOff,
    description:
      "Credit score below 680? Operating less than 3 years? No collateral? Banks say no automatically \u2014 their centralized underwriting wasn\u2019t designed for your business.",
  },
  {
    title: "Drowning in Paperwork",
    icon: FileX,
    description:
      "25\u201335% of small business loan applications are abandoned before completion. You shouldn\u2019t need a CFO just to apply for working capital.",
  },
  {
    title: "Waiting While Opportunities Pass",
    icon: Clock,
    description:
      "By the time a bank approves your loan in 3\u20136 weeks, the inventory deal, the equipment, or the contract you needed capital for is already gone.",
  },
  {
    title: "One Size Fits Nobody",
    icon: TrendingDown,
    description:
      "Fixed monthly payments designed for steady-state businesses crush seasonal operators. Your repayment should flex with your actual revenue \u2014 because your cash flow isn\u2019t a straight line.",
  },
];

export default function WhoWeServe() {
  const { ref, isVisible } = useInView();

  return (
    <section id="who-we-serve" className="bg-light-bg">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Who We Serve</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy">
            Built for the Businesses Banks Overlook
          </h2>
          <p className="mt-6 mx-auto max-w-[700px] text-[15px] leading-relaxed text-muted">
            42% of America&apos;s 33 million small businesses have unmet financing needs.
            Banks take weeks, require mountains of paperwork, and reject more than half
            of applicants. We built Frontier for you&nbsp;&mdash; the restaurant owner, the
            contractor, the retailer, the service provider keeping Main Street alive.
          </p>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-lg border-l-4 border-accent bg-white p-6 shadow-[0_2px_12px_rgba(33,51,99,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

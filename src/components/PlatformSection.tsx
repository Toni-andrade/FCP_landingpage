"use client";

import { useInView } from "@/lib/useInView";
import { Brain, RefreshCw, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardData {
  title: string;
  icon: LucideIcon;
  bullets: string[];
}

const cards: CardData[] = [
  {
    title: "AI Underwriting Agent",
    icon: Brain,
    bullets: [
      "PDF parsing with 15-category transaction classification",
      "26+ MCA lender pattern detection for stacking risk",
      "7-point fraud analysis scoring (0–10 scale)",
      "7-factor risk model: FICO, MCA burden, revenue trend, fraud, time in business, industry, cash flow",
      "25-tier automated pricing matrix (5 risk grades × 5 burden levels)",
    ],
  },
  {
    title: "AI Reconciliation Agent",
    icon: RefreshCw,
    bullets: [
      "Dual-intelligence matching: rule-based engine + independent AI",
      "100-point confidence scoring system",
      "5-stage name matching: Exact → Alias → Contains → Trigram → Levenshtein",
      "Self-learning system: alias, categorization, and keyword models improve over time",
      "Auto-confirms 85+ confidence matches daily at 11:15 AM",
    ],
  },
  {
    title: "AI Simulation Agent",
    icon: LineChart,
    bullets: [
      "Natural language deal and portfolio projection modeling",
      "8 core scenario tools with 10–365 day projection windows",
      "Configurable default rate, recovery rate, and broker fee parameters",
      "Real vs. simulated deal toggles for what-if analysis",
      "Export capabilities for investor reporting",
    ],
  },
];

const stats = [
  "179+ Database Migrations",
  "50+ Tables with RLS",
  "256 React Components",
  "10+ Automated Cron Jobs",
  "48 Custom Hooks",
];

export default function PlatformSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="platform" className="bg-[#162247]">
      <div className="h-1 w-full bg-[#3B82F6]" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:py-28 text-center">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5]">
            OUR PLATFORM
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
            Three AI Agents. One Intelligent Platform.
          </h2>
        </div>

        <div
          className={`mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-xl bg-[#1A2A50] p-8 text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6]/20">
                  <Icon className="size-6 text-[#3B82F6]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                      <span className="text-sm leading-relaxed text-[#4A6FA5]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-14 border-t border-white/10 pt-8 fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {stats.map((stat, i) => (
              <span key={stat} className="text-sm text-[#4A6FA5]">
                {i > 0 && (
                  <span className="mr-6 hidden sm:inline" aria-hidden="true">
                    ·
                  </span>
                )}
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

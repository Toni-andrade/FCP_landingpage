"use client";

import { useInView } from "@/lib/useInView";
import { TrendingDown, Ban, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardData {
  title: string;
  description: string;
  icon: LucideIcon;
}

const cards: CardData[] = [
  {
    title: "The Credit Gap",
    icon: TrendingDown,
    description:
      "33 million small businesses generate $8.9 trillion in annual revenue, yet only 30–40% can access traditional bank loans. The banking system has structurally failed small business lending.",
  },
  {
    title: "Automated Rejection",
    icon: Ban,
    description:
      "Bank consolidation reduced 14,400 banks to under 4,200. Centralized algorithms automatically reject businesses with credit scores below 680–700, insufficient collateral, or less than 2–3 years of operating history.",
  },
  {
    title: "Demographic Disparities",
    icon: Users,
    description:
      "Black-owned businesses receive approval for only 29% of requested financing versus 50% for white-owned businesses. The gap persists even when controlling for creditworthiness and business characteristics.",
  },
  {
    title: "Slow & Burdensome",
    icon: Clock,
    description:
      "25–35% of bank small business loan applications are abandoned before completion. Weeks-long approval timelines mean businesses miss the opportunities they needed capital for in the first place.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="for-businesses" className="bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
            FOR BUSINESSES
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#213363]">
            Traditional Banks Weren&apos;t Built for You
          </h2>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-lg border-l-4 border-[#3B82F6] bg-[#F8FAFC] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#213363]">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#213363]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6B7B95]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center fade-up ${isVisible ? "visible" : ""}`}>
          <p className="mx-auto max-w-3xl text-lg font-semibold text-[#213363]">
            If you&apos;ve been turned down by a bank, you&apos;re not alone.
            56% of small business loan applicants are either declined or only
            partially funded.
          </p>
          <p className="mt-3 text-xs text-[#6B7B95]">
            Source: Federal Reserve SBCS, SBA Office of Advocacy, FDIC
          </p>
        </div>
      </div>
    </section>
  );
}

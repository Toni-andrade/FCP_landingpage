"use client";

import { useInView } from "@/lib/useInView";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { end: 84, suffix: "%", label: "Approval rate (vs. 14\u201330% at banks)" },
  { text: "<24hr", label: "Application to decision" },
  { text: "$25K\u2013$250K", label: "Funding range" },
  { end: 0, text: "0", label: "Impact on your credit score to apply" },
];

export default function StatsBar() {
  const { ref, isVisible } = useInView();

  return (
    <section className="bg-white">
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 py-16 grid grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`p-6 md:p-8 text-center ${
              i < stats.length - 1 ? "border-r border-light-bg" : ""
            }`}
          >
            <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-navy">
              {stat.end !== undefined && stat.end > 0 ? (
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix || ""}
                  started={isVisible}
                />
              ) : (
                stat.text
              )}
            </div>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

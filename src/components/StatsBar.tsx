"use client";

import { useInView } from "@/lib/useInView";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { end: 22, prefix: "$", suffix: "B", label: "MCA Market (2024)" },
  { end: 127, prefix: "$", suffix: "B", label: "Addressable Opportunity" },
  { end: 84, prefix: "", suffix: "%", label: "MCA Approval Rate vs. 14\u201330% Banks" },
];

export default function StatsBar() {
  const { ref, isVisible } = useInView();

  return (
    <section className="bg-white">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-r border-[#F0F3F8] last:border-0 p-6 md:p-8 text-center"
          >
            <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#213363]">
              <CountUp
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                started={isVisible}
              />
            </div>
            <p className="mt-2 text-sm text-[#6B7B95]">{stat.label}</p>
          </div>
        ))}

        <div className="p-6 md:p-8 text-center">
          <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#213363]">
            &lt;24hr
          </div>
          <p className="mt-2 text-sm text-[#6B7B95]">Application to Decision</p>
        </div>
      </div>
    </section>
  );
}

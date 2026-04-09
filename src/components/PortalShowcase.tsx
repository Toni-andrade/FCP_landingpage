"use client";

import { useInView } from "@/lib/useInView";

const metricCards = [
  { label: "Outstanding", value: "$87,450" },
  { label: "Next Draw", value: "$12,000" },
  { label: "Facility", value: "Active" },
];

const barHeights = [42, 58, 35, 74, 52, 81, 48, 69, 91, 76, 84, 96];

export default function PortalShowcase() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="your-portal"
      className="relative py-32 lg:py-40 bg-primary overflow-hidden"
    >
      {/* Ambient grid + noise for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(180,197,254,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-center"
      >
        {/* Text column */}
        <div
          className={`space-y-10 fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-fixed/70">
              Our Platform
            </span>
          </div>

          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.05] tracking-tight">
            The discipline of a bank.{" "}
            <span className="block">The speed of a fintech.</span>
            <span className="block italic text-primary-fixed">
              The heart of a partner.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-primary-fixed/70 leading-relaxed max-w-lg font-light">
            Every Frontier client opens the same portal our underwriters use.
            Live balance, upcoming draws, repayment schedule, and risk
            signals&mdash;rendered with institutional clarity. One surface for
            every moment of the relationship. Zero phone tag.
          </p>
        </div>

        {/* Monitor mockup column */}
        <div
          className={`relative fade-up ${isVisible ? "visible" : ""}`}
        >
          {/* Ambient glow behind screen */}
          <div
            aria-hidden="true"
            className="absolute -inset-10 bg-secondary/20 blur-[100px] rounded-full"
          />

          {/* Monitor bezel */}
          <div className="relative rounded-2xl p-[10px] bg-gradient-to-b from-[#1a2450] via-[#0d1634] to-[#070f26] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            {/* Top bezel camera dot */}
            <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/15" />

            {/* Screen */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0a1530] to-[#050b1f] aspect-[16/10]">
              {/* Subtle screen reflection */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"
              />

              {/* Dashboard chrome */}
              <div className="relative z-10 h-full flex flex-col p-5 lg:p-6 gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-secondary-container/60">
                      Dashboard
                    </div>
                    <div className="font-headline text-xl lg:text-2xl text-white mt-1 font-light">
                      Good morning,{" "}
                      <span className="italic text-primary-fixed">Maria</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300">
                      Live
                    </span>
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {metricCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3 backdrop-blur-sm"
                    >
                      <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/40">
                        {card.label}
                      </div>
                      <div className="font-headline text-white text-base lg:text-lg mt-1.5 font-normal">
                        {card.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart row */}
                <div className="grid grid-cols-5 gap-2.5 flex-1 min-h-0">
                  {/* Bar chart — 3/5 */}
                  <div className="col-span-3 rounded-lg bg-white/[0.03] border border-white/[0.06] p-3 lg:p-4 flex flex-col backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/40">
                        Revenue Velocity
                      </div>
                      <div className="font-mono text-[8px] text-secondary-container">
                        +18.4%
                      </div>
                    </div>
                    <div className="flex-1 flex items-end gap-1">
                      {barHeights.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-secondary/40 via-secondary-container/70 to-secondary-container rounded-[1px]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="font-mono text-[7px] text-white/25">
                        JAN
                      </span>
                      <span className="font-mono text-[7px] text-white/25">
                        DEC
                      </span>
                    </div>
                  </div>

                  {/* Donut chart — 2/5 */}
                  <div className="col-span-2 rounded-lg bg-white/[0.03] border border-white/[0.06] p-3 lg:p-4 flex flex-col backdrop-blur-sm">
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/40 mb-2">
                      Health Score
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-[72px] h-[72px] lg:w-20 lg:h-20">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full -rotate-90"
                          aria-hidden="true"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="10"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#82c1fd"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="35"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="font-headline text-white text-base lg:text-lg leading-none">
                            86%
                          </span>
                          <span className="font-mono text-[7px] text-secondary-container mt-0.5">
                            A+
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor neck + base */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-5 bg-gradient-to-b from-[#141d3e] to-[#070f26] rounded-b-md" />
            <div className="w-40 lg:w-56 h-1.5 bg-gradient-to-b from-[#141d3e] to-[#050a1c] rounded-full mt-0.5 shadow-[0_20px_30px_-10px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "@/lib/useInView";

const tiers = [
  { label: "Tier 1 \u2014 High Quality", size: "$56B", businesses: "2\u20133M businesses" },
  { label: "Tier 2 \u2014 Moderate Risk", size: "$50B", businesses: "3\u20135M businesses" },
  { label: "Tier 3 \u2014 Higher Risk", size: "$21B", businesses: "2\u20134M businesses" },
];

const roadmap = [
  { badge: "NOW", title: "MCA + AI Underwriting" },
  { badge: "12\u201324 MO", title: "Product Expansion" },
  { badge: "24\u201336 MO", title: "SBA License" },
  { badge: "36+ MO", title: "Bank Charter" },
];

export default function InvestorSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="for-investors" className="bg-dark">
      <div className="h-1 w-full bg-accent" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className={`text-center fade-up ${isVisible ? "visible" : ""}`}>
          <p className="section-label-light">For Investors</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
            $127 Billion Market. One Structural Thesis.
          </h2>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 fade-up ${isVisible ? "visible" : ""}`}
        >
          {/* Left — Market Thesis (3/5) */}
          <div className="lg:col-span-3">
            <p className="text-[15px] leading-relaxed text-soft">
              Every major fintech moved upmarket.{" "}
              <span className="font-semibold text-white">Ramp</span> ($32B) targets
              enterprise finance teams.{" "}
              <span className="font-semibold text-white">Brex</span> ($5.15B) was
              acquired by Capital One after abandoning SMBs.{" "}
              <span className="font-semibold text-white">Flex</span> rejects 97% of
              applicants. The sub-$2M revenue segment&nbsp;&mdash; 8.7&nbsp;million
              businesses declined by banks annually, generating $150&ndash;300&nbsp;billion
              in unfulfilled demand&nbsp;&mdash; is the market they all left behind.
              Frontier&apos;s AI underwriting stack targets sub-6% defaults (vs.
              8&ndash;12% industry average), turning the highest-quality slice of that
              market into institutional-grade returns.
            </p>
          </div>

          {/* Right — Tier Cards (2/5) */}
          <div className="lg:col-span-2 space-y-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-lg bg-white/5 border border-white/10 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-soft/70">
                  {tier.label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl text-white">
                  {tier.size}
                </p>
                <p className="mt-0.5 text-sm text-soft/60">{tier.businesses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compact roadmap */}
        <div className={`mt-14 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="flex flex-wrap justify-center gap-3">
            {roadmap.map((phase, i) => (
              <div key={phase.badge} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                  <span className="text-xs font-bold text-accent">{phase.badge}</span>
                  <span className="text-sm text-soft">{phase.title}</span>
                </div>
                {i < roadmap.length - 1 && (
                  <span className="text-white/20 hidden sm:inline" aria-hidden="true">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:info@frontiercapitalpartners.us"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-mid-navy hover:scale-[1.02]"
          >
            Request Investor Materials
          </a>
        </div>
      </div>
    </section>
  );
}

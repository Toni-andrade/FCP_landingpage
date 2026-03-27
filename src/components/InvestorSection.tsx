"use client";

import { useInView } from "@/lib/useInView";

interface TierData {
  label: string;
  size: string;
  desc: string;
  color: string;
}

const tiers: TierData[] = [
  {
    label: "Tier 1 — High Quality",
    size: "$56B",
    desc: "2–3M businesses, $500K–$5M revenue, FICO 620–680",
    color: "bg-[#2EAF6E]",
  },
  {
    label: "Tier 2 — Moderate Risk",
    size: "$50B",
    desc: "3–5M businesses, $200K–$500K revenue, FICO 550–620",
    color: "bg-[#3B82F6]",
  },
  {
    label: "Tier 3 — Higher Risk",
    size: "$21B",
    desc: "2–4M businesses, $100K–$200K revenue, FICO <550",
    color: "bg-[#213363]",
  },
];

interface PhaseData {
  badge: string;
  title: string;
  desc: string;
}

const phases: PhaseData[] = [
  {
    badge: "NOW",
    title: "MCA + AI Underwriting",
    desc: "Fast capital via revenue-based advances. Claude AI + Plaid stack.",
  },
  {
    badge: "12 MO",
    title: "Client Tools + Dashboard",
    desc: "Cash flow forecasting, repayment tracking, financial health scoring.",
  },
  {
    badge: "18 MO",
    title: "Business Banking",
    desc: "Checking/savings via BaaS partnership. Capture deposits.",
  },
  {
    badge: "24 MO",
    title: "Lending License + SBA",
    desc: "SBA 7(a) access. Lower rates for clients. Government guarantees.",
  },
  {
    badge: "36-48 MO",
    title: "Bank Charter",
    desc: "Full-stack: cards, deposits, lending under one roof. Own our destiny.",
  },
];

export default function InvestorSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="for-investors" className="bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
            FOR INVESTORS
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#213363]">
            $150–300B Structural Credit Gap. One Thesis.
          </h2>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {/* Left column — Market Thesis */}
          <div className="text-[15px] leading-relaxed text-[#6B7B95]">
            <p>
              Every major fintech moved upmarket.{" "}
              <span className="font-semibold text-[#213363]">Ramp</span> ($32B
              valuation) targets mid-market finance teams.{" "}
              <span className="font-semibold text-[#213363]">Brex</span> was
              acquired by Capital One for $5.15B after abandoning SMBs in 2022.{" "}
              <span className="font-semibold text-[#213363]">Flex</span> rejects
              97% of applicants with a &ldquo;super prime&rdquo; filter.{" "}
              <span className="font-semibold text-[#213363]">Slash</span>{" "}
              outsources lending entirely.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#213363]">
              AI underwriting targeting sub-6% defaults. $150–300B structural
              credit gap. Institutional-grade compliance from day one.
            </p>
          </div>

          {/* Right column — Market Sizing Cards */}
          <div className="space-y-4">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="overflow-hidden rounded-lg bg-[#F7F9FC] p-6"
              >
                <div className={`-mx-6 -mt-6 mb-4 h-1 w-[calc(100%+3rem)] ${tier.color} rounded-t-lg`} />
                <p className="text-sm font-bold text-[#213363]">
                  {tier.label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[#213363]">
                  {tier.size}
                </p>
                <p className="mt-1 text-sm text-[#6B7B95]">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Roadmap */}
        <div className={`mt-16 fade-up ${isVisible ? "visible" : ""}`}>
          <h3 className="text-center font-[family-name:var(--font-display)] text-2xl text-[#213363]">
            Strategic Roadmap
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((phase) => (
              <div
                key={phase.badge}
                className="relative rounded-lg bg-[#F7F9FC] p-6"
              >
                <span className="inline-flex rounded-full bg-[#213363] px-3 py-1 text-xs font-bold text-white">
                  {phase.badge}
                </span>
                <p className="mt-3 text-lg font-semibold text-[#213363]">
                  {phase.title}
                </p>
                <p className="mt-2 text-sm text-[#6B7B95]">{phase.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#6B7B95] text-center mt-6">
            Each stage compounds data and trust. The businesses we serve today become the banking customers of tomorrow.
          </p>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center fade-up ${isVisible ? "visible" : ""}`}>
          <a
            href="mailto:info@frontiercapitalpartners.us"
            className="inline-block rounded-lg bg-[#3B82F6] px-8 py-3.5 font-semibold text-white transition hover:bg-[#2E4A8A]"
          >
            Request Investor Materials
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "@/lib/useInView";
import {
  ShieldCheck,
  Lock,
  Database,
  BadgeCheck,
  ShieldX,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SecurityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

const cards: SecurityCard[] = [
  {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    description: "MFA mandatory, session validated per request.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "All data encrypted at rest (AES-256) and in transit (TLS 1.2+).",
  },
  {
    icon: Database,
    title: "Row-Level Security",
    description: "Database-level access policies on all 50+ tables.",
  },
  {
    icon: BadgeCheck,
    title: "SOC 2 Infrastructure",
    description:
      "Supabase, Vercel, Plaid, Resend \u2014 all SOC 2 Type II certified.",
  },
  {
    icon: ShieldX,
    title: "No Data Sales",
    description:
      "We never sell your personal or financial information.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    description:
      "Access, correct, delete, disconnect, or export your data at any time.",
  },
];

export default function SecuritySection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="security" className="bg-light-bg">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className={`text-center fade-up ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Security & Trust</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy">
            Your Data. Our Responsibility.
          </h2>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up-children ${isVisible ? "visible" : ""}`}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-lg bg-white p-6 shadow-[0_2px_12px_rgba(33,51,99,0.08)]"
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

        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="mt-10 mx-auto max-w-3xl text-center text-sm text-muted">
            Frontier complies with CCPA, GLBA, and IRS record retention requirements.
            Commercial funding disclosure laws in 9 states (CA, NY, CT, UT, VA, FL, GA, KS, MO) are
            fully integrated into our compliance infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

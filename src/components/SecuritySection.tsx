"use client";

import { useInView } from "@/lib/useInView";
import {
  ShieldCheck,
  Database,
  Lock,
  Users,
  BadgeCheck,
  ClipboardList,
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
    description:
      "Never trust, always verify. MFA mandatory, session validated per request.",
  },
  {
    icon: Database,
    title: "Row-Level Security",
    description:
      "RLS enforced on all 50+ database tables. Security-invoker on all views.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "Data encrypted at rest and in transit (TLS 1.2+). Plaid tokens encrypted with AES-256-GCM.",
  },
  {
    icon: Users,
    title: "4-Tier RBAC",
    description:
      "Super Admin \u2192 Admin \u2192 Analyst \u2192 Viewer. Least-privilege access at every level.",
  },
  {
    icon: BadgeCheck,
    title: "SOC 2 Infrastructure",
    description:
      "Supabase, Vercel, Plaid, Resend \u2014 all SOC 2 Type II certified providers.",
  },
  {
    icon: ClipboardList,
    title: "Immutable Audit Logging",
    description:
      "Complete trails for all staff and merchant actions. 15+ event types tracked.",
  },
];

export default function SecuritySection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="security" className="bg-light-bg">
      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
            SECURITY &amp; COMPLIANCE
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy">
            Enterprise-Grade from Day One
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
                className="rounded-lg bg-white p-6 shadow-sm"
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
            9 states with MCA disclosure laws (CA, NY, CT, UT, VA, FL, GA, KS,
            MO) &mdash; compliance is a competitive moat as penalties reach
            $10,000+ per violation.
          </p>
        </div>
      </div>
    </section>
  );
}

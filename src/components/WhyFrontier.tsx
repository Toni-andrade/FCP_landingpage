"use client";

import { useInView } from "@/lib/useInView";
import { Wallet, Zap, ShieldCheck, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
}

const pillars: Pillar[] = [
  {
    title: "Revenue-first",
    icon: Wallet,
    description:
      "No fixed monthly burdens. We scale our expectations to your actual earnings, providing flexibility when you need it most.",
  },
  {
    title: "24-hour speed",
    icon: Zap,
    highlighted: true,
    description:
      "From initial connection to final deposit in under one business day. Capital at the speed of your growth.",
  },
  {
    title: "Clear & Honest",
    icon: ShieldCheck,
    description:
      "No hidden fees. No compounding interest traps. Just transparent growth capital structured for your success.",
  },
  {
    title: "Institutional partner",
    icon: Handshake,
    description:
      "We provide the network, strategic guidance, and expertise to help you deploy capital effectively in competitive markets.",
  },
];

export default function WhyFrontier() {
  const { ref, isVisible } = useInView();

  return (
    <section id="why-frontier" className="py-32 lg:py-40 bg-surface-container-low">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className={`text-center mb-20 lg:mb-24 fade-up ${isVisible ? "visible" : ""}`}>
          <h2 className="font-headline text-5xl md:text-6xl text-primary font-light">
            Better terms for better businesses.
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up-children ${
            isVisible ? "visible" : ""
          }`}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={
                  pillar.highlighted
                    ? "bg-primary text-on-primary rounded-xl shadow-2xl shadow-primary/20 flex flex-col p-10 lg:p-12 transform lg:-translate-y-4"
                    : "bg-white rounded-xl border border-outline-variant/10 shadow-sm flex flex-col p-10 lg:p-12 group hover:shadow-xl transition-all duration-500"
                }
              >
                <Icon
                  className={`size-9 mb-10 ${
                    pillar.highlighted ? "text-secondary-container" : "text-secondary"
                  }`}
                  strokeWidth={1.5}
                />
                <h3
                  className={`font-headline text-2xl md:text-3xl mb-5 ${
                    pillar.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    pillar.highlighted ? "text-primary-fixed/70" : "text-on-surface-variant"
                  }`}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

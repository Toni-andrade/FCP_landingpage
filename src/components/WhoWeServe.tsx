"use client";

import { useInView } from "@/lib/useInView";

const APPLY_URL = "https://apply.frontiercapital.us/apply";

interface Stage {
  name: string;
  tagline: string;
  bullets: string[];
  cta: string;
  variant: "light" | "dark";
}

const stages: Stage[] = [
  {
    name: "The Builder",
    tagline: "Early growth optimization for founders finding their stride.",
    bullets: ["Revenue Optimization", "Inventory Financing"],
    cta: "Explore Builder Track",
    variant: "light",
  },
  {
    name: "The Operator",
    tagline:
      "Scaled capital facilities for established businesses expanding horizons.",
    bullets: ["Acquisition Capital", "Global Expansion"],
    cta: "Request High-Limit Facility",
    variant: "dark",
  },
];

export default function WhoWeServe() {
  const { ref, isVisible } = useInView();

  return (
    <section id="stages" className="py-32 lg:py-40 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2
          className={`font-headline text-5xl md:text-6xl text-primary text-center mb-20 lg:mb-32 italic font-light fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          Partnership for every stage.
        </h2>

        <div
          className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch fade-up-children ${
            isVisible ? "visible" : ""
          }`}
        >
          {stages.map((stage) => {
            const isDark = stage.variant === "dark";
            return (
              <div
                key={stage.name}
                className={
                  isDark
                    ? "p-10 lg:p-14 bg-primary-container text-on-primary rounded-3xl group relative overflow-hidden shadow-2xl shadow-primary/20 flex flex-col"
                    : "p-10 lg:p-14 bg-surface-container-low rounded-3xl group hover:bg-surface-container-high transition-all duration-700 flex flex-col"
                }
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div
                    className={`font-headline text-6xl lg:text-[84px] mb-10 lg:mb-12 font-light italic leading-none whitespace-nowrap ${
                      isDark ? "text-white/30" : "text-outline/50"
                    }`}
                  >
                    {stage.name}
                  </div>
                  <p
                    className={`text-xl lg:text-2xl mb-10 lg:mb-12 font-medium ${
                      isDark ? "text-on-primary" : "text-primary"
                    }`}
                  >
                    {stage.tagline}
                  </p>
                  <ul className="space-y-5 mb-10">
                    {stage.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-center gap-5 text-sm font-mono tracking-widest uppercase ${
                          isDark
                            ? "text-primary-fixed/60"
                            : "text-on-surface-variant"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isDark ? "bg-secondary-container" : "bg-secondary"
                          }`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isDark
                          ? "inline-block bg-secondary text-on-secondary px-8 lg:px-10 py-4 lg:py-5 rounded text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-secondary/90 transition-all font-label"
                          : "inline-block bg-primary text-on-primary px-8 lg:px-10 py-4 lg:py-5 rounded text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary-container transition-all font-label"
                      }
                    >
                      {stage.cta}
                    </a>
                  </div>
                </div>
                {isDark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

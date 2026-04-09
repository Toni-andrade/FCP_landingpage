"use client";

import { useInView } from "@/lib/useInView";

const signals = [
  { label: "Data Velocity", value: "Ultra High Frequency" },
  { label: "Risk Modeling", value: "Dynamic Assessment" },
];

export default function SecuritySection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="frontier-engine"
      className="py-32 lg:py-40 bg-tertiary-container relative overflow-hidden"
    >
      {/* Subtle noise overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-20 lg:gap-32 items-center relative z-20"
      >
        {/* Text column */}
        <div
          className={`space-y-10 lg:space-y-12 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="inline-block border-l-2 border-secondary-container pl-6 lg:pl-8 py-3">
            <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4 leading-tight">
              Relationship &amp; <br />
              Growth
            </div>
            <h3 className="font-headline text-xl md:text-2xl text-on-tertiary-container italic opacity-70">
              Powered by The Frontier Engine
            </h3>
          </div>

          <p className="text-on-tertiary-container leading-relaxed text-xl lg:text-2xl font-light">
            Our proprietary analytical stack doesn&apos;t just read spreadsheets;
            it reads momentum. By synthesizing thousands of revenue signals, we
            uncover the value that traditional institutions ignore.
          </p>

          <div className="space-y-8 max-w-md pt-6">
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="flex justify-between items-end border-b border-white/10 pb-4"
              >
                <span className="font-mono text-xs uppercase text-white/40 tracking-[0.3em]">
                  {signal.label}
                </span>
                <span className="font-mono text-sm text-secondary-container">
                  {signal.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Precision index column */}
        <div
          className={`relative flex items-center justify-center fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="aspect-square w-full max-w-lg flex items-center justify-center relative">
            <div className="absolute inset-0 border border-white/5 rounded-3xl rotate-45" />
            <div className="absolute inset-8 border border-white/10 rounded-3xl -rotate-12" />
            <div className="relative z-10 text-center space-y-2">
              <div className="font-headline text-7xl md:text-8xl text-white font-light">
                98.4%
              </div>
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-secondary-container font-bold">
                Precision Index
              </div>
            </div>
            <div className="absolute bottom-12 left-12 w-4 h-4 bg-secondary-container rounded-full animate-pulse shadow-[0_0_30px_#82c1fd]" />
          </div>
        </div>
      </div>
    </section>
  );
}

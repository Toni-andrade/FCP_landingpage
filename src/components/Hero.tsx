"use client";

import { useEffect, useState } from "react";

const APP_URL = "https://app.frontiercapital.us";

const tickerStats = [
  "$150\u2013300B credit gap",
  "8.7M businesses declined annually",
  "84% MCA approval rate vs. 14\u201330% at banks",
];

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      {/* Subtle animated dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(75,139,245,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "drift 20s linear infinite",
          }}
        />
        <style>{`
          @keyframes drift {
            from { transform: translate(0, 0); }
            to { transform: translate(40px, 40px); }
          }
        `}</style>
      </div>

      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center pt-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <p
            className={`section-label-light transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Capital for Every Business
          </p>

          <h1
            className={`mt-6 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] text-white transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Your Business Deserves
            <br />
            <em className="italic text-soft">Better</em> Than a Bank Rejection
          </h1>

          <p
            className={`mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-soft transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            AI-powered funding decisions in 24 hours.
            $25K&ndash;$250K in working capital based on your actual revenue&nbsp;&mdash;
            not an arbitrary credit score.
          </p>

          {/* Dual CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-mid-navy hover:shadow-lg hover:scale-[1.02]"
            >
              Apply for Funding
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>

          {/* Reassurance line */}
          <p
            className={`mt-5 text-sm text-muted transition-all duration-700 delay-400 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            No impact to your credit score &middot; 5-minute application &middot; Funds as fast as 24 hours
          </p>
        </div>
      </div>

      {/* Bottom stat ticker */}
      <div
        className={`relative z-10 border-t border-white/10 bg-dark/60 backdrop-blur-sm transition-all duration-700 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-y-2 px-6 py-5">
          {tickerStats.map((stat, i) => (
            <span
              key={stat}
              className={`px-5 text-sm font-medium text-soft/80 ${
                i < tickerStats.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

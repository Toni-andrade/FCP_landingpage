"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const APPLY_URL = "https://apply.frontiercapital.us/apply";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text column */}
        <div
          className={`space-y-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-headline text-6xl sm:text-7xl lg:text-[110px] font-light leading-[0.9] tracking-tighter text-primary">
            Capital that <br />
            <span className="italic font-normal">understands</span> your
            business.
          </h1>

          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Moving beyond traditional constraints. We provide
            institutional-grade growth capital tailored to the rhythm of modern
            revenue.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-10 pt-4">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-5 rounded font-medium inline-flex items-center gap-3 group transition-all duration-300 hover:bg-primary-container shadow-xl shadow-primary/10 self-start sm:self-auto"
            >
              Begin Your Journey
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@frontiercapitalpartners.us"
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors self-start sm:self-auto"
            >
              Connect With Us
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="aspect-[4/5] lg:aspect-[1.1/1] bg-surface-container-low rounded-xl relative overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src="/brand/stitch-hero-architecture.png"
              alt="Institutional modern architecture"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Real-time signal data card */}
          <div className="absolute -bottom-8 -left-6 sm:-left-12 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-[0_32px_64px_-16px_rgba(7,29,77,0.18)] border border-outline-variant/10 max-w-xs z-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase text-outline tracking-widest">
                Real-time Signal
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            </div>
            <div className="font-headline text-3xl sm:text-4xl text-primary mb-1">
              $250,000.00
            </div>
            <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-tight">
              Max liquidity threshold reached
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

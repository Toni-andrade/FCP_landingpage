"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  started: boolean;
};

export function CountUp({ end, prefix = "", suffix = "", duration = 1800, started }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return (
    <span>
      {prefix}{value}{suffix}
    </span>
  );
}

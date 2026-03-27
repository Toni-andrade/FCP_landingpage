import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  "$150–300B credit gap",
  "33M small businesses",
  "42% with unmet needs",
  "14–30% bank approval",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-accent" />

      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(75,139,245,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(75,139,245,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <SectionLabel variant="light">Technology-Driven Capital</SectionLabel>

            <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Funding the Businesses Banks Left Behind
            </h1>

            <p className="mt-6 max-w-xl text-lg text-soft md:text-xl">
              AI-powered underwriting. 24-hour decisions. Capital for the 8.7
              million small businesses America&apos;s banking system fails every
              year.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="https://app.frontiercapital.us" variant="primary">
                Apply for Funding
              </Button>
              <Button href="#for-investors" variant="ghost">
                Investor Information
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stat ticker */}
      <div className="relative z-10 border-t border-white/10 bg-dark/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-2 px-6 py-5 sm:justify-start">
          {stats.map((stat, i) => (
            <span
              key={stat}
              className={`px-5 text-sm font-medium text-soft/80 ${
                i < stats.length - 1 ? "border-r border-white/20" : ""
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

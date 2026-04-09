import Image from "next/image";

const APPLY_URL = "https://apply.frontiercapital.us/apply";

export default function CTABand() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative brand mark */}
      <Image
        src="/brand/icon-white-outline.png"
        alt=""
        width={520}
        height={520}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[380px] lg:w-[520px] h-auto opacity-15 select-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-headline text-4xl md:text-5xl text-white font-light tracking-tight">
            Your bank says no,{" "}
            <span className="italic text-primary-fixed">we look deeper.</span>
          </h2>
          <p className="text-primary-fixed/50 text-lg md:text-xl font-light">
            Institutional finance, reimagined for modern growth.
          </p>
        </div>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary px-12 py-5 rounded font-medium shadow-xl hover:bg-white/95 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap relative z-10"
        >
          Apply for Funding
        </a>
      </div>

      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
    </section>
  );
}

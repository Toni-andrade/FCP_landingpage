export default function CTABand() {
  return (
    <section className="bg-navy py-20 lg:py-28 px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
          Ready to Fund Your Next Chapter?
        </h2>
        <p className="mt-4 text-lg text-soft">
          5-minute application. No credit score impact. Decision in 24 hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apply.frontiercapital.us/apply"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-mid-navy hover:scale-[1.02]"
          >
            Apply for Funding
          </a>
          <a
            href="mailto:info@frontiercapitalpartners.us"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white"
          >
            Questions? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

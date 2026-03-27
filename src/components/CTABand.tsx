export default function CTABand() {
  return (
    <section className="bg-navy py-20 lg:py-28 px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
          Ready to grow your business?
        </h2>
        <p className="mt-4 text-lg text-soft">
          Join the thousands of businesses that deserve better than a bank
          rejection letter.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.frontiercapital.us"
            className="rounded-lg bg-accent px-8 py-3.5 font-semibold text-white hover:bg-mid-navy transition"
          >
            Apply for Funding
          </a>
          <a
            href="mailto:info@frontiercapitalpartners.us"
            className="rounded-lg border-2 border-white/60 px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

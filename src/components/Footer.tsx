import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Company info */}
          <div>
            <Image
              src="/brand/logo-dark.png"
              alt="Frontier Capital Partners"
              width={180}
              height={45}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-soft">
              Technology-driven capital for America&apos;s underserved small
              businesses.
            </p>
            <p className="mt-4 text-sm text-muted">Miami, Florida</p>
          </div>

          {/* Column 2 — For Businesses */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">
              For Businesses
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#your-portal"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Your Portal
                </a>
              </li>
              <li>
                <a
                  href="https://app.frontiercapital.us"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Company</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#security"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Legal</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Client Data Practices
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@frontiercapitalpartners.us"
                  className="text-sm text-soft hover:text-accent transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-muted">
          <p>
            &copy; 2026 Frontier Capital Partners LLC. All rights reserved.
          </p>
          <a
            href="mailto:info@frontiercapitalpartners.us"
            className="mt-4 md:mt-0 hover:text-accent transition"
          >
            info@frontiercapitalpartners.us
          </a>
        </div>
      </div>
    </footer>
  );
}

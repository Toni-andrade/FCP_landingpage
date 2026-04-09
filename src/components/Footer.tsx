import Image from "next/image";
import { Mail, Share2 } from "lucide-react";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { label: "Regulatory", href: "#" },
      { label: "Security", href: "#frontier-engine" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "mailto:info@frontiercapitalpartners.us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-20 lg:py-24 bg-white border-t border-outline-variant/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-16 lg:pb-20 border-b border-outline-variant/10">
          <Image
            src="/brand/logo-light-transparent.png"
            alt="Frontier Capital Partners"
            width={200}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-6">
                <span className="font-mono text-[10px] uppercase text-outline tracking-[0.3em] font-bold">
                  {col.heading}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-headline text-lg lg:text-xl text-primary hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline">
            &copy; 2026 Frontier Capital Partners LLC. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              aria-label="Share"
              className="text-primary hover:text-secondary transition-colors"
            >
              <Share2 className="size-5" />
            </a>
            <a
              href="mailto:info@frontiercapitalpartners.us"
              aria-label="Email"
              className="text-primary hover:text-secondary transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#how-it-works" },
  { label: "Partnerships", href: "#stages" },
  { label: "Insights", href: "#your-portal" },
  { label: "Growth", href: "#frontier-engine" },
  { label: "FAQ", href: "#faq" },
];

const APPLY_URL = "https://apply.frontiercapital.us/apply";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 sm:px-8 py-5 max-w-7xl mx-auto">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/brand/logo-light-transparent.png"
              alt="Frontier Capital Partners"
              width={200}
              height={50}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-headline tracking-tight text-lg transition-colors duration-300 ${
                  i === 0
                    ? "text-primary border-b border-primary pb-1 font-medium"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-7 py-2.5 rounded font-medium hover:bg-primary-container transition-all text-sm uppercase tracking-wider font-label"
            >
              Apply Now
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-white shadow-2xl shadow-primary/20 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-end h-20 px-5">
          <button
            type="button"
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 text-primary"
            onClick={closeMenu}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-1 px-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-headline text-xl text-primary hover:text-secondary transition-colors duration-200 py-4 border-b border-outline-variant/30"
            >
              {link.label}
            </a>
          ))}

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center h-12 rounded bg-primary text-sm font-medium text-on-primary uppercase tracking-wider font-label hover:bg-primary-container transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>
      </nav>
    </>
  );
}

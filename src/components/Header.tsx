"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Your Portal", href: "#your-portal" },
  { label: "Why Frontier", href: "#why-frontier" },
];

const LOGIN_URL = "https://app.frontiercapital.us/login?redirect=%2F";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1B35]/95 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/brand/logo-dark.png"
              alt="Frontier Capital Partners"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4B8BF5] after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop buttons + mobile buttons */}
          <div className="flex items-center gap-3">
            <a
              href={LOGIN_URL}
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-md border border-white/60 text-sm text-white hover:bg-white/10 transition-colors duration-200"
            >
              Log In
            </a>
            <a
              href="https://apply.frontiercapital.us/apply"
              className="inline-flex items-center justify-center h-9 px-5 rounded-md bg-[#4B8BF5] text-sm font-semibold text-white hover:bg-[#4B8BF5]/85 transition-colors duration-200"
            >
              Apply Now
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white ml-1"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-[#0F1B35] shadow-2xl shadow-black/40 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-end h-16 px-5">
          <button
            type="button"
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 text-white"
            onClick={closeMenu}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-base text-white/80 hover:text-[#4B8BF5] transition-colors duration-200 py-3 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-6">
            <a
              href={LOGIN_URL}
              className="inline-flex items-center justify-center h-11 rounded-md border border-white/60 text-sm text-white hover:bg-white/10 transition-colors duration-200"
            >
              Log In
            </a>
            <a
              href="https://apply.frontiercapital.us/apply"
              className="inline-flex items-center justify-center h-11 rounded-md bg-[#4B8BF5] text-sm font-semibold text-white hover:bg-[#4B8BF5]/85 transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

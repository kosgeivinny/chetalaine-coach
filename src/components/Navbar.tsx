"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll listener for sticky header styling
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Simple helper to close mobile menu when navigating
  const handleNavClick = () => setIsOpen(false);

  // Array of navigation items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Blog", href: "#blog" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "shadow-lg backdrop-blur-md bg-white/90 border-b border-[#0F766E]/10" 
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ====== Logo / Brand ====== */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={handleNavClick}
        >
          <div
            aria-hidden
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                     shadow-md bg-[#0F766E] text-white border-2 border-transparent
                     group-hover:border-[#EC4899]/20 group-hover:shadow-[#0F766E]/25
                     transition-all duration-300"
          >
            MC
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold bg-linear-to-r from-[#0F766E] to-[#EC4899] bg-clip-text text-transparent
                          transition-all duration-300">
              Monica Chetalaine
            </div>
            <div className="text-sm text-[#0F766E]/70 font-medium">
              Business Strategy Coach
            </div>
          </div>
        </Link>

        {/* ====== Desktop Navigation ====== */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="relative text-sm font-medium text-gray-700 hover:text-[#0F766E] transition-all duration-300
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                        after:bg-linear-to-r after:from-[#0F766E] after:to-[#EC4899]
                        hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* ====== CTA Button: Vibrant Pink with enhanced hover ====== */}
          <a
            href="#coaching"
            onClick={handleNavClick}
            className="ml-4 px-6 py-2.5 rounded-full font-semibold text-white 
                       bg-[#EC4899] hover:bg-[#be185d]
                       shadow-lg hover:shadow-xl hover:shadow-[#EC4899]/25
                       transition-all duration-300 ease-in-out
                       border-2 border-transparent hover:border-[#EC4899]/20"
            aria-label="Book a one-on-one session"
          >
            Book 1:1
          </a>
        </nav>

        {/* ====== Mobile Menu Button ====== */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-[#0F766E] hover:bg-[#0F766E]/10 
                     transition-all duration-300 hover:shadow-lg"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ====== Mobile Menu Panel ====== */}
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                // Mobile links: Deep Teal text, Vibrant Pink hover
                className="py-2 text-base font-medium text-brand-primary hover:text-brand-accent transition"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA: Vibrant Pink */}
            <a
              href="#coaching"
              onClick={handleNavClick}
              className="mt-4 inline-block text-center px-5 py-3 rounded-full font-semibold 
                         bg-brand-accent text-white hover:bg-brand-accent-darker 
                         shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book 1:1 Strategy Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


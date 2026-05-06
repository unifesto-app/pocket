"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const goldenGradient = "linear-gradient(135deg, #fff462, #ffb700)";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
  { label: "Security", href: "#privacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
    const handleScroll = () => setScrolled(getScrollY() > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-yellow-950/60 shadow-[0_4px_32px_rgba(255,183,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Primary navigation">
          {/* Logo */}
          <a href="/" aria-label="Pocket by Unifesto home" className="flex items-center gap-3 group">
            <span
              className="text-xl md:text-2xl font-bold mt-2 transition-all duration-300"
              style={{
                fontFamily: "var(--font-agrandir)",
                background: goldenGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                display: "inline-block",
              }}
            >
              Pocket
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 pt-2" aria-label="Main links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-base text-slate-300/80 hover:text-white font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: goldenGradient }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 pt-2">
            <a href="https://unifesto.app">
              <Button
                id="nav-back-to-unifesto"
                className="rounded-full px-6 py-2.5 h-auto text-sm font-semibold border-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,183,0,0.4)]"
                style={{ background: "transparent", border: "1px solid #ffb700", color: "#ffb700" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = goldenGradient;
                  el.style.color = "#000000";
                  el.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "transparent";
                  el.style.color = "#ffb700";
                  el.style.borderColor = "#ffb700";
                }}
              >
                ← Back to Unifesto
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#ffb700" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col bg-black/80 backdrop-blur-xl rounded-2xl border border-white/5 mt-1 overflow-hidden">
              {/* Gradient top accent */}
              <div className="h-px w-full" style={{ background: goldenGradient }} />
              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2.5 rounded-xl text-base text-slate-300/80 hover:text-white font-medium hover:bg-white/5 transition-all duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-2 pt-1 pb-1">
                  <a href="https://unifesto.app" className="block">
                    <Button
                      id="mobile-back-to-unifesto"
                      className="mt-1 rounded-full px-6 py-3 h-auto text-sm font-semibold border-0 transition-all duration-300 w-full"
                      style={{ background: goldenGradient, color: "#000000" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      ← Back to Unifesto
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

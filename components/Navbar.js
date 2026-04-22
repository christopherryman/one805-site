"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="https://#" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6971549fded5bf0d04108b39_logo-white.png"
            alt="One805"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
          <a href="#tickets" className="hover:text-gold-400 transition-colors">Tickets</a>
          <a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a>
          <a href="https://#/donate" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">Donate</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#tickets"
            className="px-5 py-2 rounded-full bg-gold-400 text-navy-950 text-sm font-semibold hover:bg-gold-500 transition-colors"
          >
            Get Tickets
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {["#about", "#tickets", "#gallery"].map((href, i) => (
            <a
              key={i}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 font-medium text-lg hover:text-gold-400 transition-colors"
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
            </a>
          ))}
          <a
            href="https://#/donate"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 font-medium text-lg hover:text-gold-400 transition-colors"
          >
            Donate
          </a>
          <a
            href="#tickets"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block text-center px-6 py-3 rounded-full bg-gold-400 text-navy-950 font-semibold"
          >
            Get Tickets
          </a>
        </div>
      )}
    </header>
  );
}

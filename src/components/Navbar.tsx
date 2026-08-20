"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-wide text-white"
        >
          Djomeni Pouke
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            Über mich
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projekte
          </a>

          <a href="#experience" className="hover:text-white transition">
            Erfahrung
          </a>

          <a href="#contact" className="hover:text-white transition">
            Kontakt
          </a>
        </nav>

        <a
          href="/lebenslauf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-5 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition"
        >
          Lebenslauf
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-1 text-gray-300">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition"
            >
              Über mich
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition"
            >
              Projekte
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition"
            >
              Erfahrung
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition"
            >
              Kontakt
            </a>

            <a
              href="/lebenslauf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center px-5 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition"
            >
              Lebenslauf
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

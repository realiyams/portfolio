"use client";

import { useState } from "react";

type Locale = "id" | "en";

type NavItem = {
  label: string;
  id: string;
};

const navItemsByLocale: Record<Locale, NavItem[]> = {
  id: [
    { label: "Proyek", id: "proyek" },
    { label: "Tentang", id: "tentang" },
    { label: "Hubungi", id: "hubungi" },
  ],
  en: [
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ],
};

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  const otherLocale: Locale = locale === "id" ? "en" : "id";

  const switchLocale = () => {
    // ambil hash agar posisi section tidak hilang
    const hash = window.location.hash;
    window.location.href = `/${otherLocale}${hash}`;
  };

  const navItems = navItemsByLocale[locale];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-semibold text-lg tracking-tight text-white cursor-pointer"
        >
          Ilham<span className="text-cyan-400">.</span>
        </button>


        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm text-neutral-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1 pl-4 border-l border-neutral-800 text-xs">
            <button
              onClick={() => locale !== "id" && switchLocale()}
              className={`cursor-pointer uppercase transition ${locale === "id"
                ? "text-cyan-400"
                : "text-neutral-500 hover:text-neutral-300"
                }`}
            >
              ID
            </button>

            <span className="text-neutral-600">/</span>

            <button
              onClick={() => locale !== "en" && switchLocale()}
              className={`cursor-pointer uppercase transition ${locale === "en"
                ? "text-cyan-400"
                : "text-neutral-500 hover:text-neutral-300"
                }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer text-neutral-300 hover:text-white transition"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Top */}
            <span
              className={`absolute h-0.5 w-6 bg-current transform transition duration-300
                ${open ? "rotate-45" : "-translate-y-2"}
              `}
            />

            {/* Middle */}
            <span
              className={`absolute h-0.5 w-6 bg-current transition-all duration-300
                ${open ? "opacity-0" : "opacity-100"}
              `}
            />

            {/* Bottom */}
            <span
              className={`absolute h-0.5 w-6 bg-current transform transition duration-300
                ${open ? "-rotate-45" : "translate-y-2"}
              `}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-neutral-950 border-t border-neutral-800 overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className={`px-6 py-4 flex flex-col gap-4 text-sm text-neutral-300 transform transition-transform duration-300
            ${open ? "translate-y-0" : "-translate-y-2"}
          `}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className="cursor-pointer text-left hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1 pl-2 pt-4 border-t border-neutral-800 text-xs">
            <button
              onClick={() => locale !== "id" && switchLocale()}
              className={`cursor-pointer uppercase transition ${locale === "id"
                ? "text-cyan-400"
                : "text-neutral-500 hover:text-neutral-300"
                }`}
            >
              ID
            </button>

            <span className="text-neutral-600">/</span>

            <button
              onClick={() => locale !== "en" && switchLocale()}
              className={`cursor-pointer uppercase transition ${locale === "en"
                ? "text-cyan-400"
                : "text-neutral-500 hover:text-neutral-300"
                }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

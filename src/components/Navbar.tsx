"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "glass border-b border-indigo-500/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight gradient-text">
              aashish.dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:ashishrana2004@gmail.com"
              className="btn-primary text-sm py-2 px-5"
            >
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/10 text-slate-400 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-indigo-500/10 px-4 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between w-full text-left text-slate-300 hover:text-white font-medium transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/5 bg-transparent border-0 cursor-pointer group"
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span>{link.label}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-indigo-400 transition-all duration-200 group-hover:translate-x-1" />
              </button>
            ))}

            <div className="mt-3 pt-4 border-t border-indigo-500/10">
              <a
                href="mailto:ashishrana2004@gmail.com"
                className="btn-primary text-sm py-3 px-5 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

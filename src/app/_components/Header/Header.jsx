"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 py-4 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tighter text-zinc-900"
          >
            EXAGIC<span className="text-brand">AI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-800">
          <a href="/" className="hover:text-brand transition-all">
            Home
          </a>
          <a href="/capabilities" className="hover:text-brand transition-all">
            AI SEO
          </a>
          <a href="/industries" className="hover:text-brand transition-all">
            SRO
          </a>
          <a href="/lab" className="hover:text-brand transition-all">
            Resources
          </a>
          <a
            href="#contact"
            className="ml-4 rounded-md bg-brand px-6 py-3 text-lg font-bold text-white transition-all hover:bg-brand-dark hover:shadow-lg active:scale-95"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 text-zinc-900"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-32 pb-12">
          <div className="flex flex-col gap-8 text-4xl font-semibold tracking-tight text-zinc-900">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              Home
            </a>
            <a
              href="/capabilities"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              AI SEO
            </a>
            <a
              href="/industries"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              SRO
            </a>
            <a
              href="/lab"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              Resources
            </a>
          </div>

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full rounded-md bg-brand px-8 py-5 text-center text-2xl font-bold text-white shadow-xl active:scale-95 transition-all"
            >
              Schedule a Call
            </a>
            <p className="mt-6 text-sm text-zinc-500 text-center">
              Specialized AI SEO for the SF Industrial Corridor.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

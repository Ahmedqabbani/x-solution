"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X, ArrowUpRight, ChevronDown, Moon, Sun } from "lucide-react";

export function Header() {
  const { t, locale, toggleLocale, theme, toggleTheme } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.nav.services, hasDropdown: true },
    { href: "#leadership", label: t.nav.leadership, hasDropdown: false },
    { href: "#audit", label: t.nav.audit, hasDropdown: false },
    { href: "#calculator", label: t.nav.calculator, hasDropdown: false },
    { href: "#pricing", label: t.nav.pricing, hasDropdown: false },
    { href: "#protocol", label: t.nav.protocol, hasDropdown: false },
    { href: "#faq", label: t.nav.faq, hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-[#060A10]/95 backdrop-blur-xl border-b border-brand-border/80 shadow-2xl py-3 text-white"
            : "bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-lg py-3 text-neutral-900"
          : isDark
          ? "bg-transparent py-4 text-white"
          : "bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4 text-neutral-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Emblem + Email Handle (Exact UI from screenshot) */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isDark
                    ? "bg-brand-navy border border-brand-border"
                    : "bg-neutral-100 border border-neutral-200"
                }`}
              >
                <Image
                  src="/brand/logo-icon.png"
                  alt="X Solution Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>

              <span
                className={`text-xs sm:text-sm font-medium tracking-tight font-sans transition-colors ${
                  isDark
                    ? "text-slate-300 group-hover:text-brand-orange"
                    : "text-neutral-700 group-hover:text-neutral-950"
                }`}
              >
                /xsolutionstudio@gmail.com
              </span>
            </a>
          </div>

          {/* Center Navigation Links (Exact UI from screenshot) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-normal tracking-wide transition-colors flex items-center gap-1 ${
                  isDark
                    ? "text-slate-300 hover:text-brand-orange"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 opacity-60" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Hub: Theme Toggle + Language Toggle + CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Switcher Toggle (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isDark
                  ? "bg-brand-navy/60 border-brand-border text-slate-300 hover:text-brand-orange"
                  : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
              }`}
              title="Toggle Dark / Light Mode"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Light UI</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-neutral-800" />
                  <span>Dark UI</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isDark
                  ? "bg-brand-navy/60 border-brand-border text-slate-300 hover:text-white"
                  : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
              }`}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>{locale === "en" ? "عربي" : "English"}</span>
            </button>

            {/* Book A Demo Text Link */}
            <a
              href="#protocol"
              className={`text-xs font-medium transition-colors hidden md:inline-block ${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {locale === "en" ? "Book A Demo" : "طلب عرض"}
            </a>

            {/* Get Started Button */}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${
                isDark
                  ? "bg-brand-orange hover:bg-brand-orange-light text-white shadow-orange-glow"
                  : "bg-neutral-950 hover:bg-neutral-800 text-white"
              }`}
            >
              <span>{locale === "en" ? "Get Started" : "ابدأ الآن"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg border ${
                isDark
                  ? "border-brand-border text-brand-orange bg-brand-navy"
                  : "border-neutral-200 text-neutral-800 bg-neutral-100"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleLocale}
              className={`px-2 py-1 rounded-md text-xs font-bold border ${
                isDark
                  ? "border-brand-border text-brand-orange"
                  : "border-neutral-200 text-neutral-900 bg-neutral-100"
              }`}
            >
              {locale === "en" ? "عربي" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg border ${
                isDark
                  ? "border-brand-border text-slate-300"
                  : "border-neutral-200 text-neutral-800"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b mt-3 px-4 pt-3 pb-6 space-y-3 ${
            isDark
              ? "bg-brand-dark/95 border-brand-border text-white"
              : "bg-white border-neutral-200 text-neutral-900"
          }`}
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-sm hover:bg-neutral-500/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-orange text-white font-medium text-xs uppercase shadow-orange-glow"
            >
              <span>{locale === "en" ? "Get Started" : "ابدأ الآن"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

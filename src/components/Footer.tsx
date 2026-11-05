"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Instagram, Mail, Globe, MapPin } from "lucide-react";

export function Footer() {
  const { t, locale, toggleLocale } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/60 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-brand-border bg-brand-navy flex items-center justify-center p-1">
                <Image
                  src="/brand/logo-icon.png"
                  alt="X Solution Icon"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-syncopate font-bold text-lg tracking-wider text-white">
                  X SOLUTION
                </span>
                <span className="text-[10px] tracking-widest text-brand-orange uppercase font-semibold">
                  {t.footer.tagline}
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/xsolutionstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border hover:border-brand-orange/50 flex items-center justify-center text-slate-300 hover:text-brand-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:xsolutionstudio@gmail.com"
                className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border hover:border-brand-orange/50 flex items-center justify-center text-slate-300 hover:text-brand-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={toggleLocale}
                className="px-3 h-9 rounded-lg bg-brand-navy border border-brand-border hover:border-brand-orange/50 flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-brand-orange" />
                <span>{locale === "en" ? "عربي" : "English"}</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-syncopate font-bold text-xs text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#services" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.services}
              </a>
              <a href="#leadership" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.leadership}
              </a>
              <a href="#audit" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.audit}
              </a>
              <a href="#calculator" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.calculator}
              </a>
              <a href="#pricing" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.pricing}
              </a>
              <a href="#protocol" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.protocol}
              </a>
              <a href="#faq" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.faq}
              </a>
              <a href="#contact" className="hover:text-brand-orange transition-colors py-1">
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Operational Headquarters (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-syncopate font-bold text-xs text-white uppercase tracking-wider mb-4">
              {locale === "en" ? "HQ & Verification" : "المقر والتوثيق"}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Cairo, Egypt</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Active operations: Mid-2025 through Late 2026. Specialized acquisition engine for Egyptian SMEs.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-navy/60 hover:bg-brand-navy border border-brand-border text-xs text-slate-300 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-brand-orange" />
                <span>{t.footer.backToTop}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Attribution Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.legal}</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js 15</span>
            <span>•</span>
            <span>SEO & GEO Optimized</span>
            <span>•</span>
            <span>100% Dark Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

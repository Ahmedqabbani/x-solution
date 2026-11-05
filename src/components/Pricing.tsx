"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, ArrowUpRight, Zap, Star, ShieldAlert } from "lucide-react";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 relative bg-brand-dark overflow-hidden border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.pricing.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.pricing.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.pricing.tiers.map((tier) => {
            const isFeatured = tier.featured;

            return (
              <div
                key={tier.id}
                className={`glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between relative ${
                  isFeatured
                    ? "border-2 border-brand-orange bg-brand-card/95 shadow-orange-glow lg:-translate-y-2"
                    : "border-brand-border/80"
                }`}
              >
                {/* Top Badge */}
                {tier.badge && (
                  <div className="mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isFeatured
                          ? "bg-brand-orange text-white"
                          : "bg-brand-navy border border-brand-border text-slate-300"
                      }`}
                    >
                      {isFeatured && <Star className="w-3 h-3 fill-white" />}
                      <span>{tier.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-syncopate font-bold text-xl sm:text-2xl text-white uppercase mb-2">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-brand-orange font-semibold uppercase tracking-wider mb-6">
                    {tier.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-brand-border/70">
                    <span className="font-syncopate font-bold text-3xl sm:text-4xl text-white block mb-1">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {tier.cadence}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Scope & Parameters:
                    </span>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    isFeatured
                      ? "bg-brand-orange hover:bg-brand-orange-light text-white shadow-orange-glow hover:shadow-orange-glow-lg"
                      : "bg-brand-navy hover:bg-brand-navy-light text-slate-200 border border-brand-border hover:border-brand-orange/40"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

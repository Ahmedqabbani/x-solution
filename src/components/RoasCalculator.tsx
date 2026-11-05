"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator, ArrowUpRight, TrendingUp, DollarSign, ShoppingBag, Sparkles } from "lucide-react";

export function RoasCalculator() {
  const { t, locale } = useLanguage();

  const [adSpend, setAdSpend] = useState<number>(25000);
  const [aov, setAov] = useState<number>(650);

  // Agency proven CPA benchmark in Cairo ~42 EGP (range 36.55 - 50.06)
  const benchmarkCpa = 42;
  const projectedOrders = Math.round(adSpend / benchmarkCpa);
  const projectedRevenue = projectedOrders * aov;
  const estimatedRoas = (projectedRevenue / adSpend).toFixed(2);

  return (
    <section id="calculator" className="py-24 relative bg-brand-dark/95 border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.calculator.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-brand-border/90 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Ad Spend Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="ad-spend-range" className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-brand-orange" />
                    <span>{t.calculator.adSpendLabel}</span>
                  </label>
                  <span className="font-mono text-base font-bold text-brand-orange bg-brand-navy px-3 py-1 rounded-lg border border-brand-border">
                    {adSpend.toLocaleString()} {locale === "en" ? "EGP" : "ج.م"}
                  </span>
                </div>
                <input
                  id="ad-spend-range"
                  type="range"
                  min="5000"
                  max="150000"
                  step="2500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  aria-label={t.calculator.adSpendLabel}
                  className="w-full h-2.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1.5">
                  <span>5,000 EGP</span>
                  <span>75,000 EGP</span>
                  <span>150,000 EGP</span>
                </div>
              </div>

              {/* AOV Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="aov-range" className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-blue-400" />
                    <span>{t.calculator.aovLabel}</span>
                  </label>
                  <span className="font-mono text-base font-bold text-blue-400 bg-brand-navy px-3 py-1 rounded-lg border border-brand-border">
                    {aov.toLocaleString()} {locale === "en" ? "EGP" : "ج.م"}
                  </span>
                </div>
                <input
                  id="aov-range"
                  type="range"
                  min="200"
                  max="2500"
                  step="50"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  aria-label={t.calculator.aovLabel}
                  className="w-full h-2.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1.5">
                  <span>200 EGP</span>
                  <span>1,250 EGP</span>
                  <span>2,500 EGP</span>
                </div>
              </div>

              {/* Benchmark Note */}
              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-brand-border/60">
                {t.calculator.cpaBenchmarkNote}
              </p>
            </div>

            {/* Results Display (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-navy to-brand-navy-dark rounded-2xl p-6 sm:p-7 border border-brand-border flex flex-col justify-between shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6 block">
                Calculated Projection
              </span>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {t.calculator.projectedOrders}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-syncopate font-bold text-3xl sm:text-4xl text-white">
                      ~{projectedOrders.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">
                      {locale === "en" ? "Orders / Mo" : "طلب شهرياً"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {t.calculator.projectedRevenue}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-syncopate font-bold text-3xl sm:text-4xl text-brand-orange">
                      {projectedRevenue.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">
                      {locale === "en" ? "EGP" : "ج.م"}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {t.calculator.estimatedRoas}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-syncopate font-bold text-4xl sm:text-5xl text-emerald-400">
                      {estimatedRoas}x
                    </span>
                    <span className="text-[11px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      High-Efficiency
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-xs uppercase tracking-wider shadow-orange-glow transition-all"
              >
                <span>{t.calculator.ctaCalculate}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

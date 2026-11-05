"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, BarChart2, Video, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export function Process() {
  const { t, dir } = useLanguage();

  const steps = [
    {
      data: t.process.step1,
      icon: Search,
      num: "01",
    },
    {
      data: t.process.step2,
      icon: BarChart2,
      num: "02",
    },
    {
      data: t.process.step3,
      icon: Video,
      num: "03",
    },
  ];

  return (
    <section id="protocol" className="py-24 relative bg-brand-dark/95 border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.process.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.process.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 3 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between relative group border-brand-border/80"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-syncopate font-bold text-3xl text-brand-orange">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy border border-brand-border flex items-center justify-center group-hover:border-brand-orange/40 transition-colors">
                      <Icon className="w-6 h-6 text-slate-200 group-hover:text-brand-orange transition-colors" />
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded bg-brand-navy border border-brand-border text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">
                    {step.data.badge}
                  </span>

                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 leading-snug">
                    {step.data.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-4">
                    {step.data.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.data.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Timeline: {step.data.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

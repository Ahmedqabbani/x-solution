"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TrendingUp, Video, Globe, Share2, Target, Check, Sparkles, Layers } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Video,
    Globe,
    Share2,
    Target,
  };

  return (
    <section id="services" className="py-24 relative bg-brand-dark/95 border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.services.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.services.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between relative group ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-brand-orange/40 bg-brand-card/90" : ""
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-syncopate font-bold text-2xl text-slate-500 group-hover:text-brand-orange transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-border flex items-center justify-center group-hover:border-brand-orange/50 group-hover:bg-brand-navy-light transition-all">
                      <Icon className="w-6 h-6 text-brand-orange" />
                    </div>
                  </div>

                  <h3 className="font-syncopate font-bold text-lg sm:text-xl text-white uppercase mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Deliverables List */}
                  <div className="pt-5 border-t border-brand-border/60 mb-6">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benchmark Highlight */}
                  {service.metricsHighlight && (
                    <div className="px-3.5 py-2.5 rounded-xl bg-brand-navy/60 border border-brand-border/80 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">
                        {service.metricsHighlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

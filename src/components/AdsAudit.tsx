"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BarChart3, TrendingDown, Target, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

export function AdsAudit() {
  const { t } = useLanguage();

  return (
    <section id="audit" className="py-24 relative bg-brand-dark overflow-hidden border-t border-brand-border/40">
      {/* Visual Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.audit.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.audit.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            {t.audit.subtitle}
          </p>

          <span className="inline-block text-xs font-mono text-brand-orange bg-brand-navy/80 px-3.5 py-1.5 rounded-full border border-brand-border">
            {t.audit.reportingPeriod}
          </span>
        </div>

        {/* Live Ads Manager Data Table Container */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-brand-border/80 shadow-2xl mb-12">
          <div className="px-6 py-4 bg-brand-navy/80 border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">
                Meta Ads Manager • Live Campaign Telemetry (Cairo Metro Area)
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Source: Meta Ads Manager Export
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-brand-navy/40 border-b border-brand-border text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-4 px-5">{t.audit.tableHeaders.creative}</th>
                  <th className="py-4 px-4">{t.audit.tableHeaders.duration}</th>
                  <th className="py-4 px-4 text-right">{t.audit.tableHeaders.reach}</th>
                  <th className="py-4 px-4 text-right">{t.audit.tableHeaders.impressions}</th>
                  <th className="py-4 px-3 text-center">{t.audit.tableHeaders.frequency}</th>
                  <th className="py-4 px-4 text-right text-brand-orange font-bold">
                    {t.audit.tableHeaders.conversations}
                  </th>
                  <th className="py-4 px-4 text-right">{t.audit.tableHeaders.spent}</th>
                  <th className="py-4 px-4 text-right text-emerald-400 font-bold">
                    {t.audit.tableHeaders.cpa}
                  </th>
                  <th className="py-4 px-4 text-right text-white font-bold">
                    {t.audit.tableHeaders.cpc}
                  </th>
                  <th className="py-4 px-4 text-right">{t.audit.tableHeaders.cpm}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/40 font-mono">
                {t.audit.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-brand-navy/30 transition-colors"
                  >
                    <td className="py-4 px-5 font-sans font-semibold text-white">
                      {row.creative}
                    </td>
                    <td className="py-4 px-4 text-slate-400">{row.duration}</td>
                    <td className="py-4 px-4 text-right text-slate-300">{row.reach}</td>
                    <td className="py-4 px-4 text-right text-slate-300">{row.impressions}</td>
                    <td className="py-4 px-3 text-center text-slate-300">{row.frequency}</td>
                    <td className="py-4 px-4 text-right font-bold text-brand-orange">
                      {row.inquiries}
                    </td>
                    <td className="py-4 px-4 text-right text-slate-300">{row.amountSpent}</td>
                    <td className="py-4 px-4 text-right font-bold text-emerald-400">
                      {row.cpa}
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-white">
                      {row.cpc}
                    </td>
                    <td className="py-4 px-4 text-right text-slate-400">{row.cpm}</td>
                  </tr>
                ))}

                {/* Consolidated Total Row */}
                <tr className="bg-brand-navy/70 border-t-2 border-brand-orange/40 font-bold">
                  <td className="py-4 px-5 font-syncopate text-xs text-brand-orange uppercase">
                    {t.audit.total.creative}
                  </td>
                  <td className="py-4 px-4 text-slate-300">{t.audit.total.duration}</td>
                  <td className="py-4 px-4 text-right text-white">{t.audit.total.reach}</td>
                  <td className="py-4 px-4 text-right text-white">{t.audit.total.impressions}</td>
                  <td className="py-4 px-3 text-center text-white">{t.audit.total.frequency}</td>
                  <td className="py-4 px-4 text-right text-brand-orange text-sm">
                    {t.audit.total.inquiries}
                  </td>
                  <td className="py-4 px-4 text-right text-white">{t.audit.total.amountSpent}</td>
                  <td className="py-4 px-4 text-right text-emerald-400 text-sm">
                    {t.audit.total.cpa}
                  </td>
                  <td className="py-4 px-4 text-right text-white text-sm">
                    {t.audit.total.cpc}
                  </td>
                  <td className="py-4 px-4 text-right text-slate-300">{t.audit.total.cpm}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Core Strategic Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-brand-orange">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-brand-orange" />
              <h4 className="font-bold text-white text-sm uppercase">
                {t.audit.takeaway1Title}
              </h4>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.audit.takeaway1Desc}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-emerald-400">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-white text-sm uppercase">
                {t.audit.takeaway2Title}
              </h4>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.audit.takeaway2Desc}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-blue-400">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-white text-sm uppercase">
                {t.audit.takeaway3Title}
              </h4>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.audit.takeaway3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

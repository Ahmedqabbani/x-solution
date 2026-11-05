"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { LineChart, Film, Compass, CheckCircle2, Users, ShieldAlert } from "lucide-react";

export function Leadership() {
  const { t } = useLanguage();

  const members = [
    {
      data: t.leadership.member1,
      icon: LineChart,
      color: "from-orange-500/20 to-transparent",
      accent: "text-brand-orange",
      border: "hover:border-brand-orange/60",
    },
    {
      data: t.leadership.member2,
      icon: Film,
      color: "from-blue-500/20 to-transparent",
      accent: "text-blue-400",
      border: "hover:border-blue-400/60",
    },
    {
      data: t.leadership.member3,
      icon: Compass,
      color: "from-emerald-500/20 to-transparent",
      accent: "text-emerald-400",
      border: "hover:border-emerald-400/60",
    },
  ];

  return (
    <section id="leadership" className="py-24 relative bg-brand-dark overflow-hidden">
      {/* Background visual detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.leadership.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.leadership.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* 3 Co-Founders Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {members.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group ${item.border}`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-navy border border-brand-border text-slate-300">
                      {item.data.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-navy/80 border border-brand-border flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
                    {item.data.role}
                  </span>

                  <h3 className="font-bold text-lg sm:text-xl text-white mb-4 leading-snug">
                    {item.data.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.data.focus}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-6 border-t border-brand-border/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                    Key Execution Portfolios:
                  </span>
                  <ul className="space-y-2.5">
                    {item.data.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Embedded Growth Model Banner */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-brand-orange/30 relative overflow-hidden bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-brand-navy/90">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
                Strategic Advantage
              </span>
              <h4 className="font-syncopate font-bold text-xl sm:text-2xl text-white uppercase mb-3">
                {t.leadership.embeddedTitle}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.leadership.embeddedText}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-brand-border p-2 bg-brand-dark flex items-center justify-center">
                <Image
                  src="/brand/logo-lockup.png"
                  alt="X Solution Lockup"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Direct Stakeholder Access
                </span>
                <span className="text-xs text-slate-400">
                  Zero Junior Hand-Offs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

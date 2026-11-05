"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Heart,
  MessageCircle,
  ShoppingCart,
  Send,
  Star,
  Play,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const { locale, theme } = useLanguage();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#060A10] text-white"
          : "bg-white text-neutral-900 border-b border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Editorial Headline (Exact UI from screenshot) */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-5 border transition-colors bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>
              {locale === "en"
                ? "Cairo, Egypt • Your Business X Solution"
                : "القاهرة، مصر • حل أعمالك المتكامل"}
            </span>
          </div>

          <h1 className="font-hero-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[78px] tracking-tight leading-[1.05] mb-5">
            {locale === "en" ? (
              <>
                Data-Driven Conversion
                <br />
                <span className={isDark ? "text-brand-orange" : "text-neutral-950"}>
                  Growth Right Away
                </span>
              </>
            ) : (
              <>
                نمو تحويلي قائم على البيانات
                <br />
                <span className={isDark ? "text-brand-orange" : "text-neutral-950"}>
                  لمشروعك من اليوم الأول
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 ${
              isDark ? "text-slate-400" : "text-neutral-600"
            }`}
          >
            {locale === "en" ? (
              "From concept to conversion — we help Egyptian consumer brands scale sales through data-backed Meta Ads, conversion-engineered video content, and high-speed web storefronts."
            ) : (
              "من الفكرة إلى التحويل الفعلي — نساعد البراندات المصرية والشركات المتوسطة والصغيرة على مضاعفة مبيعاتها عبر إعلانات ميتا ومحتوى الفيديوهات القصيرة ومتاجر إلكترونية سريعة."
            )}
          </p>

          {/* Dual Pill Action Buttons */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <a
              href="#pricing"
              className={`rounded-full text-xs sm:text-sm font-semibold px-7 py-3.5 transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
                isDark
                  ? "bg-brand-orange hover:bg-brand-orange-light text-white shadow-orange-glow"
                  : "bg-neutral-950 hover:bg-neutral-800 text-white"
              }`}
            >
              <span>{locale === "en" ? "Explore Growth Retainers" : "استكشف باقات النمو"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#audit"
              className={`rounded-full text-xs sm:text-sm font-semibold px-7 py-3.5 transition-all border active:scale-95 ${
                isDark
                  ? "bg-brand-navy/60 hover:bg-brand-navy border-brand-border text-slate-200"
                  : "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300"
              }`}
            >
              <span>{locale === "en" ? "View Live Ads Audit" : "تقرير الأداء الموثق"}</span>
            </a>
          </div>
        </div>

        {/* Central Stage: Smartphone Mockup with 5 Orbiting Floating Cards */}
        <div className="relative w-full max-w-[1080px] mx-auto min-h-[580px] sm:min-h-[640px] flex items-center justify-center">
          {/* Arched Sunset Gradient & Ring Behind Phone */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[540px] sm:w-[720px] h-[360px] sm:h-[440px] rounded-t-full pointer-events-none z-0 blur-md ${
              isDark
                ? "bg-gradient-to-t from-brand-orange/25 via-brand-navy/40 to-transparent"
                : "bg-gradient-to-t from-amber-100/70 via-amber-50/40 to-transparent"
            }`}
          />
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[540px] sm:w-[720px] h-[360px] sm:h-[440px] rounded-t-full border pointer-events-none z-0 ${
              isDark ? "border-brand-orange/30" : "border-neutral-200/70"
            }`}
          />

          {/* Central Smartphone Mockup (Fixed width 280px-310px) */}
          <div className="relative z-10 w-[260px] sm:w-[290px] md:w-[310px] aspect-[9/18.5] rounded-[44px] bg-neutral-950 p-2.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] border-[4px] border-neutral-800">
            {/* Phone Screen Container */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-neutral-900">
              {/* Top Dynamic Island / Speaker Pill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-950 rounded-full z-30" />

              {/* Creator Video Photo */}
              <Image
                src="/hero/creator-phone.jpg"
                alt="Direct Response Ad Creator"
                fill
                className="object-cover"
                priority
              />

              {/* In-Screen Creator Header Bar */}
              <div className="absolute top-8 left-3 right-3 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white/60 relative">
                    <Image
                      src="/brand/logo-icon.png"
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] text-white font-medium">
                    @xsolutionstudio
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>Ad Active</span>
                </div>
              </div>

              {/* Bottom In-Screen Metrics Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 text-white">
                <span className="text-[10px] uppercase font-bold text-brand-orange block mb-0.5">
                  Direct-Response Reel
                </span>
                <span className="text-xs font-semibold block leading-tight">
                  High-Converting Hook #01
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP/TABLET ORBITING CARDS (Hidden on very small mobile to prevent overlap) */}
          <div className="hidden md:block">
            {/* 1. TOP-LEFT CARD: Blue Skincare/Cosmetics Product Card */}
            <div className="absolute top-8 left-1/2 -translate-x-[360px] lg:-translate-x-[420px] z-20 w-36 lg:w-40 aspect-square rounded-2xl bg-[#E2EEF8] p-3 shadow-xl border border-white/90 overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-neutral-800 shadow-xs">
                  0:30
                </span>
                <span className="text-[9px] font-semibold text-neutral-500 uppercase">
                  DTC Product
                </span>
              </div>
              <div className="relative w-full h-24 mx-auto my-auto">
                <Image
                  src="/hero/product-bottle.jpg"
                  alt="Cosmetic Serum Product"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 3. MID-LEFT CARD: Pink 5-Star Rating Pill */}
            <div className="absolute top-[260px] left-1/2 -translate-x-[320px] lg:-translate-x-[380px] z-20 rounded-full bg-[#FFB5D7] px-4 py-2 shadow-lg border border-white/90 flex items-center gap-1.5 hover:scale-105 transition-transform">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900"
                />
              ))}
              <span className="text-[10px] font-bold text-neutral-900 ml-1">
                5.0 ROAS
              </span>
            </div>

            {/* 4. BOTTOM-LEFT CARD: Warm Yellow Engagement & CPC Card */}
            <div className="absolute bottom-12 left-1/2 -translate-x-[370px] lg:-translate-x-[440px] z-20 w-48 rounded-2xl bg-[#FFE177] p-4 text-neutral-900 shadow-xl border border-white/80 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                {/* 4-Bar Chart Icon */}
                <div className="flex items-end gap-1 h-8">
                  <span className="w-1.5 h-3 bg-neutral-900 rounded-xs" />
                  <span className="w-1.5 h-6 bg-neutral-900 rounded-xs" />
                  <span className="w-1.5 h-4 bg-neutral-900 rounded-xs" />
                  <span className="w-1.5 h-8 bg-neutral-900 rounded-xs" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-neutral-800 block">
                    Avg. Click Cost
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-bold text-xl tracking-tight">9.57 EGP</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. TOP-RIGHT CARD: Mint Green Sales & Inquiries Card */}
            <div className="absolute top-6 left-1/2 translate-x-[170px] lg:translate-x-[200px] z-20 w-52 rounded-2xl bg-[#B8F2D0] p-4 text-neutral-900 shadow-xl border border-white/80 flex items-center justify-between hover:scale-105 transition-transform">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-3xl tracking-tight">39</span>
                  <span className="text-xs font-semibold">Inquiries</span>
                </div>
                <span className="text-[11px] text-neutral-700 block mb-2 font-medium">
                  Cairo B2B Campaign
                </span>
                <span className="inline-block text-[11px] font-bold bg-white px-2.5 py-0.5 rounded-full shadow-xs text-neutral-900">
                  36.55 EGP CPA
                </span>
              </div>

              <div className="relative w-14 h-24">
                <Image
                  src="/hero/green-bottle.jpg"
                  alt="Bottle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 5. BOTTOM-RIGHT CARD: White Social Ad Preview Card */}
            <div className="absolute bottom-10 left-1/2 translate-x-[180px] lg:translate-x-[220px] z-20 w-48 rounded-2xl bg-white p-2.5 shadow-2xl border border-neutral-200/80 text-neutral-800 hover:scale-105 transition-transform">
              <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2 bg-neutral-100">
                <Image
                  src="/hero/creator-green.jpg"
                  alt="Creator Social"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-black/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  14.8k Reach
                </span>
              </div>

              <div className="flex items-center justify-between px-1 text-neutral-600">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <MessageCircle className="w-3.5 h-3.5" />
                  <ShoppingCart className="w-3.5 h-3.5" />
                </div>
                <Send className="w-3.5 h-3.5 text-neutral-500" />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE COMPANION CARDS (Displayed cleanly below phone on mobile screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 md:hidden">
          <div className="rounded-xl bg-[#B8F2D0] p-3 text-neutral-900">
            <span className="text-xl font-bold block">39 Leads</span>
            <span className="text-[10px] text-neutral-700">36.55 EGP CPA</span>
          </div>
          <div className="rounded-xl bg-[#FFE177] p-3 text-neutral-900">
            <span className="text-xl font-bold block">9.57 EGP</span>
            <span className="text-[10px] text-neutral-700">Avg. Click CPC</span>
          </div>
          <div className="rounded-xl bg-[#FFB5D7] p-3 text-neutral-900 flex items-center justify-between">
            <span className="text-sm font-bold">5.0 ROAS</span>
            <span className="text-xs">★★★★★</span>
          </div>
          <div className="rounded-xl bg-[#E2EEF8] p-3 text-neutral-900">
            <span className="text-sm font-bold block">DTC Video</span>
            <span className="text-[10px] text-neutral-600">Hook-First Ads</span>
          </div>
        </div>

        {/* Client & Commercial Sectors Ticker (Exact UI layout with Egypt Market Brands) */}
        <div
          className={`pt-12 mt-6 border-t flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 ${
            isDark ? "border-brand-border/40 opacity-80" : "border-neutral-200 opacity-70"
          }`}
        >
          <span className="font-serif font-bold text-sm sm:text-base tracking-wider">
            CAIRO APPAREL
          </span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-widest uppercase">
            MODA EGYPT
          </span>
          <span className="font-serif italic font-bold text-sm sm:text-base tracking-wider">
            URBAN FOOTWEAR
          </span>
          <span className="font-sans font-bold text-xs sm:text-sm lowercase tracking-tight">
            glow cosmetics
          </span>
          <span className="font-sans font-medium text-xs sm:text-sm tracking-wide uppercase">
            LIFESTYLE LAB
          </span>
          <span className="font-sans font-bold text-[11px] sm:text-xs uppercase tracking-widest">
            EGY COMMERCE
          </span>
          <span className="font-serif font-black text-xs sm:text-sm uppercase">
            DTC SPECIALTY
          </span>
        </div>
      </div>
    </section>
  );
}

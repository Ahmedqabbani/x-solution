"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, MessageSquare, Mail, Instagram, MapPin, CheckCircle, AlertCircle, PhoneCall, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const { t, locale } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    email: "",
    phone: "",
    monthlyBudget: "",
    service: "",
    websiteUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Pre-filled WhatsApp message for Egyptian business operators
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      locale === "en"
        ? `Hello X Solution Studio,\n\nI want to schedule a 10-minute diagnostic session for my brand.\n• Name: ${formData.fullName || "Prospective Client"}\n• Brand: ${formData.brandName || "N/A"}\n• Service: ${formData.service || "Integrated Growth"}\n• Budget: ${formData.monthlyBudget || "N/A"}\n• Note: ${formData.message || "Looking to scale sales"}`
        : `مرحباً إكس سوليوشن ستوديو،\n\nأرغب في حجز جلسة تشخيصية لمشروعي.\n• الاسم: ${formData.fullName || "عميل مهتم"}\n• اسم البراند: ${formData.brandName || "غير محدد"}\n• الخدمة المطلوبة: ${formData.service || "باقة النمو"}\n• الميزانية المقترحة: ${formData.monthlyBudget || "غير محدد"}\n• التفاصيل: ${formData.message || "أرغب في زيادة المبيعات"}`
    );
    return `https://wa.me/201000000000?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-brand-dark/95 border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-orange mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="font-syncopate font-bold text-2xl sm:text-4xl text-white uppercase mb-4 leading-tight">
            {t.contact.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact & Lead Capture Form (8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-2xl">
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-syncopate font-bold text-xl text-white uppercase">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {t.contact.form.successMessage}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        fullName: "",
                        brandName: "",
                        email: "",
                        phone: "",
                        monthlyBudget: "",
                        service: "",
                        websiteUrl: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-brand-navy border border-brand-border text-xs font-semibold uppercase text-slate-300 hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.fullName} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t.contact.form.fullNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Brand Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.brandName} *
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      placeholder={t.contact.form.brandNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Monthly Budget Tier */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.monthlyBudget}
                    </label>
                    <select
                      name="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/90 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors"
                    >
                      <option value="">{t.contact.form.selectBudget}</option>
                      <option value="Under 10k EGP">{t.contact.form.budgetOption1}</option>
                      <option value="10k - 25k EGP">{t.contact.form.budgetOption2}</option>
                      <option value="25k - 60k EGP">{t.contact.form.budgetOption3}</option>
                      <option value="60k+ EGP">{t.contact.form.budgetOption4}</option>
                    </select>
                  </div>

                  {/* Primary Service Objective */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      {t.contact.form.service}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/90 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors"
                    >
                      <option value="">{t.contact.form.selectService}</option>
                      <option value="14-Day Sprint">{t.contact.form.serviceOption1}</option>
                      <option value="Growth Retainer">{t.contact.form.serviceOption2}</option>
                      <option value="Media Buying">{t.contact.form.serviceOption3}</option>
                      <option value="Video Content">{t.contact.form.serviceOption4}</option>
                      <option value="Web Architecture">{t.contact.form.serviceOption5}</option>
                    </select>
                  </div>
                </div>

                {/* Website / Instagram Link */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t.contact.form.websiteUrl}
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    placeholder={t.contact.form.websiteUrlPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>

                {/* Message / Bottlenecks */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-brand-border focus:border-brand-orange text-white text-sm outline-none transition-colors placeholder:text-slate-500 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{t.contact.form.errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-xs uppercase tracking-wider shadow-orange-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? t.contact.form.submitting : t.contact.form.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Agency Hub & Fast Channels (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Direct Channels Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-brand-border/80 space-y-6">
              <h3 className="font-syncopate font-bold text-base text-white uppercase tracking-wider">
                {t.contact.directChannels}
              </h3>

              <div className="space-y-4">
                {/* Email Direct */}
                <a
                  href="mailto:xsolutionstudio@gmail.com"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-navy/50 hover:bg-brand-navy border border-brand-border transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center shrink-0 text-brand-orange group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {t.contact.emailDirect}
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-brand-orange transition-colors">
                      xsolutionstudio@gmail.com
                    </span>
                  </div>
                </a>

                {/* Instagram Direct */}
                <a
                  href="https://www.instagram.com/xsolutionstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-navy/50 hover:bg-brand-navy border border-brand-border transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center shrink-0 text-pink-400 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {t.contact.instagramDirect}
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-brand-orange transition-colors">
                      @xsolutionstudio
                    </span>
                  </div>
                </a>

                {/* HQ Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-navy/50 border border-brand-border">
                  <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center shrink-0 text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {t.contact.locationDirect}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {t.contact.locationText}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Instant Action Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-gradient-to-b from-brand-navy to-emerald-950/20 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">
                  {locale === "en" ? "Instant WhatsApp Channel" : "تواصل فوري عبر واتساب"}
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {t.contact.whatsappText}
              </p>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>{t.contact.whatsappBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

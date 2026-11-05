# X Solution Studio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Overview
Build a dark-mode bilingual (English & Arabic) agency website for **X Solution Studio** (Cairo, Egypt), engineered to convert local brand owners and SMEs into diagnostic consultations and growth retainers. Includes verified Meta Ads performance data, transparent pricing tiers, an interactive ROAS calculator, email lead dispatch, enterprise-grade SEO (JSON-LD schema, sitemap, robots), and GEO (Generative Engine Optimization with `llms.txt`).

---

## Proposed File & Directory Architecture

```
/Users/Ahmed/Downloads/Xsolution/
├── docs/
│   └── superpowers/
│       ├── specs/
│       │   └── 2026-11-05-xsolution-agency-website-design.md
│       └── plans/
│           └── 2026-11-05-xsolution-agency-website.md
├── public/
│   ├── brand/
│   │   ├── logo-primary.png       (Frame 25.png - Master emblem + tagline)
│   │   ├── logo-icon.png          (Frame 36.png - Standalone geometric X mark)
│   │   ├── banner-wide.png        (Frame 39.png - Wide brand banner)
│   │   ├── vector-detail.png      (Frame 66.png - Typographic vector detail)
│   │   └── logo-lockup.png        (Frame 67.png - Centered square lockup)
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── llms.txt                   (Generative Engine Optimization summary)
│   └── llms-full.txt              (Full LLM crawlable agency data & audit)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       (API route for lead capture & email dispatch)
│   │   ├── globals.css            (Tailwind & custom dark theme styling, glows)
│   │   ├── layout.tsx             (Root layout, bilingual font injection, SEO metadata)
│   │   └── page.tsx               (Main single-page app assembling all sections)
│   ├── components/
│   │   ├── Header.tsx             (Navbar, brand lockup, nav links, lang toggle, CTA)
│   │   ├── Hero.tsx               (High-impact hero, badge, stats bar, primary CTAs)
│   │   ├── Leadership.tsx         (3 Co-Founders operational architecture)
│   │   ├── Services.tsx           (5 Core Service Pillars with deliverable breakdowns)
│   │   ├── AdsAudit.tsx           (Verified Meta Ads Manager case study table & metrics)
│   │   ├── RoasCalculator.tsx     (Interactive eCommerce ROAS & spend calculator)
│   │   ├── Pricing.tsx            (Trial Sprint, Growth Retainer, Web Architecture)
│   │   ├── Process.tsx            (3-Stage Acquisition Protocol)
│   │   ├── Faq.tsx                (Client objection handling accordion)
│   │   ├── ContactSection.tsx     (Lead capture form + WhatsApp/Email dispatch)
│   │   ├── Footer.tsx             (Authority footer, links, social channels)
│   │   └── JsonLd.tsx             (Structured Data schema script)
│   ├── context/
│   │   └── LanguageContext.tsx    (Bilingual EN/AR state, RTL direction handler)
│   ├── data/
│   │   └── translations.ts        (Complete, fluent EN & AR dictionaries)
│   └── types/
│       └── index.ts               (TypeScript interfaces for forms, audit, services)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Tasks

### Task 1: Project Scaffolding & Asset Preparation
- [x] Create Next.js 15 application structure with TypeScript and Tailwind CSS.
- [x] Copy and organize brand images from workspace (`Frame 25.png`, `Frame 36.png`, `Frame 39.png`, `Frame 66.png`, `Frame 67.png`) into `public/brand/`.
- [x] Configure Tailwind theme with brand colors (`#11253E` Deep Navy, `#EB660C` Orange, `#080E18` Obsidian Dark Canvas).
- [x] Verify build setup compiles cleanly.

### Task 2: Language & Localization System (EN/AR & RTL)
- [x] Create `src/types/index.ts` with all types.
- [x] Create `src/data/translations.ts` containing complete 1:1 translations for all sections in English and Egyptian Arabic.
- [x] Create `src/context/LanguageContext.tsx` with `locale`, `setLocale`, `dir` (ltr/rtl), and `t` helper.
- [x] Configure font pairing (Syncopate/Inter for English, Cairo for Arabic) in `src/app/globals.css`.

### Task 3: Navigation & Header Component
- [x] Implement `src/components/Header.tsx` with sticky backdrop blur.
- [x] Include master logo lockup (`/brand/logo-primary.png`), quick jump links, EN/AR language toggle button, and "Book Consultation" CTA.
- [x] Ensure mobile hamburger navigation menu with smooth transitions.

### Task 4: Hero Section & Brand Architecture
- [x] Implement `src/components/Hero.tsx` with dynamic headline, subheadline, and status pill (`Cairo, Egypt • Performance Marketing & Web Architecture`).
- [x] Integrate wide brand banner background graphic (`/brand/banner-wide.png`).
- [x] Add performance statistics ticker (39+ Inquiries, 36.55 EGP CPA, 9.57 EGP CPC, 100% Data-Driven).
- [x] Add primary action buttons with glowing orange highlights.

### Task 5: 3 Co-Founders & Operational Architecture
- [x] Implement `src/components/Leadership.tsx`.
- [x] Present the 3 specialized operational portfolios:
  1. Performance Marketing, Media Buying & Web Architecture.
  2. Creative Direction & Content Production.
  3. Marketing Strategy, SMM & Client Operations.
- [x] Highlight the "Embedded Growth Department" model vs "External Vendor".

### Task 6: 5 Core Service Pillars
- [x] Implement `src/components/Services.tsx`.
- [x] Build cards for each pillar:
  1. Performance Media Buying (Meta Ads infrastructure, budget scaling).
  2. Short-Form Content Creation (Reels, TikToks, high-converting product showcases).
  3. Web Architecture & Development (High-speed mobile stores, checkout optimization).
  4. Social Media Management (Feed architecture, narrative calendar).
  5. Commercial Strategy (Unit economics, offer crafting).
- [x] Include deliverable bullet points and interactive hover effects.

### Task 7: Live Meta Ads Performance Audit & Proof
- [x] Implement `src/components/AdsAudit.tsx`.
- [x] Build a responsive data table featuring the actual Meta Ads Manager reporting from the brand book:
  - Video 1 (2,524 Reach, 3,354 Impr, 12 Conversations, 36.55 EGP CPA, 10.96 EGP CPC)
  - Image 1 Copy 1 (58.14 EGP CPA, 9.69 EGP CPC)
  - Image 1 Copy 2 (7,379 Reach, 11,223 Impr, 26 Conversations, 50.06 EGP CPA, 9.57 EGP CPC)
  - Total Consolidated Averages (10,166 Reach, 14,894 Impr, 39 Inquiries, 46.11 EGP CPA, 9.88 EGP CPC)
- [x] Add narrative callout highlighting low CPA, dynamic budget consolidation, and fresh audience reach in Cairo.

### Task 8: Interactive eCommerce ROAS & Growth Calculator
- [x] Implement `src/components/RoasCalculator.tsx`.
- [x] Interactive sliders for: Monthly Ad Spend (EGP) and Target Average Order Value (AOV).
- [x] Real-time computation of Projected Inquiries/Orders, Estimated Gross Revenue, and Estimated ROAS multiplier based on proven agency CPA benchmark.

### Task 9: Commercial Pricing Matrix
- [x] Implement `src/components/Pricing.tsx`.
- [x] Present 3 distinct tiers:
  1. **14-Day Performance Trial Sprint** (4,500 EGP, includes 2,000 EGP media spend) — "Risk-Mitigation Starter".
  2. **Integrated Growth Retainer** (10,000 – 30,000 EGP/mo) — "Most Popular Full-Funnel Engine".
  3. **Custom Web Architecture** (15,000 – 30,000 EGP/project milestone) — "Conversion Storefront".
- [x] Add deliverable breakdowns, billing cadence, and direct booking CTAs.

### Task 10: 3-Stage Acquisition Protocol & Client Objection FAQ
- [x] Implement `src/components/Process.tsx` detailing the 3-stage protocol (Operational Triage -> Commercial Assessment -> Diagnostic Consultation).
- [x] Implement `src/components/Faq.tsx` accordion addressing pricing rationale, account authority, ad budgets, and contract flexibility.

### Task 11: Interactive Contact System & Email API Route
- [x] Implement `src/app/api/contact/route.ts` with POST handler for contact inquiries.
- [x] Implement `src/components/ContactSection.tsx` with form fields (Name, Brand Name, Phone/WhatsApp, Email, Budget, Services, Notes).
- [x] Add instant WhatsApp direct link generator pre-populating message with user choices.
- [x] Add direct email link to `xsolutionstudio@gmail.com` and Instagram link `@xsolutionstudio`.
- [x] Provide clear success/error UI states.

### Task 12: Footer & Authority Branding
- [x] Implement `src/components/Footer.tsx`.
- [x] Feature master logo lockup (`/brand/logo-lockup.png`), headquarters (Cairo, Egypt), copyright, and quick navigation.

### Task 13: SEO & GEO (Generative Engine Optimization)
- [x] Implement `src/components/JsonLd.tsx` injecting structured schemas (`ProfessionalService`, `Organization`, `WebSite`, `FAQPage`).
- [x] Implement metadata in `src/app/layout.tsx` (OpenGraph, Twitter card, canonicals, alternate languages).
- [x] Generate `public/sitemap.xml` and `public/robots.txt`.
- [x] Create `public/llms.txt` and `public/llms-full.txt` formatted for AI web search engines.

### Task 14: Verification, Linting & Build Test
- [x] Run production build (`npm run build`) and verify 0 errors.
- [x] Test language toggle (EN ⇄ AR) and ensure complete RTL formatting and alignment.
- [x] Test contact form API submission and interactive calculator.
- [x] Validate SEO schema markup structure.

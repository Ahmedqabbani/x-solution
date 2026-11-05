export type Locale = "en" | "ar";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metricsHighlight?: string;
  iconName: string;
}

export interface LeadershipMember {
  role: string;
  title: string;
  focus: string;
  responsibilities: string[];
  badge: string;
}

export interface AdsAuditRow {
  creative: string;
  duration: string;
  reach: string;
  impressions: string;
  frequency: string;
  inquiries: string;
  amountSpent: string;
  cpa: string;
  cpc: string;
  cpm: string;
  budget: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
  ctaText: string;
  badge?: string;
}

export interface ProcessStep {
  stage: string;
  title: string;
  subtitle: string;
  action: string;
  duration: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  monthlyBudget: string;
  service: string;
  websiteUrl?: string;
  message: string;
}

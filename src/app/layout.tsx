import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#060A10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xsolution.studio"),
  title: {
    default: "X Solution Studio | Performance Marketing & Web Architecture (Cairo, Egypt)",
    template: "%s | X Solution Studio",
  },
  description:
    "Consider Us Your Business X Solution. Cairo-based agency scaling Egyptian consumer brands through high-ROAS Meta Ads, viral direct-response video content, and high-conversion web architecture.",
  keywords: [
    "Digital Marketing Agency Cairo",
    "Meta Ads Egypt",
    "Performance Marketing Cairo",
    "Media Buying Egypt",
    "E-commerce Web Development Cairo",
    "Next.js Agency Egypt",
    "Content Creation Reels TikTok Cairo",
    "X Solution Studio",
    "Your Business X Solution",
    "وكالة تسويق رقمي في مصر",
    "إعلانات ميتا ممولة القاهرة",
    "ميديا باينج مصر",
    "تصميم وتطوير متاجر إلكترونية",
  ],
  authors: [{ name: "X Solution Studio", url: "https://xsolution.studio" }],
  creator: "X Solution Studio",
  publisher: "X Solution Studio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "ar-EG": "/?lang=ar",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "X Solution Studio — Your Business X Solution",
    description:
      "We help Egyptian brands scale sales through data-backed Meta Ads, hook-driven video content, and frictionless web storefronts.",
    url: "https://xsolution.studio",
    siteName: "X Solution Studio",
    images: [
      {
        url: "/brand/banner-wide.png",
        width: 1740,
        height: 662,
        alt: "X Solution Studio — Wide Brand Banner",
      },
      {
        url: "/brand/logo-lockup.png",
        width: 1740,
        height: 1740,
        alt: "X Solution Studio Master Lockup",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X Solution Studio | Performance Marketing & Web Architecture",
    description:
      "Consider Us Your Business X Solution. We help Egyptian brands increase sales through Ads & Content.",
    images: ["/brand/banner-wide.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/brand/logo-icon.png",
    apple: "/brand/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-brand-dark text-slate-100 antialiased selection:bg-brand-orange selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import React from "react";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": "https://xsolution.studio/#organization",
        "name": "X Solution Studio",
        "alternateName": ["X Solution", "Your Business X Solution", "إكس سوليوشن ستوديو"],
        "url": "https://xsolution.studio",
        "logo": "https://xsolution.studio/brand/logo-primary.png",
        "image": "https://xsolution.studio/brand/banner-wide.png",
        "description": "Cairo-based performance digital marketing, creative video production, and high-conversion web architecture agency engineered for Egyptian SMEs and consumer brands.",
        "email": "xsolutionstudio@gmail.com",
        "priceRange": "4500 - 30000 EGP",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cairo",
          "addressRegion": "Cairo Governorate",
          "addressCountry": "EG",
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Egypt",
          },
          {
            "@type": "City",
            "name": "Cairo",
          },
        ],
        "sameAs": [
          "https://www.instagram.com/xsolutionstudio/",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Agency Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "14-Day Performance Trial Sprint",
                "description": "Intermediate commitment covering media setup, 2 test creatives, and 2,000 EGP media spend.",
              },
              "price": "4500",
              "priceCurrency": "EGP",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Integrated Growth Retainer",
                "description": "Full-funnel digital growth combining Meta Ads media buying, short-form video production, SMM, and commercial strategy.",
              },
              "price": "10000-30000",
              "priceCurrency": "EGP",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Architecture",
                "description": "High-performance custom e-commerce storefronts with sub-second load times and local Egyptian payment gateway integration.",
              },
              "price": "15000-30000",
              "priceCurrency": "EGP",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://xsolution.studio/#website",
        "url": "https://xsolution.studio",
        "name": "X Solution Studio",
        "publisher": {
          "@id": "https://xsolution.studio/#organization",
        },
        "inLanguage": ["en", "ar"],
      },
      {
        "@type": "FAQPage",
        "@id": "https://xsolution.studio/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do your retainers range from 10,000 to 30,000 EGP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our retainers represent a complete growth wing combining paid media buying, dedicated video creative production, e-commerce optimization, and executive strategy from three specialized partners. We measure success strictly against net balance sheets and cashflow-positive ROAS.",
            },
          },
          {
            "@type": "Question",
            "name": "Can we start small before committing to a monthly retainer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We created the 14-Day Performance Trial Sprint (4,500 EGP inclusive of 2,000 EGP media spend) allowing brands to test execution speed and ad performance before committing to a recurring agreement.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you achieve sub-10 EGP CPC in the Cairo market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through hook-first direct-response creative framing paired with algorithmic audience testing matrices. Our Ads Manager audit proves CPM of 115.97 EGP and CPA between 36.55 and 50.06 EGP.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

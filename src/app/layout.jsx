import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.exagic.ai"),
  title: {
    default: "EXAGIC AI | AI SEO & SRO Agency San Francisco",
    template: "%s | EXAGIC AI",
  },
  description:
    "AI SEO and Answer Engine Optimization (AEO) agency specializing in industrial manufacturing visibility in the SF Bay Area.",
  keywords: [
    "AI SEO",
    "AEO",
    "Answer Engine Optimization",
    "SRO",
    "Selection Rate Optimization",
    "Industrial Manufacturing SEO",
    "SF Bay Area",
    "San Francisco AI SEO",
    "mechanistic interpretability",
    "model steering",
  ],
  authors: [{ name: "EXAGIC AI", url: "https://www.exagic.ai" }],
  creator: "EXAGIC AI",
  publisher: "EXAGIC AI",
  alternates: {
    canonical: "https://www.exagic.ai",
  },
  openGraph: {
    title: "EXAGIC AI | AI SEO & SRO Agency San Francisco",
    description:
      "AI SEO & Search Retrieval Optimization for Industrial Manufacturers. Specializing in Answer Engine Optimization (AEO) and brand visibility in the SF Bay Area.",
    url: "https://www.exagic.ai",
    siteName: "EXAGIC AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EXAGIC AI – AI SEO & SRO Agency San Francisco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXAGIC AI | AI SEO & SRO Agency San Francisco",
    description:
      "AI SEO and Answer Engine Optimization (AEO) agency specializing in industrial manufacturing visibility in the SF Bay Area.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({ children }) {
  /* ═══════════════════════════════════════════════
     PRIMARY ENTITY – ProfessionalService
     Anchors EXAGIC AI as a known entity for LLMs
     ═══════════════════════════════════════════════ */
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.exagic.ai/#organization",
    name: "EXAGIC AI",
    alternateName: "Exagic",
    description:
      "AI SEO and Answer Engine Optimization (AEO) agency specializing in industrial manufacturing visibility in the SF Bay Area.",
    url: "https://www.exagic.ai",
    logo: "https://www.exagic.ai/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    serviceType: [
      "AI SEO",
      "Answer Engine Optimization",
      "Search Retrieval Optimization (SRO)",
      "Selection Rate Optimization",
      "Entity Schema Mapping",
      "AI Visibility Tracking",
      "Technical Entity Audit",
      "Technical Data Structuring",
    ],
    areaServed: [
      { "@type": "City", name: "San Francisco" },
      { "@type": "City", name: "San Leandro" },
      { "@type": "City", name: "Fremont" },
      {
        "@type": "State",
        name: "California",
        containedInPlace: { "@type": "Country", name: "United States" },
      },
    ],
    knowsAbout: [
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Industrial Supply Chain SEO",
      "Mechanistic Interpretability",
      "Model Steering",
      "AI SEO",
      "Answer Engine Optimization",
      "Selection Rate Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI SEO",
            description:
              "World-class AI SEO services ranging from visibility analysis to practical model steering strategies for the SF Bay Area industrial belt.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Answer Engine Optimization (AEO)",
            description:
              "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SRO (Selection Rate Optimization)",
            description:
              "Advanced techniques to influence the probability of your brand being selected as the primary citation by an LLM during retrieval.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Tracking",
            description:
              "Robust tracking for brands looking to understand how Gemini, ChatGPT, and Perplexity perceive their technical hardware and services.",
          },
        },
      ],
    },
  };

  /* ═══════════════════════════════════════════════
     WEBSITE ENTITY – Connects site to organization
     ═══════════════════════════════════════════════ */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.exagic.ai/#website",
    name: "EXAGIC AI",
    url: "https://www.exagic.ai",
    publisher: {
      "@id": "https://www.exagic.ai/#organization",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.exagic.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-grow">{children}</main>

        <footer
          className="border-t border-zinc-200 bg-zinc-50 py-16"
          itemScope
          itemType="https://schema.org/WPFooter"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <span className="text-xl font-bold tracking-tighter">
                  EXAGIC <span className="text-brand">AI</span>
                </span>
                <p className="mt-4 max-w-sm text-zinc-500 text-sm leading-relaxed">
                  Leading the industry through mechanistic interpretability and
                  advanced model steering techniques for the industrial belt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Focus</h4>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li>
                    <a
                      href="/capabilities"
                      className="hover:text-brand transition-colors"
                    >
                      AI SEO
                    </a>
                  </li>
                  <li>
                    <a
                      href="/capabilities/aeo"
                      className="hover:text-brand transition-colors"
                    >
                      AEO Strategies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/capabilities/sro"
                      className="hover:text-brand transition-colors"
                    >
                      SRO Implementation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/capabilities"
                      className="hover:text-brand transition-colors"
                    >
                      Technical Entity Audits
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Location</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  San Francisco Corridor
                  <br />
                  California, US
                </p>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between text-xs text-zinc-400 gap-4">
              <p>&copy; 2026 EXAGIC AI. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-zinc-600">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-zinc-600">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

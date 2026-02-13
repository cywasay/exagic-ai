import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EXAGIC AI | AI SEO & SRO Agency San Francisco",
  description:
    "AI SEO and Answer Engine Optimization (AEO) agency specializing in industrial manufacturing visibility in the SF Bay Area.",
  keywords: [
    "AI SEO",
    "AEO",
    "SRO",
    "Selection Rate Optimization",
    "Industrial Manufacturing SEO",
    "SF Bay Area",
  ],
  authors: [{ name: "EXAGIC AI" }],
  openGraph: {
    title: "EXAGIC AI",
    description:
      "AI SEO & Search Retrieval Optimization for Industrial Manufacturers.",
    url: "https://www.exagic.ai",
    siteName: "EXAGIC AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EXAGIC AI",
    alternateName: "Exagic",
    description:
      "AI SEO and Answer Engine Optimization (AEO) agency specializing in industrial manufacturing visibility in the SF Bay Area.",
    url: "https://www.exagic.ai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
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
      "Entity Schema Mapping",
    ],
    areaServed: [
      { "@type": "City", name: "San Francisco" },
      { "@type": "City", name: "San Leandro" },
      { "@type": "City", name: "Fremont" },
    ],
    knowsAbout: [
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Industrial Supply Chain SEO",
      "Mechanistic Interpretability",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-zinc-200 bg-zinc-50 py-16">
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
                  <li>AI SEO</li>
                  <li>AEO Strategies</li>
                  <li>SRO Implementation</li>
                  <li>Technical Entity Audits</li>
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

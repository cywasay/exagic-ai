import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="fixed top-0 z-50 w-full bg-white/95 py-4 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold uppercase tracking-tighter text-zinc-900">
                EXAGIC<span className="text-brand">AI</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-800">
              <a href="/" className="hover:text-brand transition-all">
                Home
              </a>
              <a
                href="/capabilities"
                className="hover:text-brand transition-all"
              >
                AI SEO
              </a>
              <a href="/industries" className="hover:text-brand transition-all">
                SRO
              </a>
              <a href="/lab" className="hover:text-brand transition-all">
                Resources
              </a>
              <a
                href="#contact"
                className="ml-4 rounded-md bg-brand px-6 py-3 text-lg font-bold text-white transition-all hover:bg-brand-dark hover:shadow-lg active:scale-95"
              >
                Schedule a Call
              </a>
            </div>

            <div className="md:hidden">
              <button className="p-2">
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </button>
            </div>
          </nav>
        </header>

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

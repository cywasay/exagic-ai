import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://exagic-ai.vercel.app"),
  title: {
    default: "Exagic AI | AI SEO & SRO Agency San Francisco",
    template: "%s | Exagic AI",
  },
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
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
  authors: [{ name: "Exagic AI", url: "https://exagic-ai.vercel.app" }],
  creator: "Exagic AI",
  publisher: "Exagic AI",
  alternates: {
    canonical: "https://exagic-ai.vercel.app",
  },
  openGraph: {
    title: "Exagic AI | AI SEO & SRO Agency San Francisco",
    description:
      "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
    url: "https://exagic-ai.vercel.app",
    siteName: "Exagic AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Exagic AI – AI SEO & SRO Agency San Francisco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exagic AI | AI SEO & SRO Agency San Francisco",
    description:
      "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://exagic-ai.vercel.app" />
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="col-span-1 md:col-span-2">
                <span className="text-xl font-bold tracking-tighter">
                  Exagic <span className="text-brand">AI</span>
                </span>
                <p className="mt-4 max-w-sm text-zinc-500 text-sm leading-relaxed">
                  Leading the industry through mechanistic interpretability and
                  advanced model steering techniques for the industrial belt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Capabilities</h4>
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
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li>
                    <a
                      href="/lab"
                      className="hover:text-brand transition-colors"
                    >
                      Lab / Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industries"
                      className="hover:text-brand transition-colors"
                    >
                      Industries
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contact"
                      className="hover:text-brand transition-colors"
                    >
                      Contact
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
              <p>&copy; 2026 Exagic AI. All rights reserved.</p>
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

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://exagic-ai.vercel.app"),
  title: {
    default: "Exagic AI | AI SEO & SRO Agency San Francisco",
    template: "%s | Exagic AI",
  },
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
  icons: {
    icon: "/icon.png",
  },
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

        <Footer />
      </body>
    </html>
  );
}

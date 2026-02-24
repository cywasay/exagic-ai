"use client";

import Link from "next/link";
import { useState } from "react";

export default function LabPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "AI SEO Education",
    "Industry Specific",
    "Location Specific",
    "Q&A",
  ];

  const articles = [
    // --- NEW ARTICLES ---
    {
      title:
        "What Is Grounding in AI Search and Why It Determines Who Gets Cited",
      description:
        "Grounding is the process by which AI systems retrieve external sources to support their answers. Understanding it is the foundation of every effective AI SEO strategy.",
      href: "/lab/what-is-grounding-in-ai-search",
      date: "February 15, 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "How Large Language Models Build Brand Associations and Why It Matters for Industrial Companies",
      description:
        "LLMs build associations between brands and concepts during training. Understanding this process is essential for industrial companies that want AI systems to represent them accurately.",
      href: "/lab/how-llms-build-brand-associations",
      date: "February 15, 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "What Is Entity SEO and Why Industrial Brands Need It for AI Visibility",
      description:
        "Entity SEO is the practice of defining your brand, products, and services as named, verifiable entities that AI systems can understand and cite.",
      href: "/lab/what-is-entity-seo-industrial-brands",
      date: "February 15, 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "Google AI Overviews and AI Mode: What Industrial Brands Need to Know",
      description:
        "Google's AI Overviews and AI Mode are changing how industrial buyers find suppliers. Here is how they work and what manufacturers must do to appear.",
      href: "/lab/ai-overviews-industrial-procurement",
      date: "February 15, 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "AI Procurement in Bay Area Aerospace and Defense: How Qualified Suppliers Get Found",
      description:
        "Aerospace and defense procurement teams use AI to pre-screen suppliers for AS9100, ITAR, and NADCAP qualifications.",
      href: "/lab/ai-procurement-aerospace-defense-bay-area",
      date: "February 15, 2026",
      category: "Industry Specific",
    },
    {
      title:
        "AI Procurement in the Semiconductor Supply Chain: Visibility for Silicon Valley Vendors",
      description:
        "Semiconductor equipment suppliers and specialty chemical vendors serving Silicon Valley fabs need AI-optimized content for procurement visibility.",
      href: "/lab/ai-procurement-semiconductor-supply-chain",
      date: "February 15, 2026",
      category: "Industry Specific",
    },
    {
      title:
        "AI Procurement in Pharmaceutical Manufacturing: How GMP Suppliers Get Found",
      description:
        "GMP-compliant suppliers and life sciences service providers need AI-optimized content to be found by pharmaceutical procurement teams.",
      href: "/lab/ai-procurement-pharmaceutical-manufacturing",
      date: "February 15, 2026",
      category: "Industry Specific",
    },
    {
      title:
        "AI Search for Industrial Safety and EHS Suppliers in the SF Bay Area",
      description:
        "EHS consultants and safety equipment suppliers serving Bay Area manufacturers need AI-optimized content to be found by safety procurement teams.",
      href: "/lab/ai-search-industrial-safety-compliance-suppliers",
      date: "February 15, 2026",
      category: "Industry Specific",
    },
    {
      title:
        "Silicon Valley Supply Chain Visibility: How Vendors Get Found by Tech Sector AI Procurement",
      description:
        "Suppliers serving Silicon Valley tech manufacturers face AI procurement tools that evaluate vendors on specification-driven criteria.",
      href: "/lab/silicon-valley-supply-chain-ai-visibility",
      date: "February 15, 2026",
      category: "Location Specific",
    },
    {
      title:
        "The East Bay Industrial Corridor: AI SEO for Manufacturers in Oakland, Hayward, and Union City",
      description:
        "Manufacturers and industrial suppliers in Oakland, Hayward, Newark, and Union City face AI procurement gaps.",
      href: "/lab/east-bay-industrial-corridor-ai-seo",
      date: "February 15, 2026",
      category: "Location Specific",
    },
    {
      title:
        "The Exact Questions Industrial Buyers Ask AI When Finding Suppliers — And How to Answer Them",
      description:
        "Industrial procurement teams ask AI highly specific questions when finding suppliers. Here are the most common query patterns.",
      href: "/lab/questions-buyers-ask-ai-finding-suppliers",
      date: "February 15, 2026",
      category: "Q&A",
    },
    {
      title:
        "What Industrial Buyers Actually Want From AI Answers — And How Suppliers Can Provide It",
      description:
        "Industrial buyers query AI with specific intent. Understanding what they want from AI-generated answers determines what content you need.",
      href: "/lab/what-industrial-buyers-want-ai-answers",
      date: "February 15, 2026",
      category: "Q&A",
    },
    // --- PREVIOUS ARTICLES (Assigned Categories) ---
    {
      title: "The Q&A Engine Playbook: Industrial FAQs for AI Visibility",
      description:
        "Why comprehensive FAQ strategy is critical for AI SEO, AEO, and getting Bay Area industrial brands cited by AI sourcing agents.",
      href: "/lab/qa-engine-playbook-industrial-faq",
      date: "February 23, 2026",
      category: "Q&A",
    },
    {
      title: "Structuring Technical Data: How AI Reads Industrial Catalogs",
      description:
        "How to use Schema.org, JSON-LD, and clear data architecture to ensure AI sourcing tools read your industrial catalogs.",
      href: "/lab/how-to-structure-technical-data-for-ai-sourcing",
      date: "February 23, 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "AI SEO for Silicon Valley Hardware Startups: Bypassing Legacy Monopolies",
      description:
        "How hardware startups in Silicon Valley and San Jose can use AI SEO and entity structures to bypass legacy manufacturers.",
      href: "/lab/ai-seo-silicon-valley-hardware-startups",
      date: "February 23, 2026",
      category: "Location Specific",
    },
    {
      title:
        "Precision Machining in San Leandro: Surviving the Shift to AI Sourcing",
      description:
        "How machine shops and precision fabricators in San Leandro and the East Bay can get cited by AI procurement.",
      href: "/lab/precision-machining-san-leandro-ai-sourcing",
      date: "February 23, 2026",
      category: "Location Specific",
    },
    {
      title:
        "How AI Search Is Changing How Industrial Buyers Find Suppliers in the SF Bay Area",
      description:
        "Why procurement teams are querying ChatGPT and Perplexity before Google — and what SF Bay Area suppliers must do.",
      href: "/lab/ai-search-industrial-suppliers-sf-bay-area",
      date: "February 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "What Is Selection Rate Optimization (SRO) and Why Industrial Brands Need It",
      description:
        "A practical guide to SRO — the AI-native discipline that determines whether your content gets cited or ignored.",
      href: "/lab/what-is-sro-selection-rate-optimization",
      date: "February 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "Why East Bay Manufacturers Are Invisible in AI Search — And How to Fix It",
      description:
        "Most East Bay manufacturers have qualified capabilities but structurally broken content. Here is how to fix it.",
      href: "/lab/east-bay-manufacturers-invisible-ai-search",
      date: "February 2026",
      category: "Location Specific",
    },
    {
      title:
        "AEO vs SEO: What the Difference Means for SF Bay Area Industrial Companies",
      description:
        "A clear breakdown of how Answer Engine Optimization differs from traditional SEO — and why you need both.",
      href: "/lab/aeo-vs-seo-industrial-brands",
      date: "February 2026",
      category: "AI SEO Education",
    },
    {
      title:
        "AI Search and the Port of Oakland: How Freight Suppliers Get Found",
      description:
        "How freight forwarders, 3PL operators, and logistics providers at the Port of Oakland can become the supplier AI procurement tools cite.",
      href: "/lab/ai-search-port-of-oakland-freight-suppliers",
      date: "February 10, 2026",
      category: "Location Specific",
    },
    {
      title: "AI Procurement in the Richmond-Benicia Industrial Corridor",
      description:
        "How refinery vendors serving Chevron Richmond and Valero Benicia can build AI citation authority.",
      href: "/lab/ai-search-richmond-refinery-chemical-suppliers",
      date: "February 10, 2026",
      category: "Location Specific",
    },
    {
      title: "AI Search for Fremont and San Jose Manufacturers",
      description:
        "How Tesla supply chain vendors and San Jose aerospace manufacturers can become AI-citable.",
      href: "/lab/ai-search-fremont-san-jose-manufacturing-suppliers",
      date: "February 10, 2026",
      category: "Location Specific",
    },
    {
      title: "AI Procurement in South San Francisco's Biotech Cluster",
      description:
        "How life sciences suppliers serving the South SF biotech corridor can build AI visibility.",
      href: "/lab/ai-search-south-san-francisco-biotech-suppliers",
      date: "February 10, 2026",
      category: "Location Specific",
    },
    {
      title: "AI Search for Vallejo Defense and Maritime Suppliers",
      description:
        "How Vallejo's post-Mare Island defense industrial base can build AI citation authority.",
      href: "/lab/ai-search-vallejo-defense-maritime-suppliers",
      date: "February 10, 2026",
      category: "Location Specific",
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://exagic-ai.vercel.app/lab",
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://exagic-ai.vercel.app${article.href}`,
      name: article.title,
    })),
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case "AI SEO Education":
        return "text-blue-600 bg-blue-50 border-blue-100";
      case "Industry Specific":
        return "text-emerald-600 bg-emerald-50 border-emerald-100";
      case "Location Specific":
        return "text-purple-600 bg-purple-50 border-purple-100";
      case "Q&A":
        return "text-amber-600 bg-amber-50 border-amber-100";
      default:
        return "text-zinc-600 bg-zinc-50 border-zinc-100";
    }
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 tracking-tight leading-[0.9]">
              Exagic AI <span className="text-brand/50">Lab</span>
            </h1>
            <p className="mt-10 text-2xl md:text-3xl font-medium text-zinc-900 leading-tight">
              We research why some industrial brands get cited by AI and others
              don&apos;t.
            </p>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-2xl">
              This is our lab—where we document the math of visibility and the
              reality of Answer Engine Optimization. No jargon. Only numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-sm font-bold text-zinc-400 mr-4 uppercase tracking-widest">
              Research Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-lg shadow-zinc-200"
                    : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-zinc-50 py-24 pb-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.href}
                className="group relative flex flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-10 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {article.date}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 leading-tight transition-colors mb-6">
                  <Link href={article.href}>{article.title}</Link>
                </h2>

                <p className="text-zinc-600 leading-relaxed mb-10 flex-grow line-clamp-3">
                  {article.description}
                </p>

                <div className="pt-8 border-t border-zinc-50">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand group/link"
                  >
                    Read Detailed Research
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-32">
              <p className="text-xl text-zinc-400 font-medium">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 pb-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[3rem] bg-zinc-900 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Stop guessing about AI visibility.
              </h2>
              <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 font-medium">
                If you aren&apos;t showing up in procurement searches, you are
                losing market share every day. Let&apos;s fix your data
                structure.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Secure Your Citations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "AI SEO Research & Insights for Industrial Brands | Exagic AI Lab",
  description:
    "Insights, research, and technical guides on AI SEO, AEO, and SRO for industrial manufacturers from the Exagic AI team in San Francisco.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab",
  },
};

export default function LabPage() {
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

  const articles = [
    {
      title:
        "How AI Search Is Changing How Industrial Buyers Find Suppliers in the SF Bay Area",
      description:
        "Why procurement teams are querying ChatGPT and Perplexity before Google — and what SF Bay Area suppliers must do to appear in those answers.",
      href: "/lab/ai-search-industrial-suppliers-sf-bay-area",
      date: "February 2026",
    },
    {
      title:
        "What Is Selection Rate Optimization (SRO) and Why Industrial Brands Need It",
      description:
        "A practical guide to SRO — the AI-native discipline that determines whether your content gets cited or ignored once AI retrieves it.",
      href: "/lab/what-is-sro-selection-rate-optimization",
      date: "February 2026",
    },
    {
      title:
        "Why East Bay Manufacturers Are Invisible in AI Search — And How to Fix It",
      description:
        "Most East Bay manufacturers have qualified capabilities but structurally broken content. Here is exactly what is causing the invisibility and how to fix it.",
      href: "/lab/east-bay-manufacturers-invisible-ai-search",
      date: "February 2026",
    },
    {
      title:
        "AEO vs SEO: What the Difference Means for SF Bay Area Industrial Companies",
      description:
        "A clear breakdown of how Answer Engine Optimization differs from traditional SEO — and why industrial brands need both working together.",
      href: "/lab/aeo-vs-seo-industrial-brands",
      date: "February 2026",
    },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://exagic-ai.vercel.app${article.href}`,
      name: article.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              Exagic AI Lab
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              Research, technical guides, and strategic insights on AI SEO, AEO,
              and Selection Rate Optimization for industrial manufacturers and
              suppliers in the SF Bay Area.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              The Exagic AI Lab is where we publish original thinking on how
              industrial brands can become visible, cited, and trusted inside
              AI-generated answers. Every piece is grounded in real AI retrieval
              behavior — not speculation — and written specifically for
              manufacturers, logistics providers, hardware companies, and B2B
              technical services firms operating in the SF Bay Area corridor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 border-t border-zinc-100 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((article) => (
              <article
                key={article.href}
                className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-sm font-bold text-zinc-400 mb-4">
                  {article.date}
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 leading-tight group-hover:text-brand transition-colors">
                  <Link href={article.href}>{article.title}</Link>
                </h2>
                <p className="mt-6 text-lg text-zinc-600 leading-relaxed flex-grow">
                  {article.description}
                </p>
                <div className="mt-10 flex items-center text-lg font-bold text-brand">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2"
                  >
                    Read Article{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

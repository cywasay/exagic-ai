export const metadata = {
  title: "Lab / Resources",
  description:
    "Insights, research, and technical guides on AI SEO, AEO, and SRO for industrial manufacturers from the Exagic AI team in San Francisco.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab",
  },
};

export default function LabPage() {
  const articles = [
    {
      title:
        "How AI Search is Changing How Industrial Buyers Find Suppliers in the SF Bay Area",
      summary:
        "Explore the shift from traditional search to AI-driven procurement and what it means for Bay Area manufacturers.",
      href: "/lab/ai-search-industrial-suppliers-sf-bay-area",
      tag: "Industry Shift",
    },
    {
      title:
        "What is Selection Rate Optimization (SRO) and Why Industrial Brands Need It",
      summary:
        "Deep dive into SRO and how it helps technical manufacturers dominate AI retrieval citations.",
      href: "/lab/what-is-sro-selection-rate-optimization",
      tag: "Technical Guide",
    },
    {
      title:
        "Why East Bay Manufacturers Are Invisible in AI Search — And How to Fix It",
      summary:
        "Analyzing the visibility gap for East Bay suppliers and practical steps to regain AI presence.",
      href: "/lab/east-bay-manufacturers-invisible-ai-search",
      tag: "Local Strategy",
    },
    {
      title:
        "AEO vs SEO: What the Difference Means for SF Bay Area Industrial Companies",
      summary:
        "Understanding the tactical differences between Answer Engine Optimization and traditional SEO.",
      href: "/lab/aeo-vs-seo-industrial-brands",
      tag: "Strategy",
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://exagic-ai.vercel.app/lab",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        id="lab-hero"
        aria-labelledby="lab-heading"
        className="rag-section bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="hover:text-brand transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">Lab</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <h1
              id="lab-heading"
              className="text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight"
            >
              Insights & Intelligence
            </h1>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
              Exagic AI is a San Francisco AI SEO agency specializing in brand
              visibility optimization for industrial manufacturers, global
              suppliers, and hardware companies in the SF Bay Area corridor. Our
              Lab is where we share our research on model steering, entity
              reinforcement, and the future of AI retrieval.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.href}
                className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand lowercase">
                    {article.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-zinc-900 group-hover:text-brand transition-colors">
                  <a href={article.href}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </a>
                </h2>
                <p className="mt-4 text-zinc-500 leading-relaxed flex-grow">
                  {article.summary}
                </p>
                <div className="mt-8 flex items-center text-sm font-bold text-brand">
                  Read Article →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

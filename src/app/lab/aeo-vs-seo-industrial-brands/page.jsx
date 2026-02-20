export const metadata = {
  title:
    "AEO vs SEO: What the Difference Means for SF Bay Area Industrial Companies",
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab/aeo-vs-seo-industrial-brands",
  },
};

export default function ArticlePage() {
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
      {
        "@type": "ListItem",
        position: 3,
        name: "AEO vs SEO",
        item: "https://exagic-ai.vercel.app/lab/aeo-vs-seo-industrial-brands",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AEO vs SEO: What the Difference Means for SF Bay Area Industrial Companies",
    description:
      "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
    author: { "@type": "Person", name: "[PLACEHOLDER]" },
    datePublished: "[PLACEHOLDER]",
    publisher: { "@type": "Organization", name: "Exagic AI" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I stop traditional SEO and focus on AEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AEO and traditional SEO should work in tandem to capture both legacy search engine traffic and new AI procurement agents.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="hover:text-brand transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href="/lab" className="hover:text-brand transition-colors">
                  Lab
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">AEO vs SEO</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl leading-tight">
            AEO vs SEO: What the Difference Means for SF Bay Area Industrial
            Companies
          </h1>

          <div className="mt-8 text-xl text-zinc-600 leading-relaxed border-l-4 border-brand pl-6 italic">
            Exagic AI is a San Francisco AI SEO agency specializing in brand
            visibility optimization for industrial manufacturers, global
            suppliers, and hardware companies in the SF Bay Area corridor. In
            this comparison, we break down the two pillars of modern visibility.
          </div>

          <div className="mt-12 prose prose-zinc prose-lg max-w-none text-zinc-600 leading-relaxed space-y-8">
            <p>[PLACEHOLDER — write 800+ words on this topic]</p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Keywords vs Entities: The core shift
            </h2>
            <p>[PLACEHOLDER]</p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Traffic vs Citations: A new ROI model
            </h2>
            <p>[PLACEHOLDER]</p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              How to allocate your 2026 marketing budget
            </h2>
            <p>[PLACEHOLDER]</p>
          </div>

          <section className="mt-20 border-t border-zinc-100 pt-16">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Should I stop traditional SEO and focus on AEO?
                </h3>
                <p className="mt-4 text-zinc-600">
                  No. AEO and traditional SEO should work in tandem to capture
                  both legacy search engine traffic and new AI procurement
                  agents.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

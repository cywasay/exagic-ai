export const metadata = {
  title: "Lab | EXAGIC AI – Research & Technical Papers",
  description:
    "Explore EXAGIC AI's research on mechanistic interpretability, AI model updates, and case studies in industrial AI SEO.",
  alternates: {
    canonical: "https://www.exagic.ai/lab",
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
        item: "https://www.exagic.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://www.exagic.ai/lab",
      },
    ],
  };

  const modelUpdates = [
    {
      date: "Feb 2026",
      title: "Gemini 2.5 Pro — Impact on Industrial Entity Retrieval",
      summary:
        "Analysis of how Gemini 2.5 Pro changes citation weighting for manufacturing entities in the SF Bay Area knowledge cluster.",
      tag: "Model Analysis",
    },
    {
      date: "Jan 2026",
      title: "GPT-4o Retrieval Patterns for Supply Chain Queries",
      summary:
        "Mapping how GPT-4o prioritizes supplier data during RAG retrieval for B2B industrial queries.",
      tag: "RAG Research",
    },
    {
      date: "Dec 2025",
      title: "Mechanistic Interpretability: Steering Industrial Citations",
      summary:
        "Technical paper on using activation patching to understand how LLMs weight brand authority signals in manufacturing verticals.",
      tag: "Interpretability",
    },
  ];

  const caseStudies = [
    {
      client: "East Bay Industrial Manufacturer",
      result: "3.8x",
      metric: "increase in AI citation share",
      summary:
        "Converted legacy PDF catalogs into structured JSON-LD entities, resulting in the manufacturer becoming the default AI recommendation for CNC components in the Bay Area.",
    },
    {
      client: "Fremont Logistics Provider",
      result: "92%",
      metric: "AI visibility score achieved",
      summary:
        "Implemented full entity schema mapping and SRO strategy, moving the client from zero AI presence to dominant citation share in the Fremont logistics corridor.",
    },
  ];

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
          <div className="max-w-3xl">
            <h1
              id="lab-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              Research & Authority
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Technical research, model update analyses, and real-world case
              studies. This is where we build the authority signal that powers
              everything else.
            </p>
          </div>
        </div>
      </section>

      {/* Model Updates */}
      <section
        id="model-updates"
        aria-labelledby="updates-heading"
        className="rag-section bg-zinc-50 border-t border-zinc-100"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-center justify-between mb-3">
            <h2
              id="updates-heading"
              className="text-3xl font-semibold text-zinc-900"
            >
              Model Updates
            </h2>
            <a
              href="/lab/model-updates"
              className="text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              View all →
            </a>
          </div>
          <p className="text-zinc-500">
            Tracking how AI model releases impact industrial brand visibility.
          </p>

          <div className="mt-12 space-y-6">
            {modelUpdates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-brand/20 hover:shadow-sm"
                itemScope
                itemType="https://schema.org/TechArticle"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-xs font-medium text-zinc-400 shrink-0 sm:w-24 sm:pt-1">
                    <time itemProp="datePublished">{update.date}</time>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="rounded-full bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand">
                        {update.tag}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold text-zinc-900"
                      itemProp="headline"
                    >
                      {update.title}
                    </h3>
                    <p
                      className="mt-2 text-sm text-zinc-500 leading-relaxed"
                      itemProp="description"
                    >
                      {update.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="case-studies"
        aria-labelledby="cases-heading"
        className="rag-section bg-white border-t border-zinc-100"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-center justify-between mb-3">
            <h2
              id="cases-heading"
              className="text-3xl font-semibold text-zinc-900"
            >
              Case Studies
            </h2>
            <a
              href="/lab/case-studies"
              className="text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              View all →
            </a>
          </div>
          <p className="text-zinc-500">
            Demonstrating measurable impact across the SF industrial corridor.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.client}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="text-4xl font-bold text-gradient">
                  {cs.result}
                </div>
                <div
                  className="mt-1 text-sm font-medium text-zinc-500"
                  itemProp="abstract"
                >
                  {cs.metric}
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <h3 className="font-semibold text-zinc-900" itemProp="name">
                    {cs.client}
                  </h3>
                  <p
                    className="mt-2 text-sm text-zinc-500 leading-relaxed"
                    itemProp="description"
                  >
                    {cs.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

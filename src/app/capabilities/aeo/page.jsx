export const metadata = {
  title: "Answer Engine Optimization (AEO)",
  description:
    "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation when Gemini, ChatGPT, or Perplexity answers a sourcing query.",
  alternates: {
    canonical: "https://www.exagic.ai/capabilities/aeo",
  },
};

export default function AEOPage() {
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
        name: "AI Capabilities",
        item: "https://www.exagic.ai/capabilities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Answer Engine Optimization (AEO)",
        item: "https://www.exagic.ai/capabilities/aeo",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Answer Engine Optimization (AEO)",
    description:
      "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation when Gemini, ChatGPT, or Perplexity answers a sourcing query.",
    provider: {
      "@id": "https://www.exagic.ai/#organization",
    },
    serviceType: "Answer Engine Optimization",
    areaServed: [
      { "@type": "City", name: "San Francisco" },
      { "@type": "City", name: "San Leandro" },
      { "@type": "City", name: "Fremont" },
    ],
  };

  const features = [
    "AI Chat Citation Audits",
    "Prompt-Response Mapping",
    "Entity Reinforcement Strategies",
    "Answer Engine Monitoring",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section
        id="aeo-hero"
        aria-labelledby="aeo-heading"
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
              <li>
                <a
                  href="/capabilities"
                  className="hover:text-brand transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">AEO</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1
              id="aeo-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              <span itemProp="knowsAbout">
                Answer Engine Optimization (AEO)
              </span>
            </h1>
            <p className="mt-2 text-sm font-medium text-brand">
              AI Chat Visibility
            </p>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Visibility optimization for AI chat assistants, AI agents, and
              Answer Engines. We ensure your products are the default
              recommendation when Gemini, ChatGPT, or Perplexity answers a
              sourcing query.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-zinc-50 border-t border-zinc-100"
        aria-labelledby="aeo-features-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h2
            id="aeo-features-heading"
            className="text-2xl font-semibold text-zinc-900"
          >
            Key Features
          </h2>
          <ul className="mt-8 space-y-3" role="list">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-sm text-zinc-600"
              >
                <div
                  className="h-1.5 w-1.5 rounded-full bg-brand shrink-0"
                  aria-hidden="true"
                ></div>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <a
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              ← Back to all Capabilities
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

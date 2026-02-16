export default function Capabilities() {
  const capabilities = [
    {
      title: "AI SEO",
      slug: "ai-seo",
      description:
        "World-class AI SEO services ranging from visibility analysis to practical model steering strategies for the SF Bay Area industrial belt.",
      href: "/capabilities",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      slug: "aeo",
      description:
        "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation.",
      href: "/capabilities/aeo",
    },
    {
      title: "SRO (Selection Rate Optimization)",
      slug: "sro",
      description:
        "Advanced techniques to influence the probability of your brand being selected as the primary citation by an LLM during retrieval.",
      href: "/capabilities/sro",
    },
    {
      title: "AI Visibility Tracking",
      slug: "tracking",
      description:
        "Robust tracking for brands looking to understand how Gemini, ChatGPT, and Perplexity perceive their technical hardware and services.",
      href: "/capabilities",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EXAGIC AI Services",
    itemListElement: capabilities.map((cap, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: cap.title,
        description: cap.description,
        provider: {
          "@id": "https://www.exagic.ai/#organization",
        },
      },
    })),
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="rag-section bg-white py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="capabilities-heading"
          className="max-w-4xl text-3xl sm:text-4xl font-semibold text-zinc-900"
        >
          We are an industry leader in machine learning driven search retrieval
          optimization.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="rounded-xl border border-zinc-200 bg-white p-8 transition-all hover:border-brand/40 hover:shadow-lg"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3
                className="text-xl font-semibold text-zinc-900"
                itemProp="name"
              >
                <span itemProp="knowsAbout">{cap.title}</span>
              </h3>
              <p
                className="mt-4 text-zinc-700 leading-relaxed"
                itemProp="description"
              >
                {cap.description}
              </p>
              <div className="mt-8">
                <a
                  href={cap.href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

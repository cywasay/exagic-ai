export default function Capabilities() {
  const capabilities = [
    {
      title: "AI SEO",
      description:
        "World-class AI SEO services ranging from visibility analysis to practical model steering strategies for the SF Bay Area industrial belt.",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      description:
        "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation.",
    },
    {
      title: "SRO (Selection Rate Optimization)",
      description:
        "Advanced techniques to influence the probability of your brand being selected as the primary citation by an LLM during retrieval.",
    },
    {
      title: "AI Visibility Tracking",
      description:
        "Robust tracking for brands looking to understand how Gemini, ChatGPT, and Perplexity perceive their technical hardware and services.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: capabilities.map((cap, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: cap.title,
        description: cap.description,
      },
    })),
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="rag-section bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2
          id="capabilities-heading"
          className="text-4xl font-semibold text-zinc-900"
        >
          We are an industry leader in machine learning driven digital
          marketing.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="rounded-2xl border border-zinc-100 bg-white p-6 md:p-8 transition-all hover:border-brand/20 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {cap.title}
              </h3>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                {cap.description}
              </p>
              <div className="mt-8">
                <a
                  href="/capabilities"
                  className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors inline-flex items-center gap-1"
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

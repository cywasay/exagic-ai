export const metadata = {
  title: "AI Capabilities",
  description:
    "Explore our AI SEO, Answer Engine Optimization (AEO), Search Retrieval Optimization (SRO), and AI Visibility Tracking capabilities.",
  alternates: {
    canonical: "https://www.exagic.ai/capabilities",
  },
};

export default function CapabilitiesPage() {
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
    ],
  };

  const services = [
    {
      slug: "aeo",
      title: "Answer Engine Optimization (AEO)",
      subtitle: "AI Chat Visibility",
      description:
        "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation when Gemini, ChatGPT, or Perplexity answers a sourcing query.",
      features: [
        "AI Chat Citation Audits",
        "Prompt-Response Mapping",
        "Entity Reinforcement Strategies",
        "Answer Engine Monitoring",
      ],
      href: "/capabilities/aeo",
    },
    {
      slug: "sro",
      title: "Selection Rate Optimization (SRO)",
      subtitle: "Probabilistic Citation Control",
      description:
        "Advanced techniques to influence the probability of your brand being selected as the primary citation by an LLM during retrieval. We surgically optimize the data signals that LLMs weigh during inference.",
      features: [
        "Citation Probability Analysis",
        "Competitor Citation Mapping",
        "Data Signal Optimization",
        "Model Steering Playbooks",
      ],
      href: "/capabilities/sro",
    },
    {
      slug: "ai-seo",
      title: "AI SEO",
      subtitle: "Next-Generation Search",
      description:
        "World-class AI SEO services ranging from visibility analysis to practical model steering strategies for the SF Bay Area industrial belt. We go beyond keywords to optimize for how LLMs understand and present your brand.",
      features: [
        "Semantic Entity Mapping",
        "Knowledge Graph Integration",
        "Technical Data Structuring",
        "AI-First Content Architecture",
      ],
      href: "/capabilities",
    },
    {
      slug: "tracking",
      title: "AI Visibility Tracking",
      subtitle: "Real-Time Intelligence",
      description:
        "Robust tracking for brands looking to understand how Gemini, ChatGPT, and Perplexity perceive their technical hardware and services. Know exactly where you stand in every AI model.",
      features: [
        "Multi-Model Monitoring",
        "Citation Share Analytics",
        "Brand Perception Reports",
        "Competitor Benchmarking",
      ],
      href: "/capabilities",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        id="capabilities-hero"
        aria-labelledby="cap-heading"
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
              <li className="text-zinc-900 font-medium">Capabilities</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1
              id="cap-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              AI-Powered Marketing Infrastructure
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Each capability is designed to optimize a specific layer of the AI
              retrieval pipeline — from entity definition to probabilistic
              citation control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="space-y-16">
            {services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                aria-labelledby={`${service.slug}-heading`}
                className="rag-section rounded-[2rem] border border-zinc-100 bg-white p-6 md:p-12 transition-all hover:shadow-2xl hover:shadow-zinc-200/50"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2
                      id={`${service.slug}-heading`}
                      className="text-3xl font-semibold text-zinc-900"
                      itemProp="name"
                    >
                      <a
                        href={service.href}
                        className="hover:text-brand transition-colors"
                      >
                        {service.title}
                      </a>
                    </h2>
                    <p
                      className="mt-6 text-lg text-zinc-600 leading-relaxed"
                      itemProp="description"
                    >
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                      Key Features
                    </div>
                    <ul className="space-y-3" role="list">
                      {service.features.map((f) => (
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

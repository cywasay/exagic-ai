export const metadata = {
  title: "AI SEO Capabilities",
  description:
    "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to model steering strategies — Exagic AI ensures your brand dominates AI retrieval.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/capabilities",
  },
};

export default function CapabilitiesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI SEO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to model steering strategies — Exagic AI ensures your brand dominates AI retrieval.",
  };

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
        name: "AI Capabilities",
        item: "https://exagic-ai.vercel.app/capabilities",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
          <div className="max-w-4xl">
            <h1
              id="cap-heading"
              className="text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight"
            >
              AI SEO for Industrial Brands
            </h1>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
              Exagic AI is a San Francisco AI SEO agency specializing in brand
              visibility optimization for industrial manufacturers, global
              suppliers, and hardware companies in the SF Bay Area corridor. Our
              AI SEO services are designed for the next era of information
              retrieval, where Large Language Models (LLMs) are the primary
              gatekeepers of brand discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="prose prose-zinc prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-zinc-900">
              What is AI SEO?
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              AI SEO represents a paradigm shift from traditional search engine
              optimization. While traditional SEO focuses on optimizing for
              search engine crawlers and ranking for keywords on a Results Page
              (SERP), AI SEO focuses on how Large Language Models (LLMs) like
              GPT-4, Gemini, and Claude perceive, categorize, and retrieve your
              brand's data. It is the process of ensuring that your technical
              specifications, service capabilities, and brand authority are
              correctly "understood" by the weights of an AI model.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              In the context of industrial manufacturing, AI SEO involves
              structuring your product catalogs, white papers, and technical
              documentation so they are easily ingestible by Retrieval-Augmented
              Generation (RAG) systems. This ensures that when a procurement
              officer or engineer asks an AI assistant for a "reliable supplier
              of high-precision CNC components in the East Bay," your brand is
              not just indexed, but actively recommended as a top-tier choice.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              At its core, AI SEO is about{" "}
              <strong>Mechanistic Interpretability</strong> and{" "}
              <strong>Model Steering</strong>. We don't just guess what keywords
              to use; we analyze how models represent concepts and surgically
              insert data points that reinforce your brand's position within the
              model's latent workspace.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              Why AI SEO matters for SF Bay Area manufacturers
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              The San Francisco Bay Area corridor — from the hardware hubs of
              Fremont to the logistics centers of San Leandro — is the backbone
              of global innovation. However, many industrial leaders in this
              region are becoming invisible to modern buyers. Today's
              procurement teams are increasingly using AI-powered sourcing tools
              to filter through thousands of suppliers. If your technical data
              is trapped in legacy PDFs or unstructured text, AI models will
              overlook you in favor of competitors who have optimized their
              digital entity.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              For a manufacturer in Silicon Valley or the East Bay, AI SEO is
              the difference between being a "known quantity" in an LLM's
              knowledge base and being a ghost in the machine. As AI agents
              begin to handle more of the supply chain's rote work, being the
              primary citation for a technical specification becomes the most
              valuable asset a B2B supplier can own.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              How Exagic AI approaches AI SEO
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Our methodology is rooted in the science of LLM retrieval. We
              don't use dated SEO tactics; we use technical audits that mirror
              how AI models execute a "search" over their internal data and
              external RAG indices.
            </p>
            <ul className="text-zinc-600 space-y-4 list-disc pl-6">
              <li>
                <strong>Entity Resolution & Mapping:</strong> We define your
                brand as a unique entity within the global knowledge graph,
                ensuring that AI models don't confuse your products with
                lower-tier competitors.
              </li>
              <li>
                <strong>Schema Infrastructure Implementation:</strong> We build
                advanced JSON-LD structures that serve as a direct data-line to
                AI crawlers, prioritizing extractability for high-intent
                queries.
              </li>
              <li>
                <strong>Model Steering & Latent Space Optimization:</strong>{" "}
                Using [PLACEHOLDER: Proprietary internal tools], we test how
                different content architectures influence model output and
                adjust your site's data structure to maximize visibility.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              What results can you expect?
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Implementing a comprehensive AI SEO strategy leads to a measurable
              increase in <strong>Citation Share</strong>. This means your brand
              appears more frequently as a cited source in AI-generated answers
              across ChatGPT, Gemini, and Perplexity. Over time, this builds a
              "moat" of authority that is much harder for competitors to disrupt
              than traditional search rankings. Expected outcomes include
              higher-quality lead generation from procurement-focused AI agents
              and a dominant presence in the local SF Bay Area industrial
              retrieval results.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16 pb-8 border-b border-zinc-100">
              Frequently Asked Questions about AI SEO
            </h2>
            <div className="space-y-12 mt-12">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  How is AI SEO different from traditional SEO?
                </h3>
                <p className="text-zinc-600 mt-4">
                  Traditional SEO optimizes for search engine rankings and blue
                  links. AI SEO optimizes for how AI models understand and
                  retrieve your brand data as a direct answer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Which models do you optimize for?
                </h3>
                <p className="text-zinc-600 mt-4">
                  We target all major frontier models including OpenAI's GPT
                  series, Google's Gemini, Anthropic's Claude, and specialized
                  retrieval engines like Perplexity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Do you offer visibility audits?
                </h3>
                <p className="text-zinc-600 mt-4">
                  Yes, we perform <strong>Technical Entity Audits</strong> to
                  see how your brand currently ranks in AI retrieval systems
                  compared to competitors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Is AI SEO only for tech companies?
                </h3>
                <p className="text-zinc-600 mt-4">
                  No. It is critical for industrial manufacturers and suppliers
                  who rely on technical specs and regional visibility in areas
                  like Fremont and San Leandro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Core Services
            </h2>
            <p className="mt-4 text-zinc-500 max-w-2xl text-lg">
              Explore our specialized deep-dives into different aspects of the
              AI retrieval pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services
              .filter((s) => s.slug !== "ai-seo")
              .map((service) => (
                <div
                  key={service.slug}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    <a href={service.href} className="hover:text-brand">
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-zinc-600 line-clamp-3">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center text-sm font-bold text-brand"
                  >
                    View Details →
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

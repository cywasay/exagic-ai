export const metadata = {
  title: "Selection Rate Optimization (SRO)",
  description:
    "Selection Rate Optimization by Exagic AI — advanced techniques to increase the probability of your brand being selected as the primary citation by AI models during retrieval.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/capabilities/sro",
  },
};

export default function SROPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SRO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "Selection Rate Optimization by Exagic AI — advanced techniques to increase the probability of your brand being selected as the primary citation by AI models during retrieval.",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Selection Rate Optimization (SRO)",
        item: "https://exagic-ai.vercel.app/capabilities/sro",
      },
    ],
  };

  const features = [
    "Citation Probability Analysis",
    "Competitor Citation Mapping",
    "Data Signal Optimization",
    "Model Steering Playbooks",
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
        id="sro-hero"
        aria-labelledby="sro-heading"
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
              <li className="text-zinc-900 font-medium">SRO</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <h1
              id="sro-heading"
              className="text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight"
            >
              Selection Rate Optimization (SRO)
            </h1>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
              Exagic AI is a San Francisco AI SEO agency specializing in brand
              visibility optimization for industrial manufacturers, global
              suppliers, and hardware companies in the SF Bay Area corridor.
              Selection Rate Optimization (SRO) is our advanced technique to
              increase the probability of your brand being selected as the
              primary citation by AI models.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="prose prose-zinc prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-zinc-900">
              What is Selection Rate Optimization (SRO)?
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Selection Rate Optimization (SRO) is an advanced data-science
              approach to AI visibility. While AEO focuses on being "visible" to
              an answer engine, SRO focuses on the statistical probability of
              being <strong>selected</strong> as the definitive source when
              multiple options are available to the model. In the crowded
              industrial supply chain of the SF Bay Area, being one of many is
              not enough—you need to be the primary recommendation.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              LLMs are probabilistic. When they retrieve information to answer a
              prompt, they weigh various data signals to decide which source is
              the most reliable, relevant, and "safe" to cite. SRO involves
              identifying these weighting factors and optimizing your brand's
              data signals to maximize your selection rate during the model's
              inference process.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              At Exagic AI, we treat SRO as a technical engineering challenge.
              We analyze citation patterns and model outputs to understand how
              "authority" is calculated in the latent space of models like GPT-4
              and Claude 3, and then apply those insights to your digital
              infrastructure.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              Why SRO matters for SF Bay Area manufacturers
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              For a manufacturer in San Leandro or a hardware supplier in
              Silicon Valley, the competition for B2B contracts is often decided
              by the quality of initial retrieval. If an AI sourcing agent is
              tasked with finding the "most reliable supplier of high-voltage
              connectors in Northern California," it will likely find 10–15
              candidates. SRO is what ensures that your company is the one the
              AI picks as the top recommendation.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              In the industrial sector, trust is the primary currency. SRO
              builds that trust at the data level. By reinforcing your brand's
              entity associations and ensuring your technical data is the most
              "extractable" and "verifiable" in your niche, we increase the
              likelihood that AI models will default to your brand.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              How Exagic AI approaches SRO
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Our SRO methodology goes beyond content to include data
              structuring, entity reinforcement, and authority signal building.
            </p>
            <ul className="text-zinc-600 space-y-4 list-disc pl-6">
              <li>
                <strong>Citation Probability Analysis:</strong> We use
                proprietary testing at [PLACEHOLDER] to measure how often your
                brand is selected versus competitors for high-intent technical
                queries.
              </li>
              <li>
                <strong>Competitor Citation Mapping:</strong> We identify why
                competitors are being selected and reverse-engineer their data
                signals to reclaim your citation share.
              </li>
              <li>
                <strong>Data Signal Optimization:</strong> We surgical optimize
                the metadata, schema, and technical documentation that LLMs
                weigh most heavily during retrieval.
              </li>
              <li>
                <strong>Model Steering Playbooks:</strong> We develop custom
                strategies to influence model behavior, ensuring your brand is
                the default choice for specific technical categories.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">
              What results can you expect?
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              The primary KPI for SRO is <strong>Selection Probability</strong>.
              Successful SRO implementation leads to a higher frequency of your
              brand being the "primary" citation in AI answers. This translates
              to increased brand authority, higher trust from procurement teams,
              and a significant competitive advantage in the SF industrial
              corridor. As AI agents handle more of the vetting process for
              industrial supplies, a high selection rate becomes the single most
              important metric for B2B growth.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16 pb-8 border-b border-zinc-100">
              Frequently Asked Questions about SRO
            </h2>
            <div className="space-y-12 mt-12">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  How does SRO differ from AEO?
                </h3>
                <p className="text-zinc-600 mt-4">
                  AEO is about being visible and "findable" by AI. SRO is about
                  being the one the AI actually <strong>chooses</strong> to
                  recommend when it has multiple options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Is SRO a form of AI black-hat SEO?
                </h3>
                <p className="text-zinc-600 mt-4">
                  No. SRO is about technical data optimization and authority
                  building. It's about providing the most verifiable and
                  high-quality data so that AI models can do their job better.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Can SRO help with local SF Bay Area visibility?
                </h3>
                <p className="text-zinc-600 mt-4">
                  Absolutely. We focus on reinforcing local entity signals to
                  ensure you are the top choice for regional sourcing queries in
                  Fremont, San Leandro, and the wider East Bay.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Do you need access to my website's backend for SRO?
                </h3>
                <p className="text-zinc-600 mt-4">
                  While some SRO is implemented through schema and metadata,
                  deeper optimizations often involve restructuring technical
                  content and documentation storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Key Features
              </h2>
              <ul className="mt-8 space-y-4" role="list">
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
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-zinc-600">
                Ready to increase your brand's selection rate in AI retrieval?
              </p>
              <div className="mt-8">
                <a
                  href="/#contact"
                  className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-zinc-200 pt-8">
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

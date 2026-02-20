export const metadata = {
  title: "Answer Engine Optimization (AEO)",
  description:
    "Answer Engine Optimization services for industrial brands. Exagic AI ensures your products and services are the default recommendation in ChatGPT, Gemini, and Perplexity.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/capabilities/aeo",
  },
};

export default function AEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AEO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "Answer Engine Optimization services for industrial brands. Exagic AI ensures your products and services are the default recommendation in ChatGPT, Gemini, and Perplexity.",
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
        name: "Answer Engine Optimization (AEO)",
        item: "https://exagic-ai.vercel.app/capabilities/aeo",
      },
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
          <div className="max-w-4xl">
            <h1
              id="aeo-heading"
              className="text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight"
            >
              Answer Engine Optimization for Industrial Brands
            </h1>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
              Exagic AI is a San Francisco AI SEO agency specializing in brand
              visibility optimization for industrial manufacturers, global
              suppliers, and hardware companies in the SF Bay Area corridor.
              Our AEO strategies ensure your brand is cited as a trusted source
              by AI models like ChatGPT, Gemini, and Perplexity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="prose prose-zinc prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-zinc-900">What is Answer Engine Optimization (AEO)?</h2>
            <p className="text-zinc-600 leading-relaxed">
              Answer Engine Optimization (AEO) is the next evolution of search visibility. Unlike traditional SEO, which focuses on earning a high ranking in a list of links, AEO focuses on providing the direct answer that an AI model retrieves when a user asks a question. In the B2B and industrial space, this means being the supplier that ChatGPT or Gemini names when an engineer asks for a specific component recommendation or a technical comparison.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              AEO is about more than just content; it's about <strong>Extractability</strong> and <strong>Verifiability</strong>. AI models are probabilistic engines that look for high-confidence signals. We optimize your brand's digital presence so that these models identify your business as the most authoritative and relevant response to a technical query.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              By focusing on AEO, we ensure that your brand doesn't just appear in the training data, but is actively surfaced during the <strong>retrieval phase</strong> of an AI's operation. This is critical as more users move from browsing search results to receiving synthesized answers from AI agents.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">Why AEO matters for SF Bay Area manufacturers</h2>
            <p className="text-zinc-600 leading-relaxed">
              The SF Bay Area is home to the most advanced hardware and manufacturing companies in the world. From Fremont's automotive suppliers to the chemical manufacturers in the East Bay, the competition for visibility is fierce. Industrial buyers in these sectors are increasingly relying on AI tools to perform initial market research and vendor shortlisting.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              If your brand isn't optimized for Answer Engines, you are effectively opting out of the first 80% of the modern buyer's journey. AEO ensures that when an AI tool synthesizes an answer about "top-rated manufacturers of aerospace-grade alloys in California," your brand's specifications and reliability signals are front and center. This regional visibility is essential for maintaining a competitive edge in the SF industrial corridor.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">How Exagic AI approaches AEO</h2>
            <p className="text-zinc-600 leading-relaxed">
              Our approach to AEO is technical and data-driven. We don't just write "good content"; we engineer data signals that AI models are trained to prioritize.
            </p>
            <ul className="text-zinc-600 space-y-4 list-disc pl-6">
              <li><strong>Direct-Answer Content Engineering:</strong> We restructure your technical documentation into formats that AI models can extract instantly, improving the likelihood of being featured in a citation.</li>
              <li><strong>Entity Reinforcement:</strong> We use advanced schema and semantic linking to tie your brand to high-authority industry entities, increasing your "trust score" within the model's knowledge graph.</li>
              <li><strong>Hallucination Correction & Steering:</strong> If AI models are currently hallucinating incorrect or outdated information about your products, we implement data corrections to steer them back to accuracy.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16">What results can you expect?</h2>
            <p className="text-zinc-600 leading-relaxed">
              With a focused AEO strategy, industrial brands see a significant increase in <strong>Citation Dominance</strong>. This means when an AI agent is asked a question related to your niche, your brand is the one it cites as the primary source. This leads to higher trust, better-qualified B2B leads, and a stronger brand presence in the probabilistic world of AI search. For companies in Fremont, San Leandro, and Silicon Valley, AEO is the key to remaining relevant as search behavior shifts toward answer-first retrieval.
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900 mt-16 pb-8 border-b border-zinc-100">Frequently Asked Questions about AEO</h2>
            <div className="space-y-12 mt-12">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">What is the difference between AEO and SRO?</h3>
                <p className="text-zinc-600 mt-4">AEO focus on being the provider of the answer, while <a href="/capabilities/sro" className="text-brand hover:underline">Selection Rate Optimization (SRO)</a> focuses on increasing the statistical probability of being selected as the primary citation among multiple sources.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Does AEO replace traditional SEO?</h3>
                <p className="text-zinc-600 mt-4">No. AEO complements traditional SEO by capturing the growing segment of users who interact with AI chat assistants and agents instead of search engines.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">How do you measure AEO success?</h3>
                <p className="text-zinc-600 mt-4">We measure success through citation share, brand prominence in model responses, and the accuracy of AI-generated summaries of your products.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">How long does AEO take?</h3>
                <p className="text-zinc-600 mt-4">Initial visibility improvements can often be seen within 60–90 days as AI crawlers re-index your structured data signals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Is AEO suitable for technical B2B products?</h3>
                <p className="text-zinc-600 mt-4">Yes, it is highly effective for technical specifications and industrial supply chains where buyers need precise, trusted information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">Key Features</h2>
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
                Ready to dominate the Answer Engines? Let's discuss your
                technical audit today.
              </p>
              <div className="mt-8">
                <a
                  href="/#contact"
                  className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
                >
                  Get Started
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

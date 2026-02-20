import Link from "next/link";
import ContactCTA from "../../_components/ContactCTA/ContactCTA";

export const metadata = {
  title:
    "What Is Selection Rate Optimization (SRO) and Why Industrial Brands Need It | Exagic AI",
  description:
    "SRO is the AI SEO discipline that determines whether your content is cited once AI retrieves it. A practical guide for SF Bay Area industrial manufacturers.",
  alternates: {
    canonical:
      "https://exagic-ai.vercel.app/lab/what-is-sro-selection-rate-optimization",
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
        item: "https://exagic-ai.vercel.app/",
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
        name: "Selection Rate Optimization (SRO)",
        item: "https://exagic-ai.vercel.app/lab/what-is-sro-selection-rate-optimization",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "What Is Selection Rate Optimization (SRO) and Why Industrial Brands Need It",
    description:
      "Definition and strategic importance of SRO for high-stakes industrial manufacturers.",
    author: { "@type": "Organization", name: "Exagic AI" },
    datePublished: "2026-02-01",
    publisher: { "@type": "Organization", name: "Exagic AI" },
  };

  const faqItems = [
    {
      question: "What is Selection Rate Optimization?",
      answer:
        "SRO is the AI SEO discipline that improves the probability of your content being cited by AI models once retrieved. It addresses the gap between being retrieved and being selected — optimizing content clarity, entity precision, and structural accessibility to increase citation rate.",
    },
    {
      question: "How is SRO different from AEO?",
      answer:
        "AEO optimizes for getting your content into the set of sources AI retrieves for relevant queries. SRO optimizes the selection decision once your content is in that set. AEO gets you retrieved. SRO gets you chosen. Both are necessary for full AI visibility.",
    },
    {
      question: "How long does SRO take to show results for industrial brands?",
      answer:
        "Initial selection rate improvements typically appear within 30–60 days of content and snippet optimization. Sustained improvement across a competitive query set develops over 3–6 months as optimization cycles compound and AI retrieval behavior updates to reflect content changes.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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

      <article className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/lab"
            className="text-sm font-bold text-brand hover:underline"
          >
            ← Back to Lab
          </Link>

          <h1 className="mt-8 text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight leading-tight">
            What Is Selection Rate Optimization (SRO) and Why Industrial Brands
            Need It
          </h1>

          <div className="mt-10 p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
            <p className="text-xl font-medium text-zinc-900 leading-relaxed">
              Selection Rate Optimization (SRO) is the practice of improving the
              probability that your content is cited by an AI model once it has
              been retrieved. AI systems retrieve multiple sources for every
              query — then select which to use. SRO ensures your content is the
              one selected. It is the difference between being found and being
              chosen.
            </p>
          </div>

          <div className="mt-16 space-y-12 text-lg text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                What Is Selection Rate?
              </h2>
              <p>
                In the context of AI search and Answer Engine Optimization,
                Selection Rate (SR) is a critical performance metric defined as:
                (Times Cited / Times Retrieved) × 100. It measures the
                efficiency of your content in the eyes of an AI model's
                selection algorithm.
              </p>
              <p className="mt-6">
                Think of it as the AI-native equivalent of Click-Through Rate
                (CTR). In traditional search, CTR measures how often a human
                clicks your result after seeing it in a list. In AI search, the
                AI model is the "user" that browses retrieved snippets.
                Selection Rate measures how often that AI model decides your
                content is the most accurate, relevant, and well-structured
                source to include in its final generated answer. A brand can be
                retrieved thousands of times but have a selection rate of near
                zero if its content structure is too fragmented for the model to
                use confidently.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Why Does Selection Rate Matter for Industrial Manufacturers?
              </h2>
              <p>
                For industrial manufacturers in the SF Bay Area, every
                procurement query is high-stakes. Whether a buyer is sourcing
                custom gaskets in San Jose or looking for 3PL providers in
                Fremont, the AI's selection decision is based on technical
                precision, certification matches, and geographic relevance.
              </p>
              <p className="mt-6">
                If a procurement engineer asks an AI platform for a specific
                technical capability, the AI might retrieve five different
                manufacturers. SRO is what ensures YOUR brand is the one the AI
                actually names and links to. A manufacturer with slightly lower
                traditional domain authority but superior SRO-optimized content
                structure will consistently win citations over a legacy
                competitor whose content is structurally inaccessible. In the
                world of AI search, "better content structure" beats "more
                backlinks" almost every time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Why Is Content Retrieved But Not Selected?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                  <h3 className="text-xl font-bold text-zinc-900">
                    1. No Direct Answer
                  </h3>
                  <p className="mt-3 text-zinc-600">
                    The content opens with fluff or marketing filler. AI models
                    prefer concise, direct answers at the very beginning of the
                    snippet they retrieve.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                  <h3 className="text-xl font-bold text-zinc-900">
                    2. Vague Entities
                  </h3>
                  <p className="mt-3 text-zinc-600">
                    The content uses generic terms instead of precise technical
                    entities. If the AI can't verify your material specs or
                    certifications, it won't risk citing you.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                  <h3 className="text-xl font-bold text-zinc-900">
                    3. Extraction Friction
                  </h3>
                  <p className="mt-3 text-zinc-600">
                    Data is trapped in tables, images, or PDFs that are
                    difficult for the model to parse at high speed during the
                    inference phase.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                  <h3 className="text-xl font-bold text-zinc-900">
                    4. Weak Authority
                  </h3>
                  <p className="mt-3 text-zinc-600">
                    The source lacks schema markup or consistent citation
                    history across other high-authority entities, leading to a
                    lower model confidence score.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                How Does Exagic AI Optimize Selection Rate for Industrial
                Brands?
              </h2>
              <p>
                Our SRO process is a three-stage engineering discipline designed
                specifically for technical manufacturers. First, we perform an{" "}
                <strong>AI Retrieval Audit</strong> to see which of your pages
                are currently being retrieved and by which models (GPT-4o,
                Claude 3.5, Llama 3). We document exactly where the "selection
                drop-off" is happening.
              </p>
              <p className="mt-6">
                Second, we perform <strong>Snippet Engineering</strong>. We
                restructure your H2 headings and opening paragraphs to act as
                "extraction traps" — high-density information blocks that AI
                models find irresistible for citation. This includes injecting
                precise technical entities and material specifications directly
                into the most visible content layers.
              </p>
              <p className="mt-6">
                Finally, we implement <strong>Entity Reinforcement</strong> via
                advanced schema markup. By explicitly defining the relationships
                between your brand, your technical services, and your geographic
                service areas in code, we give the AI's selection algorithm the
                "proof" it needs to choose your brand as the definitive source
                for a query.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                What Results Can Industrial Brands Expect from SRO?
              </h2>
              <p>
                Selection Rate Optimization is not an overnight fix, but its
                results are compounding and measurable. For most SF Bay Area
                industrial brands, we see initial selection improvements —
                measured by citation frequency in model-specific testing —
                within the first 30 to 60 days of implementation.
              </p>
              <p className="mt-6">
                Over a 3-to-6-month cycle, sustained SRO gains translate into
                total brand dominance for specific technical query sets. You
                start seeing your brand appearing as the cited, recommended
                answer in procurement queries where you were previously
                completely invisible or merely a "retrieved-but-ignored"
                candidate. As models iterate and retrieve more frequently from
                high-precision sources, your brand's authority within the AI's
                knowledge graph grows, creating an "authority moat" that
                competitors find difficult to cross.
              </p>
            </section>
          </div>

          <section className="mt-24 border-t border-zinc-100 pt-24">
            <h2 className="text-4xl font-semibold text-zinc-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-12">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-xl text-zinc-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-32 p-12 rounded-3xl bg-zinc-900 text-white">
            <h2 className="text-3xl font-bold">
              Stop being found. Start being chosen.
            </h2>
            <p className="mt-6 text-xl text-zinc-300 leading-relaxed">
              If your industrial brand is struggle to get cited by ChatGPT or
              Perplexity, the problem isn't your capability — it's your
              Selection Rate. Let Exagic AI optimize your content for the AI
              era.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-dark"
              >
                Talk to Exagic AI about SRO for your brand
              </Link>
              <Link
                href="/capabilities/sro"
                className="inline-flex items-center justify-center text-lg font-bold text-white hover:text-brand transition-colors"
              >
                See our full SRO service page →
              </Link>
            </div>
          </section>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}

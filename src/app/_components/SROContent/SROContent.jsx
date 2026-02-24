import Link from "next/link";
import ContactCTA from "../ContactCTA/ContactCTA";

export default function SROContent({ faqItems }) {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              Selection Rate Optimization (SRO)
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              Selection Rate Optimization is an AI SEO discipline that leads to
              preferential treatment of your brand, products, and services in
              AI-generated search results.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              In AI search systems like Google's AI Mode, Gemini, and ChatGPT, a
              large language model acts as an interpretive layer between your
              content and industrial buyers. When presented with multiple
              retrieved sources, the model decides which to select and how to
              use it. SRO is the practice of systematically improving that
              selection decision in your brand's favor.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS SELECTION RATE? */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Is Selection Rate and Why Does It Matter for Industrial
              Brands?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Selection Rate (SR) is the percentage of times your content is
              cited when an AI system retrieves it. It is the AI-native
              equivalent of click-through rate — measuring not whether users
              click your link, but whether AI models choose your content to
              build their answer. For industrial suppliers, a low selection rate
              means AI finds you but ignores you.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                When AI platforms like Gemini or ChatGPT generate a grounded
                response, they retrieve multiple candidate sources. The model
                then reviews snippets from each source and decides which to
                incorporate into the final answer. This selection decision is
                not random — it is based on content clarity, entity precision,
                source authority, semantic match to query intent, and structural
                accessibility. A brand can rank highly in traditional search and
                still have a near-zero selection rate in AI-generated answers.
              </p>
              <p>
                For industrial manufacturers and SF Bay Area suppliers, this
                distinction is critical. Procurement teams and industrial buyers
                increasingly query AI systems directly — asking for supplier
                recommendations, product comparisons, and technical
                specifications. If your content is retrieved but consistently
                not selected, your brand is invisible in the answers those
                buyers receive, regardless of how well you perform in
                traditional search rankings.
              </p>
              <p>
                The problem of "invisible retrieval" is particularly acute in
                technical hardware and industrial manufacturing. Because models
                are trained to be "helpful and harmless," they prioritize
                sources that provide immediate, clear, and unambiguous data. If
                your competitor's spec sheet is more parsable than your dynamic
                Javascript-heavy product viewer, the AI will select the
                competitor every time. SRO is the engineering solution to this
                retrieval gap.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Click-Through Rate (CTR)
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Selection Rate (SR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Human behavior metric
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      AI behavior metric
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Measures user clicks from search results
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Measures AI citation from retrieved sources
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Influenced by title tags and meta descriptions
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Influenced by content clarity and entity precision
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Tracked in Google Search Console
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Tracked through AI citation analysis
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimized through traditional SEO
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimized through SRO
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE EXAGIC AI SRO PROCESS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Does Exagic AI's SRO Process Work?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Exagic AI's SRO process follows three stages — project setup,
              optimization, and implementation. Each stage is data-driven,
              grounded in real AI retrieval behavior, and tailored to the
              specific products, services, and competitive landscape of each
              industrial client.
            </p>

            <div className="mt-16 space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Stage 1 — Project Setup
                </h3>
                <div className="mt-4 space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    We begin by defining the client's key entities — their
                    brand, core products, technical categories, and regional
                    presence in the SF Bay Area corridor. This foundational step
                    ensures that we are optimizing for the correct identity
                    markers that AI models use to categorize and retrieve
                    information.
                  </p>
                  <p>
                    Using advanced query fanout techniques, we generate
                    comprehensive sets of prompts directly tied to those
                    entities. We map the full range of technical and sourcing
                    questions that industrial buyers and procurement agents
                    might ask AI platforms about the client's specific niche,
                    from "best aerospace aluminum supplier in San Jose" to
                    complex compliance-specific queries.
                  </p>
                  <p>
                    We then run those prompts across multiple models with AI
                    search grounding enabled and extract a complete list of
                    grounding candidates — the exact sources AI is currently
                    retrieving when those queries are asked. This allows us to
                    identify the client's current position within that candidate
                    list and define the competitive set — the other sources
                    being retrieved alongside the client's content.
                  </p>
                  <p>
                    Finally, we measure baseline selection performance —
                    quantifying how often the client's content is currently
                    being chosen versus being retrieved but ignored. This
                    provides the benchmark against which all SRO success is
                    measured.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Stage 2 — Optimization
                </h3>
                <div className="mt-4 space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    <strong>Snippet Optimization:</strong> The core of SRO is
                    snippet optimization. AI systems like Gemini retrieve
                    shallow context — often just a URL, title, and a short
                    snippet of approximately 150–300 characters. From this
                    limited information, the model decides whether to select the
                    source for its final answer. We optimize the critical
                    opening content of each target page to maximize selection
                    probability — ensuring the snippet extracted by AI contains
                    a complete, entity-rich, and contextually precise answer to
                    the buyer's likely query.
                  </p>
                  <p>
                    <strong>Token-Level Refinement:</strong> Beyond structural
                    optimization, we analyze which specific words and phrases
                    shift selection behavior in AI models. Every word processed
                    by a language model carries a mathematical weight (a token
                    probability) shaped by its training data. We identify which
                    tokens in your technical content most strongly activate
                    selection pathways in the target models, and refine page
                    content to strengthen those signals without compromising
                    readability for human visitors.
                  </p>
                  <p>
                    <strong>Competitive Analysis:</strong> We benchmark your
                    optimized content directly against the grounding candidates
                    currently outperforming your brand. This is a systematic,
                    mathematical comparison of snippet quality, entity density,
                    semantic precision, and structural accessibility. We don't
                    work on assumptions; we work on measurable gaps between your
                    content and the sources AI is currently preferring in the
                    Bay Area industrial space.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Stage 3 — Implementation and Measurement
                </h3>
                <div className="mt-4 space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    Once content optimization briefs are finalized, changes are
                    implemented directly on the client's platform. This involves
                    not just rewriting opening paragraphs for snippet
                    optimization, but also restructuring the technical hierarchy
                    of whole pages for entity clarity. We update structured
                    JSON-LD data to reinforce AI-readable signals and ensure
                    absolute technical accessibility for all major AI crawlers,
                    including GPTBot and Google-InspectionTool.
                  </p>
                  <p>
                    Results are measured by tracking selection rate changes
                    across the defined query set over time. We monitor citation
                    frequency, brand mention accuracy in AI-generated answers,
                    competitive position shifts, and entity association
                    strength. Findings from each measurement cycle feed back
                    into the next optimization iteration — making SRO a
                    continuously improving technical process rather than a
                    one-time marketing fix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CONTENT GETS RETRIEVED BUT NOT SELECTED */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Why Is My Brand Being Retrieved But Not Selected by AI?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Content that is retrieved but not selected typically suffers from
              one or more of four problems: the opening content does not contain
              a complete answer, entity associations are too vague for the model
              to use confidently, the content structure makes extraction
              difficult, or the source authority signals are weaker than
              competing grounding candidates.
            </p>

            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Incomplete Opening Content
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AI systems make selection decisions based on shallow context —
                  often the first 150–300 characters of your page content. If
                  your page opens with a marketing headline, a generic
                  navigation element, or vague introductory text rather than a
                  direct, entity-rich answer, the model passes over your content
                  in favor of sources that answer the query immediately. Every
                  industrial capabilities page targeted for AI citation must
                  open with a complete, standalone answer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Vague Entity Associations
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Language models understand brands through entity associations.
                  If your content describes your company in generic terms ("a
                  leading supplier of industrial components") rather than
                  precise entity language ("a Fremont-based manufacturer of
                  precision CNC-machined aluminum components for aerospace and
                  defense applications"), the model cannot confidently connect
                  your brand to specific industrial queries. Vague associations
                  produce low selection rates and missed procurement
                  opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Poor Content Structure
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AI systems extract information from content structurally, not
                  narratively. Pages with dense, unbroken paragraphs, unclear
                  section hierarchies, or mixed topic coverage are significantly
                  harder for models to parse accurately. Structured content —
                  built with clear H2/H3 hierarchies, standalone sections, and
                  direct-answer opening sentences — is mathematically more
                  extractable and therefore more likely to be selected as a
                  grounding source.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Weak Source Authority Signals
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AI platforms weight their selection decisions partly on source
                  authority. This includes traditional signals (domain
                  authority, backlink profile) plus AI-specific signals like
                  entity presence in major knowledge graphs and consistency of
                  brand descriptions across the live web. A technically
                  well-optimized page on a low-authority domain will
                  consistently lose citation competitions to
                  moderately-optimized content on high-authority industrial
                  portals or competitor sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SRO FOR INDUSTRIAL MANUFACTURERS SPECIFICALLY */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Does SRO Apply to SF Bay Area Industrial Manufacturers?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              For industrial manufacturers and suppliers in the SF Bay Area
              corridor, SRO addresses a specific and largely unmet challenge: AI
              procurement tools are increasingly used to shortlist suppliers,
              yet most industrial brands have content structures completely
              unoptimized for AI retrieval and selection.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Industrial procurement has undergone a structural shift.
                Enterprise buyers and sourcing managers now routinely query AI
                platforms — ChatGPT, Perplexity, Gemini — to identify qualified
                suppliers, compare technical capabilities, and shortlist vendors
                for RFQ processes. These AI-generated shortlists are built from
                retrieved and selected sources. Suppliers whose content is not
                selected do not appear on those shortlists, regardless of their
                actual capabilities or geographic proximity.
              </p>
              <p>
                The SF Bay Area industrial corridor — spanning Fremont, San
                Leandro, San Jose, and the broader East Bay manufacturing belt —
                contains thousands of qualified manufacturers and suppliers who
                are effectively invisible in AI procurement searches. Their
                websites exist, their products are documented, but their content
                is not structured for AI retrieval and selection. SRO closes
                this gap — converting existing content into AI-citable sources
                that appear when procurement agents query for suppliers in their
                niche.
              </p>
              <p>
                Exagic AI specializes exclusively in this segment. We understand
                the technical language, procurement cycles, and competitive
                dynamics of industrial manufacturing in Northern California. Our
                SRO process is calibrated for industrial content — converting
                product specifications, capability statements, and service
                descriptions into the precise, entity-rich, structurally
                accessible content that AI procurement tools prefer to select
                and cite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT SRO IS NOT */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Selection Rate Optimization Is Not
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              SRO is not keyword stuffing, AI-generated content spamming, or any
              form of manipulation that violates platform guidelines. It is the
              structured, data-driven improvement of genuine content quality —
              making accurate information about your brand more accessible and
              more useful to AI systems that are already trying to answer
              questions about your industry.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                SRO does not involve creating misleading content, fabricating
                entity associations, or attempting to deceive AI models. The
                optimization process works with your brand's actual
                capabilities, real products, and genuine expertise — making
                accurate descriptions more precise, more complete, and more
                structurally accessible. AI models are trained to evaluate
                source quality; content that misrepresents a brand's actual
                capabilities tends to be deprioritized rather than selected as a
                grounding source.
              </p>
              <p>
                SRO also does not replace traditional SEO. It extends it. Strong
                technical SEO fundamentals — crawlability, site speed,
                structured data, authoritative backlinks — remain important
                inputs to AI selection decisions. SRO adds a layer of
                AI-specific optimization on top of that foundation, targeting
                the specific signals that influence model selection behavior
                rather than the ranking signals that influence traditional
                search position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Selection Rate Optimization (SRO) FAQs
            </h2>
            <div className="mt-12 space-y-12">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-lg text-zinc-600 leading-relaxed italic border-l-4 border-brand pl-6">
              <p>
                Still have questions about how Selection Rate impacts your
                contract pipeline? Reach out to our specialist team in the SF
                Bay Area for a detailed technical audit of your current AI
                selection performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLOSING CTA */}
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Ready to Increase Your Brand's Selection Rate in AI Search?
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with SF Bay Area industrial manufacturers, global
              suppliers, and hardware companies to systematically improve
              selection rate across ChatGPT, Gemini, and Perplexity. If your
              brand is being retrieved but not selected — or not appearing in AI
              procurement searches at all — SRO is where the work begins.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/aeo"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
              >
                Learn About AEO Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

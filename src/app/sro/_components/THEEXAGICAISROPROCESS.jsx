import Link from "next/link";

export default function THEEXAGICAISROPROCESS() {
  return (
    <>
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
    </>
  );
}

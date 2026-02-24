import Link from "next/link";

export default function WHYCONTENTGETSRETRIEVEDBUTNOTSELECTED() {
  return (
    <>
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
    </>
  );
}

export default function Logic() {
  return (
    <section
      id="logic"
      aria-labelledby="logic-heading"
      className="rag-section bg-zinc-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="logic-heading"
          className="text-3xl sm:text-4xl font-semibold text-zinc-900"
        >
          Entity. Authority. Retrieval.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div
              className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-brand text-lg font-bold"
              aria-hidden="true"
            >
              01
            </div>
            <h3 className="text-xl font-semibold text-zinc-900" itemProp="name">
              Entity. Authority. Retrieval.
            </h3>
            <p
              className="mt-4 text-zinc-700 leading-relaxed"
              itemProp="description"
            >
              We design and deploy high-fidelity data structures for industrial
              brands. All decision-making is based on semantic analysis, model
              testing, and real retrieval data.
            </p>
          </article>

          <article
            className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div
              className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-brand text-lg font-bold"
              aria-hidden="true"
            >
              02
            </div>
            <h3 className="text-xl font-semibold text-zinc-900" itemProp="name">
              Innovation.
            </h3>
            <p
              className="mt-4 text-zinc-700 leading-relaxed"
              itemProp="description"
            >
              Our clients gain access to proprietary tools and methodologies
              designed to convert technical specifications into machine-readable
              entities — ensuring dominance in AI sourcing.
            </p>
          </article>

          <article
            className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div
              className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-brand text-lg font-bold"
              aria-hidden="true"
            >
              03
            </div>
            <h3 className="text-xl font-semibold text-zinc-900" itemProp="name">
              Focused Campaigns.
            </h3>
            <p
              className="mt-4 text-zinc-700 leading-relaxed"
              itemProp="description"
            >
              We deliver sharp, prioritised AI SEO strategies designed to meet
              your business objectives in the SF Bay Area industrial corridor
              and beyond.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

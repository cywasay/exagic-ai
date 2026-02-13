export default function Logic() {
  return (
    <section
      id="logic"
      aria-labelledby="logic-heading"
      className="rag-section border-t border-zinc-100 bg-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2 id="logic-heading" className="text-4xl font-semibold text-zinc-900">
          Entity. Authority. Retrieval.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <article className="entity-card rounded-xl p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand text-lg font-bold">
              01
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Structure</h3>
            <p className="mt-4 text-zinc-500 leading-relaxed">
              We design and deploy high-fidelity data structures. All our
              decision-making is based on semantic analysis and model testing.
            </p>
          </article>

          <article className="entity-card rounded-xl p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand text-lg font-bold">
              02
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Innovation</h3>
            <p className="mt-4 text-zinc-500 leading-relaxed">
              Our clients gain access to proprietary tools designed to turn
              technical specifications into machine-readable entities, ensuring
              dominance in AI sourcing.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

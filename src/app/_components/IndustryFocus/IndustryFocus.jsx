export default function IndustryFocus() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="rag-section border-t border-zinc-100 bg-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              id="industries-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              Strategic Industrial Optimization
            </h2>
            <p className="mt-6 text-zinc-500 leading-relaxed">
              We deliver sharp, well-prioritised SEO strategies for
              manufacturers in the East Bay and Silicon Valley. By bridging the
              gap between legacy data and modern AI retrieval, we ensure brands
              like GATCO Inc. maintain a permanent seat in the global knowledge
              graph.
            </p>
            <div className="mt-8">
              <a
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Explore Industries
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Entity Associations
              </div>
              <div className="space-y-4">
                {[
                  "SF Industrial Corridor",
                  "East Bay Manufacturing Belt",
                  "Silicon Valley Supply Chain",
                  "Fremont Logistics Hub",
                ].map((entity) => (
                  <div
                    key={entity}
                    className="flex items-center gap-3 rounded-lg bg-zinc-50 px-4 py-3 text-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-brand"></div>
                    <span className="font-medium text-zinc-700">{entity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <div className="text-xs text-zinc-400">
                  Connected to{" "}
                  <span className="font-semibold text-brand">
                    12+ high-authority local nodes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

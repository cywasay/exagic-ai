export default function IndustryFocus() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="rag-section border-t border-zinc-100 bg-zinc-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              id="industries-heading"
              className="text-3xl sm:text-4xl font-semibold text-zinc-900 leading-tight"
            >
              Strategic Industrial Optimization
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              We deliver sharp, prioritised SEO strategies for manufacturers in
              the East Bay and Silicon Valley. By bridging the gap between
              legacy data and modern AI retrieval, we ensure brands maintain a
              permanent seat in the global knowledge graph. Read our report on{" "}
              <a
                href="/lab/east-bay-manufacturers-invisible-ai-search"
                className="text-brand hover:underline font-medium"
              >
                why East Bay suppliers are becoming invisible in AI search
              </a>
              .
            </p>
            <nav className="mt-8" aria-label="Industry pages">
              <a
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
              >
                Explore Specialized Industries
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </nav>
          </div>

          <aside aria-label="Entity associations">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
              <div className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Entity Associations
              </div>
              <ul className="space-y-4" role="list">
                {[
                  "SF Industrial Corridor",
                  "East Bay Manufacturing Belt",
                  "Silicon Valley Supply Chain",
                  "Fremont Logistics Hub",
                ].map((entity) => (
                  <li
                    key={entity}
                    className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-zinc-50/30 px-5 py-4 text-sm transition-colors hover:bg-white hover:border-brand/20"
                  >
                    <div
                      className="h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(255,115,0,0.3)]"
                      aria-hidden="true"
                    ></div>
                    <span
                      className="font-semibold text-zinc-800"
                      itemProp="areaServed"
                    >
                      {entity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-zinc-100">
                <div className="text-xs text-zinc-500 flex items-center gap-2">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-white bg-zinc-200"
                      />
                    ))}
                  </div>
                  <span>
                    Connected to{" "}
                    <span className="font-bold text-brand">
                      12+ high-authority nodes
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

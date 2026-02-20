export default function SocialProof() {
  const pressLogos = [
    "TechCrunch",
    "Forbes Industrial",
    "Manufacturing Today",
    "SupplyChain 247",
  ];

  return (
    <section
      id="social-proof"
      className="rag-section bg-zinc-900 py-24 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1.017 21V18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.866 6.88295 22 3.017 22H1.017V21Z" />
            </svg>
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            "Exagic AI transformed our technical spec sheets into a
            machine-readable knowledge graph. We are now the #1 cited supplier
            in AI-generated procurement queries for precision machining."
          </blockquote>
          <div className="mt-8">
            <div className="text-lg font-bold text-white">Arthur Miller</div>
            <div className="text-white/60 text-sm mt-1">
              VP of Engineering • Pacific Precision Components
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-10">
            Featured In:
          </h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 hover:opacity-100 transition-opacity">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="text-xs font-bold uppercase border border-white/20 px-6 py-2 rounded"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

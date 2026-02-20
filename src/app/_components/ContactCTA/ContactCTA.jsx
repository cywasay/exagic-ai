export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="rag-section"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <div className="cta-gradient py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            Ready to scale your visibility?
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-xl mx-auto">
            Discuss your AI visibility strategy with our senior strategy team
            and secure your brand's future.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href="mailto:hello@exagic.ai"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:bg-zinc-50 hover:shadow-2xl active:scale-95"
              itemProp="email"
            >
              Request Video Call
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="/capabilities"
              className="text-white/80 hover:text-white text-sm font-semibold transition-colors"
            >
              Browse Technical Entity Audits →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

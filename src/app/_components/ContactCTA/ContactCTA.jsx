export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="rag-section">
      <div className="cta-gradient">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 id="cta-heading" className="text-4xl font-semibold text-white">
            Schedule a Call
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            Discuss your AI visibility strategy with a specialist.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@exagic.ai"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-bold text-brand transition-all hover:bg-zinc-50 hover:shadow-2xl active:scale-95"
            >
              Request Video Call
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

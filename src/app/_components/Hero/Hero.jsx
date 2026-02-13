export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rag-section relative flex min-h-[85vh] items-center bg-white pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl pt-12">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-zinc-900"
          >
            San Francisco AI SEO agency specialising in brand visibility
            optimisation for industrial manufacturers and global suppliers.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-700">
            Our AI SEO process is driven by advanced machine learning
            techniques, mechanistic interpretability, and practical model
            steering methods.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5">
            <a
              href="#contact"
              className="rounded-md bg-brand px-6 py-3 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
            >
              Schedule a Call
            </a>
            <div className="space-y-1 text-sm text-zinc-500">
              <p>
                Book a consultation with our senior strategy team to discuss
                your project in detail.
              </p>
              <p className="text-zinc-400">
                The consultation is free and highly constructive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

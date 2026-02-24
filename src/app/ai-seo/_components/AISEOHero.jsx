import Link from "next/link";

export default function AISEOHero() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              AI SEO by Exagic AI
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              Exagic AI is the most advanced AI SEO agency in the SF Bay Area,
              specializing in brand visibility optimization for industrial
              manufacturers, global suppliers, and hardware companies.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              Our AI SEO process is driven by advanced machine learning
              techniques, mechanistic interpretability, and practical model
              steering methods — purpose-built for the industrial corridor. We
              move beyond the limitations of traditional search to master the
              mechanisms of AI retrieval.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

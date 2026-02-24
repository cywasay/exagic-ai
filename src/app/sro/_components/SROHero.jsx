import Link from "next/link";

export default function SROHero() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              Selection Rate Optimization (SRO)
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              Selection Rate Optimization is an AI SEO discipline that leads to
              preferential treatment of your brand, products, and services in
              AI-generated search results.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              In AI search systems like Google's AI Mode, Gemini, and ChatGPT, a
              large language model acts as an interpretive layer between your
              content and industrial buyers. When presented with multiple
              retrieved sources, the model decides which to select and how to
              use it. SRO is the practice of systematically improving that
              selection decision in your brand's favor.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

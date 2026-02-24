import Link from "next/link";

export default function AEOHero() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              Answer Engine Optimization (AEO)
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              AEO is the practice of optimizing your brand's visibility for AI
              chat assistants, AI agents, and answer engines — ensuring your
              industrial products and services are the default recommendation
              when buyers search.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              When a procurement manager queries ChatGPT, Perplexity, or Google
              Gemini for supplier recommendations, component specifications, or
              service comparisons, AEO determines whether your brand appears in
              the answer — or your competitor's does. Exagic AI specializes in
              AEO for industrial manufacturers and suppliers across the SF Bay
              Area corridor.
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

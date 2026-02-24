import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rag-section relative flex min-h-[85vh] items-center bg-white pt-24"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl pt-8">
          <h1
            id="hero-heading"
            className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            San Francisco AI SEO Agency for Industrial Manufacturers and Global
            Suppliers.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
            Our AI SEO process is driven by advanced machine learning
            techniques,{" "}
            <span itemProp="knowsAbout">mechanistic interpretability</span>, and
            practical <span itemProp="knowsAbout">model steering</span> methods.
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-medium">
            Book a consultation with our senior strategy team to discuss your
            project. The consultation is free and highly constructive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="rounded-md bg-brand px-6 py-3 text-base font-bold text-white shadow-xl transition-colors hover:bg-brand-dark"
            >
              Schedule a Call
            </Link>
            <Link
              href="/capabilities"
              className="text-zinc-900 text-sm sm:text-base font-bold hover:text-brand transition-colors flex items-center gap-2"
            >
              See Our Capabilities
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

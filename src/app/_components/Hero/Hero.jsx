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
        <div className="max-w-4xl pt-12">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight"
          >
            San Francisco AI SEO Agency Specializing in Brand Visibility
            Optimization for Industrial Manufacturers and Global Suppliers.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-700">
            Our AI SEO process is driven by advanced machine learning
            techniques,{" "}
            <span itemProp="knowsAbout">mechanistic interpretability</span>, and
            practical <span itemProp="knowsAbout">model steering</span> methods.
          </p>

          <p className="mt-4 text-zinc-500 font-medium">
            Book a consultation with our senior strategy team to discuss your
            project. The consultation is free and highly constructive.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
            >
              Schedule a Call
            </Link>
            <Link
              href="/capabilities"
              className="text-zinc-900 font-bold hover:text-brand transition-colors flex items-center gap-2 group"
            >
              See Our Capabilities
              <svg
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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

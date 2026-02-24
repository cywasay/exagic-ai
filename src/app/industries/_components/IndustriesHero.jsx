import Link from "next/link";

export default function IndustriesHero() {
  return (
    <>
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Strategic AI SEO for the SF Bay Area Industrial Corridor
            </h1>
            <p className="mt-8 text-2xl font-bold leading-tight text-zinc-900">
              Exagic AI delivers targeted AI visibility strategies for
              industrial manufacturers, logistics providers, hardware suppliers,
              electronics companies, B2B technical services, and engineering
              firms operating in the East Bay, Silicon Valley, and the SF
              Industrial Corridor.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              Every industrial sector has its own procurement language, buyer
              behavior, and AI search patterns. Our industry-specific approach
              ensures your brand is optimized for the exact queries your buyers
              are asking AI platforms — not generic SEO tactics designed for
              e-commerce or consumer brands.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: "Industries",
  description:
    "Strategic AI SEO optimization for industrial manufacturers, logistics companies, and supply chain operators in the SF Bay Area.",
  alternates: {
    canonical: "https://www.exagic.ai/industries",
  },
};

export default function IndustriesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.exagic.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://www.exagic.ai/industries",
      },
    ],
  };

  const industries = [
    {
      slug: "manufacturing",
      title: "Industrial Manufacturing",
      region: "East Bay & San Leandro",
      description:
        "We specialize in making industrial manufacturers visible to AI sourcing agents. From CNC machining to industrial hardware, we ensure your product catalogs become structured entities in the Knowledge Graph.",
      entities: [
        "GATCO Inc.",
        "Precision Tooling",
        "Industrial Hardware",
        "CNC Components",
      ],
      stat: "73%",
      statLabel: "of industrial buyers now use AI agents for sourcing",
      href: "/industries/manufacturing",
    },
    {
      slug: "logistics",
      title: "Logistics & Supply Chain",
      region: "Fremont Corridor",
      description:
        "The Fremont logistics corridor is one of the most critical supply chain hubs in the Bay Area. We ensure logistics providers are cited by AI models when buyers search for reliable freight, warehousing, and distribution partners.",
      entities: [
        "Freight Forwarding",
        "Warehousing Solutions",
        "Distribution Networks",
        "Cold Chain Logistics",
      ],
      stat: "4.2x",
      statLabel: "increase in AI-driven supply chain queries since 2024",
      href: "/industries/logistics",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        id="industries-hero"
        aria-labelledby="ind-heading"
        className="rag-section bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="hover:text-brand transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">Industries</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1
              id="ind-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              Strategic Industrial Optimization
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Targeted AI visibility strategies for manufacturers and logistics
              operators in the East Bay, Silicon Valley, and the SF Industrial
              Corridor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="space-y-12">
            {industries.map((ind) => (
              <article
                key={ind.slug}
                id={ind.slug}
                aria-labelledby={`${ind.slug}-heading`}
                className="rag-section rounded-2xl border border-zinc-200 bg-white p-8 md:p-12"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <h2
                      id={`${ind.slug}-heading`}
                      className="text-2xl font-semibold text-zinc-900"
                      itemProp="name"
                    >
                      <a
                        href={ind.href}
                        className="hover:text-brand transition-colors"
                      >
                        {ind.title}
                      </a>
                    </h2>
                    <p
                      className="mt-4 text-zinc-500 leading-relaxed"
                      itemProp="description"
                    >
                      {ind.description}
                    </p>

                    <div className="mt-8">
                      <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                        Entity Associations
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {ind.entities.map((e) => (
                          <span
                            key={e}
                            className="rounded-full bg-brand/5 border border-brand/10 px-3 py-1 text-xs font-medium text-brand"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center lg:items-end">
                    <div className="text-center lg:text-right">
                      <div className="text-5xl font-bold text-gradient">
                        {ind.stat}
                      </div>
                      <p className="mt-2 text-sm text-zinc-400 max-w-[200px]">
                        {ind.statLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

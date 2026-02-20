export const metadata = {
  title: "Case Studies",
  description:
    "Demonstrating measurable impact across the SF industrial corridor. Real-world results in AI citation share and visibility for manufacturers and logistics providers.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab/case-studies",
  },
};

export default function CaseStudiesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://exagic-ai.vercel.app/lab",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Case Studies",
        item: "https://exagic-ai.vercel.app/lab/case-studies",
      },
    ],
  };

  const caseStudies = [
    {
      client: "East Bay Industrial Manufacturer",
      result: "3.8x",
      metric: "increase in AI citation share",
      summary:
        "Converted legacy PDF catalogs into structured JSON-LD entities, resulting in the manufacturer becoming the default AI recommendation for CNC components in the Bay Area.",
    },
    {
      client: "Fremont Logistics Provider",
      result: "92%",
      metric: "AI visibility score achieved",
      summary:
        "Implemented full entity schema mapping and SRO strategy, moving the client from zero AI presence to dominant citation share in the Fremont logistics corridor.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        id="case-studies-hero"
        aria-labelledby="cs-page-heading"
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
              <li>
                <a href="/lab" className="hover:text-brand transition-colors">
                  Lab
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">Case Studies</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1
              id="cs-page-heading"
              className="text-4xl font-semibold text-zinc-900"
            >
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Demonstrating measurable impact across the SF industrial corridor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.client}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="text-4xl font-bold text-gradient">
                  {cs.result}
                </div>
                <div
                  className="mt-1 text-sm font-medium text-zinc-500"
                  itemProp="abstract"
                >
                  {cs.metric}
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <h2 className="font-semibold text-zinc-900" itemProp="name">
                    {cs.client}
                  </h2>
                  <p
                    className="mt-2 text-sm text-zinc-500 leading-relaxed"
                    itemProp="description"
                  >
                    {cs.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="/lab"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              ← Back to Lab
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

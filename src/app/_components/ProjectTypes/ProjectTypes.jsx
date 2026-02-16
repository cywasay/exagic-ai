export default function ProjectTypes() {
  const projects = [
    {
      title: "AI SEO Retainer",
      description: "Ongoing model steering and visibility maintenance.",
    },
    {
      title: "Technical Entity Audit",
      description: "Full-day audit to ensure a solid foundation for AI growth.",
    },
    {
      title: "Technical Data Structuring",
      description:
        "Converting PDF catalogs and specs into AI-readable JSON-LD.",
    },
    {
      title: "Market Research",
      description:
        "Analyzing how LLMs categorize your brand vs. competitors in the SF corridor.",
    },
    {
      title: "Rank & Citation Recovery",
      description:
        "Risk assessment and manual data clean-up to fix AI hallucinations or drops.",
    },
  ];

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EXAGIC AI Campaign Types",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: project.title,
        description: project.description,
        provider: {
          "@id": "https://www.exagic.ai/#organization",
        },
      },
    })),
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="rag-section bg-white py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-semibold text-zinc-900"
        >
          Focused Campaigns
        </h2>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
          {projects.map((project, index) => (
            <li key={project.title}>
              <article
                className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50/30 p-6 transition-all hover:bg-white hover:border-brand/20 hover:shadow-sm h-full"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900" itemProp="name">
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 text-sm text-zinc-700"
                    itemProp="description"
                  >
                    {project.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

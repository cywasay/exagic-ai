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

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="rag-section bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-semibold text-zinc-900"
        >
          Focused Campaigns
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50/30 p-6 transition-all hover:bg-white hover:border-brand/20 hover:shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-700">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

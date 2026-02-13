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
      className="rag-section bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2
          id="projects-heading"
          className="text-4xl font-semibold text-zinc-900"
        >
          Focused Campaigns
        </h2>

        <div className="mt-16 space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">
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

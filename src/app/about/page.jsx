export const metadata = {
  title: "About Exagic AI",
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/about",
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "[PLACEHOLDER: Full Name]",
      role: "[PLACEHOLDER: Role / Title]",
      bio: "[PLACEHOLDER: 2–3 sentence bio about expertise and contributions to Exagic AI.]",
      linkedin: "[PLACEHOLDER: LinkedIn URL]",
    },
    // Add more team members as needed
  ];

  const teamSchema = teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: { "@type": "Organization", name: "Exagic AI" },
    sameAs: member.linkedin,
  }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://exagic-ai.vercel.app/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {teamSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl">
            About Exagic AI
          </h1>
          <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-3xl">
            Exagic AI is a San Francisco AI SEO agency specializing in brand
            visibility optimization for industrial manufacturers, global
            suppliers, and hardware companies in the SF Bay Area corridor.
          </p>

          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-zinc-900">Who We Are</h2>
            <div className="mt-6 text-zinc-600 leading-relaxed max-w-3xl space-y-4">
              <p>
                [PLACEHOLDER: 2–3 sentences about the founding story and mission
                of Exagic AI]
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-zinc-900 border-b border-zinc-100 pb-4">
              The Team
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
                    {/* Image placeholder */}
                    <div className="flex h-full w-full items-center justify-center text-zinc-400">
                      [PHOTO]
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-brand">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-brand transition-colors"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Our Methodology
            </h2>
            <div className="mt-6 text-zinc-600 leading-relaxed max-w-4xl space-y-4">
              <p>
                [PLACEHOLDER: 1–2 paragraphs explaining the mechanistic
                interpretability and model steering approach in plain language]
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-zinc-900">Location</h2>
            <p className="mt-6 text-zinc-600">
              San Francisco Corridor, California, US
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

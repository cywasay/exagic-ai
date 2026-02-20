import Link from "next/link";

export default function Team() {
  const team = [
    { name: "Arthur Sterling", title: "Director of Strategy" },
    { name: "Elena Vance", title: "AI SEO Specialist" },
    { name: "Marcus Thorne", title: "Technical SEO" },
    { name: "Sarah Chen", title: "Entity Strategist" },
  ];

  return (
    <section id="team" className="rag-section bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
            Meet Our Core Strategy Team
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
            An all-senior team with experience across industrial manufacturing,
            AI search, and technical SEO.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="aspect-square w-full bg-zinc-200 rounded-2xl mb-6 relative overflow-hidden grayscale hover:grayscale-0 transition-all border border-zinc-300">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/10 group-hover:bg-brand/5"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 font-medium tracking-tight uppercase tracking-widest">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
          >
            Schedule a Consultation
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

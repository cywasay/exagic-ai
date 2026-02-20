export default function LogoStrip() {
  const logos = [
    "Precision Tooling",
    "SF Aerospace",
    "Fremont Logistics",
    "Bay Area Hardware",
    "Valley Electronics",
    "Marine Dynamics",
    "TechWeld Solutions",
    "Global Procurement",
  ];

  return (
    <section
      id="logos"
      className="rag-section bg-white py-12 border-y border-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10">
          Trusted by Industrial Leaders Across the SF Bay Area
        </h2>

        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll hover:pause-scroll gap-12 items-center">
            {/* Double the logos for seamless scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 w-48 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase tracking-tighter text-center px-4"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

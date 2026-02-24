export default function ContactInfo() {
  const contactDetails = [
    { label: "Phone", value: "+1 (415) 555-0123", sub: "Mon-Fri 9am-6pm PST" },
    {
      label: "Email",
      value: "strategy@exagic-ai.vercel.app",
      sub: "General Inquiries",
    },
    {
      label: "Lab Office",
      value: "San Francisco, CA",
      sub: "SF Industrial Corridor",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
          Contact <span className="text-brand">Exagic</span>
        </h1>
        <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
          Ready to bridge the gap between your hardware and the AI that
          recommends it? Our technical team is ready to analyze your visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {contactDetails.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="text-sm font-bold text-brand uppercase tracking-widest mb-1">
              {item.label}
            </span>
            <span className="text-2xl font-bold text-zinc-900 leading-tight">
              {item.value}
            </span>
            <span className="text-sm text-zinc-500 font-medium">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-zinc-100">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          Our Commitment
        </h3>
        <p className="text-sm text-zinc-500 italic leading-relaxed">
          "Exagic AI provides purely constructive consultations. No hard sales.
          Just technical analysis and actionable data for industrial
          manufacturers."
        </p>
      </div>
    </div>
  );
}

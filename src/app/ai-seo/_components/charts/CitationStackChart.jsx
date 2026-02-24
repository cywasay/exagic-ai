"use client";

import { motion } from "framer-motion";

export default function CitationStackChart() {
  const layers = [
    {
      label: "AI Response",
      color: "bg-brand",
      text: "Brand Citation within synthesized answer",
    },
    {
      label: "Grounding Content",
      color: "bg-brand/80",
      text: "Technical specifications and case studies",
    },
    {
      label: "Entity Linkage",
      color: "bg-brand/60",
      text: "Associations between brand & industry categories",
    },
    {
      label: "Technical Schema",
      color: "bg-brand/40",
      text: "Advanced JSON-LD and structured metadata",
    },
    {
      label: "Core Technical Data",
      color: "bg-zinc-100",
      text: "Product catalogs, spec sheets, certifications",
    },
  ];

  return (
    <div className="bg-zinc-50 p-6 md:p-8 rounded-[2rem] border border-zinc-200 overflow-hidden relative">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
          Technical Architecture
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          The AI Discovery Stack
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div
              className={`h-12 md:h-14 ${layer.color} rounded-xl border border-white/20 shadow-sm flex items-center px-4 md:px-6 transition-transform group-hover:-translate-y-1`}
            >
              <span
                className={`text-xs md:text-sm font-bold ${i === layers.length - 1 ? "text-zinc-500" : "text-white"} uppercase tracking-widest`}
              >
                {layer.label}
              </span>
            </div>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 hidden lg:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-tight">
                {layer.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-zinc-100 italic text-[11px] text-zinc-400 font-medium leading-relaxed">
        * Every layer must be optimized to achieve a {">"}85% citation
        probability in procurement queries.
      </div>
    </div>
  );
}

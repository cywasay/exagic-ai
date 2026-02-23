import Link from "next/link";

export const metadata = {
  title: "Structuring Technical Data for AI Sourcing | Exagic AI",
  description:
    "How to use Schema.org, JSON-LD, and clear data architecture to ensure AI sourcing tools read your industrial catalogs.",
  alternates: {
    canonical:
      "https://exagic-ai.vercel.app/lab/how-to-structure-technical-data-for-ai-sourcing",
  },
};

export default function StructureDataPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Structuring Technical Data for AI Sourcing",
    description:
      "How to use Schema.org, JSON-LD, and clear data architecture to ensure AI sourcing tools read your industrial catalogs.",
    author: {
      "@type": "Organization",
      name: "Exagic AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Exagic AI",
    },
    datePublished: "2026-02-23",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <header className="mb-16">
            <Link
              href="/lab"
              className="text-brand font-bold uppercase tracking-widest text-sm mb-6 inline-block hover:text-brand-dark transition-colors"
            >
              ← Back to Lab
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
              Structuring Technical Data: How AI Reads Industrial Catalogs
            </h1>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              PDFs are the enemy of Answer Engine Optimization (AEO). If your
              specifications, tolerances, and catalog items are locked in a flat
              file, an AI sourcing bot will skip your company and cite a
              competitor who provides machine-readable tabular data.
            </p>
          </header>

          <div className="prose prose-lg prose-zinc max-w-none text-zinc-700">
            <h2 className="text-3xl font-bold text-zinc-900 mt-12 mb-6">
              Why Large Language Models (LLMs) Fail on Complex PDFs
            </h2>
            <p>
              When a procurement system asks an AI model to find &quot;a local
              Bay Area supplier for 316 stainless custom flanges with an outer
              diameter exceeding 12 inches,&quot; it employs a retrieval system
              (like RAG). If your catalog relies entirely on complex, visually
              arranged PDF documents, the extraction accuracy plummets.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-12 mb-6">
              JSON-LD: The Language of the AI Web
            </h2>
            <p>
              Structured Data, specifically standard Schema markup embedded as
              JSON-LD in the HTML of your product pages, acts as a direct API
              hook into search engines and crawler agents. LLMs process JSON far
              more cleanly than unstructured natural language or raw HTML.
            </p>
            <p>
              Industrial manufacturers should wrap their product arrays in{" "}
              <code>Product</code> schema, explicitly stating MPNs (Manufacturer
              Part Numbers), materials, and exact physical dimensions.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-12 mb-6">
              Tabular Data Extracts Well
            </h2>
            <p>
              If a product catalog cannot be completely converted into separate
              pages, standard HTML tables (<code>&lt;table&gt;</code>) remain a
              high-fidelity structure. LLMs interpret markdown and HTML tables
              excellently. The key is to include clear column headers that align
              semantically with industry standards (e.g., &quot;Yield Strength
              (MPa)&quot; instead of vague labels like &quot;Strength&quot;).
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-12 mb-6">
              Semantic Reinforcement
            </h2>
            <p>
              Data alone isn&apos;t always enough—it requires semantic context.
              On the same page as your technical tabular data, provide a natural
              language summary describing what the data implies. &quot;The
              following table outlines the load tolerances for our heavy-duty
              casters.&quot; This contextual padding teaches the AI the exact
              utility of the data, dramatically increasing your Selection Rate
              Optimization (SRO).
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

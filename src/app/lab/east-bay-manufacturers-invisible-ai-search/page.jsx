import Link from "next/link";
import ContactCTA from "../../_components/ContactCTA/ContactCTA";

export const metadata = {
  title:
    "Why East Bay Manufacturers Are Invisible in AI Search — And How to Fix It | Exagic AI",
  description:
    "Most East Bay manufacturers are qualified suppliers being skipped by AI procurement tools. Here is exactly why — and the specific fixes that make industrial brands AI-citable.",
  alternates: {
    canonical:
      "https://exagic-ai.vercel.app/lab/east-bay-manufacturers-invisible-ai-search",
  },
};

export default function ArticlePage() {
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
        name: "Why East Bay Manufacturers Are Invisible in AI Search",
        item: "https://exagic-ai.vercel.app/lab/east-bay-manufacturers-invisible-ai-search",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Why East Bay Manufacturers Are Invisible in AI Search — And How to Fix It",
    description:
      "Analysis of the visibility gap for East Bay industrial brands and a step-by-step fix guide.",
    author: { "@type": "Organization", name: "Exagic AI" },
    datePublished: "2026-02-01",
    publisher: { "@type": "Organization", name: "Exagic AI" },
  };

  const faqItems = [
    {
      question: "Why are East Bay manufacturers invisible in AI search?",
      answer:
        "Most East Bay manufacturers have content built for traditional search — keyword-optimized but structurally inaccessible to AI retrieval. Technical specifications in PDFs, generic service descriptions without entity precision, and missing schema markup are the three primary causes of AI invisibility for industrial manufacturers in the East Bay.",
    },
    {
      question:
        "What is the fastest fix for an East Bay manufacturer to improve AI visibility?",
      answer:
        "The fastest improvement comes from rewriting the homepage and primary service pages using entity-precise language — specific materials, certifications, tolerances, application categories, and geographic identifiers. This single change makes content significantly more extractable by AI retrieval systems and can produce citation improvements within 4–8 weeks.",
    },
    {
      question:
        "Do East Bay manufacturers need to rebuild their entire website to become AI-visible?",
      answer:
        "No. AI visibility improvements are applied at the content and schema level — restructuring existing pages rather than rebuilding the site. The most impactful changes (entity-precise descriptions, structured capabilities pages, core schema markup) can be implemented on an existing site without a full rebuild.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/lab"
            className="text-sm font-bold text-brand hover:underline"
          >
            ← Back to Lab
          </Link>

          <h1 className="mt-8 text-4xl font-semibold text-zinc-900 md:text-6xl tracking-tight leading-tight">
            Why East Bay Manufacturers Are Invisible in AI Search — And How to
            Fix It
          </h1>

          <div className="mt-10 p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
            <p className="text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Most East Bay manufacturers are not invisible in AI search because
              they lack capability. They are invisible because their web content
              is structurally inaccessible to AI retrieval systems. PDFs instead
              of structured pages, generic descriptions instead of
              entity-precise language, and missing schema markup are the three
              primary causes — and all three are fixable.
            </p>
          </div>

          <div className="mt-16 space-y-12 text-lg text-zinc-600 leading-relaxed text-zinc-900">
            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                What Does AI Invisibility Actually Mean for East Bay
                Manufacturers?
              </h2>
              <p>
                The East Bay manufacturing corridor — spanning Fremont, Hayward,
                Union City, and San Leandro — is home to some of the world's
                most qualified technical suppliers. However, when a procurement
                manager at a Silicon Valley hardware company or an aerospace OEM
                queries an AI platform like Perplexity or ChatGPT for a
                "qualified CNC machining shop in the East Bay," most of these
                local manufacturers simply do not appear in the answer.
              </p>
              <p className="mt-6">
                This isn't a traditional search ranking problem. A company might
                rank #1 on Google for "Fremont machine shop" but be completely
                absent from an AI-generated procurement shortlist. AI systems
                aren't looking for keyword density; they are looking for
                extractable, verifiable technical entities. If your website
                describes you as a "leading provider of quality parts" but fails
                to define your capabilities in machine-readable terms, the AI
                sees you as an empty entity. For an East Bay manufacturer, AI
                invisibility means being excluded from the consideration set
                before the first human phone call is ever made.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                The Three Structural Causes of AI Invisibility
              </h2>

              <div className="mt-10 space-y-10 text-zinc-900">
                <div className="text-zinc-900">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    Cause 1 — Technical Specifications Locked in PDFs
                  </h3>
                  <p>
                    For decades, the standard for industrial websites has been
                    the "product brochure" model. Technical spec sheets,
                    material capability lists, and equipment lists are almost
                    always hosted as downloadable PDFs. While this is convenient
                    for human printing, it is a disaster for AI retrieval.
                  </p>
                  <p className="mt-4">
                    AI models, particularly during the high-speed
                    "retrieval-augmented generation" (RAG) phase, often struggle
                    to accurately parse information from PDFs compared to
                    structured HTML. If your specialized capabilities are buried
                    in a multi-page PDF instead of appearing as indexable text
                    on a service page, the AI will likely skip your brand in
                    favor of a competitor whose specs are clearly structured in
                    HTML.
                  </p>
                </div>

                <div className="text-zinc-900">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    Cause 2 — Generic Company Descriptions Without Entity
                    Precision
                  </h3>
                  <p>
                    AI models build knowledge using "entities" — specific
                    concepts (like a town, a material, or a certification) and
                    their attributes. Most East Bay manufacturing sites use
                    generic marketing language that lacks entity precision.
                  </p>
                  <p className="mt-4">
                    Saying you are a "leading Bay Area manufacturer of custom
                    components" provides almost zero entity data to an AI model.
                    However, saying you are a "Newark, California-based CNC shop
                    specializing in 5-axis machining of medical-grade 316L
                    stainless steel" provides multiple verifiable entities. AI
                    models cite the specific over the generic every time.
                  </p>
                </div>

                <div className="text-zinc-900">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    Cause 3 — Missing Schema Markup
                  </h3>
                  <p>
                    Schema markup is the invisible code layer that acts as a set
                    of instructions for AI crawlers. It explicitly tells the
                    crawler what type of information it is looking at.
                  </p>
                  <p className="mt-4 text-zinc-900">
                    Without `Organization` schema to confirm your legal location
                    and `Service` schema to define your accredited capabilities,
                    you are forcing the AI to guess. In high-stakes procurement
                    search, AI models avoid guessing. Missing schema is the
                    number one technical reason otherwise qualified East Bay
                    manufacturers lose citations to competitors with inferior
                    capabilities but better-structured code.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-bold text-zinc-900">
                A Real Example: What an Invisible Profile Looks Like vs. a
                Citable One
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <h4 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Version A — Invisible
                  </h4>
                  <p className="text-zinc-900 italic font-medium">
                    "Bay Area Precision is a leading manufacturer of custom
                    precision components serving clients across Northern
                    California. We offer high-quality machining services with
                    fast turnaround times and competitive pricing."
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-brand/5 border border-brand/20">
                  <h4 className="text-lg font-bold text-brand uppercase tracking-widest mb-4">
                    Version B — Citable
                  </h4>
                  <p className="text-zinc-900 italic font-medium">
                    "Bay Area Precision is a Fremont, California manufacturer of
                    CNC-machined aluminum, titanium, and stainless steel
                    components for aerospace, defense, and semiconductor OEM
                    applications. The company holds AS9100D and ISO 9001:2015
                    certifications, operates 12 5-axis CNC machines, and
                    maintains ITAR registration for defense component
                    manufacturing. Standard lead times range from 5 to 15
                    business days depending on material and complexity."
                  </p>
                </div>
              </div>

              <p className="text-zinc-900">
                Version B is citable because it contains structured facts
                (Entities). It gives the AI specific attributes — location
                (Fremont), materials (Aluminum, Titanium), industries
                (Aerospace, Semiconductor), and certifications (AS9100D) — that
                it can use to confidently answer a buyer's query. Version A
                contains only subjective marketing claims, which AI models
                generally ignore.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-bold text-zinc-900">
                The Fix: A Step-by-Step Content Audit for East Bay Manufacturers
              </h2>
              <ol className="list-decimal pl-6 space-y-6 text-zinc-900">
                <li className="font-bold">
                  <strong>Audit Your PDFs:</strong> List every PDF on your site
                  containing critical technical information. These
                  specifications need to be moved onto dedicated, indexable HTML
                  web pages.
                </li>
                <li className="font-bold">
                  <strong>Implement Entity Precision:</strong> Rewrite your
                  homepage and service descriptions. Replace generic phrases
                  with specific materials, certifications, machines, and
                  geographic identifiers.
                </li>
                <li className="font-bold">
                  <strong>Create a Capabilities Interface:</strong> Replace your
                  static "services" list with a structured capabilities page
                  designed to answer the exact technical questions procurement
                  teams ask AI.
                </li>
                <li className="font-bold">
                  <strong>Technical Schema Injection:</strong> Implement
                  `Organization`, `Service`, and `FAQPage` schema. This provides
                  a direct, machine-readable verification layer for your claims.
                </li>
                <li className="font-bold">
                  <strong>Geographic Reinforcement:</strong> Explicitly link
                  your brand entity to the specific cities and hubs you serve
                  (Fremont, San Jose, Oakland) to capture location-specific AI
                  queries.
                </li>
              </ol>
            </section>
          </div>

          <section className="mt-24 border-t border-zinc-100 pt-24 text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-12">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-zinc-900 text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-xl text-zinc-600 leading-relaxed text-zinc-900">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-32 p-12 rounded-3xl bg-zinc-900 text-white">
            <h2 className="text-3xl font-bold">
              Stop being invisible to Silicon Valley buyers.
            </h2>
            <p className="mt-6 text-xl text-zinc-300 leading-relaxed">
              If your East Bay manufacturing company isn't appearing in ChatGPT
              or Perplexity searches, your content is structurally broken. Let
              Exagic AI fix it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-dark"
              >
                Get an AI visibility audit for your company
              </Link>
              <Link
                href="/capabilities/aeo"
                className="inline-flex items-center justify-center text-lg font-bold text-white hover:text-brand transition-colors"
              >
                Learn about our AEO process for manufacturers →
              </Link>
            </div>
          </section>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}

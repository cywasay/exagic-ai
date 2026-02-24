import Link from "next/link";
import ContactCTA from "../ContactCTA/ContactCTA";

export default function AEOContent({ faqItems }) {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              Answer Engine Optimization (AEO)
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              AEO is the practice of optimizing your brand's visibility for AI
              chat assistants, AI agents, and answer engines — ensuring your
              industrial products and services are the default recommendation
              when buyers search.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              When a procurement manager queries ChatGPT, Perplexity, or Google
              Gemini for supplier recommendations, component specifications, or
              service comparisons, AEO determines whether your brand appears in
              the answer — or your competitor's does. Exagic AI specializes in
              AEO for industrial manufacturers and suppliers across the SF Bay
              Area corridor.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS AEO? */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Is Answer Engine Optimization?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Answer Engine Optimization (AEO) is the practice of structuring
              your brand's content and data so that AI platforms — ChatGPT,
              Google Gemini, Perplexity, and AI procurement agents — can easily
              extract, trust, and cite it as a direct answer to buyer queries.
              The goal is not a search ranking. The goal is being the answer.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Traditional search optimization targeted rankings in a list of
                blue links. AEO targets something fundamentally different — the
                single synthesized response AI systems generate when a user asks
                a question directly. When an industrial buyer asks an AI
                assistant "who are the leading precision machining suppliers in
                Fremont?" or "what should I look for in a hydraulics components
                vendor?", the AI does not return a list of ten links. It
                generates one answer, drawing from a small set of retrieved and
                selected sources. AEO determines whether your brand is in that
                source set.
              </p>
              <p>
                AEO is not a replacement for traditional SEO — it is an
                extension of it. A technically sound website with strong
                fundamentals is still the foundation. But once those
                fundamentals are in place, AEO shifts the focus from ranking
                pages to packaging information in a way AI systems can trust,
                extract, and reuse. The content structure, entity precision,
                schema markup, and external authority signals that drive AEO
                performance are distinct from the ranking signals traditional
                SEO prioritizes.
              </p>
              <p>
                For industrial manufacturers and SF Bay Area suppliers, the
                urgency of AEO is driven by a specific behavioral shift.
                Procurement teams — particularly in enterprise and mid-market
                companies — are increasingly using AI tools as their first point
                of contact in the supplier discovery process. They query AI
                before they query Google. If your brand is not optimized for AI
                citation at the point of that initial query, you are absent from
                the consideration set before the buyer even begins a traditional
                search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW AEO DIFFERS FROM SEO AND SRO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Is AEO Different from SEO and SRO?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              SEO optimizes for ranking position in search results. AEO
              optimizes for citation in AI-generated answers. SRO optimizes the
              selection decision once your content is retrieved. All three are
              related but operate at different stages of AI search behavior —
              and all three are part of Exagic AI's full-service approach.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      SEO
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      AEO
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      SRO
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-zinc-900 bg-zinc-50/50">
                      Goal
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Rank in search results
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Be cited in AI answers
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Be selected over other retrieved sources
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-zinc-900 bg-zinc-50/50">
                      Metric
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Rankings, clicks, impressions
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Citation frequency, brand mentions
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Selection rate, citation confidence
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-zinc-900 bg-zinc-50/50">
                      Primary lever
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Keywords, backlinks, technical health
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Content structure, entity precision, schema
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Snippet quality, token-level optimization
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-zinc-900 bg-zinc-50/50">
                      Where it applies
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Google search results
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      AI-generated answer synthesis
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      AI retrieval and selection layer
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-zinc-900 bg-zinc-50/50">
                      Timeline
                    </td>
                    <td className="px-6 py-4 text-zinc-600">Months to years</td>
                    <td className="px-6 py-4 text-zinc-600">Weeks to months</td>
                    <td className="px-6 py-4 text-zinc-600">
                      30–90 days for measurable improvement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-10 text-lg text-zinc-600 leading-relaxed">
              In practice, the three disciplines work together. Strong SEO
              fundamentals make content crawlable and authoritative. AEO makes
              that content structured and entity-precise enough for AI to
              extract and trust. SRO then ensures that once your content is
              retrieved, it is the source the model selects. Exagic AI applies
              all three layers to industrial brands operating in the SF Bay Area
              corridor.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE EXAGIC AI AEO PROCESS */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Does Exagic AI Implement AEO for Industrial Brands?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Exagic AI's AEO process begins with a content and entity audit,
              progresses through structured optimization of all key pages, and
              concludes with ongoing citation tracking across major AI
              platforms. Every step is tailored to the specific products,
              technical language, and procurement context of industrial
              manufacturers.
            </p>

            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Step 1 — AI Visibility Audit
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Before any optimization begins, we establish a baseline. We
                  query ChatGPT, Gemini, and Perplexity with questions relevant
                  to your industrial niche — the queries your target buyers are
                  most likely to ask. We document which brands are cited, how
                  your brand is described (if it appears at all), what sources
                  are being retrieved, and where the most significant visibility
                  gaps exist. This audit produces a prioritized action plan
                  grounded in real AI behavior, not assumptions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Step 2 — Content Structure Optimization
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  The most common reason industrial brands are not cited in AI
                  answers is content structure. AI systems look for direct,
                  standalone answers to specific questions. Pages that open with
                  marketing copy, lack clear question-style headings, or bury
                  key information in long undifferentiated paragraphs are
                  consistently skipped in favor of more extractable sources. We
                  restructure your highest-priority pages — service pages,
                  product pages, category pages — to open with complete,
                  entity-rich answers that AI systems can extract immediately.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Step 3 — Entity and Schema Implementation
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Language models understand the world through entities —
                  specific, named concepts with defined relationships. We ensure
                  every key page on your site clearly defines your brand entity,
                  product entities, service entities, and geographic entities
                  (SF Bay Area, Fremont, East Bay, Silicon Valley supply chain)
                  in both visible content and structured data. FAQPage schema,
                  Service schema, Organization schema, and BreadcrumbList schema
                  are implemented and validated across all priority pages.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Step 4 — Question Coverage Expansion
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AI answer engines are built to respond to questions. If your
                  content does not answer the questions industrial buyers are
                  actually asking, it will not be cited when those questions are
                  posed. We identify the full landscape of questions relevant to
                  your niche — using query fanout techniques to map not just
                  obvious queries but the complete range of related and
                  follow-up questions procurement teams ask — and ensure your
                  content provides direct, authoritative answers to each.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Step 5 — Citation Tracking and Iteration
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AEO is not a one-time implementation. AI platforms update
                  their retrieval behavior, retrain their models, and shift
                  their source preferences over time. We track citation
                  frequency, brand mention accuracy, and competitive citation
                  share on a monthly basis across ChatGPT, Gemini, and
                  Perplexity. Findings from each tracking cycle feed directly
                  into the next optimization iteration — ensuring your AEO
                  performance improves continuously rather than plateauing after
                  initial implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY INDUSTRIAL BRANDS ARE UNDERREPRESENTED IN AI ANSWERS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Why Are SF Bay Area Industrial Brands Underrepresented in AI
              Search?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Most industrial manufacturers and suppliers have websites built
              for human readers and traditional search engines — not for AI
              extraction. The content structure, entity language, and schema
              signals that AI systems require are almost entirely absent from
              typical industrial web content, making these brands invisible in
              AI-generated procurement answers despite being genuinely qualified
              suppliers.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Industrial websites are typically designed around product
                catalogs, specification sheets, and company history pages. This
                content is valuable to human visitors but structurally
                inaccessible to AI systems. Dense specification tables without
                contextual explanation, product names without entity context,
                and company descriptions written in marketing language rather
                than precise technical terms are all patterns that cause AI
                retrieval systems to skip over otherwise qualified suppliers.
              </p>
              <p>
                The SF Bay Area industrial corridor is particularly underserved
                in this regard. Thousands of manufacturers and suppliers in
                Fremont, San Leandro, San Jose, and the broader East Bay operate
                with web presences built five to ten years ago — before
                AI-generated search became a primary procurement discovery
                channel. Their competitors in the same niche face the same
                structural problems, which means the first industrial brands in
                this corridor to implement AEO properly will capture a
                disproportionate share of AI procurement visibility.
              </p>
              <p>
                Exagic AI was built specifically to serve this gap. We
                understand the technical language of industrial manufacturing —
                the component categories, tolerance specifications,
                certification standards, and supply chain terminology that
                procurement teams use when querying AI systems. Our AEO process
                converts that existing technical knowledge into AI-citable
                content structures, without changing the substance of what your
                brand actually offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — AEO FOR SPECIFIC INDUSTRIAL CONTEXTS */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Does AEO Apply to Different Industrial Sectors?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              AEO strategy varies by industrial sector because the questions
              buyers ask, the entities AI systems track, and the content
              structures that perform best all differ across manufacturing,
              logistics, hardware supply, and technical services. Exagic AI
              tailors AEO implementation to the specific procurement language
              and buyer behavior of each client's industrial niche.
            </p>

            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Precision Manufacturing and CNC Machining
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Buyers sourcing precision manufactured components query AI
                  with highly specific technical criteria — material
                  specifications, tolerance ranges, certification requirements
                  (AS9100, ISO 9001, ITAR), and lead time parameters. AEO for
                  precision manufacturers focuses on making these technical
                  specifications entity-precise and directly extractable —
                  ensuring that when a buyer queries for a qualified supplier
                  meeting specific criteria, your capabilities appear as the
                  cited answer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Electronics and Hardware Supply Chain
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Silicon Valley hardware companies and electronics suppliers
                  face procurement queries that combine technical specifications
                  with supply chain reliability signals. Buyers ask AI about
                  component availability, lead times, minimum order quantities,
                  and supplier qualification. AEO for electronics suppliers
                  ensures that your stock profile, lead time data, and
                  qualification certifications are structured for AI extraction
                  — not buried in PDFs or static catalog pages.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Industrial Logistics and Freight
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Logistics providers in the SF Bay Area corridor — serving the
                  Port of Oakland, Silicon Valley, and the East Bay
                  manufacturing belt — face procurement queries focused on
                  service areas, load types, carrier certifications, and transit
                  times. AEO for logistics focuses on geographic entity
                  precision (specific corridors, hubs, and service areas) and
                  service-specific structured data that AI systems can match to
                  buyer queries about regional freight logistics.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  B2B Technical Services
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Engineering firms, testing labs, and technical consultancies
                  serving industrial clients prioritize credentials and domain
                  expertise. Procurement queries focus on certifications,
                  methodologies, and specialist credentials. AEO for technical
                  services focuses on expert entity signals — ensuring AI models
                  reliably associate your firm with high-authority industrial
                  standards and specific regional service capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Answer Engine Optimization (AEO) FAQs
            </h2>
            <div className="mt-12 space-y-12">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLOSING CTA */}
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Start Building AI Citation Visibility for Your Industrial Brand
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with SF Bay Area industrial manufacturers,
              hardware suppliers, logistics providers, and B2B technical
              services companies to build the content structure, entity
              authority, and schema infrastructure that AI procurement tools
              need to cite your brand consistently and accurately.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <div className="flex flex-col items-start gap-4">
                <Link
                  href="/sro"
                  className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
                >
                  Learn About SRO Services →
                </Link>
                <Link
                  href="/ai-seo"
                  className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
                >
                  See All AI SEO Capabilities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

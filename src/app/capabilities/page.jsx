import Link from "next/link";
import ContactCTA from "../_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "AI SEO for Industrial Manufacturers | Exagic AI — San Francisco",
  description:
    "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to practical model steering strategies — Exagic AI ensures your brand dominates AI retrieval.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/capabilities",
  },
};

export default function AISEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO for Industrial Manufacturers",
    serviceType: "AI SEO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to practical model steering strategies — Exagic AI ensures your brand dominates AI retrieval.",
  };

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
        name: "AI SEO",
        item: "https://exagic-ai.vercel.app/capabilities",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI SEO for Industrial Manufacturers | Exagic AI",
    description:
      "A comprehensive guide to AI SEO and AEO for industrial brands, suppliers, and hardware manufacturers in the San Francisco Bay Area.",
    author: {
      "@type": "Organization",
      name: "Exagic AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Exagic AI",
      logo: {
        "@type": "ImageObject",
        url: "https://exagic-ai.vercel.app/logo.png",
      },
    },
    datePublished: "2026-02-20",
    dateModified: "2026-02-20",
  };

  const faqItems = [
    {
      question: "What is AI SEO and how is it different from traditional SEO?",
      answer:
        "AI SEO optimizes your brand for citation inside AI-generated answers — not just ranking in a list of blue links. Traditional SEO targets Google's ranking algorithm. AI SEO targets how language models like ChatGPT, Gemini, and Perplexity retrieve, evaluate, and cite sources when generating answers for users and procurement agents.",
    },
    {
      question: "How does Exagic AI measure AI SEO results?",
      answer:
        "We track citation frequency across major AI platforms, brand mention accuracy and sentiment, entity association strength, and competitive citation share. These metrics replace traditional rank tracking with AI-native performance indicators that reflect actual visibility in generated answers.",
    },
    {
      question:
        "How long does AI SEO take to show results for industrial manufacturers?",
      answer:
        "Initial improvements in entity clarity and content extractability can appear within 30–60 days. Meaningful changes in citation frequency and brand association strength typically develop over 3–6 months as AI platforms update their retrieval behavior and grounding sources.",
    },
    {
      question: "Does Exagic AI work with companies outside the SF Bay Area?",
      answer:
        "Yes. While our core specialization is the SF Bay Area industrial corridor, we work with industrial manufacturers, global suppliers, and hardware companies across the US and internationally.",
    },
    {
      question: "What is Selection Rate Optimization and why does it matter?",
      answer:
        "Selection Rate is the percentage of times your content is cited when an AI system retrieves it. Low selection rate means AI is finding your content but not using it. Selection Rate Optimization improves content clarity, entity precision, and structural accessibility so that retrieved content is consistently chosen for the final answer.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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

      {/* SECTION 1 — HERO */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
              AI SEO by Exagic AI
            </h1>
            <p className="mt-8 text-2xl font-bold text-zinc-900 leading-tight">
              Exagic AI is the most advanced AI SEO agency in the SF Bay Area,
              specializing in brand visibility optimization for industrial
              manufacturers, global suppliers, and hardware companies.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              Our AI SEO process is driven by advanced machine learning
              techniques, mechanistic interpretability, and practical model
              steering methods — purpose-built for the industrial corridor. We
              move beyond the limitations of traditional search to master the
              mechanisms of AI retrieval.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS AI SEO? */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Is AI SEO?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              AI SEO is search optimization adapted for a world where answers
              are generated, not listed. Instead of ranking web pages in a list
              of blue links, AI SEO focuses on ensuring your brand is selected,
              cited, and accurately represented when language models generate
              answers for industrial buyers and procurement teams.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                In the legacy era of search engines, the goal was relatively
                simple: rank as high as possible for specific keywords. Users
                would be presented with a list of links, and the competition was
                for their click. Today, that hierarchy is collapsing. When a
                user or procurement agent asks ChatGPT, Gemini, or Perplexity a
                complex question about supplier capabilities or technical
                specifications, the model does not return a list of links.
                Instead, it interprets the user's intent, retrieves source
                material from its index or the live web, synthesizes a coherent
                answer, and selects which specific sources to cite as evidence.
              </p>
              <p>
                This transition matters profoundly for industrial manufacturers
                in the San Francisco Bay Area and beyond. Industrial buyers are
                no longer manually combing through pages of Google results; they
                are increasingly using AI agents to source suppliers, compare
                tolerances, verify certifications, and shortlist vendors. In
                this new environment, being "first on Google" is irrelevant if
                the AI model answering the query overlooks your data or, worse,
                hallucinates incorrect information about your production
                capacity. If your brand is not visible in AI retrieval systems,
                you are invisible to the most efficient procurement channel in
                modern industry.
              </p>
              <p>
                AI SEO is the technical and strategic discipline of ensuring
                your brand's information is the most authoritative, extractable,
                and cited source in this new retrieval ecosystem. It involves
                restructuring your digital footprint to be "machine-first"
                without losing its human value, allowing AI models to traverse
                your technical data with zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY TRADITIONAL SEO IS NO LONGER ENOUGH */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Why Traditional SEO Is No Longer Sufficient for Industrial Brands
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Traditional SEO optimizes for rankings in a list. AI SEO optimizes
              for citations inside generated answers. For industrial
              manufacturers, these are fundamentally different challenges
              requiring fundamentally different strategies.
            </p>

            <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Traditional SEO
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      AI SEO
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimize for ranking position
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimize for citation selection
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">Target keywords</td>
                    <td className="px-6 py-4 text-zinc-600">
                      Target entity associations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">Build backlinks</td>
                    <td className="px-6 py-4 text-zinc-600">
                      Build grounding presence
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Measure rankings
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Measure AI visibility and citation share
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Control the snippet
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Influence the AI synthesis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                The fundamental flaw in traditional SEO for the AI era is its
                focus on the "search engine results page" (SERP). Traditional
                methods prioritize signal building for an algorithm that
                arranges lists of blue links. However, OpenAI's GPT-4, Google's
                Gemini, and Perplexity do not care about where your link sits in
                a list. They care about the extractability of your data, the
                verified authority of your entities, and the semantic coherence
                of your answers.
              </p>
              <p>
                Brands that only optimize for traditional rankings may find
                themselves in a precarious position: appearing #1 in Google's
                legacy search but being completely excluded from the Google AI
                Overview that appears above it. Even worse, an industrial brand
                might be misrepresented by models drawing on outdated forum
                posts or competitor-sourced data because their own technical
                specifications weren't formatted for AI retrieval. For
                industrial suppliers in the SF Bay Area corridor—where technical
                precision is the primary selling point—the risk of being
                misrepresented or omitted by AI is a critical business threat.
              </p>
              <p>
                Traditional SEO measures success via click-through rate (CTR).
                AI SEO measures success via{" "}
                <strong>Presence in Latent Space</strong>. We optimize your
                content to be the most "probable" answer for an LLM to select
                when it is synthesizing a technical response, ensuring your
                brand remains the primary authority even as the interface of
                search evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE EXAGIC AI SEO METHODOLOGY */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Exagic AI Approaches AI SEO for Industrial Brands
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Our methodology is built on direct experimentation with language
              models, proprietary data structuring techniques, and a six-phase
              process designed specifically for industrial manufacturers and B2B
              suppliers.
            </p>

            <div className="mt-16 space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 1 — Brand Knowledge Analysis
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  What do AI models currently believe about your brand? We begin
                  by systematically probing models across ChatGPT, Gemini, and
                  Perplexity to map how your brand, products, and services are
                  currently represented. This diagnostic phase identifies weak
                  associations where a model fails to connect you to your
                  product categories, missing entity connections that make you
                  invisible in local San Francisco industrial searches, and
                  inaccurate descriptions that require immediate correction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 2 — Entity and Association Mapping
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Language models understand the world through entities and
                  their interrelationships. In this phase, we map your core
                  entities—your brand name, specific product lines, and key
                  technical capabilities. We then build associations between
                  your brand and high-authority industry categories, regional
                  suppliers in the East Bay, and critical technical
                  specifications. We proactively bridge "entity gaps"—those
                  connections that should exist but are currently weak in the
                  model's internal weights.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 3 — Citation Analysis
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  When AI systems generate grounded answers, they retrieve and
                  cite specific sources. We analyze which domains and content
                  formats AI platforms currently select for queries in the
                  industrial manufacturing niche. By identifying the current
                  "citation stack," we can pinpoint where your brand has the
                  opportunity to displace competitors and which specific content
                  structures (such as technical specifications or case studies)
                  the models prefer to extract.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 4 — Grounding Prediction
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Not every query triggers AI to retrieve external sources; some
                  queries are answered purely from training data. We use
                  proprietary testing to identify which queries in your
                  industrial niche trigger "grounding" behavior in Google,
                  ChatGPT, and Perplexity. This allows us to focus optimization
                  effort exclusively on queries where content strategy and
                  technical grounding can actually influence the AI's output,
                  maximizing your ROI.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 5 — Optimization Execution
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  With full diagnostic data in place, we execute targeted
                  on-page and off-page optimization. This includes content
                  restructuring for entity clarity, semantic completeness
                  improvements to cover informational gaps, and heavy technical
                  data structuring—converting your PDF catalogs and complex spec
                  sheets into AI-readable JSON-LD. We ensure your brand's data
                  is present on the authoritative sources that AI platforms
                  trust most for technical grounding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 6 — AI Visibility Tracking
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Tracking success in the AI era requires a new set of metrics.
                  While we keep an eye on traditional SERP performance, our
                  primary focus is AI visibility tracking. We measure the
                  frequency of your brand citations, the accuracy of brand
                  mentions, the strength of entity associations, and your total
                  share of citations compared to competitors across the major
                  frontier models—providing a monthly heartbeat of your brand's
                  AI influence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TECH STACK / CAPABILITIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Tools and Techniques Does Exagic AI Use?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Our process combines structured data engineering, semantic entity
              optimization, and AI retrieval analysis — purpose-built for
              industrial brands operating in the SF Bay Area corridor.
            </p>

            <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Capability
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      What It Does
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Entity Audit
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Maps how AI models currently perceive your brand and
                      products
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Technical Data Structuring
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Converts PDF catalogs and spec sheets into AI-readable
                      JSON-LD
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Citation Analysis
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Identifies which sources AI platforms cite in your niche
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Grounding Classification
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Predicts which queries trigger AI to retrieve external
                      sources
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Selection Rate Optimization
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Improves the likelihood your content is cited once
                      retrieved
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      AI Visibility Tracking
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Monthly tracking of brand mentions across ChatGPT, Gemini,
                      Perplexity
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Content Substance Analysis
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Detects thin content that AI systems ignore
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Query Fanout Mapping
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Expands target queries to cover full AI search scope
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                To deliver these capabilities, we utilize a combination of
                industry-standard SEO tools and custom-built internal pipelines.
                Our technical team is proficient in{" "}
                <strong>schema engineering</strong>, which is the "language" of
                AI-ready data. By providing clear, unambiguous signals through
                advanced JSON-LD, we help models understand the complex
                hierarchical relationships inherent in industrial product lines.
              </p>
              <p>
                We also employ <strong>Mechanistic Interpretability</strong>
                principles—a field of AI research focused on understanding the
                inner workings of neural networks. By analyzing how changes in
                content structure and semantic framing influence a model's
                latent representation of an industry, we can "steer" the model
                toward the information you want it to prioritize. This is not
                about gaming an algorithm; it is about providing the
                highest-quality, most accessible data to the sysyem that is
                trying to synthesize an answer.
              </p>
              <p>
                Our capability set is specifically designed for the B2B
                industrial cycle. We understand that a manufacturing contract is
                not a "buy now" click; it is a multi-month evaluation of
                technical specifications, reliability, and regional presence.
                Our technology stack ensures that at every point of that
                AI-aided evaluation, your brand is present and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO NEEDS AI SEO */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Which Industrial Brands Need AI SEO?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              AI SEO is essential for any industrial manufacturer, hardware
              supplier, or B2B company whose buyers use AI tools to research,
              compare, or source products.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Manufacturers competing in procurement queries
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  When industrial buyers ask AI assistants for supplier
                  recommendations or product comparisons, will your brand be
                  mentioned? If competitors are cited and you are not, you are
                  losing visibility in a procurement channel that is growing
                  rapidly across the SF Bay Area. AI tools are becoming the
                  first point of discovery for new vendors in the East Bay
                  industrial corridor.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Companies with complex technical products
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Language models struggle with technical nuance. If your
                  products involve specific tolerances, certifications (like
                  ISO), or application distinctions, you need to ensure AI
                  models represent your specifications accurately. Generic AI
                  outputs can often flatten technical details, but AI SEO
                  ensures your specific advantages are parsed and presented
                  correctly.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Brands affected by AI-generated misinformation
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  AI models can perpetuate outdated information, incorrect
                  specifications, or competitor narratives. If an AI
                  hallucinates that your Fremont facility is closed or that your
                  material grade doesn't meet a specific standard, your business
                  suffers. AI SEO includes identifying these "pockets of
                  misinformation" and executing targeted data corrections to
                  steer models back to reality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Suppliers seeking to own their category definitions
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  If you operate in a niche segment—specific components,
                  specialized logistics, custom hardware—AI SEO ensures AI
                  models associate your brand with that category. We prevent
                  your brand from being buried under larger, generic competitors
                  by reinforcing your specific entity authority in specialized
                  industrial niches throughout Northern California.
                </p>
              </div>
            </div>
            <div className="mt-12 text-lg text-zinc-600 leading-relaxed">
              <p>
                The industrial sector is uniquely vulnerable to the shift to AI
                search because its data is often dense, technical, and hidden in
                legacy formats. Companies that act now to structure this data
                for AI consumption will build an insurmountable lead in "model
                mindshare"—the degree to which an AI system defaults to their
                brand as the trusted recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLATFORM-SPECIFIC OPTIMIZATION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Do Different AI Platforms Handle Industrial Search Queries?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              ChatGPT, Google Gemini, and Perplexity each use different
              mechanisms to retrieve and cite sources. Effective AI SEO requires
              understanding and optimizing for each platform's specific
              behavior.
            </p>

            <div className="mt-16 space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Google Gemini and AI Overviews
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Gemini retrieves shallow context—typically just the query
                  string, the URL, the title, and a short snippet of
                  approximately 150–300 characters. This means the first 150
                  words of any industrial capabilities page carry
                  disproportionate weight. Optimization for Gemini prioritizes
                  complete, contextually rich answers in the opening paragraph
                  of every page, alongside high-fidelity structured data that
                  enables Gemini's agents to precisely extract your technical
                  specs for sourcing answers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  ChatGPT and GPT-based Models
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  ChatGPT's grounding architecture relies heavily on web
                  retrieval (Search), making traditional SEO fundamentals—like
                  crawlability, semantic content structure, and authoritative
                  signals—directly relevant to AI visibility. Content must be
                  highly discoverable and formatted for clear information
                  extraction. Since ChatGPT's search functionality uses the Bing
                  index, Bing SEO optimization is a strategic requirement
                  alongside Google-focused efforts to ensure visibility in GPT
                  interfaces.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Perplexity AI
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Perplexity provides explicit citations with every single
                  answer, making its source selection highly transparent.
                  Optimization requires becoming a cited authoritative source
                  through comprehensive, well-researched content that includes
                  clear attribution signals. Perplexity prioritizes fresh,
                  real-time information—making content recency and regular
                  technical updates particularly important for industrial
                  suppliers who want to be cited in market intelligence and
                  supplier comparison queries.
                </p>
              </div>
            </div>
            <div className="mt-12 text-lg text-zinc-600 leading-relaxed">
              <p>
                Each of these platforms uses a different{" "}
                <strong>Token Probability</strong>
                weighting system when synthesizing an answer. Our work involves
                optimizing the semantic density of your brand's presence across
                the web so that no matter which model a buyer uses, your brand
                is the most "logical" conclusion for the model to reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — GLOSSARY */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO Glossary — Key Terms for Industrial Brands
            </h2>

            <dl className="mt-12 space-y-10">
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">Grounding</dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The process by which an AI model retrieves external
                  information to support its response. A grounded response cites
                  real sources rather than generating from training data alone,
                  preventing hallucinations and ensuring technical accuracy.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Entity Association
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The strength of connection between two concepts in an AI
                  model's understanding. Strong entity associations cause
                  consistent co-occurrence in model outputs—for example,
                  reliably linking your brand to your specific industrial
                  specialization in the Bay Area.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Citation Mining
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The process of systematically querying AI systems and
                  extracting which sources they cite. This data enables
                  competitive analysis of citation patterns and identifies gaps
                  where your brand can displace current authorities.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Selection Rate
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The percentage of times content is cited when it is retrieved
                  by an AI system. Low selection rate means your content is
                  being "seen" by the AI but not chosen for the final answer,
                  indicating a need for better structuring or clarity.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Query Fanout
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  Expanding a single query into many related variations to
                  comprehensively map how AI systems interpret a topic and what
                  sources they prefer across different phrasings. This is
                  critical for capturing the full scope of industrial search
                  intent.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Query Deserves Grounding (QDG)
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  A prediction of whether a given query will cause an AI system
                  to retrieve external sources—or answer from training data
                  alone. QDG analysis tells us which technical queries are most
                  susceptible to our optimization efforts.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Token Probability
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  A measure of how confidently an AI model associates one
                  concept with another during inference. High-confidence
                  associations mean the model reliably connects your brand to
                  your category. Low confidence means the association is weak
                  and needs semantic reinforcement.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              FAQs about AI SEO for Manufacturers
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
            <div className="mt-16 text-lg text-zinc-600 leading-relaxed italic border-l-4 border-brand pl-6">
              <p>
                Do you have more questions about how AI is reshaping the
                industrial supply chain? Our team is available for deep-dive
                consultations specifically for manufacturers located in Fremont,
                San Jose, Oakland, and the wider SF Bay Area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CLOSING CTA */}
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Ready to Make Your Industrial Brand Visible in AI Search?
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with industrial manufacturers, SF Bay Area
              suppliers, and global hardware companies to build the entity
              authority, content structure, and data infrastructure that AI
              platforms need to cite your brand—consistently and accurately.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/capabilities/sro"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
              >
                Explore Our SRO Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

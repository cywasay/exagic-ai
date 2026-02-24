import Link from "next/link";

export default function TECHSTACKCAPABILITIES() {
  return (
    <>
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
    </>
  );
}

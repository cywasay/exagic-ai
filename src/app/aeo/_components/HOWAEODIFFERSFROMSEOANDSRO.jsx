import Link from "next/link";

export default function HOWAEODIFFERSFROMSEOANDSRO() {
  return (
    <>
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
    </>
  );
}

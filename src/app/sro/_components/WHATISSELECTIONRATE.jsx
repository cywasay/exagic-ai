import Link from "next/link";

export default function WHATISSELECTIONRATE() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Is Selection Rate and Why Does It Matter for Industrial
              Brands?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Selection Rate (SR) is the percentage of times your content is
              cited when an AI system retrieves it. It is the AI-native
              equivalent of click-through rate — measuring not whether users
              click your link, but whether AI models choose your content to
              build their answer. For industrial suppliers, a low selection rate
              means AI finds you but ignores you.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                When AI platforms like Gemini or ChatGPT generate a grounded
                response, they retrieve multiple candidate sources. The model
                then reviews snippets from each source and decides which to
                incorporate into the final answer. This selection decision is
                not random — it is based on content clarity, entity precision,
                source authority, semantic match to query intent, and structural
                accessibility. A brand can rank highly in traditional search and
                still have a near-zero selection rate in AI-generated answers.
              </p>
              <p>
                For industrial manufacturers and SF Bay Area suppliers, this
                distinction is critical. Procurement teams and industrial buyers
                increasingly query AI systems directly — asking for supplier
                recommendations, product comparisons, and technical
                specifications. If your content is retrieved but consistently
                not selected, your brand is invisible in the answers those
                buyers receive, regardless of how well you perform in
                traditional search rankings.
              </p>
              <p>
                The problem of "invisible retrieval" is particularly acute in
                technical hardware and industrial manufacturing. Because models
                are trained to be "helpful and harmless," they prioritize
                sources that provide immediate, clear, and unambiguous data. If
                your competitor's spec sheet is more parsable than your dynamic
                Javascript-heavy product viewer, the AI will select the
                competitor every time. SRO is the engineering solution to this
                retrieval gap.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Click-Through Rate (CTR)
                    </th>
                    <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                      Selection Rate (SR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Human behavior metric
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      AI behavior metric
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Measures user clicks from search results
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Measures AI citation from retrieved sources
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Influenced by title tags and meta descriptions
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Influenced by content clarity and entity precision
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Tracked in Google Search Console
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Tracked through AI citation analysis
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimized through traditional SEO
                    </td>
                    <td className="px-6 py-4 text-zinc-600">
                      Optimized through SRO
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

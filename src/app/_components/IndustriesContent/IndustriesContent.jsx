import Link from "next/link";
import ContactCTA from "../ContactCTA/ContactCTA";

export default function IndustriesContent({ faqItems }) {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Strategic AI SEO for the SF Bay Area Industrial Corridor
            </h1>
            <p className="mt-8 text-2xl font-bold leading-tight text-zinc-900">
              Exagic AI delivers targeted AI visibility strategies for
              industrial manufacturers, logistics providers, hardware suppliers,
              electronics companies, B2B technical services, and engineering
              firms operating in the East Bay, Silicon Valley, and the SF
              Industrial Corridor.
            </p>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              Every industrial sector has its own procurement language, buyer
              behavior, and AI search patterns. Our industry-specific approach
              ensures your brand is optimized for the exact queries your buyers
              are asking AI platforms — not generic SEO tactics designed for
              e-commerce or consumer brands.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO PARAGRAPH */}
      <section className="bg-zinc-50 py-16 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="max-w-4xl text-xl text-zinc-800 leading-relaxed font-medium">
            Exagic AI is a San Francisco AI SEO agency specializing in brand
            visibility optimization for industrial manufacturers, global
            suppliers, and hardware companies in the SF Bay Area corridor. We
            serve clients across six core industrial sectors — precision
            manufacturing, logistics and supply chain, electronics and hardware,
            B2B technical services, engineering and construction, and cleantech
            and energy — applying AI SEO, AEO, and SRO techniques calibrated to
            the procurement language and buyer behavior of each sector.
          </p>
        </div>
      </section>

      {/* SECTION 3 — INDUSTRY 1: PRECISION MANUFACTURING */}
      <section
        id="precision-manufacturing"
        className="bg-white py-24 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Precision Manufacturing
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Precision manufacturers in the SF Bay Area — including CNC
              machining shops, metal fabricators, injection molders, and
              aerospace component suppliers — are increasingly being sourced
              through AI procurement queries. Exagic AI ensures your technical
              capabilities, certifications, and production capacities are
              structured as AI-citable entities rather than buried in PDF spec
              sheets.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "CNC Machining",
                "Metal Fabrication",
                "Aerospace Components",
                "AS9100 Certified",
                "ITAR Compliant",
                "ISO 9001",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Buyers sourcing precision manufactured components query AI
                systems with highly specific technical criteria. A procurement
                engineer searching for a qualified CNC machining vendor might
                ask Perplexity "which SF Bay Area manufacturers are AS9100
                certified and handle titanium components under 0.001 inch
                tolerance?" If your capabilities are not structured as
                machine-readable entities with clear certification and
                specification signals, you will not appear in that answer —
                regardless of your actual qualifications.
              </p>
              <p>
                Exagic AI's AEO process for precision manufacturers focuses on
                three core areas: converting technical specifications from PDFs
                and static catalog pages into structured, AI-readable content;
                building entity associations between your brand and the specific
                certifications, materials, tolerances, and application
                categories your buyers search for; and ensuring your regional
                presence (East Bay, Fremont, San Jose) is precisely defined so
                AI systems match you to location-specific supplier queries.
              </p>
              <p>
                The result is a brand that appears as a cited, specific,
                verifiable answer when procurement teams query AI systems for
                qualified precision manufacturing suppliers in Northern
                California — rather than being invisible while less-qualified
                competitors with better-structured content capture the
                recommendation.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-6">
              <div className="text-5xl font-bold text-brand">73%</div>
              <div className="text-lg font-medium text-zinc-900 leading-tight">
                of industrial buyers now use AI agents for initial supplier
                sourcing
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn about our AEO services for manufacturers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDUSTRY 2: LOGISTICS AND SUPPLY CHAIN */}
      <section
        id="logistics"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Logistics and Supply Chain
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Logistics providers and supply chain operators in the Fremont
              corridor, Port of Oakland region, and Silicon Valley distribution
              network face a critical AI visibility gap. Procurement teams use
              AI to identify freight partners, warehousing providers, and 3PL
              operators — and most logistics companies in the Bay Area are
              structurally invisible to these AI-generated queries.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Freight Forwarding",
                "Warehousing",
                "3PL",
                "Cold Chain",
                "Last-Mile Delivery",
                "Port of Oakland",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                The SF Bay Area logistics corridor is one of the most
                strategically significant supply chain hubs on the West Coast —
                connecting the Port of Oakland, Silicon Valley manufacturing
                operations, and the broader Northern California distribution
                network. AI-powered procurement tools are increasingly used by
                logistics buyers to identify and evaluate freight partners, 3PL
                providers, and warehousing operators across this corridor.
                Logistics companies not optimized for AI citation are absent
                from these evaluations at the point of first contact.
              </p>
              <p>
                AEO for logistics providers focuses on geographic entity
                precision — defining your service corridors, hub locations, and
                network reach in AI-readable terms rather than vague coverage
                statements. A logistics provider that serves "the Bay Area" is
                far less citable than one whose content precisely defines
                service between the Port of Oakland, the Fremont logistics hub,
                San Jose distribution centers, and Sacramento last-mile delivery
                zones. Precision in geographic entity language directly
                translates to higher citation rates in location-specific AI
                procurement queries.
              </p>
              <p>
                We also focus on service-specific entity structuring —
                differentiating your capabilities across freight forwarding,
                warehousing, cold chain logistics, hazmat handling, and
                intermodal services in ways that allow AI systems to match your
                brand to highly specific buyer queries. Generic service
                descriptions produce low selection rates. Precise, entity-rich
                service definitions produce citations.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-white border border-zinc-100 flex items-center gap-6 text-zinc-900">
              <div className="text-5xl font-bold text-brand">4.2x</div>
              <div className="text-lg font-medium text-zinc-900 leading-tight">
                increase in AI-driven supply chain queries since 2024
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/sro"
                className="text-lg font-bold text-brand hover:underline text-zinc-900"
              >
                Learn about SRO for logistics providers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRY 3: ELECTRONICS AND HARDWARE */}
      <section id="electronics" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Electronics and Hardware Companies
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Electronics manufacturers, PCB assemblers, semiconductor
              distributors, and hardware component suppliers in Silicon Valley
              face procurement queries that combine technical specification
              matching with supply chain reliability signals. Exagic AI ensures
              your component catalog, lead times, certifications, and supply
              chain qualifications are structured for AI citation in hardware
              procurement searches.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "PCB Assembly",
                "Semiconductor Distribution",
                "Component Sourcing",
                "RoHS Compliant",
                "IPC Certified",
                "Silicon Valley",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Hardware procurement in Silicon Valley moves fast. Design
                engineers and sourcing managers query AI systems for qualified
                component suppliers, PCB assemblers, and electronics
                manufacturers under real time pressure — comparing
                specifications, lead times, and supply chain reliability signals
                across multiple candidates simultaneously. For electronics
                companies in the SF Bay Area, appearing in those AI-generated
                comparisons requires content that is both technically precise
                and structurally optimized for AI extraction.
              </p>
              <p>
                Exagic AI's AEO process for electronics and hardware companies
                focuses on converting component-level specifications into
                AI-citable entities. This includes structuring part numbers,
                technical parameters, compliance certifications (RoHS, IPC, UL),
                and stock availability signals in formats that AI procurement
                tools can read, cross-reference, and cite. Static catalog pages
                and unstructured spec sheets — the default content format for
                most electronics suppliers — are effectively invisible to AI
                retrieval systems.
              </p>
              <p>
                We also address the multi-platform procurement reality of
                hardware sourcing. Buyers in this sector use ChatGPT for initial
                supplier identification, Perplexity for technical comparison
                research, and Gemini for supply chain risk assessment. Our
                optimization process ensures your brand performs across all
                three platforms — not just the one with the highest traditional
                search alignment.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/ai-seo"
                className="text-lg font-bold text-brand hover:underline"
              >
                See our AI SEO capabilities for hardware companies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRY 4: B2B TECHNICAL SERVICES */}
      <section
        id="technical-services"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for B2B Technical Services
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Engineering consultancies, calibration labs, testing facilities,
              quality assurance firms, and technical staffing agencies serving
              industrial clients in the SF Bay Area rely on expert credibility
              signals that AI systems struggle to extract from typical
              professional services websites. Exagic AI structures your
              expertise, credentials, and methodologies as AI-citable authority
              signals.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "Engineering Consulting",
                "Calibration Services",
                "Quality Assurance",
                "NADCAP Certified",
                "ISO 17025",
                "Technical Staffing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Buyers sourcing B2B technical services query AI systems for
                verifiable expertise — specific certifications, named
                methodologies, accreditation standards, and documented outcomes.
                A quality assurance firm with ISO 17025 accreditation, NADCAP
                certification, and a documented track record in aerospace
                component testing is a highly specific, verifiable entity that
                AI systems can confidently cite. The same firm described as "a
                leading quality assurance provider" with no specifics is
                invisible to those queries.
              </p>
              <p>
                AEO for B2B technical services focuses on expert entity signals
                — making named specialists, documented methodologies, held
                certifications, and specific service outcomes into AI-readable
                entities on your website. This includes Person schema for key
                experts, Service schema for accredited service lines, and
                content that directly answers the questions buyers ask AI when
                evaluating technical service providers: "which Bay Area
                calibration labs are ISO 17025 accredited?", "what testing
                capabilities does [firm] have for aerospace materials?"
              </p>
              <p>
                The authority gap between technical service providers with
                well-structured digital presence and those without is growing
                rapidly as AI procurement becomes the default first step in
                vendor evaluation. Exagic AI helps B2B technical services firms
                close that gap — ensuring that genuine expertise translates into
                AI-cited recommendations rather than being invisible because
                content structure does not meet AI extraction standards.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn how AEO builds expert authority signals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDUSTRY 5: ENGINEERING AND CONSTRUCTION */}
      <section id="engineering" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Engineering and Construction Firms
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              General contractors, specialty engineering firms, structural
              consultancies, and MEP (mechanical, electrical, plumbing)
              contractors serving industrial clients in the SF Bay Area are
              increasingly evaluated through AI-powered project sourcing tools.
              Exagic AI ensures your project history, certifications, bonding
              capacity, and specialty capabilities are structured for AI
              procurement citation.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "General Contracting",
                "Structural Engineering",
                "MEP Engineering",
                "LEED Certified",
                "Design-Build",
                "Industrial Construction",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Large-scale industrial construction and engineering projects in
                the Bay Area — data center builds, manufacturing facility
                expansions, warehouse developments, and infrastructure projects
                — involve procurement processes that increasingly rely on AI
                tools for contractor identification and preliminary
                qualification. Project owners and general contractors query AI
                systems to identify qualified specialty subcontractors,
                engineering firms, and construction managers with specific
                capabilities, licensure, and regional experience.
              </p>
              <p>
                AEO for engineering and construction firms focuses on project
                history as entity data — converting completed projects, client
                relationships, specialty certifications (LEED, DSA, Caltrans
                pre-qualification), and bonding capacity into AI-readable
                signals that procurement tools can match to specific project
                type queries. A firm with documented experience in tilt-up
                industrial construction in the East Bay is far more citable than
                a firm with a generic "commercial and industrial construction"
                service description.
              </p>
              <p>
                Geographic entity precision is particularly important for
                construction and engineering firms, where local licensing,
                regional experience, and proximity to project sites are primary
                qualification criteria. We ensure your service territory,
                licensing jurisdictions, and completed project locations are
                precisely defined as entities — enabling AI systems to
                accurately match your firm to geographically specific contractor
                searches across the Bay Area.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/ai-seo"
                className="text-lg font-bold text-brand hover:underline"
              >
                See how Exagic AI structures entity data for technical firms →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — INDUSTRY 6: CLEANTECH AND ENERGY */}
      <section
        id="cleantech"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Cleantech and Energy Companies
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Solar installers, energy storage integrators, EV charging
              infrastructure providers, water treatment technology companies,
              and cleantech manufacturers operating in Northern California face
              a rapidly growing AI procurement market driven by corporate
              sustainability mandates and public sector procurement
              requirements. Exagic AI ensures your cleantech solutions are
              discoverable and citable in AI-generated sustainability
              procurement searches.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "Solar Energy",
                "Energy Storage",
                "EV Infrastructure",
                "Water Treatment",
                "CPUC Certified",
                "NEM 3.0",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Corporate sustainability commitments and California's aggressive
                clean energy mandates are driving a surge in AI-assisted
                procurement of cleantech solutions across the Bay Area.
                Procurement managers at tech companies, industrial
                manufacturers, and public agencies query AI systems for
                qualified solar integrators, energy storage vendors, EV charging
                infrastructure providers, and water treatment technology
                suppliers — often with specific certification, incentive
                eligibility, and performance criteria attached to those queries.
              </p>
              <p>
                Cleantech and energy companies face a specific AEO challenge:
                the technical and regulatory landscape changes rapidly, meaning
                content that was accurate twelve months ago may no longer
                reflect current incentive structures, certification
                requirements, or product capabilities. Exagic AI's AEO process
                for cleantech companies includes a content freshness protocol —
                ensuring that regulatory signals (NEM 3.0, IRA incentive
                eligibility, CPUC certification requirements) are updated
                regularly so AI systems cite current, accurate information
                rather than outdated descriptions.
              </p>
              <p>
                We also address the dual-audience procurement reality of
                cleantech — where procurement decisions often involve both
                technical evaluators (engineers assessing system specifications)
                and financial decision-makers (CFOs assessing ROI, incentive
                eligibility, and financing options). Our AEO process structures
                content to answer both audiences' AI queries — ensuring your
                brand appears in both technical specification searches and
                financial evaluation searches.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn how AEO handles multi-audience industrial content →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — REGIONAL ENTITY SECTION */}
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              SF Bay Area Industrial Regions we serve
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Exagic AI serves industrial clients across the full SF Bay Area
              corridor — from the East Bay manufacturing belt and Fremont
              logistics hub to Silicon Valley hardware companies and the Port of
              Oakland supply chain network. Regional entity precision is core to
              our AI SEO process for every client.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                East Bay Manufacturing Belt
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Home to precision manufacturers, metal fabricators, and
                industrial component suppliers. Key cities: Oakland, Hayward,
                Union City, Newark.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Fremont Logistics Hub
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                One of the most critical logistics and distribution hubs in
                Northern California, serving the Port of Oakland and Silicon
                Valley supply chains.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Silicon Valley Hardware Corridor
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Electronics manufacturers, semiconductor suppliers, PCB
                assemblers, and hardware startups concentrated across San Jose,
                Santa Clara, and Sunnyvale.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                San Jose Industrial District
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Home to aerospace component manufacturers, cleantech companies,
                and heavy industrial operations in South Bay.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                San Francisco Industrial Corridor
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                The historic SF industrial waterfront — including Dogpatch,
                Bayview, and the Potrero district — housing design-build firms,
                specialty manufacturers, and technical services companies.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Port of Oakland Supply Chain Network
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                The third-busiest container port in the US, serving as the
                primary import/export hub for Northern California industrial
                supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ SECTION */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Industrial AI SEO FAQs
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

      {/* SECTION 11 — CLOSING CTA */}
      <section className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center text-zinc-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Start Building AI Visibility in Your Industrial Sector
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed text-zinc-900">
              Whether you manufacture precision components in Fremont, operate a
              logistics network across the East Bay, supply electronics to
              Silicon Valley hardware companies, or provide technical services
              to industrial clients throughout Northern California — Exagic AI
              has the sector-specific expertise to make your brand visible where
              your buyers are looking: inside AI-generated answers.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-900">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95 text-zinc-900"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/ai-seo"
                className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors text-zinc-900"
              >
                Explore Our AI SEO Capabilities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

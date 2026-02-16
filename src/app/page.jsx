import Hero from "./_components/Hero/Hero";
import Logic from "./_components/Logic/Logic";
import Capabilities from "./_components/Capabilities/Capabilities";
import IndustryFocus from "./_components/IndustryFocus/IndustryFocus";
import ProjectTypes from "./_components/ProjectTypes/ProjectTypes";
import FAQ from "./_components/FAQ/FAQ";
import ContactCTA from "./_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "EXAGIC AI | AI SEO & SRO Agency San Francisco",
  description:
    "San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers and global suppliers. AI-driven Answer Engine Optimization (AEO) and Search Retrieval Optimization (SRO).",
  alternates: {
    canonical: "https://www.exagic.ai",
  },
};

export default function HomePage() {
  /* ═══════════════════════════════════════════════
     BREADCRUMB – Helps AI models understand site hierarchy
     ═══════════════════════════════════════════════ */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.exagic.ai",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      <Logic />
      <Capabilities />
      <IndustryFocus />
      <ProjectTypes />
      <FAQ />
      <ContactCTA />
    </>
  );
}

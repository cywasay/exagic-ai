import Hero from "./_components/Hero/Hero";
import Logic from "./_components/Logic/Logic";
import Capabilities from "./_components/Capabilities/Capabilities";
import IndustryFocus from "./_components/IndustryFocus/IndustryFocus";
import ProjectTypes from "./_components/ProjectTypes/ProjectTypes";
import Team from "./_components/Team/Team";
import LogoStrip from "./_components/LogoStrip/LogoStrip";
import SocialProof from "./_components/SocialProof/SocialProof";
import FAQ from "./_components/FAQ/FAQ";
import ContactCTA from "./_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "Exagic AI | AI SEO & SRO Agency San Francisco",
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app",
  },
};

export default function HomePage() {
  /* ═══════════════════════════════════════════════
     PRIMARY ENTITY – Organization
     ═══════════════════════════════════════════════ */
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Exagic AI",
    url: "https://exagic-ai.vercel.app",
    description:
      "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
    areaServed: "San Francisco Bay Area",
    serviceType: [
      "AI SEO",
      "Answer Engine Optimization",
      "Selection Rate Optimization",
      "AI Visibility Tracking",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Exagic AI",
    url: "https://exagic-ai.vercel.app",
    description:
      "AI SEO and Answer Engine Optimization for industrial manufacturers.",
    publisher: {
      "@type": "Organization",
      name: "Exagic AI",
    },
  };

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
        item: "https://exagic-ai.vercel.app",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Logic />
      <Capabilities />
      <Team />
      <LogoStrip />
      <SocialProof />
      <IndustryFocus />
      <ProjectTypes />
      <FAQ />
      <ContactCTA />
    </>
  );
}

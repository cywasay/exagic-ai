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
};

export default function HomePage() {
  return (
    <>
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

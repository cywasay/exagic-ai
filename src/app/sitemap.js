export default function sitemap() {
  const baseUrl = "https://exagic-ai.vercel.app";

  const labArticles = [
    "aeo-vs-seo-industrial-brands",
    "ai-search-industrial-suppliers-sf-bay-area",
    "east-bay-manufacturers-invisible-ai-search",
    "what-is-sro-selection-rate-optimization",
    "model-updates",
    "case-studies",
  ];

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { url: "/capabilities/aeo", priority: 0.8, changeFrequency: "monthly" },
    { url: "/capabilities/sro", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.9, changeFrequency: "monthly" },
    {
      url: "/industries/manufacturing",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { url: "/industries/logistics", priority: 0.8, changeFrequency: "monthly" },
    { url: "/lab", priority: 0.9, changeFrequency: "weekly" },
    { url: "/privacy", priority: 0.5, changeFrequency: "monthly" },
    { url: "/terms", priority: 0.5, changeFrequency: "monthly" },
  ];

  const sitemapEntries = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...labArticles.map((slug) => ({
      url: `${baseUrl}/lab/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}

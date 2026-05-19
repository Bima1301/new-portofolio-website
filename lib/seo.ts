import { portfolioData } from "@/lib/gavi-data";
import { siteConfig } from "@/lib/site-config";

/** Absolute URL for meta tags & JSON-LD */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const seoSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Golang",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "SEO",
  "AI Integration",
] as const;

export function buildPortfolioItemListSchema() {
  const items = portfolioData
    .filter((p) => p.hasLink && p.link)
    .slice(0, 12)
    .map((project, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      item: {
        "@type": "CreativeWork" as const,
        name: project.title,
        description: project.description,
        url: project.link,
        author: {
          "@type": "Person" as const,
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    }));

  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} Portfolio Projects`,
    description: "Selected web development projects by Yanuar Bima",
    numberOfItems: items.length,
    itemListElement: items,
  };
}

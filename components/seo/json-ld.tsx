import { absoluteUrl, buildPortfolioItemListSchema, seoSkills } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const pageUrl = siteConfig.url;
  const imageUrl = absoluteUrl(siteConfig.ogImage);

  const personId = `${pageUrl}/#person`;
  const websiteId = `${pageUrl}/#website`;
  const webpageId = `${pageUrl}/#webpage`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: pageUrl,
    image: imageUrl,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    nationality: {
      "@type": "Country",
      name: siteConfig.location,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.countryCode,
    },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [...seoSkills],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.title,
    url: pageUrl,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": personId },
    author: { "@id": personId },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": webpageId,
    url: pageUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Web Development`,
    url: pageUrl,
    image: imageUrl,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    email: siteConfig.email,
    founder: { "@id": personId },
    knowsAbout: [...seoSkills],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description: "React, Next.js, TypeScript UI development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Development",
            description: "End-to-end web apps with Laravel, Node, and databases",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl,
      },
    ],
  };

  const portfolioItemList = buildPortfolioItemListSchema();

  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    professionalServiceSchema,
    breadcrumbSchema,
    portfolioItemList,
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

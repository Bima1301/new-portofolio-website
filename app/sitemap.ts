import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
  ];
}

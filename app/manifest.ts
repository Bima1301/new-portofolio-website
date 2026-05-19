import { siteConfig } from "@/lib/site-config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#1a1a1a",
    lang: siteConfig.language,
    icons: [
      {
        src: "/assets/imgs/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

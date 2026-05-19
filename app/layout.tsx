import GaviScriptLoader from "@/components/gavi/common/gavi-script-loader";
import Lines from "@/components/gavi/common/lines";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const ogImageUrl = absoluteUrl(siteConfig.ogImage);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.shortName,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    apple: "/assets/imgs/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  other: {
    "geo.region": siteConfig.countryCode,
    "geo.placename": siteConfig.location,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="me" href={siteConfig.social.github} />
        <link rel="me" href={siteConfig.social.linkedin} />
        <script
          dangerouslySetInnerHTML={{
            __html: "window.__gaviLoaderHandled=true;",
          }}
        />
      </head>
      <body className="sub-bg">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.body.classList.remove('loaded');",
          }}
        />
        <JsonLd />
        <Lines />
        {children}
        <Toaster position="top-right" />
        <GaviScriptLoader />
      </body>
    </html>
  );
}

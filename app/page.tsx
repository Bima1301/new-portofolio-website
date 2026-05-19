import Cursor from "@/components/gavi/common/cursor";
import GaviInit from "@/components/gavi/common/gavi-init";
import ScrollAnimations from "@/components/gavi/common/scroll-animations";
import ProgressScroll from "@/components/gavi/common/progress-scroll";
import ContactUs from "@/components/gavi/contact/contact-us";
import ContactInfo from "@/components/gavi/contact/contact-info";
import Footer from "@/components/gavi/home/footer";
import NavTop from "@/components/gavi/home/nav-top";
import Navbar from "@/components/gavi/home/navbar";
import Portfolio from "@/components/gavi/home/portfolio";
import Price from "@/components/gavi/home/price";
import Profile from "@/components/gavi/home/profile";
import Services from "@/components/gavi/home/services";
import Skills from "@/components/gavi/home/skills";
import Testimonials from "@/components/gavi/home/testimonials";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
  },
};

/** Static generation for SEO & performance (dev image cache uses publicAsset bust) */
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Cursor />
      <GaviInit />
      <ContactUs />
      <ProgressScroll />
      <div>
        <NavTop />
        <main className="container" id="main-content">
          <Profile />
          <Navbar />
          <section className="in-box" aria-label="Portfolio sections">
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Price />
            <ContactInfo />
          </section>
        </main>
        <Footer />
      </div>
      <ScrollAnimations />
    </>
  );
}

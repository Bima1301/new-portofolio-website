import { projectsData, experiencesData } from "./data";
import { getExperienceDuration } from "./experience-duration";
import { siteConfig } from "./site-config";

export const navLinks = [
  { label: "Home", scrollIndex: 0 },
  { label: "Services", scrollIndex: 1 },
  { label: "Experience", scrollIndex: 2 },
  { label: "Portfolio", scrollIndex: 3 },
  { label: "Pricing", scrollIndex: 4 },
  { label: "Contact", scrollIndex: 5 },
] as const;

export const servicesData = [
  {
    icon: "/assets/imgs/serv-img/2.png",
    title: "FULL STACK DEVELOPMENT",
    description:
      "End-to-end web applications with React, Next.js, Laravel, and robust APIs tailored to your business goals.",
  },
  {
    icon: "/assets/imgs/serv-img/1.png",
    title: "FRONTEND ENGINEERING",
    description:
      "Responsive, accessible interfaces with React, TypeScript, Tailwind CSS, and polished UI/UX interactions.",
  },
  {
    icon: "/assets/imgs/serv-img/4.png",
    title: "BACKEND & INTEGRATION",
    description:
      "REST APIs, authentication, database design, and third-party integrations using Laravel, Node, and Supabase.",
  },
  {
    icon: "/assets/imgs/serv-img/3.png",
    title: "PERFORMANCE & SEO",
    description:
      "Fast, SEO-friendly Next.js sites with structured data, optimized assets, and best practices for discoverability.",
  },
] as const;

/** Top 4 skills for "My Experience" section */
export const coreSkillsData = [
  {
    photo: "/assets/imgs/resume/s1.png",
    title: "Next.js",
    persent: "92%",
  },
  {
    photo: "/assets/imgs/resume/s2.png",
    title: "Laravel",
    persent: "90%",
  },
  {
    photo: "/assets/imgs/resume/s3.png",
    title: "Golang",
    persent: "75%",
  },
  {
    photo: "/assets/imgs/resume/s4.png",
    title: "AI Integration",
    persent: "70%",
  },
] as const;

/** Work experience, newest first — with computed duration */
export const workExperiencesData = [...experiencesData].reverse().map((exp) => ({
  ...exp,
  duration: getExperienceDuration(exp.date),
}));

function getProjectLink(project: (typeof projectsData)[number]) {
  if (project.url) return project.url;
  if (project.githubUrl) return project.githubUrl;
  return "";
}

/** All portfolio items, newest first — mapped from projectsData */
export const portfolioData = [...projectsData].reverse().map((project) => ({
  photo:
    typeof project.imageUrl === "string"
      ? project.imageUrl
      : project.imageUrl.src,
  title: project.title,
  description: project.description,
  tags: [...project.tags],
  url: project.url,
  githubUrl: project.githubUrl,
  link: getProjectLink(project),
  hasLink: Boolean(project.url || project.githubUrl),
}));

/** Initial 2×2 grid */
export const PORTFOLIO_INITIAL_COUNT = 4;
/** Each "Show More" reveals this many additional items */
export const PORTFOLIO_LOAD_MORE_COUNT = 5;

/** Work experience timeline — show newest first, paginated */
export const EXPERIENCE_INITIAL_COUNT = 4;
export const EXPERIENCE_LOAD_MORE_COUNT = 3;

export const testimonialsData = [
  {
    quote:
      "Bima delivered a polished, responsive platform on schedule. Communication was clear and the codebase was clean and maintainable.",
    name: "Project Lead",
    role: "Meta Mata Indonesia",
    image: "/assets/imgs/testim/1.png",
    rating: 5,
  },
  {
    quote:
      "Strong full-stack skills across React and Laravel. He integrated complex features smoothly and handled production issues proactively.",
    name: "Tech Team",
    role: "Nodewave",
    image: "/assets/imgs/testim/1.png",
    rating: 5,
  },
] as const;

export const pricingData = [
  {
    type: "Frontend",
    price: "Rp 350.000",
    unit: "/ jam",
    priceNote: "IDR",
    features: [
      "UI implementation from design",
      "React / Next.js development",
      "Responsive & accessible layouts",
      "API integration",
    ],
    delay: ".2s",
  },
  {
    type: "Full Stack",
    price: "Rp 500.000",
    unit: "/ jam",
    priceNote: "IDR",
    features: [
      "Frontend + backend delivery",
      "Laravel or Node APIs",
      "Database & auth setup",
      "Deployment support",
      "Priority communication",
    ],
    delay: ".4s",
  },
  {
    type: "Project",
    price: "Rp 5.000.000",
    unit: "mulai dari",
    priceNote: "IDR",
    features: [
      "Fixed-scope MVP or product",
      "Architecture & planning",
      "End-to-end implementation",
      "Post-launch support options",
    ],
    delay: ".6s",
  },
] as const;

/** Katalog jasa digital — harga dalam IDR (Midtrans / compliance) */
export const productCatalogData = [
  {
    sku: "WEB-LP-01",
    name: "Landing Page Profesional",
    category: "Jasa Website",
    description:
      "Pembuatan landing page responsif (maks. 5 section), form kontak, SEO dasar, dan deploy ke production.",
    priceIdr: 3_500_000,
  },
  {
    sku: "WEB-CP-01",
    name: "Website Company Profile",
    category: "Jasa Website",
    description:
      "Website profil perusahaan multi-halaman (beranda, tentang, layanan, kontak) dengan CMS sederhana.",
    priceIdr: 8_500_000,
  },
  {
    sku: "WEB-EC-01",
    name: "Toko Online Starter",
    category: "Jasa E-Commerce",
    description:
      "Katalog produk, keranjang, checkout, integrasi payment gateway (Midtrans), panel admin dasar.",
    priceIdr: 15_000_000,
  },
  {
    sku: "DEV-API-01",
    name: "Integrasi Payment Gateway",
    category: "Jasa Integrasi",
    description:
      "Integrasi Midtrans Snap / Core API ke aplikasi existing, webhook handler, dan testing sandbox.",
    priceIdr: 2_500_000,
  },
  {
    sku: "DEV-FS-01",
    name: "Paket MVP Full Stack",
    category: "Jasa Pengembangan",
    description:
      "Aplikasi web MVP (auth, CRUD, dashboard) Next.js + Laravel/Node, durasi estimasi 4–6 minggu.",
    priceIdr: 25_000_000,
  },
  {
    sku: "DEV-MNT-01",
    name: "Maintenance & Support Bulanan",
    category: "Jasa Berlangganan",
    description:
      "Perbaikan bug, update keamanan minor, monitoring uptime, maks. 20 jam/bulan.",
    priceIdr: 1_500_000,
  },
  {
    sku: "DEV-CON-01",
    name: "Konsultasi Teknis",
    category: "Jasa Konsultasi",
    description:
      "Sesi konsultasi arsitektur, code review, atau perencanaan fitur (1 jam via video call).",
    priceIdr: 250_000,
  },
  {
    sku: "DEV-AI-01",
    name: "Integrasi AI / Chatbot",
    category: "Jasa Integrasi",
    description:
      "Embedding chatbot atau fitur AI ke website/app (OpenAI / Vercel AI SDK), termasuk prompt dasar.",
    priceIdr: 4_000_000,
  },
] as const;

export function formatIdr(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export { siteConfig };

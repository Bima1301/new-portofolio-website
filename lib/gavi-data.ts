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
    price: "$25",
    unit: "/ hour",
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
    price: "$35",
    unit: "/ hour",
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
    price: "Custom",
    unit: "quote",
    features: [
      "Fixed-scope MVP or product",
      "Architecture & planning",
      "End-to-end implementation",
      "Post-launch support options",
    ],
    delay: ".6s",
  },
] as const;

export { siteConfig };

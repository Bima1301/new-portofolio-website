import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import firstPorto from "@/public/porto/firstPorto.png";
import girimulyo from "@/public/porto/girimulyo.png";
import ciamis from "@/public/porto/ciamis.png";
import maryana from "@/public/porto/maryana.png";
import tesSuit from "@/public/porto/tesSuit.png";
import bimsNews from "@/public/porto/bimsNews.png";
import secondPorto from "@/public/porto/secondPorto.png";
import tlogo from "@/public/porto/tlogo.png";
import metamata from "@/public/porto/metamata.png";
import subud from "@/public/porto/subud.png";
import wbTodo from "@/public/porto/wb-todo.png";
import nodewave from "@/public/porto/nodewave.png";
import ajisaka from "@/public/porto/ajisaka.png";
import { GiVillage } from "react-icons/gi";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { LuWebhook } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Community Service Program (FS Developer)",
    location: "Malang, Indonesia",
    icon: React.createElement(GiVillage),
    date: "July 2022 - August 2022",
    details: [
      'Collaborated with the village secretary to gather website requirements',
      'Crafted a wireframe as a visual guide',
      'Implemented the system over a span of 3 weeks',
      'Translated designs and wireframes into a functional website code',
      'Utilized the Laravel framework for the Back-End',
      'Enriched the Front-End with libraries like SwiperJS and AOS',
      'Undertook debugging tasks',
      'Ensured the hosting of the website with a reputable hosting service'
    ]
  },
  {
    title: "Meta Mata Indonesia Intership (FS Developer)",
    location: "Jakarta, Indonesia",
    icon: React.createElement(BsCalendarEvent),
    date: "November 2022 - January 2023",
    details: [
      'Translated website designs into code',
      'Developed both the back-end and front-end using the Laravel framework',
      'Utilized ReactJs for front-end development',
      'Ensured optimal mobile accessibility',
      'Created an Entity-Relationship Diagram (ERD)',
      'Processed and analyzed the database',
      'Guaranteed the application\'s responsiveness',
      'Collaborated closely with graphic designers to ensure cohesive web design'
    ]
  },
  {
    title: "Telkomsel (FS Developer)",
    location: "Malang, Indonesia",
    icon: React.createElement(MdOutlineInventory2),
    date: "December 2022",
    details: [
      'Developed an intuitive and user-friendly inventory management dashboard',
      'Utilized Laravel, Breeze, and MySQL',
      'Designed and implemented an efficient stock management system',
      'Incorporated analysis features and reporting tools',
      'Integrated the inventory administration system with other systems',
      'Implemented robust security measures, including authentication and authorization'
    ]
  },
  {
    title: "PT Arkatama Multi Solusindo (FS Developer)",
    location: "Malang, Indonesia",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - June 2023",
    details: [
      'Developed and maintained full-stack web applications using the CodeIgniter and Laravel framework',
      'Collaborated closely with the design team',
      'Implemented user interfaces to ensure a seamless user experience',
      'Wrote clean, efficient, and scalable code for both front-end and back-end functionalities',
      'Created and maintained APIs for web applications',
      'Committed to quality through comprehensive testing and debugging',
      'Implemented Role Based Access Control (RBAC) as a security feature of the application',
      'Working with Git for version control and collaboration with other developers',
    ]
  }, {
    title: "Meta Mata Indonesia (FS Developer)",
    location: "Jakarta, Indonesia",
    icon: React.createElement(BsCalendarEvent),
    date: "January 2023 - October 2023 (Part Time)",
    details: [
      'Specialized in full-stack web application development utilizing Laravel, React, and MySQL',
      'Crafted responsive and appealing user interfaces using React',
      'Incorporated UI/UX design principles',
      'Created and managed MySQL databases to efficiently store and handle web application data',
      'Seamlessly integrated complex business logic',
      'Ensured application security through Laravel\'s security features',
      'Oversaw the maintenance and enhancement of existing web applications',
      'Actively engaged in debugging and issue resolution',
      'Using GitFlow for version control and collaboration with other developers',
    ]
  },
  {
    title: "Nodewave (FE Developer)",
    location: "Surabaya, Indonesia",
    icon: React.createElement(LuWebhook),
    date: "October 2023 - Present (Full Time)",
    details: [
      'Expertise in front-end development utilizing React, Next.js, and TailwindCSS',
      'Created responsive and aesthetically pleasing user interfaces using React',
      'Incorporated fundamental UI/UX design principles',
      'Integrated APIs and third-party libraries to augment the application\'s capabilities and features',
      'Oversaw the maintenance and enhancement of existing web applications',
      'Actively engaged in debugging and issue resolution'
    ]
  }
] as const;

export const projectsData = [
  {
    title: "My First Profile Website",
    description:
      "Simple profile website with html, css & js. Also include some package like AOS, TypeIt, etc",
    tags: ["HTML", "CSS", "SASS", "Javascript", "Bootstrap"],
    imageUrl: firstPorto,
    url: "https://yanuarbima.netlify.app",
    githubUrl: "https://github.com/Bima1301/CV",
  },
  {
    title: "Website Desa Girimulyo",
    description:
      "My first project with Laravel. This website is for my Community Service Program's village. I made it for free.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "SCSS"],
    imageUrl: girimulyo,
    url: "https://desa-girimulyo.online",
    githubUrl: "https://github.com/Bima1301/desa-girimulyo",

  },
  {
    title: "Simple Company Profile",
    description: "My first project with react. This project is an experiment using React form validation",
    tags: ["ReactJs", "Bootstrap", "SwiperJS"],
    imageUrl: tesSuit,
    url: "https://company-bk2y16wil-bima1301.vercel.app/",
    githubUrl: "https://github.com/Bima1301/tes-suit-copy",
  },
  {
    title: "SIPINTER Ciamis",
    description:
      "This project is for Ciamis competition website terminal. I made it with ReactJS and Bootstrap.",
    tags: ["ReactJs", "SwiperJs", "Bootstrap"],
    imageUrl: ciamis,
    url: "https://sipinterciamis.vercel.app/",
    githubUrl: "https://github.com/mlthada7/sipinterciamis",

  },
  {
    title: "Merchandise Inventory (Maryana)",
    description: "This website project is used to calculate merchandise stock. I made it with Laravel Breeze ",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "SCSS"],
    imageUrl: maryana,
    url: "https://maryana.cloud/",
    githubUrl: "https://github.com/Bima1301/telkomsel-point",

  },
  {
    title: "My Second Profile Website",
    description: "This is my experimental project, make with ReactJs and ThreeJS. This website is deployed on Vercel and hasn't been completed yet",
    tags: ["ReactJs", "ThreeJS", "TailwindCSS", "FramerMotion"],
    imageUrl: secondPorto,
    url: "https://yanuar-bima.vercel.app",
    githubUrl: "https://github.com/Bima1301/my3d-portfolio"
  },
  {
    title: "Bimss News",
    description: "My complex news project with Laravel, ReactJs and TailwindCSS. This project has RBAC and undeployed",
    tags: ["Laravel", "InertiaJS", "DaisyUI", "ReactJs", "TailwindCSS", "RBAC"],
    imageUrl: bimsNews,
    url: "",
    githubUrl: "https://gitlab.com/bima.aji1380/pre-assignment-fe3-arkatama",
  }, {
    title: "Website Desa Tlogo",
    description: "My second project for village website. This project was carried out by a team consisting of 3 people. I was in charge of the FE & BE",
    tags: ["Laravel", "ReactJs", "TailwindCSS", "MySQL", "SwiperJS"],
    imageUrl: tlogo,
    url: "https://tlogo-blitar.desa.id/",
    githubUrl: "https://github.com/Exe-Creative-ID/desa-tlogo"
  },
  {
    title: "Metamata Event Platform (Part Time)",
    description: "This project is a platform for event management. This poject is still in development and I am in charge of the Full Stack",
    tags: ["ReactJs", "Boostrap", "MySQL", "Laravel", "InertiaJS"],
    imageUrl: metamata,
    url: "https://metamata.id/",
    githubUrl: "https://gitlab.com/ahmad.qorthony/metamata"
  },
  {
    title: "Subud Congress Hotel Booking",
    description: "This project is a hotel booking website for the Subud World Congress event. Using NextJs, TailwindCSS, and Ant Design for the Front End.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Ant Design", "Midtrans", "REST API"],
    imageUrl: subud,
    url: "https://swchotels.com/",
    githubUrl: ""
  },
  {
    title: "To Do List",
    description: "This project is a simple to do list with VueJs and TailwindCSS for the Front End and ExpressJs with Prisma and Supabase for the Back End. This project also has a REST API.",
    tags: ["VueJs", "Typescript", "TailwindCSS", "ExpressJs", "Prisma ORM", "Supabase", "REST API"],
    imageUrl: wbTodo,
    url: "https://wb-todo-app.vercel.app",
    githubUrl: "https://github.com/Bima1301/wb-todo-app"
  },
  {
    title: "Ajisaka UGM",
    description: "This project is a website for the Ajisaka UGM event. Using NextJs, TailwindCSS, and Framer Motion for the Front End.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageUrl: ajisaka,
    url: "https://ajisakaugm.id/",
    githubUrl: ""
  },
  {
    title: "Nodewave Website",
    description: "This project is the company's official website. I made it with NextJs, TailwindCSS, and Framer Motion. This project is still under development and adding backend (Full Stack) using Prisma with Supabase",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion", "Prisma ORM", "Supabase"],
    imageUrl: nodewave,
    url: "https://www.nodewave.id",
    githubUrl: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "Laravel",
  "InertiaJS",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

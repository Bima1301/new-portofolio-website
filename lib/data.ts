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
    description:
      "In this collaborative project, I worked closely with the village secretary to gather the website requirements. Alongside the team, we crafted a wireframe as a visual guide. Proceeding from there, I implemented the system over a span of 3 weeks, translating designs and wireframes into a functional website code. Throughout this process, the Laravel framework was employed for the Back-End, while Front-End was enriched with libraries like SwiperJS and AOS. I also undertook debugging tasks and ensured the hosting of the website with a reputable hosting service.",
    icon: React.createElement(GiVillage),
    date: "July 2022 - August 2022",
  },
  {
    title: "Meta Mata Indonesia Intership (FS Developer)",
    location: "Jakarta, Indonesia",
    description:
      "In a collaborative effort, I was responsible for translating website designs into code. Working alongside the team, I developed both the back-end and front-end using the Laravel framework, while utilizing ReactJs for front-end development. Ensuring optimal mobile accessibility was a key priority. I also created an Entity-Relationship Diagram (ERD), processed and analyzed the database, and guaranteed the application's responsiveness. Moreover, I collaborated closely with graphic designers to ensure cohesive web design.",
    icon: React.createElement(BsCalendarEvent),
    date: "November 2022 - January 2023",
  },
  {
    title: "Telkomsel (FS Developer)",
    location: "Malang, Indonesia",
    description:
      "I developed an intuitive and user-friendly inventory management dashboard utilizing Laravel, Breeze, and MySQL. This involved designing and implementing an efficient stock management system encompassing inventory control, sales monitoring, and inventory tracking. I incorporated analysis features and reporting tools to aid management decisions based on accurate stock data. Integration of the inventory administration system with other systems, such as purchasing or sales, was achieved to ensure data consistency. Additionally, I implemented robust security measures, including authentication and authorization, to safeguard sensitive data within the inventory administration system.",
    icon: React.createElement(MdOutlineInventory2),
    date: "December 2022",
  },
  {
    title: "PT Arkatama Multi Solusindo (FS Developer)",
    location: "Malang, Indonesia",
    description: "I am skilled in developing and maintaining full-stack web applications using the CodeIgniter framework. Collaborating closely with the design team, I implement user interfaces to ensure a seamless user experience. My focus includes writing clean, efficient, and scalable code for both front-end and back-end functionalities. I adeptly integrate APIs and third-party libraries to enhance the application's capabilities and features. My commitment to quality is demonstrated through comprehensive testing and debugging, ensuring the identification and resolution of issues or bugs. This results in the creation of high-quality, reliable web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - June 2023",
  }, {
    title: "Meta Mata Indonesia (FS Developer)",
    location: "Jakarta, Indonesia",
    description: "I specialize in full-stack web application development utilizing Laravel, React, and MySQL. My expertise involves crafting responsive and appealing user interfaces using React, incorporating UI/UX design principles. I create and manage MySQL databases to efficiently store and handle web application data. Complex business logic is seamlessly integrated, while application security is ensured through Laravel's security features. I also oversee the maintenance and enhancement of existing web applications, actively engaging in debugging and issue resolution to guarantee a seamless development process.",
    icon: React.createElement(BsCalendarEvent),
    date: "January 2023 - October 2023 (Part Time)",
  },
  {
    title: "Nodewave (FE Developer)",
    location: "Surabaya, Indonesia",
    description: "I possess expertise in front-end development, particularly in utilizing React, Next.js, and TailwindCSS. My skills revolve around creating responsive and aesthetically pleasing user interfaces using React, incorporating fundamental UI/UX design principles. I excel in integrating APIs and third-party libraries to augment the application's capabilities and features. Additionally, I oversee the maintenance and enhancement of existing web applications, actively engaging in debugging and issue resolution to guarantee a seamless development process.",
    icon: React.createElement(LuWebhook),
    date: "October 2023 - Present (Full Time)",
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
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
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

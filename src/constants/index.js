import { infosys } from "../assets/company";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  gym,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Infosys Limited",
    icon: infosys,
    iconBg: "#accbe1",
    date: "June 2022 - August 2023",
    points: [
        "Participated in Agile software development cycles as part of a 5-member team, using Java and Spring Boot.",
        "Assisted in developing responsive user interfaces for a high-traffic e-commerce website with React.js.",
        "Supported back-end development for a financial services application using Node.js and Express.",
        "Aided in managing and optimizing SQL databases.",
       "Managed code versions and collaboration using Git.",
      "Applied basic cybersecurity practices in application development.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ToluAjisola",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/toluwalope-ajisola/",
  },
];

export const projects = [
  {
    iconUrl: gym,
    theme: "btn-back-orange",
    name: "Gym App",
    description: [
      "Developed a Fitness web application   app that utlizes a RapidAPI to fetch exercises by name,muscle and equipment.",
      "Allows for the display of youtube instruction videos, similar muscle and equipment when anexercise is selected.",
    ],
    link: "https://github.com/ToluAjisola/gym-exercises",
  },
];

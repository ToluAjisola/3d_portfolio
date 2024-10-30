import { infosys } from "../assets/company";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
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
  gym,
  tic_tac,
  ai_image,
  project_management,
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
      "Developed complex MongoDB queries for data manipulation for the client's backend application, contributing to a 50% reduction in query response times and effective data retrieval.",
      "Designed and developed frontend interfaces using React and JavaScript, resulting in a 30% increase in user engagement and comprehensive site navigation.",
      "Worked cross - functionally with multiple teams to integrate APIs and RESTful web services, optimizing data exchange processes and reducing integration time by 25%.",
      "Developed scalable GraphQL & RESTful APIs, enhancing system performance and improving end - user interactions by 20 %.",
      "Performed diligent code reviews, audits, and testing on software deliverables, eventually leading to a 20 % increase in client satisfaction by identifying and reducing post - release defects.",
      "Implemented automated test scripts and comprehensive E2E test cases using Selenium and Jest – result: 30 % decrease in testing time.",
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
      "Developed a Fitness web application   app that utilizes a RapidAPI to fetch exercises by name, muscle and equipment. ",
      "Allows for the display of YouTube instruction videos, similar muscle and equipment when an exercise is selected.",
    ],
    link: "https://golds-exercises.netlify.app",
  },
  {
    iconUrl: tic_tac,
    theme: "btn-back-blue",
    name: "Tic-Tac-To",
    description: [
      "Developed a simple Tic-Tac-To game with React and styled with TailwindCSS. ",
      "Created a player vs player mode and a CPU mode that allows a player to go against a CPU",
    ],
    link: "https://tic-tac-tolu.netlify.app",
  },
  {
    iconUrl: ai_image,
    theme: "btn-back-blue",
    name: "AI image generation",
    description: [
      "Developed a Full Stack MERN AI Image Generation App clone of DALL-E. ",
      "Ulitlizes the OpenAI API, Cloudinary and MongoDB Atlas",
    ],
    link: "https://ai-image-generationn.netlify.app",
  },
  {
    iconUrl: project_management,
    theme: "btn-back-blue",
    name: "Project Management",
    description: [
      "Developed a simple project management with React and styled it with TailwindCSS. ",
      "Creates a project category with an internal to-do list.",
    ],
    link: "https://project-managing.netlify.app",
  },
];

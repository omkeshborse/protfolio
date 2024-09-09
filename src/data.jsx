import { nanoid } from "nanoid";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adept at crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <TbBrandRedux className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in managing application state using Redux for more predictable and maintainable applications.",
  },
  {
    id: nanoid(),
    title: "Tailwindcss",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Tailwind CSS, creating highly customizable and modern UIs with utility-first CSS framework.",
  },
  {
    id: nanoid(),
    title: "Node JS",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, building scalable server-side applications with JavaScript runtime environment.",
  },
  {
    id: nanoid(),
    title: "Express JS",
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with Express.js, developing robust APIs and server-side logic for web applications.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Java, developing back-end systems and integrating front-end applications.",
  },
  {
    id: nanoid(),
    title: "Spring FrameWork",
    icon: <SiSpring className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Spring Framework and Spring Boot, building robust and scalable back-end services.",
  },
  {
    id: nanoid(),
    title: "Spring Boot",
    icon: <SiSpringboot className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Spring Boot, developing microservices and REST APIs for high-performance and scalable applications.",
  },

  {
    id: nanoid(),
    title: "Git & Github",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in version control with Git and GitHub, managing codebase and collaboration efficiently.",
  },
  {
    id: nanoid(),
    title: "Postman",
    icon: <SiPostman className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in using Postman for API testing and development, ensuring smooth and bug-free integrations.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with MongoDB, designing and managing NoSQL databases for dynamic applications.",
  },
  {
    id: nanoid(),
    title: "SQL , MySql & Postgresql",
    icon: <BiLogoPostgresql className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in SQL, MySQL, and PostgreSQL, managing relational databases for data-driven applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dc80grfev/image/upload/v1725877452/Macbook-Air-movies-verse-react-project.netlify.app_2_yuef9p.png",
    url: "https://movies-verse-react-project.netlify.app/",
    github: "https://github.com/omkeshborse/moviesverse",
    title: "Moviesverse",
    text: "Moviesverse is an innovative platform designed for movie enthusiasts to explore a vast and dynamic collection of films. By integrating with a dedicated movie API, Moviesverse ensures that its database remains current, offering users real-time access to the latest movie releases, detailed film information, and personalized recommendations.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dc80grfev/image/upload/v1725878897/Macbook-Air-comfy-store-react-project-omkeshborse.netlify.app_hiemsl.png",
    url: "https://comfy-store-react-project-omkeshborse.netlify.app/",
    github: "https://github.com/omkeshborse/Comfy-Store",
    title: "Comfy Store",
    text: "Comfy Store is a responsive e-commerce platform with a modern UI built using React. It offers dynamic product displays, smooth add-to-cart functionality, and a seamless checkout experience. Designed for performance and scalability, Comfy Store provides an engaging shopping experience across all devices.",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dc80grfev/image/upload/v1725879390/Macbook-Air-agile-workflow-app-js-omkesh.netlify.app_cfinlp.png",
    url: "https://agile-workflow-app-js-omkesh.netlify.app/",
    github: "https://github.com/omkeshborse/Agile-Workflow-App",
    title: "Agile Workflow App",
    text: "An Agile Workflow App is a web-based project management tool that utilizes the Kanban methodology to visualize and manage project progress. It allows teams to collaborate effectively by providing a shared workspace to organize tasks, track progress, and identify bottlenecks.",
  },
];

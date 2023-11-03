import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  nespresso,
  java,
  orm,
  postman,
  api,
  spring,
  jobit,
  mysql,
  nextjs,
  cpu,
  dentists,
  loopify,
  kaba,
  infinit,
  planex,
  tech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Database Administrator",
    icon: backend,
  },
  {
    title: "Project builder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "APIs",
    icon: api,
  },
  {
    name: "Spring",
    icon: spring,
  },
];

const experiences = [
  {
    title: "Webmaster",
    company_name: "Nespresso",
    icon: nespresso,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Designed and maintained the company's website",
      "Created and implemented marketing strategies to drive traffic and increase sales",
      "Managed customer relationships through a CRM system",
      "Developed and customized the website using JavaScript, CSS, and HTML",
      "Implemented responsive design and web development best practices to enhance the user experience",
      "Collaborated with other teams to align the website and e-commerce platform with overall business objectives",
      "Contributed to the growth and success of the brand through effective e-commerce and marketing strategies",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Kaba",
    description:
      "Web app for hiring electricians, house cleaners, plumbers,etc; like the Uber for domestic services, in an instant. Either you can be a Client or a Worker, or both! Earn money with any skill you have in Kaba.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postresql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: kaba,
    source_code_link: "https://github.com/tadeogavensky/kaba",
    live: "https://kaba-livid.vercel.app/",
  },
  {
    name: "Infinit",
    description:
      "Web-based e-commerce platform, for exploring and renting luxury cars. Feautures like looking by city, range of dates, booking, log in and sign up, manager dashboard, etc.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: infinit,
    source_code_link: "https://github.com/tadeogavensky/infinit-ecommerce",
    live: "https://infinit-ecommerce.vercel.app/",
  },
  {
    name: "Tech Project",
    description:
      "This a fully responsive web made with React, Tailwind and Framer showcasing Apple products.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer",
        color: "blue-text-gradient",
      },
    ],
    image: tech,
    source_code_link: "https://github.com/tadeogavensky/tech-project",
    live: "https://tech-project-theta.vercel.app/",
  },
  {
    name: "Loopify",
    description:
      "Web-based e-commerce platform, for exploring and buying music products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: loopify,
    source_code_link: "https://github.com/tadeogavensky/loopify-next",
    live: "https://loopify-next-mu3w.vercel.app/",
  },
  {
    name: "Dentist Dashboard ",
    description:
      "A dashboard of dentists fetched by an API using Axios for viewing each dentist in a card grid, with possibility to see the detail of one dentist and also you can add multiple to favorites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "reducer",
        color: "blue-text-gradient",
      },
    ],
    image: dentists,
    source_code_link:
      "https://github.com/tadeogavensky/fe3-final-tadeog-felipev",
    live: "https://fe3-final-tadeog-felipev.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

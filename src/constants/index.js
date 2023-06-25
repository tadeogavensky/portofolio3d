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
  planex,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    name: "PlaneX",
    description:
      "Web application that enables users create plans in a quick motion, view them, and also roll a random one for more fun!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: planex,
    source_code_link: "https://github.com/tadeogavensky/planex",
    live: "https://github.com/tadeogavensky/planex",
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
  {
    name: "Real Time CPU Dashboard ",
    description:
      "A dashboard to watch live your CPU usage, cores, total memory RAM and free space.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: cpu,
    source_code_link: "https://github.com/tadeogavensky/RealTimeCPU",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  c,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  bootstrap,
  vite,
  sass,
  sgbauLogo,
  shivajiCollegeLogo,
  holyCrossLogo,
  solarSystem,
  libraryManagement,
  chefPhoenix,
  teenDog,
  travelJournal,
  amazonBestSeller,
  keepNote,
  passwordGenerator,
  Github,
  linkedIn,
  twitter,
} from "../assets";

export const myLinks = [
  {
    name: "GitHub",
    logo: Github,
    link: "https://github.com/AishwaryaGhatole",
  },
  {
    name: "LinkedIn",
    logo: linkedIn,
    link: "https://www.linkedin.com/in/aishwarya-ghatole-303295246/",
  },
  {
    name: "Twitter",
    logo: twitter,
    link: "https://x.com/Phoenix_AI___01?t=_pHHghAxUvAW-bnSr2cXpw&s=03",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
    sound: sound1,
  },
  {
    id: "education",
    title: "education",
    sound: sound2,
  },
  {
    id: "skills",
    title: "Skills",
    sound: sound3,
  },
  {
    id: "project",
    title: "Projects ",
    sound: sound4,
  },
  {
    id: "contact",
    title: "Contact",
    sound: sound5,
  },
];

export const technologies = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { id: 4, name: "React JS", icon: reactjs, link: "https://react.dev/" },
  { id: 5, name: "Vite", icon: vite, link: "https://vite.dev/" },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/",
  },
  { id: 7, name: "Sass", icon: sass, link: "https://sass-lang.com/" },
  {
    id: 8,
    name: "Bootstrap",
    icon: bootstrap,
    link: "https://getbootstrap.com/",
  },
  { id: 9, name: "Node JS", icon: nodejs, link: "https://nodejs.org/en" },
  { id: 10, name: "Git", icon: git, link: "https://git-scm.com/" },
  {
    id: 11,
    name: "C",
    icon: c,
    link: "https://www.geeksforgeeks.org/c-language-introduction/",
  },
];

export const qualifications = [
  {
    title: "SGBAU, Maharashtra.",
    schoolOrCollege: "Civil Engineering - 4th Year",
    icon: sgbauLogo,
    iconBg: "#161329",
    date: "Sep 2022 - Nov 2026",
    points: [
      "Anchoring Committee Head (Year 2024-25)",
      "Anchoring Committee Member (Year 2023-24)",
    ],
  },
  {
    title: "Shivaji Multipurpose Junior College, Amravati, Maharashtra.",
    schoolOrCollege: "Standard 11th & 12th",
    icon: shivajiCollegeLogo,
    iconBg: "#161329",
    date: "May 2020 - Sep 2022",
    points: [],
  },
  {
    title: "Holy Cross High School, Amravati, Maharashtra.",
    schoolOrCollege: "Standard 10th",
    icon: holyCrossLogo,
    iconBg: "#161329",
    date: "June 2019 - July 2020",
    points: [],
  },
];

export const projects = [
  {
    name: "3D Solar System",
    description:
      "An interactive 3D Solar System built with Three.js, featuring realistic planets, controllable orbits, and hover-based planet labels to visualize planetary motion.",
    tags: [
      { name: "ThreeJS", color: "pink-text-gradient" },
      { name: "WebGL", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "NodeJS", color: "blue-text-gradient" },
      { name: "Vercel", color: "green-text-gradient" },
    ],
    image: solarSystem,
    source_code_link: "https://solar-system-ecru-xi.vercel.app/",
  },
  {
    name: "Chef Phoenix",
    description:
      "Chef Phoenix is an intelligent recipe suggestion app built with React and Vite. It uses Hugging Face language models to provide smart, context-aware culinary recommendations based on the ingredients users input.",
    tags: [
      { name: "reactJS", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "huggingfaceAI", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "git", color: "green-text-gradient" },
    ],
    image: chefPhoenix,
    source_code_link: "https://github.com/AishwaryaGhatole/chef-app",
  },
  {
    name: "Library Management",
    description:
      "Built a dashboard-based Library Management System using Next.js and Sass, with reusable components, a data-driven UI, and modular SCSS styling, gaining hands-on experience with the Next.js App Router and scalable frontend architecture.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Sass", color: "green-text-gradient" },
      { name: "Vercel", color: "pink-text-gradient" },
      { name: "git", color: "green-text-gradient" },
    ],
    image: libraryManagement,
    source_code_link: "https://library-management-system-ebon-two.vercel.app/",
  },
  {
    name: "TeenDog",
    description:
      "The place where our Dogs could finally find their true Love. A Dating Site for your Four-legged Furry Friend.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "BootStrap", color: "pink-text-gradient" },
    ],
    image: teenDog,
    source_code_link: "https://aishwaryaghatole.github.io/TeenDog/",
  },
  {
    name: "My Travel Journal",
    description:
      "A travel journal web page showcasing visited places, built with React and Vite. It features dynamic content rendering and a clean design.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],

    image: travelJournal,
    source_code_link: "https://aishwaryaghatole.github.io/my-travel-journal/",
  },
  {
    name: "Amazon Best Seller Page",
    description:
      "A sleek React.js mini app replicating Amazon’s Best Sellers page, built with HTML, CSS, and Tailwind to showcase clean UI and responsive design.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: amazonBestSeller,
    source_code_link:
      "https://app.netlify.com/projects/amazon-best-seller-dresses/overview",
  },
  {
    name: "Keep Note",
    description:
      "A simple note-taking app built with HTML, CSS, and JavaScript for quick and organized note management.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: keepNote,
    source_code_link: "hhttps://aishwaryaghatole.github.io/keep-note/",
  },
  {
    name: "Password Generator",
    description:
      "A simple JS-based tool to generate strong, customizable passwords on the fly.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],

    image: passwordGenerator,
    source_code_link: "https://aishwaryaghatole.github.io/Password-generator/",
  },
];

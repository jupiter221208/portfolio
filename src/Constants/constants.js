/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: constants.js
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faFigma,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "Hello! I'm William, a full stack developer based in Malaysia. I have a strong passion for the technologies related to QA and AI.",
    "Ambitious and knowledgeable front-end developer with expertise in web and app development, specializing in clean, efficient code. Proficient in MongoDB, Express.js, Nest.js, React.js, Node.js, Next.js, MySQL, HTML5, and CSS3, with added experience in blockchain, including Solidity, wallet integration, and NFT marketplaces. Skilled in creating responsive designs for micro-sites, landing pages, and templates, I am driven to exceed expectations and support client success through innovative solutions and troubleshooting. Eager to contribute my technical and interpersonal skills to a dynamic team.",
    "Outside of my regular activities, I'm a football enthusiast, chess player, and a dog lover.",
    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Hulk Cars",
    description:
      "I built this project using React. Hulk Cars offers car rental services, likely with a focus on integrating blockchain technology for vehicle tokenization. This approach may allow fractional ownership or secure transactions involving car assets.",
    image: portfolio1,
    demo_link: "https://hulkcars.com/",
  },
  // {
  //   name: "Sigma Beauty",
  //   description:
  //     "This project implements Connect Four in Python and Pygame, featuring a GUI and gameplay modes for player vs. AI and AI vs. AI. The AI uses the MiniMax algorithm, with optional alpha-beta pruning for improved performance.",
  //   image: portfolio2,
  //   demo_link: "https://sigmabeauty.com/",
  // },
  {
    name: "Scribble",
    description:
      "I built this project using React. Scribble Together offers a collaborative online whiteboard, ideal for remote tutoring, meetings, and shared note-taking. It supports handwriting, diagram drawing, PDF markup, and works well with iPads and Apple Pencils.",
    image: portfolio3,
    demo_link: "https://scribbletogether.com/",
  },
  {
    name: "Will BE",
    description:
      "I built this project using Laravel Framework. Will-BE is a Japanese real estate agency specializing in rentals and condominium sales in Tokyo areas like Meguro, Setagaya, and Shibuya. They provide comprehensive property listings, area insights, and services for both renters and property owners.",
    image: portfolio4,
    demo_link: "https://will-be.co.jp/",
  },
  {
    name: "Olive Spa",
    description:
      "I built this project using React Framework and Wordpress CMS. Olive Spa provides luxurious, private spa rooms inspired by Asian aesthetics, offering treatments like aromatherapy, healing stretches, and exclusive services in volcanic 'magma rooms.'",
    image: portfolio5,
    demo_link: "https://www.olivespa.co.jp/",
  },
  {
    name: "Qoo10",
    description:
      "I built this project using React. Qoo10 is a popular online marketplace in Japan, offering a wide range of products including electronics, fashion, home goods, and more. Their platform allows for easy browsing and includes daily deals and promotions across various categories.",
    image: portfolio6,
    demo_link: "https://www.qoo10.jp/",
  },
  {
    name: "Kryptomon",
    description:
      "I built this project using React. Kryptomon combines digital pet care with collectible RPG mechanics, where players raise, battle, and breed unique creatures known as Kryptomons. Using blockchain, it allows full ownership and trading of in-game assets, creating an open economy.",
    image: portfolio7,
    demo_link: "https://www.kryptomon.co/",
  },
  {
    name: "Casino Game Alphapuesta",
    description:
      "I built this project using React. Alphapuesta is an online betting platform that offers a variety of gambling options, including sports betting, casino games, and live betting. The site provides a user-friendly interface, promotions, and a secure environment for users to place bets.",
    image: portfolio8,
    demo_link: "https://alphapuesta.net/",
  },
  {
    name: "Casino Game Vivaslots",
    description:
      "I built this project using React. Viva Slots is an online casino platform in South Africa that offers a variety of slot games, table games, and live dealer experiences. The site emphasizes a user-friendly interface, promotional offers, and secure payment options.",
    image: portfolio9,
    demo_link: "https://vivaslots.co.za/",
  },
  {
    name: "Casino Game Superslots",
    description:
      "I built this project using React. Super Slots is an online casino that offers a wide range of games, including slots, table games, and live dealer options. The site features various promotions and bonuses for new and existing players, emphasizing a user-friendly experience.",
    image: portfolio10,
    demo_link: "https://www.superslots.ag/",
  },
  {
    name: "Fjällräven",
    description:
      "I built this project using React. Fjällräven is a Swedish outdoor brand known for its durable, functional, and eco-friendly products, including backpacks, clothing, and accessories. The company emphasizes sustainability, using materials like organic cotton and recycled polyester.",
    image: portfolio11,
    demo_link: "https://www.fjallraven.com/",
  },
  {
    name: "SWOM",
    description:
      "SWOM is a home-swapping platform that allows users to exchange their homes with other travelers for free, promoting cultural exchange without the hassle of rental fees. The community includes members from various locations, providing opportunities for unique travel experiences.",
    image: portfolio12,
    demo_link: "https://swom.travel/home",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "neo",
    title: "Neo4j",
    icon: neoIcon,
    description:
      "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  },
  {
    id: "raspi",
    title: "Raspberry Pi",
    icon: raspIcon,
    description:
      "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };

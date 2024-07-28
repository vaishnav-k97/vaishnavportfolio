
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import git from '../assets/git.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/link.png'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'
import mysql from '../assets/mysql.png'
import salesforce from '../assets/salesforce.png'
import node from '../assets/node.png'

export const navItems = [
  { image: git, href: "https://github.com/vaishnav-k97", className: "git-icon", label: "GitHub" },
  { image: linkedin, href: "https://www.linkedin.com/in/vaishnav-k-13079017b/", className: "linkedin-icon", label: "LinkedIn" },
  { image: insta, href: "https://www.instagram.com/mr___vysh?igsh=b2htY3lrM3E5azN5", className: "insta-icon", label: "Instagram" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: html,
    text: "HTML5",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: css,
    text: "CSS3",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: javascript,
    text: "JavaScript",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: react,
    text: "ReactJs",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: tailwind,
    text: "TailwindCSS",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: typescript,
    text: "TypeScript",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
  {
    icon: mysql,
    text: "My SQL",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: salesforce,
    text: "Salesforce",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: node,
    text: "Node",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const experience = [
    {
      title: "Edstem Technologies",
      description:
        "Software Engineer",
      duration: "02/06/2022 - 29/02/2024",
    },
  ];

  export const projects = [
    {
      title: "Mattsco supply (US) - Quotation management web app",
      description:
        "As a UI Developer, I spearheaded a dynamic project that encompassed the development of responsive UIs for email composition, invoice creation, and buy/sell operations. I integrated APIs for efficient data exchange, ensuring seamless functionality across these components. Utilizing React Styled Components, I focused on modular, maintainable code and implemented reusable components to reduce development time and ensure scalability. My efforts prioritized responsive UI design to provide optimal user experiences across devices while ensuring logical API integrations to enhance data flow between components. Key accomplishments include contributing to robust and responsive interfaces for email, invoice, and buy/sell functionalities, and successfully implementing logical API integrations to improve overall system efficiency.",
      duration: "02/06/2022 - 29/02/2024",
    },
  ];

  export const education = [
    {
      title: "Btech in computer science and engineering",
      description:
        "Kerala technological university",
      duration: "2019",
    },
    {
      title: "Plus Two",
      description:
        "IHRD THSS, Thiruthiyad",
      duration: "2015",
    },
    {
      title: "Tenth",
      description:
        "veda vyasa vidyalayam, malaparamba",
      duration: "2013",
    },
  ];

  export const projects2 = [
    {
      title: "Woodside Design Portal (Telstra, Australia)",
      description:
        "Successfully developed a web application with a robust Content Management System (CMS) to handle data management and facilitate the creation, management, and updating of content in the front end. Implemented reusable components, reducing development time and improving code maintainability. Worked with the ReactJS stack and utilized styled-components as the styling base to create visually appealing and responsive user interfaces.",
      duration: "2019",
    },
    {
      title: "OneDoorWay (Australia)",
      description:
        "Developed and maintained a website for managing purpose-built specialist accommodation facilities, catering to individuals with high support and complex care needs. Implemented client details management, including family information, therapy details, NDIS support, budget, and transport information. Created a user-friendly interface for support workers to enter daily reports, allowing them to log activities, observations, and progress. Utilized the ReactJS stack with styled-components as the styling base, ensuring a responsive and visually appealing user interface. Implemented reusable components to enhance code reusability and maintainability. Conducted unit testing and implemented test cases to ensure the reliability and stability of the website.",
      duration: "2015",
    },
    {
      title: "Bloom Console (Edstem Technologies)",
      description:
        "Developed an internal project for the HR team, consisting of various features including employee onboarding, employee management, project management, timesheet entry, leave management, and tech desk. Implemented a micro-frontend architecture using the qiankun library. Designed and developed the employee management feature as a standalone micro-frontend application, allowing HR to view and manage employee details, including onboarding new employees. Utilized ReactJS for front-end development, ensuring a responsive and intuitive user interface. Deployed the application to AWS and leveraged the AWS S3 bucket to securely store uploaded documents.",
      duration: "2013",
    },
  ];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
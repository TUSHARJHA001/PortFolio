export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#hero",
  },
  {
    id: 2,
    name: "About me",
    href: "#aboutme",
  },
  {
    id: 3,
    name: "Education",
    href: "#education",
  },
  {
    id: 4,
    name: "TechStack",
    href: "#techstack",
  },
  {
    id: 5,
    name: "Projects",
    href: "#projects",
  },
];

import { FaGithub } from "react-icons/fa";

export const Projects = [
  {
    tid: 1,
    name: "Blog Platform",
    description:
      "A full-stack blog application with complete user authentication and rich content management system.",
    subdesc:
      "Built with React, React Router, Tailwind CSS, Framer Motion, and Appwrite backend. Features include: User authentication (login/logout/signup), image uploads, post creation with titles/slugs, rich text editing with TipTap editor, form handling with React Hook Form, notifications via Toastify, and CORS-enabled API integration. The platform uses HTML parsing for content rendering and React Icons for UI consistency.",
    href: "https://github.com/TUSHARJHA001/React_Projects/tree/main/src/Components/Blog",
    image: "/Portfolio/assets/Blog.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#61DAFB",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "React Router" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "Appwrite" },
      { id: 6, name: "TipTap Editor" },
      { id: 7, name: "React Hook Form" },
      { id: 8, name: "Toastify" },
      { id: 9, name: "HTML Parser" },
      { id: 10, name: "React Icons" },
      { id: 11, name: "CORS" },
    ],
  },
  {
    tid: 2,
    name: "Portfolio Website",
    description:
      "An advanced portfolio showcasing 3D elements and smooth animations with interactive design.",
    subdesc:
      "Developed using React, Spline for 3D assets, Three.js for 3D rendering, and enhanced with Framer Motion animations. Features include: Embla Carousel for project showcases, React Tilt for interactive elements, Tailwind CSS for responsive design, and React Icons for consistent iconography. The portfolio demonstrates modern web techniques with optimized performance.",
    href: "https://github.com/TUSHARJHA001/PortFolio",
    image: "/Portfolio/assets/Portfliosite.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#38BDF8",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Spline" },
      { id: 3, name: "Three.js" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "Embla Carousel" },
      { id: 6, name: "React Tilt" },
      { id: 7, name: "TailwindCSS" },
      { id: 8, name: "React Icons" },
    ],
  },
  {
    tid: 3,
    name: "Weather App",
    description:
      "A dynamic and user-friendly weather application that provides real-time weather updates. It enables users to check current weather conditions based on their location or search for any city worldwide.",
    subdesc:
      "Built with HTML, Tailwind CSS, JavaScript, GSAP, and OpenWeather API, the Weather App delivers a smooth UI experience with animated transitions and real-time data fetching.",
    href: "https://github.com/TUSHARJHA001/HTML-CSS-JS-minipro/tree/main/WeatherApp",
    image: "/Portfolio/assets/Weather.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#2563EB",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "OpenWeather API" },
    ],
  },
  {
    tid: 8,
    name: "ToDo App",
    description:
      "A simple yet powerful ToDo application with full CRUD operations and localStorage support.",
    subdesc:
      "Built using React.js and Tailwind CSS. It features a context-based state management system with `useContext`, persistent state through `localStorage`, and componentized architecture including form handling, item rendering, and inline editing with visual feedback. Users can add, edit, delete, and mark tasks as complete. The app provides a clean, responsive UI with conditional rendering for completed tasks and accessibility-focused design.",
    href: "https://github.com/TUSHARJHA001/React_Projects/tree/main/src/Components/ToDo",
    image: "/Portfolio/assets/ToDo.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#F59E0B",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "useContext" },
      { id: 4, name: "localStorage" },
      { id: 5, name: "Component-based" },
    ],
  },
  {
    tid: "5",
    name: "TTS Translate App",
    description:
      "TTS Translate App is an AI-powered tool that enables users to translate text into multiple languages and convert it into speech. It features text-to-speech (TTS) functionality with voice selection.",
    subdesc:
      "Built using HTML, Tailwind CSS, and JavaScript, this app leverages the Web Speech API for text-to-speech synthesis and an external API for language translation.",
    href: "https://github.com/TUSHARJHA001/HTML-CSS-JS-minipro/tree/main/TTS-TranslateApp",
    image: "/Portfolio/assets/Translate.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#475569",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Web Speech API" },
      { id: 4, name: "Translation API" },
    ],
  },
  {
    tid: "6",
    name: "Currency Convertor",
    description:
      "Currency Convertor is a powerful web application that allows users to convert currencies in real-time. With up-to-date exchange rates, users can seamlessly swap between different currencies.",
    subdesc:
      "Built using React.js, Tailwind CSS, and the Exchange Rate API, this application ensures efficiency and ease of use for travelers, traders, and financial analysts.",
    href: "https://github.com/TUSHARJHA001/React_Projects/tree/main/src/Components/CurrencyConvertor",
    image: "/Portfolio/assets/Currenycon.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#10B981",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Exchange Rate API" },
      { id: 4, name: "JavaScript" },
    ],
  },
  {
    tid: "7",
    name: "Honkai Star Rail Pity Calculator",
    description:
      "A powerful probability calculator for Honkai Star Rail gacha pulls. It helps players estimate their chances of obtaining a featured 5★ character based on their current resources.",
    subdesc:
      "Built using React.js and Tailwind CSS, this intuitive tool enables gacha gamers to plan their pulls efficiently by calculating probabilities and tracking their pity progress.",
    href: "https://github.com/TUSHARJHA001/React_Projects/tree/main/src/Components/GachaCalculator",
    image: "/Portfolio/assets/HonkaiCalc.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#22C55E",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Probability Math" },
    ],
  },
  {
    tid: "8",
    name: "Password Generator",
    description:
      "A secure and customizable password generator with QR code functionality. Users can generate strong passwords with options for length, numbers, and special characters.",
    subdesc:
      "Built using React.js, TailwindCSS, GSAP animations, and QRCode support, this tool provides a visually appealing and efficient way to create and copy secure passwords.",
    href: "https://github.com/TUSHARJHA001/React_Projects/tree/main/src/Components/PasswordGenerator",
    image: "/Portfolio/assets/Password.png",
    icon: "FaGithub",
    iconStyle: {
      color: "#10B981",
      fontSize: "2.5rem",
    },
    tags: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "QRCode" },
      { id: 5, name: "JavaScript" },
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    branch: "Information Technology",
    marks: "CGPA (current semester): 8.13 / 10",
    name: "KIET Group of Institutions, Ghaziabad",
    year: "(2022 - 2026)",
    image: "/Portfolio/assets/kiet-group-of-institutions.jpg",
    description:
      "Pursuing B.Tech in Information Technology under Dr. A.P.J. Abdul Kalam Technical University (AKTU). The curriculum is designed to develop both theoretical knowledge and practical skills in core areas such as Data Structures and Algorithms, Operating Systems, Computer Networks, Software Engineering, DBMS, Artificial Intelligence, and Object-Oriented Programming using Java and C++. Specialized electives and certifications include Full Stack Web Development (MERN stack), Machine Learning with Python, and Cloud Computing on AWS and Microsoft Azure. Gained hands-on experience through multiple lab-based assessments and real-time projects including a Chat Application using Firebase and a Weather App using REST APIs. Participated in hackathons, coding challenges (CodeChef, LeetCode), and technical fests like 'InnoWave' and 'TechZest'. Also completed industry-recognized certifications from NPTEL, Coursera, and Google Cloud. Worked collaboratively in Agile environments on GitHub and contributed to open-source repositories.",
  },
  {
    id: 2,
    degree: "12th Grade",
    branch: "Physics, Chemistry, Mathematics (PCM)",
    marks: "Percentage: 84.30%",
    name: "Bishop Conrad Sr. Sec. School",
    year: "2021",
    image: "/Portfolio/assets/bishop.jpg",
    description:
      "Completed senior secondary education under the CBSE board with core subjects in Physics, Chemistry, and Mathematics. Developed strong analytical, logical, and quantitative aptitude. Physics topics included Modern Physics, Optics, Electrostatics, and Mechanics; Chemistry included Thermodynamics, Organic Reaction Mechanisms, and the Periodic Table; Mathematics covered Integral & Differential Calculus, 3D Geometry, and Matrices. Participated in science exhibitions, quiz competitions, and Olympiads (National Science Olympiad and Math Olympiad). Engaged in basic C++ programming and introductory web design courses during this period, which sparked my interest in software development. Actively involved in the school's tech club and completed a school-level project on 'Solar-Powered Smart Irrigation System'.",
  },
  {
    id: 3,
    degree: "10th Grade",
    branch: "As per CBSE",
    marks: "Percentage: 94%",
    name: "Bishop Conrad Sr. Sec. School",
    year: "2019",
    image: "/Portfolio/assets/bishop.jpg",
    description:
      "Completed CBSE 10th Grade with a distinction in Science, Mathematics, and Information Technology. This foundational stage introduced me to core scientific principles, logical problem-solving, and digital literacy. Science included practicals on chemical reactions, electricity, and life processes, while Mathematics focused on Geometry, Algebra, and Trigonometry. Developed early interest in computers through the IT subject which introduced HTML, MS Office, and basic programming logic. Consistently ranked among the top students and was awarded for academic excellence and discipline. Represented the school in inter-house debates, science fairs, and was actively involved in cultural and tech events that shaped my leadership and communication skills.",
  },
];

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
  SiExpress,
  SiRedux,
  SiFramer,
  SiGreensock,
  SiTypescript,
  SiSass,
  SiDocker,
} from "react-icons/si";

export const techStackCategories = [
  {
    category: "Languages",
    items: [
      {
        id: 1,
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 2,
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        link: "https://www.typescriptlang.org/",
      },
      {
        id: 3,
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        link: "https://www.python.org/",
      },
      {
        id: 4,
        name: "Java",
        icon: FaJava,
        color: "#007396",
        link: "https://www.java.com/",
      },
      {
        id: 5,
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      {
        id: 6,
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        link: "https://isocpp.org/",
      },
      {
        id: 7,
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      },
      {
        id: 8,
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        id: 9,
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        link: "https://react.dev/",
      },
      {
        id: 10,
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        link: "https://nodejs.org/",
      },
      {
        id: 11,
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        link: "https://expressjs.com/",
      },
      {
        id: 12,
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#38B2AC",
        link: "https://tailwindcss.com/",
      },
      {
        id: 13,
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#7952B3",
        link: "https://getbootstrap.com/",
      },
    ],
  },
  {
    category: "Libraries",
    items: [
      {
        id: 14,
        name: "GSAP",
        icon: SiGreensock,
        color: "#88CE02",
        link: "https://gsap.com/",
      },
      {
        id: 15,
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
        link: "https://www.framer.com/motion/",
      },
      {
        id: 16,
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        link: "https://redux.js.org/",
      },
      {
        id: 17,
        name: "Sass",
        icon: SiSass,
        color: "#CC6699",
        link: "https://sass-lang.com/",
      },
    ],
  },
  {
    category: "Tools & Databases",
    items: [
      {
        id: 18,
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        link: "https://git-scm.com/",
      },
      {
        id: 19,
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        link: "https://github.com/",
      },
      {
        id: 20,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        link: "https://www.mongodb.com/",
      },
      {
        id: 21,
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        link: "https://www.mysql.com/",
      },
      {
        id: 22,
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        link: "https://www.docker.com/",
      },
    ],
  },
];

import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    color: "#333",
    link: "https://github.com/TUSHARJHA001",
    bgColor: "hover:bg-gray-800",
    borderColor: "border-gray-700",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0077B5",
    link: "https://www.linkedin.com/in/tushar-jha-29786125a/",
    bgColor: "hover:bg-blue-700",
    borderColor: "border-blue-600",
  },
];

export const footerSocialLinks = [
  {
    icon: "FaGithub",
    label: "GitHub",
    href: "https://github.com/TUSHARJHA001",
    color: "hover:text-white",
  },
  {
    icon: "FaLinkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-jha-29786125a/",
    color: "hover:text-blue-500",
  },
  {
    icon: "FaInstagram",
    label: "Instagram",
    href: "https://www.instagram.com/tushar_jha.005",
    color: "hover:text-pink-500",
  },
  {
    icon: "FaTelegram",
    label: "Telegram",
    href: "https://t.me/Tushar_jha003",
    color: "hover:text-sky-500",
  },
  {
    icon: "FaDiscord",
    label: "Discord",
    href: "https://discord.com/users/tusharjha0756",
    color: "hover:text-purple-500",
  },
  {
    icon: "FaEnvelope",
    label: "Email",
    href: "mailto:your.tusharjha55555@gmail.com",
    color: "hover:text-red-500",
  },
];

export const footerLinks = [
  {
    heading: "Sections",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#aboutme" },
      { label: "Education", href: "#education" },
      { label: "Tech Stack", href: "#techstack" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

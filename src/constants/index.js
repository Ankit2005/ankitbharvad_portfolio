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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  expoder,
  topsInfo,
  tecblic,
  carrent,
  jobit,
  tripguide,
  threejs,
  Live_code_editor,
  react_native,
  morden_react_site,
  travel_web_app,
  morden_ui_ux,
  ecomerce_next,
  mern_voice_chat,
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
    title: "Nest.js",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Expoders Solutions",
    icon: expoder,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      " Developed and maintained web applications using React.js, Angular, and other related technologies.",
      " Collaborated with cross-functional teams, including designers and other developers, to create high-quality products.",
      "Implemented responsive design principles and ensured cross-browser compatibility for seamless user experiences.",
      "Actively participated in code reviews, providing constructive feedback to enhance code quality and maintainability.",
    ],
  },
  {
    title: "React.js | Node.js Developer",
    company_name: "Tops Infosolutions",
    icon: topsInfo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained web applications using Node.js and React.js, ensuring high-quality code and efficient performance.",
      "Implemented responsive design principles and utilized CSS frameworks like Bootstrap or Tailwind CSS to create visually appealing and user-friendly interfaces.",
      "Optimized application performance by identifying and addressing bottlenecks, employing techniques such as code optimization, caching, and database query optimization.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tecblic",
    icon: tecblic,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    name: "React Time Code Editor",
    description:
      "The real-time code editor provides a dynamic and interactive environment where multiple developers can work on the same codebase simultaneously",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "mondodb",
        color: "green-text-gradient",
      },
    ],
    image: Live_code_editor,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFTs Market Place",
    description:
      "innovative mobile application brings the world of Non-Fungible Tokens (NFTs) right to your fingertips. Seamlessly built using React Native, this platform offers a user-friendly and secure marketplace for buying, selling, and trading unique digital assets.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
    ],
    image: react_native,
    source_code_link: "https://github.com/",
  },
  {
    name: "Morden (S P A) Site",
    description:
      "Fully responsive web application combines the power of React's dynamic functionality with the flexibility and efficiency of Tailwind CSS. This winning combination ensures a visually stunning and seamless user experience across all devices.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
    ],
    image: morden_react_site,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Adviser",
    description: `Introducing our web application that combines the flexibility of React, the streamlined styling of Tailwind CSS, and the rich functionality of Google Maps

      Our app brings together the best of modern web development and location-based services to provide users with an immersive and personalized travel experience.`,
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "react-google-map",
        color: "pink-text-gradient",
      },
    ],
    image: travel_web_app,
    source_code_link: "https://github.com/",
  },
  {
    name: "Modern UI/UX",
    description:
      "Showcases a sleek and contemporary design that combines the power of React's dynamic functionality with the streamlined styling of Tailwind CSS. With an emphasis on user-centric design principles, we provide an intuitive and visually pleasing interface that delights users from the moment they interact with our application.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
    ],
    image: morden_ui_ux,
    source_code_link: "https://github.com/",
  },

  {
    name: "Ecommerce Web App",
    description:
      "Our app combines the power of Next.js for seamless server-side rendering, Tailwind CSS for streamlined styling, Sanity for efficient content management, and Stripe for secure and reliable payment processing. This dynamic tech stack enables us to deliver a modern and robust e-commerce solution.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecomerce_next,
    source_code_link: "https://github.com/",
  },

  {
    name: "Voice Chat Web App",
    description: `Introducing our revolutionary voice chat web application, built with React.js, Redux, and WebRTC technology. 🎙️🌐

      Our app harnesses the power of React.js for dynamic user interfaces, Redux for efficient state management, and WebRTC for real-time communication. It enables users to engage in seamless voice conversations, fostering collaboration and connectivity like never before.`,
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "webrtc",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: mern_voice_chat,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

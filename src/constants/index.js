import {
  facebook,
  twitter,
  instagram,
  email,
  phone,
  location,
  design,
  engineering,
  management,
  approach,
  expertise,
  partnership,
  results,
} from "../assets/icons";

export const menuItems = [
  {
    label: "Home",
    href: `${import.meta.env.BASE_URL}/`,
  },
  {
    label: "Services",
    href: `${import.meta.env.BASE_URL}/services`,
  },
  {
    label: "Work",
    href: `${import.meta.env.BASE_URL}/work`,
  },
  {
    label: "Process",
    href: `${import.meta.env.BASE_URL}/process`,
  },
  {
    label: "About",
    href: `${import.meta.env.BASE_URL}/about`,
  },
  {
    label: "Careers",
    href: `${import.meta.env.BASE_URL}/careers`,
  },
  {
    label: "Contact",
    href: `${import.meta.env.BASE_URL}/contacts`,
  },
];

export const socialLinks = [
  {
    title: "facebook",
    icon: facebook,
    href: `${import.meta.env.BASE_URL}/`,
  },
  {
    title: "twitter",
    icon: twitter,
    href: `${import.meta.env.BASE_URL}/`,
  },
  {
    title: "instagram",
    icon: instagram,
    href: `${import.meta.env.BASE_URL}/`,
  },
];

export const contacts = [
  {
    icon: email,
    label: "hello@squareup.com",
    type: "email",
  },
  {
    icon: phone,
    label: "+91 91813 23 2309",
    type: "phone",
  },
  {
    icon: location,
    label: "Somewhere in the World",
    type: "address",
  },
];

export const companies = [
  "zapier",
  "spotify",
  "zoom",
  "slack",
  "amazon",
  "adobe",
];

export const services = [
  {
    icon: design,
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
  },
  {
    icon: engineering,
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
  },
  {
    icon: management,
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
  },
];

export const choiceReasons = [
  {
    icon: expertise,
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: approach,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    icon: results,
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: partnership,
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

export const reviews = [
  {
    title: "SquareUp has been Instrumental in Transforming our Online Presence",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    author: {
      imgSrc: "1",
      name: "John Smith",
      ocupation: "CEO of Chic Boutique",
      href: "#",
    },
  },
  {
    title: "Working with SquareUp was a breeze",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    author: {
      imgSrc: "2",
      name: "Sarah Johnson",
      ocupation: "Founder of HungryBites",
      href: "#",
    },
  },
  {
    title:
      "SquareUp developed a comprehensive booking and reservation system for our event management company",
    text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    author: {
      imgSrc: "3",
      name: "Mark Thompson",
      ocupation: "CEO of EventMasters",
      href: "#",
    },
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    author: {
      imgSrc: "4",
      name: "Laura Adams",
      ocupation: "CEO of ProTech Solutions",
      href: "#",
    },
  },
  {
    title:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    author: {
      imgSrc: "5",
      name: "Michael Anderson",
      ocupation: "Founder of Dream Homes Realty",
      href: "#",
    },
  },
  {
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans",
    text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    author: {
      imgSrc: "6",
      name: "Emily Turner",
      ocupation: "CEO of FitLife Tracker",
      href: "#",
    },
  },
];

export const faq = [
  {
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How can SquareUp help my business?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "Can you work with existing design or development frameworks?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How involved will I be in the project development process?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "What industries does SquareUp work with?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How long does it take to complete a project with SquareUp?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
];

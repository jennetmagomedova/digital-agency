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
} from "../assets/icons";

export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Process",
    href: "/process",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const socialLinks = [
  {
    title: "facebook",
    icon: facebook,
    href: "/",
  },
  {
    title: "twitter",
    icon: twitter,
    href: "/",
  },
  {
    title: "instagram",
    icon: instagram,
    href: "/",
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

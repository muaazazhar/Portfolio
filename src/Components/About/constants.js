import { getExperience } from "./getExperience";

const { years, months } = getExperience();

const text_array = [
  `Welcome to my portfolio! I am Muaaz Azhar, a software engineer with ${years} years and ${months} months of professional experience`,
  "I build full-stack applications with NestJS, ReactJS, Python FastAPI, PostgreSQL, MySQL, and MongoDB",
  "My work includes scalable inventory systems, social media platforms, and statistics-driven data analysis applications",
  "At Codebricks, I worked on a FastAPI-based statistics platform and implemented ANOVA, Principal Component Analysis, and Tukey's HSD",
  "At I2C, I contributed to Struts-based enterprise applications, responsive frontend components, and backend API integrations",
  "At Gigalabs, I helped build an inventory management system with NestJS, ReactJS, Redux, and PostgreSQL",
  "I focus on clean architecture, reusable components, performance optimization, and practical problem solving",
  "I enjoy working with teams to turn business requirements into reliable software products that are easy to maintain",
];

const about_text = text_array.join(". ");

export { about_text };

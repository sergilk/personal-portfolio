export const projects = [
  {
    id: 1,
    name: "Portfolio",
    img: "./assets/projects/portfolio.webp",
    repoLink: "https://github.com/sergilk/personal-portfolio",
    demoLink: "https://sergilk.github.io/personal-portfolio/",
    descr:
      "A modern, minimalistic personal portfolio built to showcase completed projects and skills. The design is responsive, and it supports full customization, allowing you to easily adjust the style to suit your needs. The primary goal of the project is to practice building applications using modern technologies such as TailwindCSS v4 and React.js",
    techs: ["React.js", "TailwindCSS", "Vite"],
  },
];

const level = {
  rookie: "rookie", // learning basics
  beginner: "beginner", // understanding basic concepts
  intermediate: "intermediate", // implementing basic concepts in practice
  advanced: "advanced", // solid knowledge, understanding the mechanics
};

export const techList = [
  {
    name: "HTML",
    icon: "html",
    config: { level: level.advanced, show: true },
  },
  {
    name: "CSS",
    icon: "css",
    config: { level: level.advanced, show: true },
  },
  {
    name: "SASS",
    icon: "sass",
    config: { level: level.intermediate, show: true },
  },
  {
    name: "JavaScript",
    icon: "javascript",
    config: { level: level.intermediate, show: true },
  },
  {
    name: "React.js",
    icon: "reactjs",
    config: { level: level.beginner, show: true },
  },
  {
    name: "TailwindCSS",
    icon: "tailwindcss",
    config: { level: level.intermediate, show: true },
  },
  {
    name: "Git",
    icon: "git",
    config: { level: level.beginner, show: true },
  },
  {
    name: "GitHub",
    icon: "github",
    config: { level: level.beginner, show: true },
  },
  {
    name: "Vite",
    icon: "vite",
    config: { level: level.intermediate, show: true },
  },
  {
    name: "Vercel",
    icon: "vercel",
    config: { level: level.intermediate, show: true },
  },
  {
    name: "Express.js",
    icon: "express",
    config: { level: level.rookie, show: false },
  },
];

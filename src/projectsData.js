// src/projectsData.js

// Add tags to each project for categorization
export const projects = [
  // {
  //   title: "QR Code Generator",
  //   description: "A full-stack tool that generates and stores QR codes for users.",
  //   liveLink: "#",
  //   repoLink: "#",
  //   tags: ["React", "Node.js", "MongoDB", "Full Stack"]
  // },
    {
    title: "Weather App",
    description: "A clean and simple web app to get real-time weather information for any city.",
    liveLink: "https://t-emit.github.io/weather-website",
    repoLink: "https://github.com/t-emit/weather-website",
    tags: ["HTML", "JS", "CSS"]
  },
  {
    title: "AI UV Tracker",
    description: "Track your tan and monitor UV impact with our smart skin analyzer, built with React, FastAPI, and a custom CNN model.",
    liveLink: "https://ai-uv-tracker-app.vercel.app",
    repoLink: "https://github.com/t-emit/ai-uv-tracker-app",
    tags: ["React","Python", "FastAPI", "Machine Learning"]
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio, built with React, Tailwind CSS, and Framer Motion.",
    liveLink: "https://t-emit.github.io/Portfolio-Website",
    repoLink: "https://github.com/t-emit/Portfolio-Website",
    tags: ["React", "Tailwind CSS"]
  },
  {
    title: "Movies Recommendation App",
    description: "A personalized movie discovery and recommendation web application",
    liveLink: "#",
    repoLink: "https://github.com/t-emit/movie-recommendation-app",
    tags: ["React", "Node.js", "MongoDB", "Full Stack","RestfulAPI"]
  },
  
  // {
  //   title: "E-commerce Backend",
  //   description: "A robust backend system for an online store with product and user management.",
  //   liveLink: "#",
  //   repoLink: "#",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Full Stack"]
  // },
  // Add more projects here...
];

// Get all unique tags from the projects
export const projectTags = ["All", ...new Set(projects.flatMap(p => p.tags))];
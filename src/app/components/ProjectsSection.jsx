"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MegaCart",
    description: "Your go-to electronics eCommerce site for a vast selection of gadgets and tech essentials.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GobindSinghDhanjal/megacart3",
    previewUrl: "https://megacart.pythonanywhere.com/",
    techStack:["HTML","CSS","JavaScript","Django"]
  },
  {
    id: 2,
    title: "RateYourProfessor",
    description: "Share anonymous reviews and ratings of professors to help peers choose their courses.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GobindSinghDhanjal/ryp-frontend",
    previewUrl: "https://www.rateyourprofessor.in/",
    techStack:["HTML","CSS","JavaScript","NextJs","MongoDB","ExpressJs"]
  },
  {
    id: 3,
    title: "My Notes",
    description: "Effortlessly manage notes with My Notes. Create, delete and edit your thoughts with ease.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GobindSinghDhanjal/notes",
    previewUrl: "https://notes-six-taupe.vercel.app/",
    techStack:["HTML","CSS","JavaScript","NextJs"]
  },
  {
    id: 4,
    title: "LocDog",
    description: "Find your furry friend with locdog. A simple, one-page site to locate your dog, built with HTML & CSS.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GobindSinghDhanjal/locdog",
    previewUrl: "https://gobindsinghdhanjal.github.io/locdog/",
    techStack:["HTML","CSS"]
  },{
    id: 5,
    title: "Calculator",
    description: "Effortless calculations with our Next.js calculator. Fast, accurate, and user-friendly.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GobindSinghDhanjal/calculator-light",
    previewUrl: "https://magenta-sherbet-e89a1c.netlify.app/",
    techStack:["HTML","CSS","ReactJs"]
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

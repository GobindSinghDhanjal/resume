"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Django</li>
        <li>ReactJs</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-4">
          Master of Computer Applications (Software Engineering)
          <small className="block text-sm text-gray-400">
            University School of Information, Communication & Technology, GGSIPU
          </small>
        </li>
        <li className="pb-4">
          Bachelor of Computer Applications
          <small className="block text-sm text-gray-400">
            Sri Guru Tegh Bahadur Institute Of Management and Information
            Technology, GGSIPU
          </small>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-4">
          Project Management Fundamentals
          <small className="block text-sm text-gray-400">IBM SkillsBuild</small>
        </li>
        <li className="pb-4">
          AI for India 2.0
          <small className="block text-sm text-gray-400">GUVI</small>
        </li>
        <li className="pb-4">
          Full Stack Development (MERN)
          <small className="block text-sm text-gray-400">Udemy</small>
        </li>
        <li className="pb-4">
          Python with Django
          <small className="block text-sm text-gray-400">Tech Access</small>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <motion.div
        initial="hidden"
        transition={{ ease: "easeOut", duration: 0.6 }}
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
          <Image
            src="/images/about-image.png"
            width={800}
            height={800}
            alt="about image"
            style={{ borderRadius: "20px" }}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, Express, MongoDB, SQL,
              HTML, CSS, and Git. I am a quick learner and I am always looking
              to expand my knowledge and skill set. I am a team player and I am
              excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

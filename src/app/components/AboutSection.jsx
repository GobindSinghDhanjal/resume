"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  ["Building RAG and MCP Servers with Claude", "Coursera"],
  ["Succeed in the Age of AI", "Udemy"],
  ["Google AI Professional", "Coursera"],
  ["Mastering Сursor: From Setup to Real Projects", "Coursera"],
  ["ChatGPT and GPT-4 LLM Guide- Prompt Engineering for Everyone", "Udemy"],
  ["Project Management Fundamentals", "IBM"],
  ["Web Development Fundamentals", "IBM"],
  ["Python for Machine Learning", "Great Learning"],
  ["AI for India 2.0", "HCL GUVI"],
  ["Python", "HCL GUVI"],
  ["Full Stack Development", "Udemy"],
  ["Python with Django", "Tech Access"],
];

const SKILL_GROUPS = [
  { category: "Languages", skills: ["C", "C++", "Java", "JavaScript (ES6+)", "SQL"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Angular", "Redux"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  { category: "CMS & Tools", skills: ["Strapi", "Git", "GitHub"] },
  { category: "Cloud & Deployment", skills: ["AWS", "Vercel", "Netlify"] },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid gap-3 sm:grid-cols-2">
        {SKILL_GROUPS.map(({ category, skills }) => (
          <li key={category} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-sm text-gray-200">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3">
        <li className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">Postgraduate</span>
          <span className="font-semibold text-gray-100">Master of Computer Applications (Software Engineering)</span>
          <small className="mt-1 block text-sm leading-relaxed text-gray-400">
            University School of Information, Communication & Technology, GGSIPU
          </small>
        </li>
        <li className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">Undergraduate</span>
          <span className="font-semibold text-gray-100">Bachelor of Computer Applications</span>
          <small className="mt-1 block text-sm leading-relaxed text-gray-400">
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
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map(([title, platform]) => (
          <li key={`${title}-${platform}`} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-purple-300/30">
            <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400/20 to-cyan-300/10 text-purple-200 ring-1 ring-white/10" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3.75h7l4 4v7.5" />
                <path d="M14 3.75v4h4M7 3.75a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h5" />
                <circle cx="16.5" cy="16" r="3.5" />
                <path d="m14.5 19-.5 3 2.5-1.5 2.5 1.5-.5-3" />
              </svg>
            </span>
            <span className="block font-semibold leading-snug text-gray-100">{title}</span>
            <small className="mt-1 block text-sm text-gray-400">{platform}</small>
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const handleTabChange = (id) => {
    setTab(id);
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
        <div className="md:grid md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16">
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
            <div className="mt-8 inline-flex max-w-full flex-wrap gap-1 rounded-xl p-1" role="tablist" aria-label="About information">
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
            <motion.div
              key={tab}
              className="mt-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

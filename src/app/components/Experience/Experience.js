"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import styles from "./Experience.module.css";

/* ------------------------------------------------------------------ */
/*  DATA — edit here only                                              */
/*  Dates use "YYYY-MM". Use end: null for the current role.           */
/* ------------------------------------------------------------------ */
const EXPERIENCE = [
  {
    company: "To The New Pvt. Ltd.",
    location: "Noida, India",
    roles: [
      {
        title: "Software Engineer",
        start: "2025-07",
        end: null,
        type: "Full-time",
        points: [
          "Engineering scalable enterprise-grade web applications using Next.js, Redux, and Strapi within a high-performance production environment.",
          "Architected dynamic form workflows and reusable component systems, reducing development effort by ~35% and improving code maintainability.",
          "Optimized application performance using SSR and SSG strategies in Next.js, improving Lighthouse scores by ~30% and reducing page load time by ~25%.",
          "Delivered production-grade features, critical bug fixes, and UI enhancements while collaborating with cross-functional teams including QA, backend engineers, designers, and clients in agile sprints.",
          "Integrated and consumed RESTful APIs to build scalable, SEO-friendly, and responsive user interfaces for enterprise-level applications.",
        ],
        skills: ["Next.js", "Redux", "Strapi", "SSR / SSG", "REST APIs"],
      },
      {
        title: "Software Developer Trainee",
        start: "2025-01",
        end: "2025-07",
        type: "Trainee",
        points: [
          "Completed hands-on full-stack training in React, Next.js, Express.js, PostgreSQL, and AWS through real-world development assignments and backend API implementations.",
          "Built responsive frontend interfaces and RESTful APIs while collaborating with senior developers on production-level code and application workflows.",
          "Contributed to a live client project by supporting feature development, debugging, and performance optimization, improving overall application efficiency by ~15%.",
        ],
        skills: ["React", "Next.js", "Express.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  {
    company: "Jogaz Info Pvt. Ltd.",
    location: "Delhi, India",
    roles: [
      {
        title: "Frontend Developer Intern",
        start: "2024-07",
        end: "2025-01",
        type: "Internship",
        points: [
          "Developed scalable and reusable UI components using Angular, streamlining frontend development and improving component reusability across modules.",
          "Optimized frontend rendering and responsive layouts, enhancing application performance and delivering a seamless cross-device user experience.",
          "Contributed to production-level feature development, frontend integrations, and UI enhancements while collaborating closely with senior developers in an agile environment.",
        ],
        skills: ["Angular", "TypeScript", "Responsive UI"],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers (pure, no client JS needed)                                */
/* ------------------------------------------------------------------ */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const parse = (ym) => {
  const [y, m] = ym.split("-").map(Number);
  return { y, m: m - 1 };
};

const formatDate = (ym) => {
  if (!ym) return "Present";
  const { y, m } = parse(ym);
  return `${MONTHS[m]} ${y}`;
};

// LinkedIn-style: counts both the start and end month
const monthsBetween = (start, end) => {
  const s = parse(start);
  const now = new Date();
  const e = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() };
  return (e.y - s.y) * 12 + (e.m - s.m);
};

const formatDuration = (total) => {
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
};

const companyTenure = (roles) => {
  const starts = roles.map((r) => r.start).sort();
  const hasCurrent = roles.some((r) => !r.end);
  const ends = roles
    .filter((r) => r.end)
    .map((r) => r.end)
    .sort();
  const start = starts[0];
  const end = hasCurrent ? null : ends[ends.length - 1];
  return formatDuration(monthsBetween(start, end));
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Experience() {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className={styles.container}>
        <h2 id="experience-title" className={styles.heading}>
          Experience
        </h2>

        <ul className={styles.companies} ref={listRef}>
          {EXPERIENCE.map((job) => (
            <motion.li
              key={job.company}
              className={styles.company}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.65,
                delay: prefersReducedMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.shapeOne} aria-hidden="true" />
              <span className={styles.shapeTwo} aria-hidden="true" />
              <header className={styles.companyHead}>
                <h3 className={styles.companyName}>{job.company}</h3>
                <p className={styles.companyMeta}>
                  {companyTenure(job.roles)} &middot; {job.location}
                </p>
              </header>

              <ol className={styles.roles}>
                {job.roles.map((role) => {
                  const current = !role.end;
                  return (
                    <li key={role.title + role.start} className={styles.role}>
                      <span
                        className={`${styles.dot} ${current ? styles.dotCurrent : ""}`}
                        aria-hidden="true"
                      />

                      <div className={styles.roleHead}>
                        <h4 className={styles.roleTitle}>{role.title}</h4>
                        {current && (
                          <span className={styles.badge}>Current</span>
                        )}
                      </div>

                      <p className={styles.roleMeta}>
                        <time dateTime={role.start}>
                          {formatDate(role.start)}
                        </time>
                        {" – "}
                        {role.end ? (
                          <time dateTime={role.end}>
                            {formatDate(role.end)}
                          </time>
                        ) : (
                          "Present"
                        )}
                        {" · "}
                        {formatDuration(monthsBetween(role.start, role.end))}
                        {" · "}
                        {role.type}
                      </p>

                      <ul className={styles.points}>
                        {role.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>

                      <ul className={styles.skills} aria-label="Skills used">
                        {role.skills.map((s) => (
                          <li key={s} className={styles.skill}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

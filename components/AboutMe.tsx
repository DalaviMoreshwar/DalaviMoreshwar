"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <SectionTitle title="About Me" />

      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p>
          I&apos;m a passionate software developer with over 8 years of
          experience building web applications that solve real-world problems.
          My journey started with AngularJS and PHP, and has evolved through the
          modern JavaScript ecosystem — React, TypeScript, Node.js, and
          cloud-native technologies.
        </p>
        <p>
          I believe in writing clean, maintainable code and approaching every
          challenge with a problem-solving mindset. Whether it&apos;s
          architecting a complex frontend state management system, optimizing
          database queries, or designing intuitive user interfaces, I focus on
          delivering solutions that are both robust and elegant.
        </p>
        <p>
          Currently working at Capgemini as a Senior Consultant, I&apos;ve had
          the opportunity to contribute to large-scale projects for clients like
          BMW Group and Mercedes-Benz, building enterprise-grade applications
          that handle millions of data points. My goal is to continue pushing
          the boundaries of web development while mentoring the next generation
          of developers.
        </p>
      </div>
    </motion.section>
  );
}

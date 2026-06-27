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

      <div className="space-y-4 text-[15px] tracking-wide text-zinc-600 dark:text-zinc-300 leading-relaxed">
        <p>
          I deliver business values through intuitive user experiences and
          scalable application solutions. By combining strong frontend expertise
          with business understanding, I help teams build reliable products,
          solve complex problems, and drive successful project outcomes.
        </p>
        <p>
          Currently working at Capgemini as a [ Senior Consultant | Application
          Developer ], I&apos;ve had the opportunity to contribute to
          large-scale projects for clients like BMW Group and Mercedes-Benz,
          building enterprise-grade applications that handle millions of data
          points.
        </p>
        <p>
          I strive to foster continuous learning, empower teams through
          knowledge sharing, and deliver high-quality solutions with measurable
          business impact.
        </p>
      </div>
    </motion.section>
  );
}

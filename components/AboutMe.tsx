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
      {/* <SectionTitle title="About Me" /> */}

      <div className="mt-30 space-y-5 text-[18px] tracking-wide text-zinc-500 leading-relaxed">
        <p>
          I enjoy turning complex problems into simple, intuitive digital
          experiences. With strong frontend expertise and a business-first
          mindset, I build scalable applications that deliver real value.
        </p>
        <p>
          As a Senior Consultant – Application Developer at Capgemini, I’ve
          worked on enterprise-grade solutions for clients like BMW Group and
          Mercedes-Benz, managing large-scale data and critical systems.
        </p>
        <p>
          I’m driven by continuous learning, knowledge sharing, and delivering
          high-quality work that creates meaningful impact.
        </p>
      </div>
    </motion.section>
  );
}

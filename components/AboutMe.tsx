"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImg from "./../public/planet.jpg";
import Image from "next/image";

const sectionDetails = {
  image: bgImg,
  text: "I enjoy turning complex problems into simple, intuitive digital experiences. With strong frontend expertise and a business-first mindset, I build scalable applications that deliver real value.",
};

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Modern SaaS-like subtle parallax layers
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative h-[120vh] overflow-hidden bg-linear-to-b from-neutral-950 via-neutral-900 to-black text-white"
    >
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          <span className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal">
            About me,
          </span>
          <div className="block xs:text-lg sm:text-2xl md:text-5xl ">
            Building scalable products with
          </div>
          <span className="inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-rose-700 bg-clip-text  text-transparent leading-tight">
            meaningful user experiences.
          </span>
        </motion.h2>

        {/* <motion.p
          style={{ y: yText, opacity }}
          className="mt-3 max-w-2xl text-neutral-300 text-xl"
        >
          I combine strong frontend expertise with business understanding to
          design applications that solve complex problems and deliver real
          value.
        </motion.p> */}

        {/* Floating Cards (Parallax Depth) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Scalable Systems",
              desc: "With strong frontend expertise and a business-first mindset, I build scalable applications that deliver real value.",
            },
            {
              title: "User-Centric Design",
              desc: "I’m driven by continuous learning, knowledge sharing, and delivering high-quality work that creates meaningful impact.",
            },
            {
              title: "Business Impact",
              desc: "I’ve worked on enterprise-grade solutions for clients like BMW Group and Mercedes-Benz, managing large-scale data and critical systems.",
            },
          ].map(({ title, desc }, i) => (
            <motion.div
              key={i}
              className="p-6 rounded bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-2 text-md text-neutral-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    // <motion.section
    //   id="about"
    //   initial={{ opacity: 0, y: 35 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.8 }}
    //   className="space-y-6"
    // >
    //   {/* <SectionTitle title="About Me" /> */}

    //   <div className="mt-30 space-y-5 text-[18px] tracking-wide text-zinc-500 leading-relaxed">
    //     <p>
    //       I enjoy turning complex problems into simple, intuitive digital
    //       experiences. With strong frontend expertise and a business-first
    //       mindset, I build scalable applications that deliver real value.
    //     </p>
    //     <p>
    //       As a Senior Consultant – Application Developer at Capgemini, I’ve
    //       worked on enterprise-grade solutions for clients like BMW Group and
    //       Mercedes-Benz, managing large-scale data and critical systems.
    //     </p>
    //     <p>
    //       I’m driven by continuous learning, knowledge sharing, and delivering
    //       high-quality work that creates meaningful impact.
    //     </p>
    //   </div>
    // </motion.section>
  );
}

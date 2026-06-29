"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImg from "./../public/planet.jpg";
import Image from "next/image";
import { BriefcaseBusiness, Scaling, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import ParticleGrid from "./ParticleGrid";

const features = [
  {
    icon: Scaling,
    title: "Scalable Systems",
    desc: "With strong frontend expertise and a business-first mindset, I build scalable applications that deliver real value.",
    color: "from-sky-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "User-Centric Design",
    desc: "Focused on continuous learning and crafting intuitive, high-quality user experiences that create meaningful impact.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Impact",
    desc: "Experience with enterprise-grade platforms for BMW Group & Mercedes-Benz, handling large-scale systems and data.",
    color: "from-emerald-500 to-green-500",
  },
];

const FloatingCards = () => {
  return (
    <div className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 lg:px-8">
      {/* Particals Grid */}
      <ParticleGrid />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map(({ icon: Icon, title, desc, color }, i) => (
          <motion.div
            key={i}
            /* Entry animation */
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            /* Floating animation */
            animate={{
              y: [0, -10, 0],
            }}
            className="h-full"
          >
            <Card className="relative group h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
              {/* Glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-white/10 via-transparent to-transparent" />

              <CardContent className="p-5 sm:p-6 flex flex-col gap-4">
                {/* Icon container */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-linear-to-br ${color} shadow-lg`}
                >
                  <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </CardContent>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null);

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

        {/* Floating Cards (Parallax Depth) */}
        <FloatingCards />
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

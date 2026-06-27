"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Download,
  ChevronDown,
  Terminal,
  Code2,
  Braces,
  GitBranch,
  Layers,
} from "lucide-react";
import { Button } from "./ui/button";
import profile from "@/public/profile03.png";
import Link from "next/link";
import ParticleGrid from "./ParticleGrid";
import RotatingText from "./RotatingText";

const floatingIcons = [
  { icon: Terminal, delay: 0.3, x: "10%", y: "20%" },
  { icon: Code2, delay: 0.5, x: "85%", y: "15%" },
  { icon: Braces, delay: 1, x: "75%", y: "75%" },
  { icon: GitBranch, delay: 1.5, x: "15%", y: "70%" },
  { icon: Layers, delay: 2, x: "90%", y: "45%" },
];

const rotatingWords = [
  "React Applications",
  "Node.js APIs",
  "Scalable Systems",
  "GraphQL APIs",
  "TypeScript Code",
];

const codeSnippet = `const developerAt = {
  company: "Capgemini, India",
  role: "Senior Application Developer",
  passion: "Building at scale",
  coffee: Infinity,
};`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mx-8 sm:-mx-6 lg:-mx-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-zinc-950 dark:bg-black">
        <ParticleGrid />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-violet-900/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-indigo-900/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating dev icons - hidden on very small screens */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-10 text-violet-500/20 dark:text-violet-400/15 hidden sm:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 tracking-wide  border border-emerald-500/30 bg-emerald-500/5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex  rounded h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal">
                👋🏻 Hey, I&apos;m
              </span>
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-cyan-500 via-violet-500 to-orange-500 bg-clip-text text-transparent leading-tight">
                Moreshwar Dalavi,
                {/* <BadgeCheck className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" /> */}
              </div>
            </h1>

            <h3 className="mt-10 sm:mt-4 sm:text-xl md:text-2xl text-sm text-zinc-200 ">
              I craft{" "}
              <RotatingText
                words={rotatingWords}
                className="text-violet-400 font-bold"
              />
            </h3>

            {/* <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I deliver business value through intuitive user experiences and
              scalable applications, blending strong frontend expertise with
              deep business understanding to solve complex problems and build
              reliable products.
            </p> */}

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link href="#contact">
                <Button className="w-full sm:w-auto rounded-md px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-medium shadow-lg shadow-violet-500/20 bg-linear-to-r from-violet-600 to-cyan-600 hover:from-violet-800 hover:to-cyan-700 text-white border-0">
                  Let&apos;s Talk
                </Button>
              </Link>

              <Link
                href="/Moreshwar_Dalavi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto rounded-md px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base gap-2 text-zinc-300 hover:bg-white/10"
                >
                  <Download size={18} />
                  Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Profile + Code block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative shrink-0 mt-4 lg:mt-0"
          >
            {/* Profile image with glow ring */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto">
              <motion.div
                className="absolute -inset-3 rounded-full bg-linear-to-br from-cyan-500 via-violet-500 to-orange-500 opacity-40 blur-xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -inset-1 rounded-full bg-linear-to-br from-cyan-500 via-violet-500 to-orange-500 opacity-70" />
              <Image
                src={profile}
                alt="Moreshwar Dalavi"
                fill
                className="rounded-full object-cover relative z-10 p-1 bg-white dark:bg-black"
                priority
              />
            </div>

            {/* Floating code card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.6 },
                x: { delay: 1, duration: 0.6 },
                y: {
                  delay: 4,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-32 lg:-bottom-36 xl:-bottom-35 left-0 sm:-left-8 lg:-left-12 xl:-left-46 z-30 hidden md:block"
            >
              <div className="bg-zinc-900 dark:bg-zinc-950 border border-zinc-700 rounded-sm p-2 sm:p-3 shadow-2xl shadow-black/30 w-52 sm:w-56 lg:w-60 xl:w-95">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-[10px] text-zinc-500 font-mono">
                    developer.ts
                  </span>
                </div>
                <pre className="text-[10px] sm:text-[11px] leading-relaxed font-mono text-zinc-300 overflow-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, 4, 0] }}
              transition={{
                opacity: { delay: 1.2, duration: 0.6 },
                x: { delay: 1.2, duration: 0.6 },
                y: {
                  delay: 0,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -top-8 sm:-top-12 lg:-top-14 right-0 sm:-right-4 lg:-right-8 xl:-right-10 z-20 hidden md:block"
            >
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 px-4 py-3 shadow-xl">
                <p className="text-xs text-zinc-400">Years of Experience</p>
                <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                  8+
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

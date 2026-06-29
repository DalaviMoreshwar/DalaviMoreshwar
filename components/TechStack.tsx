"use client";

import SectionTitle from "./SectionTitle";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

import react from "@/public/tech-stack/react.svg";
import redis from "@/public/tech-stack/redis.svg";
import redux from "@/public/tech-stack/redux.svg";
import antDesign from "@/public/tech-stack/ant-design.svg";
import tailwindcss from "@/public/tech-stack/tailwindcss.svg";
import docker from "@/public/tech-stack/docker.svg";
import express from "@/public/tech-stack/express.svg";
import kubernetes from "@/public/tech-stack/kubernetes.svg";
import mongodb from "@/public/tech-stack/mongodb.svg";
import node from "@/public/tech-stack/node.svg";
import git from "@/public/tech-stack/git.svg";
import graphql from "@/public/tech-stack/graphql.svg";
import posgress from "@/public/tech-stack/posgress.svg";
import typescript from "@/public/tech-stack/typescript.svg";
import zustand from "@/public/tech-stack/zustand.svg";
import next from "@/public/tech-stack/wnextjs.svg";
import materialui from "@/public/tech-stack/material-ui.svg";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import ParticleGrid from "./ParticleGrid";

const stacks = [
  { id: 1, img: react, name: "React JS" },
  { id: 2, img: typescript, name: "TypeScript" },
  { id: 3, img: zustand, name: "Zustand" },
  { id: 4, img: redux, name: "Redux" },
  { id: 5, img: node, name: "Node JS" },
  { id: 6, img: graphql, name: "GraphQL" },
  { id: 7, img: express, name: "Express JS" },
  { id: 8, img: next, name: "Next JS" },
  { id: 9, img: redis, name: "Redis" },
  { id: 10, img: antDesign, name: "Ant Design" },
  { id: 11, img: materialui, name: "Material UI" },
  { id: 12, img: tailwindcss, name: "Tailwind CSS" },
  { id: 13, img: mongodb, name: "Mongodb" },
  { id: 14, img: posgress, name: "Posgress" },
  { id: 15, img: docker, name: "Docker" },
  { id: 16, img: kubernetes, name: "Kubernetes" },
  { id: 17, img: git, name: "Git" },
];

export default function TechStack() {
  // Duplicate for seamless infinite loop
  const duplicated = [...stacks, ...stacks];

  return (
    <section
      id="skills"
      className="relative overflow-hidden sm:py-20 md:py-20 lg:py-50  bg-linear-to-b from-black via-slate-950 to-black"
    >
      {/* Particals Grid */}
      {/* <ParticleGrid /> */}

      {/* 🌌 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-200 tracking-wide">
            Tech Constellation
          </h2>
          {/* <div className="relative overflow-hidden py-20 bg-linear-to-b from-black via-teal-950 to-black" /> */}
          <p className="text-gray-400 mt-3 text-sm md:text-lg">
            Tools orbiting my development universe
          </p>
        </div>
      </motion.div>

      {/* 🚀 Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
        >
          {duplicated.map((tech, index) => (
            <div
              key={index}
              className="
                px-10 py-6
                bg-white/0
                text-white 
                font-medium 
                shadow-lg 
                whitespace-nowrap
                transition
                flex items-center gap-4
              "
            >
              <Image src={tech.img} alt={tech.name} width={50} />
              <pre className="font-mono font-medium uppercase text-zinc-400">
                {tech.name}
              </pre>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🌠 Edge fade effect */}
      <div className="absolute top-0 left-0 w-40 h-full bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-40 h-full bg-linear-to-l from-black to-transparent z-10" />

      {/* 🪐 Floating planets */}
      <motion.div
        className="absolute top-16 left-16 w-6 h-6 rounded-full bg-purple-500 blur-md"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      <motion.div
        className="absolute bottom-70 right-16 w-8 h-8 rounded-full bg-rose-500 blur-md"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      <motion.div
        className="absolute bottom-10 right-24 w-10 h-10 rounded-full bg-teal-900 blur-md"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-pink-500 blur-sm"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.div
        className="absolute bottom-10 left-3/6 w-3 h-3 rounded-full bg-white blur-lg "
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    </section>

    // <motion.section
    //   id="skills"
    //   initial={{ opacity: 0, y: 35 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.8 }}
    //   className="space-y-8"
    // >
    //   <SectionTitle title="Techstack" />

    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
    //     {stacks.map((stack) => (
    //       <Card
    //         key={stack.id}
    //         className="flex items-center gap-3 bg-transparent border hover:border-zinc-600 hover:bg-zinc-900"
    //       >
    //         <CardContent className="flex items-center gap-4">
    //           <Image
    //             src={stack.img}
    //             alt={stack.name}
    //             width={35}
    //             className="transition-transform duration-500 hover:scale-120"
    //           />
    //           <pre className="font-mono font-medium uppercase text-zinc-500">
    //             {stack.name}
    //           </pre>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </div>
    // </motion.section>
  );
}

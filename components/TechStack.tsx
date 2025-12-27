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
import posgress from "@/public/tech-stack/posgress.svg";
import typescript from "@/public/tech-stack/typescript.svg";
import zustand from "@/public/tech-stack/zustand.svg";
import next from "@/public/tech-stack/next.svg";
import materialui from "@/public/tech-stack/material-ui.svg";

export default function TechStack() {
  const stacks = [
    react,
    typescript,
    zustand,
    redux,
    node,
    express,
    next,
    redis,
    antDesign,
    materialui,
    tailwindcss,
    mongodb,
    posgress,
    docker,
    kubernetes,
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <SectionTitle title="Techstack" />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
        {stacks.map((stack, i) => (
          <Card key={i} className="w-fit">
            <CardContent>
              <Image src={stack} alt="reactjs" width={100} />
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

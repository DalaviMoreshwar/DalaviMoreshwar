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
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function TechStack() {
  const stacks = [
    { id: 1, img: react, name: "React JS" },
    { id: 2, img: typescript, name: "TypeScript" },
    { id: 3, img: zustand, name: "Zustand" },
    { id: 4, img: redux, name: "Redux" },
    { id: 5, img: node, name: "Node JS" },
    { id: 6, img: express, name: "Express JS" },
    { id: 7, img: next, name: "Next JS" },
    { id: 8, img: redis, name: "Redis" },
    { id: 9, img: antDesign, name: "Ant Design" },
    { id: 10, img: materialui, name: "Material UI" },
    { id: 11, img: tailwindcss, name: "Tailwind CSS" },
    { id: 12, img: mongodb, name: "Mongodb" },
    { id: 13, img: posgress, name: "Posgress" },
    { id: 14, img: docker, name: "Docker" },
    { id: 15, img: kubernetes, name: "Kubernetes" },
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
        {stacks.map((stack) => (
          <Card
            key={stack.id}
            className="w-fit bg-linear-to-r from-gray-50 to-zinc-100 dark:bg-linear-to-r dark:from-gray-900 dark:to-zinc-900 border-0"
          >
            <CardContent>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={stack.img}
                    alt={stack.name}
                    width={100}
                    className="transition-transform duration-500 hover:scale-120 cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{stack.name}</p>
                </TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

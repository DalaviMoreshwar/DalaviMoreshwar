"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileCodeCorner } from "lucide-react";

import { projects } from "@/utils";
import { Badge } from "./ui/badge";
import SectionTitle from "./SectionTitle";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TechTags } from "./TechTags";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle>
                <h5>{project.name}</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={project.webLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="cursor-pointer transition-all duration-500 hover:scale-105 mb-4"
                />
              </Link>

              <CardDescription className="my-3">
                {project.description}
              </CardDescription>

              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center justify-between gap-2"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <FileCodeCorner className="text-neutral-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Codebase on Github</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
              <p>{JSON.stringify(project.techStack)}</p>
              <TechTags tags={project.techStack} />
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

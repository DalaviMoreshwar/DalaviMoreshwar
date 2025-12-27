"use client";

import { motion } from "framer-motion";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { experiences } from "@/utils";
import { Badge } from "./ui/badge";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

export default function Experiences() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <SectionTitle title="Experiences" />

      {experiences
        .sort((a, b) => b.id - a.id)
        .map((exp) => (
          <div
            key={exp.id}
            className="space-y-2.5 bg-linear-to-bl from-stone-100 dark:bg-linear-to-bl dark:from-neutral-950 dark:to-neutral-900 p-3 rounded-xl"
          >
            <div className="flex justify-between">
              <div className="space-y-1">
                <p className="font-thin text-xs md:hidden uppercase text-zinc-500 font-stretch-100%">
                  {exp.fromDate} - {exp.toDate}
                </p>
                <Link href={exp.link} target="_blank">
                  <p className="bg-linear-to-br from-stone-400 to-neutral-800 dark:to-neutral-700 bg-clip-text text-transparent font-semibold">
                    {exp.company}
                  </p>
                </Link>
                <p className="bg-linear-to-br text-sm text-stone-700 dark:text-stone-200">
                  {exp.role}
                </p>
              </div>
              <p className="font-thin text-xs sr-only sm:not-sr-only text-zinc-500 font-stretch-100%">
                {exp.fromDate} - {exp.toDate}
              </p>
            </div>
            <p className="text-stone-400 text-sm">
              {exp.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis architecto ratione nihil atque veniam ex
              officiis vero quod eaque animi!
            </p>
            <p className="text-zinc-600 dark:text-zinc-200 text-sm space-x-2 space-y-2">
              {exp.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </p>
          </div>
        ))}
    </motion.section>
  );
}

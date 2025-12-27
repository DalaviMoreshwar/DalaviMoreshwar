"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { education } from "@/utils";
import Link from "next/link";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <SectionTitle title={"Education"} />

      <div className="space-y-2.5 bg-linear-to-bl from-stone-100 dark:bg-linear-to-bl dark:from-neutral-950 dark:to-neutral-900 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="font-thin text-xs md:hidden uppercase text-zinc-500 font-stretch-100%">
              {education.startDate} - {education.endDate}
            </p>
            <Link href={education.link} target="_blank">
              <p className="bg-linear-to-br from-stone-400 to-neutral-800 dark:to-neutral-700 bg-clip-text text-transparent font-semibold">
                {education.institute}
              </p>
            </Link>
            <p className="bg-linear-to-br text-sm text-stone-700 dark:text-stone-200">
              {education.degree}
            </p>
          </div>
          <p className="font-thin text-xs sr-only sm:not-sr-only text-zinc-500 font-stretch-100%">
            {education.startDate} - {education.endDate}
          </p>
        </div>
        <p className="text-stone-400 text-sm">{education.fieldOfStudy}</p>
        <p className="text-zinc-600 dark:text-zinc-200 text-sm space-x-2 space-y-2">
          Grade: {education.grade}
        </p>
      </div>
    </motion.section>
  );
}

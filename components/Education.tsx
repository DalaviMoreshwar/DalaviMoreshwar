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

      <div className="space-y-2.5 bg-linear-to-bl from-neutral-100 dark:bg-linear-to-bl dark:from-neutral-950 dark:to-neutral-900 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="font-thin text-xs md:hidden uppercase text-zinc-500 font-stretch-100%">
              {education.startDate} - {education.endDate}
            </p>
            <Link href={education.link} target="_blank">
              <p className="text-cyan-700 font-semibold dark:text-cyan-500">
                {education.institute}
              </p>
            </Link>
            <p className="bg-linear-to-br text-sm text-slate-700 dark:text-slate-200">
              {education.degree}
            </p>
          </div>
          <p className="font-thin text-xs sr-only sm:not-sr-only text-zinc-500 font-stretch-100%">
            {education.startDate} - {education.endDate}
          </p>
        </div>
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          {education.fieldOfStudy}
        </p>
      </div>
    </motion.section>
  );
}

"use client";

import { BadgeCheck, Download, Linkedin } from "lucide-react";

import Company from "./Company";

export default function Intro() {
  return (
    <section className="space-y-10">
      {/* Top section */}
      <div className="flex flex-col md:gap-x-34 md:flex-row md:justify-around">
        <div className="text-center md:text-left">
          <h1
            className="inline-flex items-center justify-center md:justify-start gap-2
        bg-linear-to-r from-cyan-500 via-violet-500 to-orange-500
        bg-clip-text text-3xl sm:text-4xl font-bold text-transparent"
          >
            Moreshwar Dalavi
            <BadgeCheck className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            Senior Consultant &amp; Application Developer
          </p>
        </div>

        <div className="mt-1 flex justify-center">
          <Company />
        </div>
      </div>
    </section>
  );
}

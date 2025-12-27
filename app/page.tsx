"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

import linkedinSvg from "@/public/linkedin.svg";
import githubSvg from "@/public/github.svg";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ui/theme-toggle";
import profile from "@/public/profile.png";
import Intro from "@/components/Intro";
import { Download } from "lucide-react";
import Experiences from "@/components/Experiences";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="mx-auto max-w-2xl px-4 py-15">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-3"
        >
          <div className="w-30 h-30 rounded overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={500}
              className="cursor-pointer transition-all duration-500 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>

        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 md:flex-row md:justify-between"
          >
            <Intro />
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-100">
              Building scalable solutions for the future!
            </h2>
            <p className="text-zinc-600 text-sm dark:text-zinc-400 max-w-2xl">
              Specialize in{" "}
              <span className="text-zinc-950 dark:text-zinc-200">React.js</span>
              , and{" "}
              <span className="text-zinc-950 dark:text-zinc-200">
                TypeScript
              </span>
              , with hands-on experience using{" "}
              <span className="text-zinc-950 dark:text-zinc-200">Node.js</span>,{" "}
              <span className="text-zinc-950 dark:text-zinc-200">Rest-API</span>
              , &amp;{" "}
              <span className="text-zinc-950 dark:text-zinc-200">Graph QL</span>{" "}
              to support full-stack workflows.
            </p>

            <p className="text-zinc-600 text-sm dark:text-zinc-400 max-w-2xl">
              I&apos;m passionate about crafting clean, intuitive UI/UX,
              building reusable component systems, and delivering fast, reliable
              single-page applications. Comfortable working in Agile
              environments, I thrive in fast-moving teams and enjoy solving
              complex problems with elegant solutions.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Beyond frontend developer, I am passionate about{" "}
              <span className="text-zinc-950 dark:text-zinc-200">
                AWS Cloud
              </span>
              ,{" "}
              <span className="text-zinc-950 dark:text-zinc-200">
                Docker &amp; Kubernetes
              </span>{" "}
              and building resilent systems that can scale effectively while
              maintaining high availability and performance.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
      flex flex-wrap items-center justify-center
      gap-3 md:justify-start
    "
          >
            <Button
              variant="outline"
              className="rounded-xl bg-sky-600 dark:bg-sky-600 text-slate-100"
            >
              <Download className="mr-1 h-4 w-4" />
              Resume
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/dalavimoreshwar/"
                    target="_blank"
                  >
                    <Image src={linkedinSvg} alt="LinkedIn" width={40} />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent side="bottom">
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  asChild
                >
                  <Link
                    href="https://github.com/DalaviMoreshwar/DalaviMoreshwar"
                    target="_blank"
                  >
                    <Image src={githubSvg} alt="LinkedIn" width={40} />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent side="bottom">
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>

          <TechStack />

          <Projects />

          <Experiences />

          <Education />
        </section>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { TechTags } from "./TechTags";
import { projects } from "@/utils";
import ParticleGrid from "./ParticleGrid";

// const projects = [
//   {
//     title: "Galaxy Analytics Platform",
//     description:
//       "A scalable analytics platform designed for high-performance data visualization and seamless user experience across enterprise systems.",
//     image: "/projects/project1.png",
//     github: "#",
//     live: "#",
//     tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
//   },
//   {
//     title: "Cosmic Commerce",
//     description:
//       "A modern commerce solution focused on speed, scalability, and intuitive user journeys with optimized frontend architecture.",
//     image: "/projects/project2.png",
//     github: "#",
//     live: "#",
//     tech: ["React", "Redux", "Node.js"],
//   },
// ];

export default function ProjectsUniverse() {
  return (
    <section
      id="projects"
      className="relative gradient-bg-projects py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Particals Grid */}
      <ParticleGrid />

      {/* 🌌 Background Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600] h-[600] bg-purple-500/20 blur-3xl rounded-full top-[-100] left-[-100]" />
        <div className="absolute w-[500] h-[500] bg-blue-500/20 blur-3xl rounded-full bottom-[-100] right-[-100]" />

        {/* tiny stars */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-size[20px_20px] opacity-10" />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects Universe
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Exploring ideas, building scalable systems, and crafting user
          experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project, i) => {
          const isReverse = i % 2 !== 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col  lg:flex-row items-center gap-10 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 🌠 Image */}
              <motion.div
                className="relative w-full lg:w-1/2"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative  overflow-hidden rounded border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-2xl -z-10 rounded-2xl" />
              </motion.div>

              {/* 🌌 Content */}
              <div className="w-full lg:w-1/2 space-y-5">
                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <TechTags tags={project.techStack} />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link href={project.webLink} target="_blank">
                    <Button className="w-full sm:w-auto rounded-md px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-medium shadow-lg shadow-violet-500/20 bg-linear-to-r from-violet-600 to-cyan-600 hover:from-violet-800 hover:to-cyan-700 text-white border-0">
                      <ExternalLink size={18} />
                      Live Demo
                    </Button>
                  </Link>

                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="w-full sm:w-auto rounded-md px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base gap-2 text-zinc-300 hover:bg-white/10"
                    >
                      <FolderGit2 size={18} />
                      Github
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

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
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FileCodeCorner } from "lucide-react";

// import { Badge } from "./ui/badge";
// import SectionTitle from "./SectionTitle";
// import {
//   Card,
//   CardTitle,
//   CardContent,
//   CardHeader,
//   CardDescription,
// } from "./ui/card";
// import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
// import { TechTags } from "./TechTags";

// export default function Projects() {
//   return (
//     <motion.section
//       id="projects"
//       initial={{ opacity: 0, y: 35 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="space-y-8"
//     >
//       <SectionTitle title="Projects" />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {projects.map((project) => (
//           <Card
//             key={project.id}
//             className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105"
//           >
//             <CardHeader>
//               <CardTitle>
//                 <h5>{project.name}</h5>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Link href={project.webLink} target="_blank">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   className="cursor-pointer transition-all duration-500 hover:scale-105 mb-4"
//                 />
//               </Link>

//               <CardDescription className="my-3">
//                 {project.description}
//               </CardDescription>

//               <Link
//                 href={project.githubLink}
//                 target="_blank"
//                 className="flex items-center justify-between gap-2"
//               >
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <FileCodeCorner className="text-neutral-400" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Codebase on Github</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </Link>
//               <p>{JSON.stringify(project.techStack)}</p>
//               <TechTags tags={project.techStack} />
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
